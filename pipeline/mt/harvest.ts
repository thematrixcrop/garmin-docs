/**
 * Categorise the strings on the generated reference pages so the real
 * translation workload is visible.
 *
 *  - heading : markdown headings and container titles
 *  - header  : markdown table header cells (row above the |---|---| rule)
 *  - prose   : ordinary paragraph / list text
 *  - value   : table body cells (mostly data: fonts, numbers, device names)
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['docs/en/connect-iq/api-docs', 'docs/en/connect-iq/device-reference'];

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

/** Data rather than language: fonts, versions, numbers, identifiers. */
const NOT_TEXT =
  /(?:\b(?:Sans|Serif|Mono|Roboto|Noto|Vera|DejaVu|Bebas|Swis|Sakkal|Condensed|Bold|Italic|Glyph|CJK|Arabic|Hebrew|Armenian|Thai|Bengali|Devanagari|Khmer|Lao|Myanmar|Ethiopic|Georgian|Gujarati|Tamil|Telugu|Kannada|Malayalam|Oriya|Sinhala|Tibetan|Vietnamese|SYSTEM|Unicode|Wide|Black|Medium|Light|Regular|Thin|Narrow|DJV|ttf|otf)\b)|^[\d\s.,x×%+-]+$|^API Level [\d.]+$|^\[show all\]|^\p{So}+$/u;

const buckets: Record<string, Map<string, number>> = {
  heading: new Map(),
  header: new Map(),
  prose: new Map(),
  value: new Map(),
};

function add(bucket: string, text: string): void {
  const s = canonicalise(text.trim().replace(/\*\*/g, '').trim());
  if (!s || s.length < 2) return;
  if (!/[A-Za-z]{2}/.test(s)) return;
  if (NOT_TEXT.test(s)) return;
  if (/^[A-Za-z0-9_.:/#-]+$/.test(s)) return;
  const m = buckets[bucket];
  m.set(s, (m.get(s) ?? 0) + 1);
}

/**
 * Collapse links/images to positional placeholders.
 *
 * Two lines that differ only in a link target then share one dictionary key,
 * which both shrinks the work and makes substitution deterministic — the
 * surrounding prose is looked up, while link text and URLs are left untouched.
 */
export function canonicalise(text: string): string {
  const slots: string[] = [];
  const out = text.replace(/!?\[[^\]]*\]\([^)]*\)/g, (m) => {
    slots.push(m);
    return `{${slots.length - 1}}`;
  });
  return out;
}

export function restore(text: string, slots: string[]): string {
  return text.replace(/\{(\d+)\}/g, (m, i) => slots[Number(i)] ?? m);
}

for (const root of ROOTS) {
  for (const file of walk(root).filter((f) => f.endsWith('.md'))) {
    const lines = readFileSync(file, 'utf8').split('\n');
    let inFence = false;
    let inDetails = false;
    let inTableBody = false;

    for (const raw of lines) {
      const t = raw.trim();
      if (t.startsWith('```')) {
        inFence = !inFence;
        inTableBody = false;
        continue;
      }
      if (inFence) continue;
      if (t.startsWith('title:')) continue;

      if (t.startsWith(':::')) {
        if (t.startsWith(':::details')) inDetails = true;
        else if (t === ':::') inDetails = false;
        add('heading', t.replace(/^:::\S*\s*/, ''));
        inTableBody = false;
        continue;
      }
      if (inDetails) continue;

      if (/^\|\s*[-: ]+\|/.test(t)) {
        inTableBody = true;
        continue;
      }

      if (t.startsWith('|')) {
        // The row above the separator is the header; the rest is data.
        const cells = t.split('|').slice(1, -1);
        const bucket = inTableBody ? 'value' : 'header';
        for (const c of cells) add(bucket, c);
        continue;
      }
      inTableBody = false;

      if (/^#{1,6}\s/.test(t)) {
        add('heading', t.replace(/^#{1,6}\s*/, ''));
        continue;
      }
      add('prose', t.replace(/^[-*]\s+/, ''));
    }
  }
}

const summary: Record<string, { distinct: number; occurrences: number; chars: number }> = {};
for (const [name, map] of Object.entries(buckets)) {
  const occurrences = [...map.values()].reduce((a, b) => a + b, 0);
  const chars = [...map.keys()].reduce((a, s) => a + s.length, 0);
  summary[name] = { distinct: map.size, occurrences, chars };
}

console.log('bucket     distinct  occurrences     chars');
for (const [name, s] of Object.entries(summary)) {
  console.log(
    `${name.padEnd(10)} ${String(s.distinct).padStart(8)} ${String(s.occurrences).padStart(12)} ${String(s.chars).padStart(9)}`,
  );
}

writeFileSync(
  'data/mt-phrases.json',
  `${JSON.stringify(
    Object.fromEntries(Object.entries(buckets).map(([k, v]) => [k, Object.fromEntries([...v.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])))])),
    null,
    2,
  )}\n`,
);

console.log('\n--- distinct headings ---');
console.log([...buckets.heading.keys()].sort().join('\n'));

console.log('\n--- distinct table header cells ---');
console.log([...buckets.header.keys()].sort().join('\n'));
