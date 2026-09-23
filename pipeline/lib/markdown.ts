import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import type { PageKind } from '../config';
import { rewriteLink } from './routes';

/** Map DITA/Shiki language hints onto ids Shiki actually knows. */
const LANG_ALIASES: Record<string, string> = {
  'c++': 'cpp',
  cpp: 'cpp',
  'c#': 'csharp',
  csharp: 'csharp',
  objectivec: 'objective-c',
  'objective-c': 'objective-c',
  js: 'javascript',
  ts: 'typescript',
  xml: 'xml',
  json: 'json',
  sh: 'bash',
  shell: 'bash',
};

/** Languages Shiki bundles; anything else is emitted as an unlabelled fence. */
const KNOWN_LANGS = new Set([
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'html',
  'ini',
  'java',
  'javascript',
  'json',
  'kotlin',
  'lua',
  'markdown',
  'objective-c',
  'properties',
  'python',
  'ruby',
  'rust',
  'sh',
  'shell',
  'sql',
  'swift',
  'text',
  'toml',
  'typescript',
  'xml',
  'yaml',
]);

function normalizeLang(lang: string): string {
  const l = LANG_ALIASES[lang.trim().toLowerCase()] ?? lang.trim().toLowerCase();
  return KNOWN_LANGS.has(l) ? l : '';
}

/**
 * Build a Turndown service configured for the mirrored documentation.
 * `pageUrl` is used to rewrite every link into the mirrored site.
 */
export function createConverter(pageUrl: string, kind: PageKind): TurndownService {
  const td = new TurndownService({
    headingStyle: 'atx',
    hr: '---',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    fence: '```',
    emDelimiter: '*',
    strongDelimiter: '**',
    linkStyle: 'inlined',
  });

  td.use(gfm);

  // Fenced code blocks: the language lives on <pre class="codeblock X">.
  td.addRule('codeblock', {
    filter: (node) => node.nodeName === 'PRE',
    replacement: (_content, node) => {
      const el = node as unknown as HTMLElement;
      const code = el.querySelector('code');
      const raw = (code ? code.textContent : el.textContent) ?? '';
      const text = raw.replace(/^\n+/, '').replace(/\n+$/, '');
      const fromPre = el.getAttribute('class')?.match(/codeblock\s+([^\s]+)/)?.[1] ?? '';
      const fromCode = code?.getAttribute('class')?.match(/language-([^\s]+)/)?.[1] ?? '';
      const lang = normalizeLang(fromPre || fromCode);
      return `\n\n\`\`\`${lang}\n${text}\n\`\`\`\n\n`;
    },
  });

  // Links: rewrite into mirrored routes / keep external URLs.
  td.addRule('link', {
    filter: (node) => node.nodeName === 'A' && node.getAttribute('href') != null,
    replacement: (content, node) => {
      const el = node as unknown as HTMLElement;
      const href = rewriteLink(el.getAttribute('href') ?? '', pageUrl);
      const text = content.trim();
      if (!text) return '';
      return `[${text}](${href})`;
    },
  });

  // Drop empty anchors and spacer images.
  td.addRule('dropEmptyAnchors', {
    filter: (node) =>
      node.nodeName === 'A' &&
      !node.getAttribute('href') &&
      (node.textContent ?? '').trim() === '',
    replacement: () => '',
  });

  // Decorative inline SVG icons show up as base64 data URIs; drop them.
  td.addRule('dropDataImages', {
    filter: (node) => node.nodeName === 'IMG' && /^data:/.test(node.getAttribute('src') ?? ''),
    replacement: () => '',
  });

  if (kind === 'apidoc') {
    // The generated API pages carry per-method device lists. They are huge and
    // hidden in the source UI, so collapse them into a details container.
    td.addRule('dropSupportedDevicesTitle', {
      filter: (node) =>
        node.nodeName === 'P' &&
        /tag_title/.test(node.getAttribute('class') ?? '') &&
        /^Supported Devices/.test((node.textContent ?? '').trim()),
      replacement: () => '',
    });

    td.addRule('supportedDevices', {
      filter: (node) =>
        node.nodeName === 'UL' && /supported_devices/.test(node.getAttribute('class') ?? ''),
      replacement: (content) => {
        const items = content.trim();
        if (!items) return '';
        // Blank lines around the markers are required: Rspress only recognises
        // `:::` when it stands alone as its own block.
        return `\n\n:::details Supported Devices\n\n${items}\n\n:::\n\n`;
      },
    });
  }

  return td;
}

/**
 * Escape `<` outside fenced code blocks and inline code spans.
 *
 * Rspress runs rehype-raw over `.md`, so a bare `<Foo>` in prose would be
 * swallowed as an HTML tag; `&lt;Foo&gt;` renders as intended.
 */
export function escapeAngleBrackets(markdown: string): string {
  const lines = markdown.split('\n');
  let inFence = false;

  const out = lines.map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      return line;
    }
    if (inFence) return line;

    const parts = line.split('`');
    return parts
      .map((part, i) => (i % 2 === 1 ? part : part.replace(/</g, '&lt;')))
      .join('`');
  });

  return out.join('\n');
}

/** Final tidy-up applied to every generated page body. */
export function sanitizeMarkdown(markdown: string): string {
  return escapeAngleBrackets(markdown)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+$/gm, '')
    .trim()
    .concat('\n');
}
