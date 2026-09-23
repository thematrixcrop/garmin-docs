import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { DOCS_ROOT, LANGS, MANIFEST_FILE } from './config';
import { readJson, walkFiles } from './lib/fsx';
import { log } from './lib/logger';
import { toRoute } from './lib/routes';
import type { ManifestEntry } from './lib/types';

interface Issue {
  file: string;
  kind: 'link' | 'image';
  target: string;
  resolved: string;
}

function normalizeRoute(path: string): string {
  const clean = path.split('#')[0].split('?')[0];
  if (!clean) return '';
  return toRoute(clean.startsWith('/') ? clean : `/${clean}`);
}

function resolve(target: string, pageRoute: string): string {
  try {
    return new URL(target, `https://local.test${pageRoute}`).pathname;
  } catch {
    return target;
  }
}

async function main(): Promise<void> {
  log.step('verify: checking links, images and coverage');

  const manifest = await readJson<ManifestEntry[]>(MANIFEST_FILE);
  const routes = new Set<string>(['/']);
  for (const entry of manifest) routes.add(entry.path);

  const files = await walkFiles(DOCS_ROOT);
  const markdown = files.filter((f) => f.endsWith('.md'));
  const issues: Issue[] = [];

  for (const file of markdown) {
    const text = await (await import('node:fs/promises')).readFile(file, 'utf8');

    // Route of the page, derived from its location inside docs/<lang>/.
    const rel = file.slice(DOCS_ROOT.length + 1);
    const parts = rel.split('/');
    const lang = parts[0];
    if (!LANGS.includes(lang as (typeof LANGS)[number])) continue;
    const pageRoute = normalizeRoute(`/${parts.slice(1).join('/')}`) || '/';

    for (const m of text.matchAll(/!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      const raw = m[1];
      const isImage = m[0].startsWith('!');
      if (/^(https?:)?\/\//i.test(raw) || /^(mailto:|tel:|data:)/i.test(raw)) continue;
      if (raw.startsWith('#')) continue;

      const resolvedPath = resolve(raw, pageRoute);

      if (isImage) {
        if (resolvedPath.startsWith('/') && !existsSync(join(DOCS_ROOT, 'public', resolvedPath))) {
          issues.push({ file: rel, kind: 'image', target: raw, resolved: resolvedPath });
        }
        continue;
      }

      const target = normalizeRoute(resolvedPath);
      if (!target) continue;
      if (!routes.has(target)) {
        issues.push({ file: rel, kind: 'link', target: raw, resolved: target });
      }
    }
  }

  const deadLinks = issues.filter((i) => i.kind === 'link');
  const deadImages = issues.filter((i) => i.kind === 'image');

  const byTarget = new Map<string, number>();
  for (const issue of deadLinks) byTarget.set(issue.resolved, (byTarget.get(issue.resolved) ?? 0) + 1);

  log.info(`markdown files: ${markdown.length}, valid routes: ${routes.size}`);
  log.info(`dead links: ${deadLinks.length}, dead images: ${deadImages.length}`);

  if (byTarget.size > 0) {
    log.warn('distinct dead link targets:');
    for (const [target, count] of [...byTarget.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40)) {
      console.warn(`  ${String(count).padStart(4)}  ${target}`);
    }
  }

  const imgTargets = new Map<string, number>();
  for (const issue of deadImages) imgTargets.set(issue.resolved, (imgTargets.get(issue.resolved) ?? 0) + 1);
  if (imgTargets.size > 0) {
    log.warn('distinct dead image targets:');
    for (const [target, count] of [...imgTargets.entries()].sort((a, b) => b[1] - a[1]).slice(0, 40)) {
      console.warn(`  ${String(count).padStart(4)}  ${target}`);
    }
  }

  if (deadLinks.length === 0 && deadImages.length === 0) log.ok('no dead links or images');
}

main().catch((err) => {
  log.error(`verify failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
