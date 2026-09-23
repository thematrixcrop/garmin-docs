import {
  ARTICLE_PREFIX,
  EXCLUDE_PREFIXES,
  NON_HTML_EXT,
  ORIGIN,
  SCOPE_PREFIX,
} from '../config';

/** Pathname of a URL, ignoring query and hash. */
export function rawPathname(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

/**
 * Canonical mirror route: `.html` stripped, `index` collapsed, trailing slash.
 * `/connect-iq/api-docs/Toybox/Activity.html` -> `/connect-iq/api-docs/Toybox/Activity/`
 */
export function toRoute(rawPath: string): string {
  let p = rawPath;
  if (p.endsWith('.html')) p = p.slice(0, -'.html'.length);
  if (p.endsWith('/index')) p = p.slice(0, -'index'.length);
  if (p === '' || p === '/index') p = '/';
  if (!p.endsWith('/')) p += '/';
  return p.replace(/\/{2,}/g, '/');
}

/** Should this URL be crawled as a document? */
export function isInScope(url: string): boolean {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return false;
  }
  if (u.origin !== ORIGIN) return false;
  const p = u.pathname;
  if (!p.startsWith(SCOPE_PREFIX)) return false;
  if (NON_HTML_EXT.test(p)) return false;
  if (EXCLUDE_PREFIXES.some((prefix) => p.startsWith(prefix))) return false;
  return true;
}

/** Filesystem-relative path (no extension) for a route, e.g. `connect-iq/overview/index`. */
export function routeToRelFile(route: string): string {
  const segs = route.split('/').filter(Boolean);
  if (segs.length === 0) return 'index';
  return `${segs.join('/')}/index`;
}

/** Gatsby page-data JSON URL for a route. */
export function pageDataUrl(route: string): string {
  return `${ORIGIN}/page-data${route}page-data.json`;
}

/** Raw DITA article HTML URL for a `pageContext.fileName`. */
export function articleUrl(fileName: string): string {
  return `${ORIGIN}${ARTICLE_PREFIX}${fileName}`;
}

/** First path segment, used as the section id. */
export function sectionOf(route: string): string {
  return route.split('/').filter(Boolean)[0] ?? '';
}

/** Resolve an href against a base URL, ignoring non-http schemes. */
export function resolveHref(href: string, baseUrl: string): string | null {
  const h = href.trim();
  if (!h) return null;
  if (/^(#|mailto:|tel:|javascript:|data:)/i.test(h)) return null;
  try {
    return new URL(h, baseUrl).toString();
  } catch {
    return null;
  }
}

/**
 * Source-site links that are broken upstream, mapped onto a working target.
 * `/connect-iq/reference-guides/devices-reference/` returns 404 on Garmin's own
 * site (linked from the API reference); the device list lives here instead.
 */
const LINK_REWRITES: Record<string, string> = {
  '/connect-iq/reference-guides/devices-reference/': '/connect-iq/device-reference/',
};

/**
 * Rewrite a link found in a source page into the mirrored site.
 *
 * - same-origin, in-scope links become mirror-internal routes
 * - everything else keeps its absolute URL
 * - non-http schemes and bare fragments are returned untouched
 */
export function rewriteLink(href: string, pageUrl: string): string {
  const h = href.trim();
  if (!h) return h;
  if (/^(mailto:|tel:|javascript:)/i.test(h)) return h;

  const hashIdx = h.indexOf('#');
  const hash = hashIdx >= 0 ? h.slice(hashIdx) : '';
  const beforeHash = hashIdx >= 0 ? h.slice(0, hashIdx) : h;

  // Pure fragment: leave as-is; same-page anchors are best-effort.
  if (!beforeHash) return h;

  const abs = resolveHref(beforeHash, pageUrl);
  if (!abs) return h;

  let u: URL;
  try {
    u = new URL(abs);
  } catch {
    return h;
  }

  if (u.origin === ORIGIN && isInScope(abs)) {
    const route = toRoute(u.pathname);
    return `${LINK_REWRITES[route] ?? route}${hash}`;
  }
  return `${abs}${hash}`;
}
