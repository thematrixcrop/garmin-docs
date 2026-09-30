/**
 * Translation progress.
 *
 * "page touched" alone overstates progress: the reference pages are translated
 * structurally (headings, table labels) but still carry English prose. So this
 * reports the honest residual — English prose segments still present under
 * docs/zh — using the same classification rules as `apply.ts`, so font names,
 * language codes, signatures and other data are not counted as work.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DATA =
  /Sans|Serif|Mono|Roboto|Noto|Vera|DejaVu|Bebas|Swis|Sakkal|Steelfish|Majalla|Naskh|Hebrew|Armenian|Unicode|Condensed|Glyph|CJK|Italic/;
const SKIP_HEADERS = /^(?:Fonts?|Languages?|Font Face|Font Size|Font Symbol|Color Palette)$/;

function looksUntranslatable(raw: string): boolean {
  const s = raw.replace(/\\_/g, '_');
  if (!/[A-Za-z]{2}/.test(s)) return true;
  if (/&lt;|&gt;|class=/.test(s)) return true;
  if (DATA.test(s)) return true;
  if (/^[\d\s.,x×%+-]+$/.test(s)) return true;
  if (/^[a-z]{3}(?:[, ]+[a-z]{3})+$/.test(s)) return true;
  if (/^[a-z]+(?:, [a-z]+)+$/.test(s)) return true;
  if (/^:?[a-z][A-Za-z0-9_]* — \((?:\{\d+\}(?:, )?)+\) —$/.test(s)) return true;
  if (/^:[a-z][A-Za-z0-9_]* — /.test(s)) return true;
  if (/\\[{}\[\]]/.test(s)) return true;
  if (/^[A-Z][A-Z0-9_]*(?:[,\s]+[A-Z][A-Z0-9_]*)*$/.test(s)) return true;
  if (/^(?:var\s+)?[A-Za-z_][A-Za-z0-9_.]*(?:\([^)]*\))?\s+as\s+(?:\{\d+\}|[A-Z][A-Za-z0-9_.]*)$/.test(s)) return true;
  if (/^(?:var\s+[A-Za-z_][A-Za-z0-9_]*|\{0\})(?:\([^)]*\))?.*\bas\b/.test(s)) return true;
  if(/^\{0\}\([^)]*\)/.test(s)) return true;
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

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

const body = (t: string) => t.replace(/^---[\s\S]*?---\n/, '').trim();

function untranslatedSegments(text: string): string[] {
  const out: string[] = [];
  const lines = text.split('\n');
  let inFence = false;
  let inDetails = false;
  let skipTableBody = false;
  let headerCells: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      continue;
    }
    if (inFence || t.startsWith('title:')) continue;
    if (t.startsWith(':::')) {
      if (t === ':::') inDetails = false;
      else if (t.startsWith(':::details')) inDetails = true;
      continue;
    }
    if (inDetails) continue;

    if (/^\|\s*[-: ]+\|/.test(t)) {
      skipTableBody = headerCells.some((h) => SKIP_HEADERS.test(h.trim()));
      continue;
    }
    if (t.startsWith('|')) {
      const isHeaderRow = /^\|\s*[-: ]+\|/.test((lines[i + 1] ?? '').trim());
      const cells = t.split('|').slice(1, -1);
      if (isHeaderRow) headerCells = cells;
      if (isHeaderRow || !skipTableBody) {
        for (const c of cells) check(out, c);
      }
      continue;
    }
    skipTableBody = false;
    headerCells = [];

    const s = t
      .replace(/^#{1,6}\s*/, '')
      .replace(/^[-*]\s+/, '')
      .replace(/^>\s*/, '')
      .replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ');
    check(out, s);
  }
  return out;
}

/** Product, edition and tool-UI names that intentionally stay in English. */
const KEEP_ENGLISH = [
  'Connect IQ SDK Manager',
  'Connect IQ Store',
  'Monkey C',
  'Monkey Motion',
  'Monkey Graph',
  'Visual Studio Code',
  'Garmin Connect',
  'Garmin Express',
  'Android BLE',
  'iOS BLE',
  'Android ADB',
  'Total Time (us)',
  'Actual Time (us)',
  'Average Time (us)',
  'Call Count',
  'Call Stack',
  // HTTP reason phrases are protocol strings and stay English by convention.
  'Not Found',
  'Internal Server Error',
  'Server Error',
  // Hardware vendors and manifest permission names.
  'Nordic nRF52 DK',
  'nRF Connect For Desktop',
  'Data Field Alert',
  'Audio Content Provider',
  'ComplicationProvider',
  'ComplicationSubscriber',
  'SensorLogging',
  // Simulator activity-recording button labels.
  'Workout Step',
  'Next Multisport',
  'Split Type',
  'Start Split',
  'End Split',
];

/** Identifier pairs: language/type names such as "int, Integer". */
const TYPE_PAIR = /^[A-Za-z][A-Za-z0-9_.]*(?:, [A-Za-z][A-Za-z0-9_.]*)+$/;

function check(out: string[], raw: string): void {
  let s = raw.trim().replace(/\*\*/g, '');
  if (!s) return;
  // API signature rows and exception markers are structural metadata.
  if (/—\s*\(.+\)\s*—$/.test(s)) return;
  if (/^\([^)]*(?:Exception|Error)\)\s*—$/.test(s)) return;
  if (/^\$\([^)]*\)/.test(s)) return;
  if (/^(?:new\s+)?WatchUi\.|^(?:bitmapMarker|defaultMarker)\./.test(s)) return;
  // API member signatures retain English type syntax after links are removed.
  if (/^(?:var\s+)?[A-Za-z_][A-Za-z0-9_]*(?:\(\))?\s+as(?:\s+or\s+Null)?$/.test(s)) return;
  if (/\bas\b/.test(s) && !/[.!?]/.test(s) && /^(?:\(|[A-Za-z_][A-Za-z0-9_.]*\b|as\b)/.test(s)) return;
  if (/\bas\b/.test(s) && /[{}()[\]]/.test(s) && !/[.!?]/.test(s)) return;
  if (/^<[^>]+>$/.test(s)) return; // raw HTML such as an anchor tag
  // A quoted fragment is a sample value, not prose ("What's the deal?").
  if (/^["“'][^"”']*["”']$/.test(s)) return;
  // Drop HTML, inline code and link/image markup: none of it is prose.
  s = s
    .replace(/<[^>]*>/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ')
    .trim();
  if (!s) return;
  if (/[\u4e00-\u9fff]/.test(s)) return; // already Chinese
  if ((s.match(/[A-Za-z]{2,}/g) ?? []).length < 2) return;
  if (KEEP_ENGLISH.some((k) => s.includes(k))) return;
  if (/^(?:Face It|Captain Marvel|First Avenger|Stack Overflow)$/.test(s)) return;
  if (/^(?:Fenix|D2|Forerunner|Vivoactive|EDGE|epix)/i.test(s)) return;
  if (/^(?:int|long|float|double)、(?:Integer|Long|Float|Double)$/.test(s)) return;
  if (TYPE_PAIR.test(s)) return;
  if (!/[a-z]{3,}/.test(s)) return;
  if (looksUntranslatable(s)) return;
  out.push(s);
}

const enFiles = walk('docs/en').filter((f) => f.endsWith('.md'));
let untouched = 0;
let residual = 0;
let residualChars = 0;
const residuals = new Map<string, number>();
const perGroup = new Map<string, { pages: number; chars: number }>();
const perFile: Array<{ file: string; chars: number }> = [];

for (const file of enFiles) {
  const zh = file.replace('docs/en/', 'docs/zh/');
  const en = readFileSync(file, 'utf8');
  if (!existsSync(zh)) {
    untouched++;
    continue;
  }
  if (body(readFileSync(zh, 'utf8')) === body(en)) untouched++;
  const segments = untranslatedSegments(readFileSync(zh, 'utf8'));
  const chars = segments.reduce((a, s) => a + s.length, 0);
  residual += segments.length;
  residualChars += chars;
  for (const s of segments) residuals.set(s, (residuals.get(s) ?? 0) + 1);
  if (chars) perFile.push({ file: file.replace('docs/en/connect-iq/', ''), chars });

  const group = file.replace('docs/en/connect-iq/', '').split('/')[0];
  if (segments.length) {
    const g = perGroup.get(group) ?? { pages: 0, chars: 0 };
    g.pages++;
    g.chars += chars;
    perGroup.set(group, g);
  }
}

console.log(`pages                  : ${enFiles.length}`);
console.log(`pages never translated : ${untouched}`);
console.log(`English prose remaining: ${residual.toLocaleString()} segments, ${residualChars.toLocaleString()} chars`);
console.log(`distinct phrases left  : ${residuals.size.toLocaleString()}`);
console.log('\nresidual English by group:');
for (const [group, g] of [...perGroup.entries()].sort((a, b) => b[1].chars - a[1].chars)) {
  console.log(`  ${group.padEnd(32)} ${String(g.pages).padStart(4)} pages  ${g.chars.toLocaleString().padStart(9)} chars`);
}

if (process.argv.includes('--files')) {
  const filter = process.argv[process.argv.indexOf('--files') + 1];
  console.log('\nper-file residual:');
  for (const { file, chars } of perFile
    .filter((f) => !filter || f.file.startsWith(filter))
    .sort((a, b) => a.chars - b.chars)) {
    console.log(`  ${String(chars).padStart(8)}  ${file}`);
  }
}

if (process.argv.includes('--show')) {
  const filter = process.argv[process.argv.indexOf('--show') + 1] ?? '';
  for (const file of enFiles.filter((f) => f.includes(filter))) {
    const zh = file.replace('docs/en/', 'docs/zh/');
    if (!existsSync(zh)) continue;
    const segments = untranslatedSegments(readFileSync(zh, 'utf8'));
    if (!segments.length) continue;
    console.log(`\n${file.replace('docs/en/', '')}:`);
    for (const s of segments) console.log(`   [${s.length}] ${s}`);
  }
}
