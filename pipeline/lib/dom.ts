import type { AnyNode, Element } from 'domhandler';
import type { CheerioAPI } from 'cheerio';

export function textLen($: CheerioAPI, el: AnyNode): number {
  return $(el).text().replace(/\s+/g, ' ').trim().length;
}

/**
 * Descend from `root` into the child block that carries nearly all of the text,
 * yielding the tightest container that still holds the whole body.
 */
export function tightestContent($: CheerioAPI, root: AnyNode): AnyNode {
  let best: AnyNode = root;
  for (let i = 0; i < 12; i++) {
    const bestLen = textLen($, best);
    if (bestLen === 0) break;
    let next: AnyNode | null = null;
    let nextLen = bestLen * 0.9;
    for (const child of $(best).children('div, section, article, main, td').toArray()) {
      const len = textLen($, child);
      if (len >= nextLen) {
        next = child;
        nextLen = len;
      }
    }
    if (!next) break;
    best = next;
  }
  return best;
}

/** Remove scripts, styles and other non-content chrome in place. */
export function stripChrome($: CheerioAPI, root: AnyNode, selectors: string[]): void {
  for (const sel of selectors) {
    $(root).find(sel).remove();
  }
}

/** Serialize an element's inner HTML, normalizing a few thing Turndown dislikes. */
export function serialize($: CheerioAPI, el: AnyNode): string {
  const $el = $(el).clone();
  $el.find('a[name]').remove();
  return $el.html() ?? '';
}

export function isElement(node: AnyNode): node is Element {
  return node.type === 'tag' || node.type === 'script' || node.type === 'style';
}
