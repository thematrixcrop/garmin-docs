import { resolve } from 'node:path';

export const PROJECT_ROOT = process.cwd();

export const DATA_DIR = resolve(PROJECT_ROOT, 'data');
export const CACHE_HTML_DIR = resolve(DATA_DIR, 'cache/html');
export const CACHE_IMAGE_DIR = resolve(DATA_DIR, 'cache/image');
export const EXTRACTED_DIR = resolve(DATA_DIR, 'extracted');
export const MARKDOWN_DIR = resolve(DATA_DIR, 'markdown');
export const MANIFEST_FILE = resolve(DATA_DIR, 'manifest.json');
export const GLOSSARY_FILE = resolve(DATA_DIR, 'glossary.json');

export const DOCS_ROOT = resolve(PROJECT_ROOT, 'docs');
export const ASSETS_ROOT = resolve(DOCS_ROOT, 'public/assets');

export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

// ---------------------------------------------------------------- source site

export const ORIGIN = 'https://developer.garmin.com';

/** Everything we mirror lives under this prefix. */
export const SCOPE_PREFIX = '/connect-iq/';

/** The API reference is a separate static HTML doc tree inside the scope. */
export const API_DOCS_PREFIX = '/connect-iq/api-docs/';

/**
 * Raw guide-article HTML (DITA output) lives outside the routed page tree.
 * It is the real content source for markdown-template pages, not a document.
 */
export const ARTICLE_PREFIX = '/connect-iq/articles/';

/** Page kinds: Gatsby guide pages vs. the generated API reference tree. */
export type PageKind = 'gatsby' | 'apidoc';

/** Where a page's actual body text comes from. */
export type ContentSource = 'article' | 'gatsby-dom' | 'apidoc';

export function classify(url: string): PageKind {
  return new URL(url).pathname.startsWith(API_DOCS_PREFIX) ? 'apidoc' : 'gatsby';
}

/** Crawl entry points; BFS expands the rest from in-scope links. */
export const SEEDS = [
  `${ORIGIN}/connect-iq/`,
  `${ORIGIN}/connect-iq/overview/`,
  `${ORIGIN}${API_DOCS_PREFIX}`,
];

/** Path prefixes that are never documents. */
export const EXCLUDE_PREFIXES = [
  '/page-data/',
  '/static/',
  '/components/',
  '/styles.',
  '/webpack',
  ARTICLE_PREFIX,
];

/** File extensions we never treat as pages. */
export const NON_HTML_EXT =
  /\.(png|jpe?g|gif|svg|webp|ico|css|js|mjs|json|xml|txt|woff2?|ttf|eot|pdf|zip|gz|mp4|webm|mov|avif|bmp|map)$/i;

export const USER_AGENT =
  'garmin-connectiq-docs-mirror/0.1 (local Markdown mirror; contact: local)';

export const CONCURRENCY = 6;
export const REQUEST_DELAY_MS = 120;
export const FETCH_RETRIES = 3;

// ------------------------------------------------------------------ extraction

/**
 * Candidate content containers, best-first. The extractor also scores by text
 * length, so ordering here is only a tie-breaker.
 */
export const CONTENT_SELECTORS = [
  'main article',
  '[class*="markdown-body"]',
  '[class*="markdown"]',
  'main',
  'article',
  '[role="main"]',
];

/** Chrome to drop before scoring/extraction. */
export const STRIP_SELECTORS = [
  'script',
  'style',
  'noscript',
  'nav',
  'header',
  'footer',
  'aside',
  'svg',
  'form',
  '[role="navigation"]',
  '[role="banner"]',
  '[role="contentinfo"]',
  '[role="search"]',
  '[id^="truste"]',
  '[class*="truste"]',
  '[class*="cookie"]',
  '[class*="Cookie"]',
  '[class*="breadcrumb"]',
  '[class*="Breadcrumb"]',
  '[class*="language-picker"]',
  '[class*="country"]',
  '[class*="Country"]',
  '[class*="sidebar"]',
  '[class*="Sidebar"]',
  '[class*="toc"]',
  '[class*="TableOfContents"]',
];

/** Drop decorative inline SVG icons / spacer images. */
export const STRIP_IMG_SRC_PREFIX = ['data:image/svg'];

/** A page whose extracted text is shorter than this is considered empty. */
export const MIN_CONTENT_CHARS = 40;

/** Gatsby landing pages known to render only on the client. */
export const CLIENT_RENDERED_PATHS = [
  '/connect-iq/',
  '/connect-iq/monkey-c/',
  '/connect-iq/core-topics/',
];

// -------------------------------------------------------------------- scraffold

/** i18n key per top-level section directory (also used for nav labels). */
export const SECTION_I18N: Record<string, string> = {
  overview: 'overview',
  'compatible-devices': 'compatibleDevices',
  'api-docs': 'apiDocs',
  sdk: 'getTheSdk',
  'submit-an-app': 'submitAnApp',
  'stay-informed': 'stayInformed',
  'connect-iq-basics': 'connectIqBasics',
  'monkey-c': 'monkeyC',
  'core-topics': 'coreTopics',
  'user-experience-guidelines': 'userExperienceGuidelines',
  'personality-library': 'personalityLibrary',
  'connect-iq-faq': 'connectIqFaq',
  'reference-guides': 'referenceGuides',
  'app-review-guidelines': 'appReviewGuidelines',
  monetization: 'monetization',
  'device-reference': 'deviceReference',
};

/** Navbar: a single product entry; the whole tree lives in the sidebar. */
export const NAV = [
  {
    text: 'connectIq',
    link: '/connect-iq/overview/',
    activeMatch: '^/connect-iq/',
  },
];
