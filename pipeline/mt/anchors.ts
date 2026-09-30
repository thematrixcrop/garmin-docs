/**
 * Cross-page anchor checker.
 *
 * Translating a heading changes its slug, so a link that targets another
 * page's English anchor stops resolving. The fix is to pin the original anchor
 * with `<a id="...">` next to the translated heading. This reports any
 * cross-page anchor that no longer resolves.
 *
 * Usage: tsx pipeline/mt/anchors.ts [--fix]
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const DOCS = 'docs/zh';
const SCOPE = '/connect-iq/';

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

/** github-slugger-ish: matches how rehype-slug derives heading ids. */
function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, '')
    .replace(/\s+/g, '-');
}

/** route -> file, for every zh page. */
const routeToFile = new Map<string, string>();
for (const file of walk(DOCS).filter((f) => f.endsWith('.md'))) {
  const route = `/${file.slice(DOCS.length + 1).replace(/\/index\.md$/, '').replace(/\.md$/, '')}/`;
  routeToFile.set(route, file);
}

/** Anchors available on each page: explicit <a id> plus heading slugs. */
const anchorsOf = new Map<string, Set<string>>();
for (const [route, file] of routeToFile) {
  const text = readFileSync(file, 'utf8');
  const ids = new Set<string>();
  for (const m of text.matchAll(/<a\s+id="([^"]+)"/g)) ids.add(m[1]);
  let inFence = false;
  for (const line of text.split('\n')) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const h = line.match(/^#{1,6}\s+(.*)$/);
    if (h) ids.add(slugify(h[1]));
  }
  anchorsOf.set(route, ids);
}

const broken: Array<{ file: string; target: string; anchor: string }> = [];

for (const [route, file] of routeToFile) {
  const text = readFileSync(file, 'utf8');
  let inFence = false;
  for (const line of text.split('\n')) {
    if (line.trim().startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    for (const m of line.matchAll(/\]\(([^)\s]*#[^)\s]+)\)/g)) {
      const href = m[1];
      const [path, anchor] = href.split('#');
      if (!anchor) continue;
      const target = path
        ? `/${path.replace(/^\/|\/$/g, '')}/`
        : route;
      if (!target.startsWith(SCOPE)) continue;
      const targetFile = routeToFile.get(target);
      if (!targetFile) continue; // covered by the dead-link check
      if (path && target === route) continue; // same page, still fine to verify
      const available = anchorsOf.get(target) ?? new Set();
      if (!available.has(anchor)) broken.push({ file, target, anchor });
    }
  }
}

console.log(`pages checked: ${routeToFile.size}`);
console.log(`broken cross-page anchors: ${broken.length}`);
for (const b of broken) {
  console.log(`  ${b.file.replace(`${DOCS}/`, '')}`);
  console.log(`      -> ${b.target}#${b.anchor}`);
}

if (process.argv.includes('--list-anchors')) {
  const target = process.argv[process.argv.indexOf('--list-anchors') + 1] ?? '';
  for (const [route, ids] of anchorsOf) {
    if (route.includes(target)) console.log(`\n${route}\n  ${[...ids].join('\n  ')}`);
  }
}

void dirname;
void writeFileSync;
