/**
 * Translate `docs/en/**` into `docs/zh/**`.
 *
 * NOT run as part of the normal pipeline — the site ships English first and
 * other locales are filled in later. Enable it by providing the provider
 * settings through the environment:
 *
 *   GARMIN_DOCS_TRANSLATE_API_KEY=...
 *   GARMIN_DOCS_TRANSLATE_BASE_URL=https://api.openai.com/v1   (OpenAI-compatible)
 *   GARMIN_DOCS_TRANSLATE_MODEL=gpt-4o-mini
 *
 * Every request is cached by source-text hash, so re-running only translates
 * what changed. Flags: --limit=N (stop after N files), --force (ignore cache).
 */
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';
import pLimit from 'p-limit';
import { DATA_DIR, DOCS_ROOT, GLOSSARY_FILE, LANGS } from './config';
import { ensureDir, exists, readJson, readText, walkFiles, writeText } from './lib/fsx';
import { log } from './lib/logger';

const TARGET_LANG = 'zh';
const SOURCE_LANG = 'en';
const CONCURRENCY = 3;

interface Glossary {
  keep?: string[];
  glossary?: Record<string, string>;
}

interface Provider {
  apiKey: string;
  baseUrl: string;
  model: string;
}

function readProvider(): Provider {
  const apiKey = process.env.GARMIN_DOCS_TRANSLATE_API_KEY;
  const baseUrl = process.env.GARMIN_DOCS_TRANSLATE_BASE_URL;
  const model = process.env.GARMIN_DOCS_TRANSLATE_MODEL;

  const missing = [
    ['GARMIN_DOCS_TRANSLATE_API_KEY', apiKey],
    ['GARMIN_DOCS_TRANSLATE_BASE_URL', baseUrl],
    ['GARMIN_DOCS_TRANSLATE_MODEL', model],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variable(s): ${missing.join(', ')}.\n` +
        'Set all three (see the header of pipeline/6-translate.ts) before running docs:translate.',
    );
  }

  return {
    apiKey: apiKey as string,
    baseUrl: (baseUrl as string).replace(/\/+$/, ''),
    model: model as string,
  };
}

const sha1 = (input: string): string => createHash('sha1').update(input).digest('hex');

function cachePath(source: string): string {
  return join(DATA_DIR, 'cache', 'i18n', TARGET_LANG, `${sha1(source)}.json`);
}

/** Mask anything the model must not touch, so it survives translation intact. */
function mask(text: string, keep: string[]): { masked: string; restore: (s: string) => string } {
  const map = new Map<string, string>();
  let counter = 0;

  const stash = (value: string): string => {
    const token = `\u0000P${counter++}\u0000`;
    map.set(token, value);
    return token;
  };

  let out = text;

  // Fenced code blocks.
  out = out.replace(/```[\s\S]*?```/g, (m) => stash(m));
  // Inline code spans.
  out = out.replace(/`[^`\n]*`/g, (m) => stash(m));
  // Link/image targets.
  out = out.replace(/\]\(([^)\s]+)\)/g, (_m, url: string) => `](${stash(url)})`);
  // Container directives must stay on their own line.
  out = out.replace(/^:::\w*.*$/gm, (m) => stash(m));
  // Protected terms.
  for (const term of keep) {
    if (!term) continue;
    out = out.split(term).join(stash(term));
  }

  return {
    masked: out,
    restore: (s: string) => {
      let restored = s;
      for (const [token, value] of map) restored = restored.split(token).join(value);
      return restored;
    },
  };
}

const SYSTEM_PROMPT = (glossaryNote: string): string =>
  [
    'You are a professional technical translator for Garmin Connect IQ developer documentation.',
    `Translate the user's Markdown from English to Simplified Chinese.`,
    'Rules:',
    '- Preserve Markdown structure exactly (headings, lists, tables, blockquotes, emphasis).',
    '- Tokens of the form U+0000P<number>U+0000 are placeholders: copy them verbatim, never translate or reorder them.',
    '- Do not translate code, identifiers, or the words covered by the placeholder tokens.',
    '- Use concise, idiomatic technical Chinese. Do not add explanations or notes.',
    '- Output only the translation.',
    glossaryNote,
  ]
    .filter(Boolean)
    .join('\n');

async function translateChunk(
  provider: Provider,
  system: string,
  text: string,
  force: boolean,
): Promise<string> {
  const cache = cachePath(text);
  if (!force && (await exists(cache))) {
    const hit = await readJson<{ target: string }>(cache);
    if (hit.target) return hit.target;
  }

  const res = await fetch(`${provider.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${provider.apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: provider.model,
      temperature: 0,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: text },
      ],
    }),
  });

  if (!res.ok) {
    throw new Error(`provider responded ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }

  const payload = (await res.json()) as { choices?: { message?: { content?: string } }[] };
  const target = payload.choices?.[0]?.message?.content?.trim();
  if (!target) throw new Error('provider returned no content');

  await ensureDir(join(cache, '..'));
  await writeText(cache, `${JSON.stringify({ source: text, target })}\n`);
  return target;
}

function splitFrontmatter(markdown: string): { frontmatter: string; body: string } {
  if (!markdown.startsWith('---\n')) return { frontmatter: '', body: markdown };
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return { frontmatter: '', body: markdown };
  const close = markdown.indexOf('\n', end + 1);
  return { frontmatter: markdown.slice(0, close + 1), body: markdown.slice(close + 1) };
}

async function translateDocument(
  provider: Provider,
  system: string,
  markdown: string,
  keep: string[],
  force: boolean,
): Promise<string> {
  const { frontmatter, body } = splitFrontmatter(markdown);

  // Title comes from frontmatter; translate it on its own.
  let translatedFrontmatter = frontmatter;
  const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
  if (titleMatch && titleMatch[1]) {
    const rawTitle = titleMatch[1].trim().replace(/^["']|["']$/g, '');
    const masked = mask(rawTitle, keep);
    const translated = await translateChunk(provider, system, masked.masked, force);
    translatedFrontmatter = frontmatter.replace(
      /^title:.*$/m,
      `title: ${JSON.stringify(masked.restore(translated))}`,
    );
  }

  // Translate block by block so the cache is granular and re-runs are cheap.
  const blocks = body.split(/\n{2,}/);
  const translatedBlocks: string[] = [];
  for (const block of blocks) {
    if (!block.trim()) {
      translatedBlocks.push(block);
      continue;
    }
    const masked = mask(block, keep);
    const translated = await translateChunk(provider, system, masked.masked, force);
    translatedBlocks.push(masked.restore(translated));
  }

  return `${translatedFrontmatter}${translatedBlocks.join('\n\n')}`;
}

async function main(): Promise<void> {
  const provider = readProvider();

  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const limitArg = args.find((a) => a.startsWith('--limit='));
  const limit = limitArg ? Number(limitArg.split('=')[1]) : Number.POSITIVE_INFINITY;

  const glossary = (await exists(GLOSSARY_FILE))
    ? await readJson<Glossary>(GLOSSARY_FILE)
    : ({ keep: [], glossary: {} } as Glossary);

  const keep = (glossary.keep ?? []).slice().sort((a, b) => b.length - a.length);
  const glossaryNote = glossary.glossary
    ? `Preferred terminology: ${Object.entries(glossary.glossary)
        .map(([en, zh]) => `${en} => ${zh}`)
        .join('; ')}.`
    : '';
  const system = SYSTEM_PROMPT(glossaryNote);

  const sourceRoot = join(DOCS_ROOT, SOURCE_LANG);
  const targetRoot = join(DOCS_ROOT, TARGET_LANG);
  const files = (await walkFiles(sourceRoot)).filter((f) => f.endsWith('.md'));

  log.step(`translate: ${SOURCE_LANG} → ${TARGET_LANG} (${provider.model})`);

  let done = 0;
  let skipped = 0;
  const limiter = pLimit(CONCURRENCY);

  await Promise.all(
    files.map((file) =>
      limiter(async () => {
        if (done + skipped >= limit) return;
        const rel = relative(sourceRoot, file);
        const source = await readText(file);
        const targetPath = join(targetRoot, rel);

        if (!force && (await exists(targetPath))) {
          const existing = await readText(targetPath);
          if (existing !== source) {
            skipped++;
            return;
          }
        }

        const translated = await translateDocument(provider, system, source, keep, force);
        await writeText(targetPath, translated);
        done++;
        if (done % 10 === 0) log.info(`translated ${done}/${files.length}`);
      }),
    ),
  );

  log.ok(`translated ${done} file(s), skipped ${skipped} already-translated file(s)`);
  if (LANGS.length < 2) log.warn('only one locale configured');
}

main().catch((err) => {
  log.error(`translate failed: ${(err as Error).message}`);
  process.exit(1);
});
