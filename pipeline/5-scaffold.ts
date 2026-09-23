import { rm } from 'node:fs/promises';
import { join } from 'node:path';
import pLimit from 'p-limit';
import {
  CONCURRENCY,
  DOCS_ROOT,
  EXTRACTED_DIR,
  LANGS,
  MANIFEST_FILE,
  MARKDOWN_DIR,
  NAV,
  SECTION_I18N,
  type Lang,
} from './config';
import { ensureDir, readJson, readText, walkFiles, writeJson, writeText } from './lib/fsx';
import { log } from './lib/logger';
import { routeToRelFile } from './lib/routes';
import type { ExtractedPage, ManifestEntry, SidebarLink } from './lib/types';

const limit = pLimit(CONCURRENCY);

interface PageInfo {
  route: string;
  relFile: string;
  kind: string;
  title: string;
  markdown: string;
  sidebar: SidebarLink[];
}

function segments(route: string): string[] {
  return route.split('/').filter(Boolean);
}

function parentRoute(route: string): string {
  const segs = segments(route);
  segs.pop();
  return segs.length ? `/${segs.join('/')}/` : '/';
}

function joinRoute(segs: string[]): string {
  return segs.length ? `/${segs.join('/')}/` : '/';
}

function yamlString(value: string): string {
  return JSON.stringify(value);
}

/**
 * Pull navigation order and labels out of the harvested sidebars. First
 * occurrence wins, so the source site's own ordering is preserved.
 */
function buildNavMaps(pages: PageInfo[]): {
  order: Map<string, string[]>;
  labels: Map<string, string>;
} {
  const order = new Map<string, string[]>();
  const labels = new Map<string, string>();

  for (const page of pages) {
    for (const link of page.sidebar) {
      const parent = parentRoute(link.path);
      const name = segments(link.path).pop();
      if (!name) continue;

      const list = order.get(parent) ?? [];
      if (!list.includes(name)) list.push(name);
      order.set(parent, list);

      if (!labels.has(link.path) && link.label) labels.set(link.path, link.label);
    }
  }

  return { order, labels };
}

/** `app-review-guidelines` → `App Review Guidelines`. */
function humanize(name: string): string {
  return name
    .split(/[-_]/)
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

/** Label for a child entry: i18n key for top-level sections, else source label. */
function labelFor(route: string, harvested?: string): string {
  const segs = segments(route);
  if (segs.length === 2 && segs[0] === 'connect-iq') {
    const key = SECTION_I18N[segs[1]];
    if (key) return key;
  }
  if (harvested) return harvested;
  return humanize(segs[segs.length - 1] ?? '');
}

function buildMetaFiles(pages: PageInfo[], labels: Map<string, string>, order: Map<string, string[]>): {
  path: string;
  data: unknown;
}[] {
  const routes = pages.map((p) => p.route);
  const dirSet = new Set<string>();
  for (const route of routes) {
    const segs = segments(route);
    for (let i = 1; i <= segs.length; i++) dirSet.add(joinRoute(segs.slice(0, i)));
  }

  const result: { path: string; data: unknown }[] = [];

  for (const dir of dirSet) {
    const dsegs = segments(dir);
    const childNames = new Set<string>();
    for (const route of routes) {
      const segs = segments(route);
      if (segs.length > dsegs.length && dsegs.every((s, i) => segs[i] === s)) {
        childNames.add(segs[dsegs.length]);
      }
    }
    if (childNames.size === 0) continue;

    const ordered = (order.get(dir) ?? []).filter((n) => childNames.has(n));
    const remaining = [...childNames].filter((n) => !ordered.includes(n)).sort();
    const names = [...ordered, ...remaining];

    const items = names.map((name) => {
      const childRoute = joinRoute([...dsegs, name]);
      const label = labelFor(childRoute, labels.get(childRoute));
      // Every route maps to `<name>/index.md`, so every entry is a directory.
      const isGroup = routes.some((r) => {
        const s = segments(r);
        return s.length > dsegs.length + 1 && [...dsegs, name].every((x, i) => s[i] === x);
      });
      if (!isGroup) return { type: 'dir' as const, name, label };
      return {
        type: 'dir' as const,
        name,
        label,
        collapsible: true,
        collapsed: dsegs.length >= 2,
      };
    });

    result.push({ path: join(...dsegs, '_meta.json'), data: items });
  }

  return result;
}

function withHeading(page: PageInfo): string {
  const body = page.markdown.trim();
  if (!body) {
    return [
      `# ${page.title || segments(page.route).pop() || 'Connect IQ'}`,
      '',
      ':::info',
      'This page is rendered client-side on the source site and has no mirrored content.',
      '',
      `See [the source page](${page.route}).`,
      ':::',
    ].join('\n');
  }
  if (/^#\s/.test(body)) return body;
  return `# ${page.title || segments(page.route).pop()}\n\n${body}`;
}

function renderFile(page: PageInfo): string {
  const title = page.title || segments(page.route).pop() || 'Connect IQ';
  const frontmatter = [`---`, `title: ${yamlString(title)}`, `---`, ''].join('\n');
  return `${frontmatter}${withHeading(page)}\n`;
}

async function writeLang(lang: Lang, pages: PageInfo[], metaFiles: { path: string; data: unknown }[]): Promise<void> {
  const langRoot = join(DOCS_ROOT, lang);

  // Rebuild the locale from scratch so stale files never linger.
  await rm(langRoot, { recursive: true, force: true });
  await ensureDir(langRoot);

  await Promise.all(
    pages.map((page) =>
      limit(async () => {
        await writeText(join(langRoot, `${page.relFile}.md`), renderFile(page));
      }),
    ),
  );

  await Promise.all(
    metaFiles.map((meta) =>
      writeJson(join(langRoot, meta.path), meta.data),
    ),
  );

  await writeText(
    join(langRoot, '_nav.json'),
    `${JSON.stringify(NAV, null, 2)}\n`,
  );

  const zh = lang === 'zh';
  await writeText(
    join(langRoot, 'index.md'),
    [
      '---',
      `title: ${yamlString(zh ? 'Garmin Connect IQ 文档' : 'Garmin Connect IQ Docs')}`,
      '---',
      '',
      `# ${zh ? 'Garmin Connect IQ 文档' : 'Garmin Connect IQ Docs'}`,
      '',
      zh
        ? 'Garmin Connect IQ 开发者文档的 Markdown 镜像，源站：[developer.garmin.com/connect-iq](https://developer.garmin.com/connect-iq/)。'
        : 'A Markdown mirror of the Garmin Connect IQ developer documentation, sourced from [developer.garmin.com/connect-iq](https://developer.garmin.com/connect-iq/).',
      '',
      zh ? '从 [概述](/connect-iq/overview/) 开始。' : 'Start with [Overview](/connect-iq/overview/).',
      '',
      ':::warning',
      zh
        ? '所有内容版权归 Garmin 所有，本镜像仅供个人参考，请勿公开再分发。'
        : 'All content is copyright Garmin. This mirror is for personal reference only; do not redistribute it.',
      ':::',
      '',
    ].join('\n'),
  );
}

async function main(): Promise<void> {
  log.step('scaffold: writing the RSPress documentation tree');

  const manifest = await readJson<ManifestEntry[]>(MANIFEST_FILE);
  const extractedFiles = (await walkFiles(EXTRACTED_DIR)).filter((f) => f.endsWith('.json'));

  const pages: PageInfo[] = [];
  for (const file of extractedFiles) {
    const extracted = await readJson<ExtractedPage>(file);
    const relFile = routeToRelFile(extracted.path);
    let markdown = '';
    try {
      markdown = await readText(join(MARKDOWN_DIR, `${relFile}.md`));
    } catch {
      markdown = '';
    }
    pages.push({
      route: extracted.path,
      relFile,
      kind: extracted.kind,
      title: extracted.title,
      markdown,
      sidebar: extracted.sidebar,
    });
  }

  const { order, labels } = buildNavMaps(pages);
  const metaFiles = buildMetaFiles(pages, labels, order);

  log.info(`pages: ${pages.length}, _meta.json files: ${metaFiles.length}`);

  // Remove the hand-written root _meta.json files (per-directory sidebars only).
  for (const lang of LANGS) {
    await rm(join(DOCS_ROOT, lang, '_meta.json'), { force: true });
  }

  for (const lang of LANGS) {
    await ensureDir(join(DOCS_ROOT, lang));
    await writeLang(lang, pages, metaFiles);
    log.ok(`wrote docs/${lang}`);
  }

  log.ok(`scaffolded ${pages.length} pages × ${LANGS.length} languages`);
}

main().catch((err) => {
  log.error(`scaffold failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
