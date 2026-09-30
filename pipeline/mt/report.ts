import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}

// Group distinct sidebar labels + page titles by top-level section.
const groups = new Map();

for (const f of walk('docs/en').filter((f) => f.endsWith('.md'))) {
  const rel = f.replace(/^docs\/en\//, '').replace(/\/index\.md$/, '');
  const segs = rel.split('/');
  // section = connect-iq/<second>
  const section = segs.length > 1 ? segs[1] : '(root)';
  const title = fs.readFileSync(f, 'utf8').match(/^title:\s*(.+)$/m)?.[1]?.replace(/^"|"$/g, '');
  if (!title) continue;
  if (!groups.has(section)) groups.set(section, new Set());
  groups.get(section).add(title);
}

let total = 0;
const guide = [];
const mechanical = [];
for (const [section, set] of [...groups.entries()].sort()) {
  const n = set.size;
  total += n;
  const isMechanical = section === 'api-docs' || section === 'device-reference';
  const bucket = isMechanical ? mechanical : guide;
  bucket.push({ section, n });
  console.log(`${String(n).padStart(4)}  ${section}${isMechanical ? '   [identifiers/device names — keep English]' : ''}`);
}
console.log('\ntotal distinct titles:', total);
console.log('mechanical (api-docs + device-reference):', mechanical.reduce((a, b) => a + b.n, 0));
console.log('guide (needs translation):', guide.reduce((a, b) => a + b.n, 0));

console.log('\n=== guide titles needing translation ===');
for (const [section, set] of [...groups.entries()].sort()) {
  if (section === 'api-docs' || section === 'device-reference') continue;
  console.log(`\n--- ${section}`);
  for (const t of [...set].sort()) console.log('   ', t);
}
void path;

fs.writeFileSync(
  'data/mt-report.json',
  `${JSON.stringify(
    Object.fromEntries([...groups.entries()].map(([k, v]) => [k, [...v].sort()])),
    null,
    2,
  )}\n`,
);
