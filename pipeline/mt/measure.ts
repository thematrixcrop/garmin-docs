import fs from 'node:fs';
import path from 'node:path';

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}

const files = walk('docs/en').filter((f) => f.endsWith('.md'));

let totalChars = 0;
let proseChars = 0;
let proseWords = 0;
let codeLines = 0;
let tableLines = 0;
let detailsLines = 0;
const labels = new Map();
const titles = new Map();

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  totalChars += text.length;

  const title = text.match(/^title:\s*(.+)$/m)?.[1]?.replace(/^"|"$/g, '');
  if (title) titles.set(title, (titles.get(title) ?? 0) + 1);

  let inFence = false;
  let inDetails = false;
  for (const line of text.split('\n')) {
    const t = line.trim();
    if (t.startsWith('```')) {
      inFence = !inFence;
      codeLines++;
      continue;
    }
    if (inFence) {
      codeLines++;
      continue;
    }
    if (t.startsWith(':::details')) inDetails = true;
    if (inDetails) {
      detailsLines++;
      if (t === ':::') inDetails = false;
      continue;
    }
    if (t.startsWith('|')) {
      tableLines++;
      continue;
    }
    if (!t || t.startsWith('---') || t.startsWith('title:')) continue;

    // Strip URLs and inline code before counting translatable prose.
    const clean = t
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/`[^`]*`/g, '')
      .replace(/[#>*_|-]/g, ' ')
      .trim();
    if (!/^[\x00-\x7F\s]*$/.test(clean) && clean.length < 3) continue;
    if (!/[A-Za-z]{3}/.test(clean)) continue;

    proseChars += clean.length;
    proseWords += clean.split(/\s+/).filter(Boolean).length;
  }
}

// Sidebar labels and their frequencies.
for (const f of walk('docs/en').filter((f) => f.endsWith('_meta.json'))) {
  const items = JSON.parse(fs.readFileSync(f, 'utf8'));
  for (const it of items) {
    if (it.label && /^[A-Za-z]/.test(it.label)) labels.set(it.label, (labels.get(it.label) ?? 0) + 1);
  }
}

console.log('files                 :', files.length);
console.log('total chars (raw)     :', totalChars.toLocaleString());
console.log('translatable prose    :', proseChars.toLocaleString(), 'chars /', proseWords.toLocaleString(), 'words');
console.log('code fence lines      :', codeLines.toLocaleString());
console.log('table lines           :', tableLines.toLocaleString());
console.log('details(device) lines :', detailsLines.toLocaleString());
console.log('distinct sidebar labels:', labels.size);
console.log('distinct page titles   :', titles.size);
console.log('union of labels+titles :', new Set([...labels.keys(), ...titles.keys()]).size);
