import * as cheerio from 'cheerio';
import { join } from 'node:path';
import pLimit from 'p-limit';
import {
  CONCURRENCY,
  EXTRACTED_DIR,
  MANIFEST_FILE,
  MIN_CONTENT_CHARS,
  STRIP_SELECTORS,
} from './config';
import { readJson, writeJson } from './lib/fsx';
import { fetchHtml } from './lib/http';
import { log } from './lib/logger';
import { articleUrl, routeToRelFile } from './lib/routes';
import { extractSidebar, findSidebarUl } from './lib/sidebar';
import { localizeImages } from './lib/assets';
import { textLen, tightestContent } from './lib/dom';
import type { ExtractedPage, ManifestEntry } from './lib/types';
import type { AnyNode } from 'domhandler';

const limit = pLimit(CONCURRENCY);
const CHROME = ['script', 'style', 'noscript', 'link', 'iframe'];

function firstHeading($: cheerio.CheerioAPI, root: AnyNode): string {
  const h1 = $(root).find('h1').first();
  if (h1.length) return h1.text().replace(/\s+/g, ' ').trim();
  const h2 = $(root).find('h2').first();
  return h2.length ? h2.text().replace(/\s+/g, ' ').trim() : '';
}

/** Clean the DITA article HTML used by markdown-template guide pages. */
async function extractArticle(fileName: string): Promise<{ html: string; title: string }> {
  const url = articleUrl(fileName);
  const res = await fetchHtml(url);
  if (!res) return { html: '', title: '' };

  const $ = cheerio.load(res.text);
  $(CHROME.join(',')).remove();

  const main = $('main').first().length ? $('main').first() : $('body');
  $(main)
    .find('a[name]')
    .remove();

  const title = firstHeading($, main.get(0) as AnyNode);
  await localizeImages($, main.get(0) as AnyNode, url);

  return { html: main.html() ?? '', title };
}

/** Clean the generated API reference HTML. */
async function extractApiDoc(url: string, html: string): Promise<{ html: string; title: string }> {
  const $ = cheerio.load(html);
  $(CHROME.join(',')).remove();
  $('#nav, .nav_wrap, #search_frame, #resizer').remove();

  const main = $('#content').first().length
    ? $('#content').first()
    : $('#main').first().length
      ? $('#main').first()
      : $('body');

  const title = firstHeading($, main.get(0) as AnyNode);
  await localizeImages($, main.get(0) as AnyNode, url);

  return { html: main.html() ?? '', title };
}

/** Clean the SSR'd Gatsby DOM of the handful of plain landing pages. */
async function extractGatsbyDom(
  $: cheerio.CheerioAPI,
  url: string,
): Promise<{ html: string; title: string }> {
  $(CHROME.join(',')).remove();
  for (const sel of STRIP_SELECTORS) $(sel).remove();
  $('header, footer').remove();

  const sidebarUl = findSidebarUl($, url);
  if (sidebarUl) $(sidebarUl).remove();

  const wrapper = $('#gatsby-focus-wrapper').first().length
    ? $('#gatsby-focus-wrapper').first()
    : $('body');

  const content = tightestContent($, wrapper.get(0) as AnyNode);
  const title = firstHeading($, content);
  await localizeImages($, content, url);
  return { html: $(content).html() ?? '', title };
}

async function processEntry(entry: ManifestEntry): Promise<{ stub: boolean; chars: number }> {
  const pageRes = await fetchHtml(entry.url);
  if (!pageRes) {
    log.warn(`skipping unavailable page: ${entry.path}`);
    return { stub: true, chars: 0 };
  }

  const page$ = cheerio.load(pageRes.text);
  // The API reference nav is built at runtime from a script, so any links the
  // SSR HTML happens to contain are unreliable — order it from the manifest.
  const sidebar = entry.kind === 'apidoc' ? [] : extractSidebar(page$, entry.url);

  let content: { html: string; title: string };

  if (entry.source === 'article' && entry.articleFile) {
    content = await extractArticle(entry.articleFile);
  } else if (entry.source === 'apidoc') {
    content = await extractApiDoc(entry.url, pageRes.text);
  } else {
    content = await extractGatsbyDom(page$, entry.url);
  }

  const chars = content.html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().length;
  const stub = chars < MIN_CONTENT_CHARS;

  const page: ExtractedPage = {
    url: entry.url,
    path: entry.path,
    kind: entry.kind,
    title: content.title || entry.title,
    html: content.html,
    chars,
    stub,
    sidebar,
  };

  await writeJson(join(EXTRACTED_DIR, `${routeToRelFile(entry.path)}.json`), page);
  return { stub, chars };
}

async function main(): Promise<void> {
  log.step('extract: isolating content and harvesting sidebar order');

  const manifest = await readJson<ManifestEntry[]>(MANIFEST_FILE);
  log.info(`processing ${manifest.length} pages`);

  const stubs: string[] = [];
  let done = 0;

  await Promise.all(
    manifest.map((entry) =>
      limit(async () => {
        const { stub } = await processEntry(entry);
        if (stub) stubs.push(entry.path);
        done++;
        if (done % 100 === 0) log.info(`extracted ${done}/${manifest.length}`);
      }),
    ),
  );

  log.ok(`extracted ${manifest.length} pages → ${EXTRACTED_DIR}`);
  if (stubs.length > 0) {
    log.warn(`${stubs.length} page(s) had little/no extractable body:`);
    for (const s of stubs.slice(0, 20)) log.warn(`  ${s}`);
    if (stubs.length > 20) log.warn(`  … and ${stubs.length - 20} more`);
  }
}

main().catch((err) => {
  log.error(`extract failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
