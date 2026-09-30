import { defineConfig } from '@rspress/core';

const SITE_TITLE_EN = 'Garmin Connect IQ Docs';
const SITE_TITLE_ZH = 'Garmin Connect IQ 文档';

/**
 * GitHub Pages project sites live under `/<repo>/`. CI injects RSPRESS_BASE
 * from `actions/configure-pages`. Local `pnpm dev` / `pnpm preview` keep
 * serving at `/`.
 */
function resolveBase(): string {
  const raw = process.env.RSPRESS_BASE?.trim();
  if (!raw || raw === '/') {
    return '/';
  }
  const withLeading = raw.startsWith('/') ? raw : `/${raw}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
}

const base = resolveBase();

/** Ask crawlers not to index, follow, archive, or snippet this mirror. */
const ROBOTS_POLICY =
  'noindex, nofollow, noarchive, nosnippet, noimageindex, nocache';

console.info(`[rspress] base=${base} robots=${ROBOTS_POLICY}`);

// Nav and sidebar are intentionally NOT declared here. They are generated from
// the per-language _nav.json and _meta.json files, which the pipeline emits from
// the source site's own navigation order.
export default defineConfig({
  root: 'docs',
  lang: 'en',
  base,
  // Do not emit llms.txt / markdown dumps that invite model crawlers.
  llms: false,
  head: [
    ['meta', { name: 'robots', content: ROBOTS_POLICY }],
    ['meta', { name: 'googlebot', content: ROBOTS_POLICY }],
    ['meta', { name: 'bingbot', content: ROBOTS_POLICY }],
    ['meta', { name: 'yandex', content: ROBOTS_POLICY }],
    ['meta', { 'http-equiv': 'X-Robots-Tag', content: ROBOTS_POLICY }],
  ],
  // Site title/description are per-locale; a root-level `title` would override
  // them and leak the English name into the Chinese <title>.
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: SITE_TITLE_EN,
      description: 'Garmin Connect IQ developer documentation, mirrored as Markdown.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: SITE_TITLE_ZH,
      description: 'Garmin Connect IQ 开发者文档，Markdown 镜像。',
    },
  ],
  themeConfig: {
    search: true,
  },
});
