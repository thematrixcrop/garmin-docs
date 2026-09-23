import type { AnyNode } from 'domhandler';
import type { CheerioAPI } from 'cheerio';
import type { SidebarLink } from './types';
import { isInScope, rawPathname, resolveHref, toRoute } from './routes';

/**
 * Locate the documentation sidebar `<ul>`.
 *
 * The Gatsby layout uses hashed CSS-in-JS class names and no semantic
 * `<nav>`, so the sidebar is found structurally: the list holding the most
 * in-scope documentation links.
 */
export function findSidebarUl($: CheerioAPI, pageUrl: string): AnyNode | null {
  let bestUl: AnyNode | null = null;
  let bestCount = 0;

  $('ul').each((_, ul) => {
    let count = 0;
    $(ul)
      .find('a[href]')
      .each((__, a) => {
        const abs = resolveHref($(a).attr('href') ?? '', pageUrl);
        if (abs && isInScope(abs)) count++;
      });
    if (count > bestCount) {
      bestCount = count;
      bestUl = ul;
    }
  });

  return bestCount >= 5 ? bestUl : null;
}

/** Sidebar links in document order, ready to drive the generated `_meta.json`. */
export function extractSidebar($: CheerioAPI, pageUrl: string): SidebarLink[] {
  const bestUl = findSidebarUl($, pageUrl);
  if (!bestUl) return [];

  const $best = $(bestUl);
  const baseDepth = $best.parents('ul').length;
  const links: SidebarLink[] = [];
  const seen = new Set<string>();

  $best.find('a[href]').each((_, a) => {
    const abs = resolveHref($(a).attr('href') ?? '', pageUrl);
    if (!abs || !isInScope(abs)) return;
    const path = toRoute(rawPathname(abs));
    if (seen.has(path)) return;
    seen.add(path);
    links.push({
      path,
      label: $(a).text().replace(/\s+/g, ' ').trim(),
      depth: Math.max(0, $(a).parents('ul').length - baseDepth - 1),
    });
  });

  return links;
}
