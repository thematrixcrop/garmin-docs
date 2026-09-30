/**
 * Deterministic transliterator for the generated reference pages
 * (api-docs + device-reference).
 *
 * Those 502 pages are produced from a small, highly repetitive vocabulary, so
 * they are translated by curating that vocabulary once in
 * `data/zh-phrases.json` and substituting it structurally. Code fences,
 * signatures, identifiers, numbers and link targets are always copied verbatim.
 *
 * Usage:
 *   tsx pipeline/mt/apply.ts           apply dictionary, report coverage
 *   tsx pipeline/mt/apply.ts --todo    also dump untranslated phrases
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

type Dict = Record<string, string>;

const DICT_FILE = 'data/zh-phrases.json';
const TODO_FILE = 'data/mt-todo.json';
const ROOTS = ['docs/en/connect-iq/api-docs', 'docs/en/connect-iq/device-reference'];

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

function canonicalise(text: string): { key: string; slots: string[] } {
  const slots: string[] = [];
  const key = text.replace(/!?\[[^\]]*\]\([^)]*\)/g, (m) => {
    slots.push(m);
    return `{${slots.length - 1}}`;
  });
  return { key, slots };
}

function restore(text: string, slots: string[]): string {
  return text.replace(/\{(\d+)\}/g, (m, i) => slots[Number(i)] ?? m);
}

/** Strings that are never translated: fonts, versions, constants, lang codes, raw HTML. */
const DATA =
  /Sans|Serif|Mono|Roboto|Noto|Vera|DejaVu|Bebas|Swis|Sakkal|Steelfish|Majalla|Naskh|Hebrew|Armenian|Unicode|Condensed|Glyph|CJK|Italic/;

function looksUntranslatable(raw: string): boolean {
  const s = raw.replace(/\\_/g, '_');
  if (!/[A-Za-z]{2}/.test(s)) return true;
  if (/&lt;|&gt;|class=/.test(s)) return true;
  if (DATA.test(s)) return true;
  if (/^[\d\s.,x×%+-]+$/.test(s)) return true;
  // language / button code lists: "eng, deu, fra" / "down, downLeft, enter"
  if (/^[a-z]{3}(?:[, ]+[a-z]{3})+$/.test(s)) return true;
  if (/^[a-z][A-Za-z]*(?:, [a-z][A-Za-z]*)+$/.test(s)) return true;
  // parameter / option rows: "name — ([Type](url)) —", ":icon — (...)", "sensor —"
  if (/^:?[a-z][A-Za-z0-9_]* — \(.+\) —$/.test(s)) return true;
  if (/^:?[a-z][A-Za-z0-9_]* —$/.test(s)) return true;
  if (/^:[A-Za-z][A-Za-z0-9_]* \(/.test(s)) return true;
  // escaped signature fragments: "() as \{1}, {2} \]", "{0} as interface {"
  if (/\\[{}\[\]]/.test(s)) return true;
  if (/\bas\s+interface\s*\{/.test(s)) return true;
  if (/^[A-Z][A-Z0-9_]*(?:[,\s]+[A-Z][A-Z0-9_]*)*$/.test(s)) return true;
  // Signatures: "foo() as Bar", "var value as {1}".
  if (/^(?:var\s+)?[A-Za-z_][A-Za-z0-9_.]*(?:\([^)]*\))?\s+as\s+(?:\{\d+\}|[A-Z][A-Za-z0-9_.]*)$/.test(s)) return true;
  if (/^(?:var\s+[A-Za-z_][A-Za-z0-9_]*|\{0\})(?:\([^)]*\))?.*\bas\b/.test(s)) return true;
  if (/\bas\b/.test(s) && /[{}()[\]]/.test(s) && !/[.!?]/.test(s)) return true;
  if (/as\s+\[/.test(s)) return true;
  if (/^[A-Za-z0-9_.:/#()-]+$/.test(s)) return true;
  if (/[®™]/.test(s) && /^[\w\s®™/+.(),&:;\-]+$/.test(s)) return true;
  if (/[®™]/.test(s) && !/[.!?]/.test(s)) return true;
  if (/^[A-Za-z][A-Za-z0-9_.]*\s+[+\-*/=]\s+[A-Za-z][A-Za-z0-9_.]*(?:\s+[+\-*/=]\s+[A-Za-z][A-Za-z0-9_.]*)*$/.test(s)) return true;
  if (/^[A-Za-z][A-Za-z0-9_]* — \(.+\)$/.test(s)) return true;
  if (/^[A-Za-z_][A-Za-z0-9_.]*\(parameters\.\.\.\)\s+\{\d+\}$/.test(s)) return true;
  if (/^[A-Za-z_][A-Za-z0-9_.]*\.\.\. — \(.+\) —$/.test(s)) return true;
  // Garmin product labels and font slots are proper names, not prose.
  if (/^(?:Approach®\s+S\d+(?:\s+\d+mm)?|AutoGNSS(?:\s+\(.+\))?|Auxiliary Font \d+)$/.test(s)) return true;
  return false;
}

/** Productive, repeating labels that are cheaper to generate than to enumerate. */
const PATTERNS: Array<[RegExp, string]> = [
  [/^API Level ([\d.]+)$/, 'API 级别 $1'],
  [/^(\d+) Fields? ([A-Z]) Layout$/, '$1 字段 $2 布局'],
  [/^(\d+) Fields? Layout$/, '$1 字段布局'],
  [/^Field (\d+)$/, '字段 $1'],
  [/^Part Number (.*)$/, '部件号 $1'],
  [/^(\d+) Fields$/, '$1 字段'],
  [/^Classes: (.*)$/, '类：$1'],
  [/^Constants: (.*)$/, '常量：$1'],
  [/^Since: (.*)$/, '自 $1 起'],
  [/^Returns: (.*)$/, '返回值：$1'],
  [/^Throws: (.*)$/, '抛出异常：$1'],
  [/^Parameters: (.*)$/, '参数：$1'],
  [/^See Also: (.*)$/, '另见：$1'],
  [/^Requires: (.*)$/, '需要：$1'],
  [/^Requires Permission: (.*)$/, '需要权限：$1'],
  [/^Supported Devices: (.*)$/, '支持的设备：$1'],
  [/^See Also:$/, '另见：'],
  [/^Requires Permission:$/, '需要权限：'],
  [/^Instance Method Summary (.*)$/, '实例方法摘要 $1'],
  [/^Instance Member Summary (.*)$/, '实例成员摘要 $1'],
  [/^Static Method Summary (.*)$/, '静态方法摘要 $1'],
  [/^Typedef Summary (.*)$/, '类型定义摘要 $1'],
  [/^Typedef Details$/, '类型定义详情'],
  [/^Direct Known Subclasses$/, '直接已知子类'],
  [/^Constant Variables$/, '常量变量'],
];

/** Table headers whose body rows are data (font families, language codes). */
const SKIP_HEADERS = /^(?:Fonts?|Languages?|Font Face|Font Size|Font Symbol|Color Palette)$/;

interface Stats {
  pages: number;
  pagesTouched: number;
  segments: number;
  translated: number;
  skipped: number;
}

const dict: Dict = existsSync(DICT_FILE) ? JSON.parse(readFileSync(DICT_FILE, 'utf8')) : {};
const misses = new Map<string, number>();
const stats: Stats = { pages: 0, pagesTouched: 0, segments: 0, translated: 0, skipped: 0 };

/**
 * Emphasis is not significant to lookups: `harvest` records keys with the
 * markers removed, so `**Classes:**` and `*Fonts*` both reduce to their text.
 */
function normalise(segment: string): string {
  return segment.replace(/\*\*/g, '').replace(/^\*([^*]+)\*$/, '$1');
}

function translateSegment(segment: string): string {
  const { key, slots } = canonicalise(normalise(segment));
  const hit = dict[key];
  if (hit !== undefined) {
    stats.translated++;
    return restore(hit, slots);
  }
  for (const [pattern, replacement] of PATTERNS) {
    if (pattern.test(key)) {
      stats.translated++;
      return restore(key.replace(pattern, replacement), slots);
    }
  }
  stats.segments++;
  if (!looksUntranslatable(key)) misses.set(key, (misses.get(key) ?? 0) + 1);
  return segment;
}

/** Translate one line, preserving every structural marker. */
function translateLine(line: string): string {
  const trimmed = line.trim();
  if (!trimmed) return line;

  if (/^\*\*(.+)\*\*$/.test(trimmed)) {
    const inner = trimmed.slice(2, -2);
    return line.replace(trimmed, `**${translateSegment(inner)}**`);
  }
  if (/^\*[^*]+\*$/.test(trimmed)) {
    const inner = trimmed.slice(1, -1);
    return line.replace(trimmed, `*${translateSegment(inner)}*`);
  }
  if (trimmed.startsWith(':::')) {
    const head = trimmed.startsWith(':::details');
    return head ? line.replace(trimmed, `:::details ${translateSegment(trimmed.replace(/^:::details\s*/, ''))}`) : line;
  }
  if (/^(?:[-*]|\d+\.)\s+/.test(trimmed)) {
    const m = trimmed.match(/^((?:[-*]|\d+\.)\s+)(.*)$/)!;
    return `- ${translateSegment(m[2])}`.replace(/^-/, m[1].trimEnd());
  }
  if (trimmed.startsWith('> ')) {
    return line.replace(trimmed, `> ${translateSegment(trimmed.slice(2))}`);
  }
  return line.replace(trimmed, translateSegment(trimmed));
}

for (const root of ROOTS) {
  for (const file of walk(root).filter((f) => f.endsWith('.md'))) {
    const target = file.replace('docs/en/', 'docs/zh/');
    const en = readFileSync(file, 'utf8');
    stats.pages++;

    const lines = en.split('\n');
    const out: string[] = [];
    let inFence = false;
    let inDetails = false;
    let skipTableBody = false;
    let headerCells: string[] = [];
    let altered = false;

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];
      const t = raw.trim();
      if (t.startsWith('```')) {
        inFence = !inFence;
        out.push(raw);
        continue;
      }
      if (inFence) {
        out.push(raw);
        continue;
      }
      if (t.startsWith('title:')) {
        out.push(raw);
        continue;
      }
      if (t.startsWith(':::')) {
        if (t === ':::') inDetails = false;
        const next = translateLine(raw);
        if (next !== raw) altered = true;
        if (t.startsWith(':::details')) inDetails = true;
        out.push(next);
        continue;
      }
      if (inDetails) {
        out.push(raw);
        continue;
      }
      if (/^\|\s*[-: ]+\|/.test(t)) {
        skipTableBody = headerCells.some((h) => SKIP_HEADERS.test(h.trim()));
        out.push(raw);
        continue;
      }
      if (t.startsWith('|')) {
        const isHeaderRow = /^\|\s*[-: ]+\|/.test((lines[i + 1] ?? '').trim());
        const cells = t.split('|');
        if (isHeaderRow) headerCells = cells.slice(1, -1);
        if (isHeaderRow || !skipTableBody) {
          const next = cells
            .map((c, k) => (k === 0 || k === cells.length - 1 ? c : ` ${translateSegment(c.trim())} `))
            .join('|');
          if (next !== raw) altered = true;
          out.push(next);
        } else {
          out.push(raw);
        }
        continue;
      }
      skipTableBody = false;
      headerCells = [];
      if (/^#{1,6}\s/.test(t)) {
        const m = t.match(/^(#{1,6}\s*)(.*)$/)!;
        const next = raw.replace(t, `${m[1]}${translateSegment(m[2])}`);
        if (next !== raw) altered = true;
        out.push(next);
        continue;
      }
      const next = translateLine(raw);
      if (next !== raw) altered = true;
      out.push(next);
    }

    if (!altered) continue;
    const text = out.join('\n');
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, text);
    stats.pagesTouched++;
  }
}

console.log('dictionary entries :', Object.keys(dict).length);
console.log('pages scanned      :', stats.pages);
console.log('pages written      :', stats.pagesTouched);
console.log('segments translated:', stats.translated);
console.log('segments untranslated:', stats.segments);
console.log('distinct untranslated:', misses.size);

if (process.argv.includes('--todo')) {
  const todo = [...misses.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  writeFileSync(TODO_FILE, `${JSON.stringify(Object.fromEntries(todo), null, 2)}\n`);
  const chars = todo.reduce((a, [s]) => a + s.length, 0);
  console.log(`\nwrote ${TODO_FILE} (${todo.length} phrases, ${chars.toLocaleString()} chars)`);
  console.log('\ntop 50:');
  for (const [s, n] of todo.slice(0, 50)) console.log(`  ${String(n).padStart(5)}  ${s.slice(0, 100)}`);
}
