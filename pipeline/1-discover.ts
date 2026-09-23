import * as cheerio from 'cheerio';
import pLimit from 'p-limit';
import { CONCURRENCY, MANIFEST_FILE, REQUEST_DELAY_MS, SEEDS, classify } from './config';
import { sleep, writeJson } from './lib/fsx';
import { fetchHtml } from './lib/http';
import { log } from './lib/logger';
import { isInScope, pageDataUrl, rawPathname, resolveHref, sectionOf, toRoute } from './lib/routes';
import type { ManifestEntry } from './lib/types';

const limit = pLimit(CONCURRENCY);
const discovered = new Map<string, string>(); // route -> hashless absolute url
const entries: ManifestEntry[] = [];
const failures: string[] = [];

/** Register a URL; returns the normalised URL when it is new, otherwise null. */
function add(rawUrl: string): string | null {
  if (!isInScope(rawUrl)) return null;
  let u: URL;
  try {
    u = new URL(rawUrl);
  } catch {
    return null;
  }
  u.hash = '';
  u.search = '';
  const route = toRoute(u.pathname);
  if (discovered.has(route)) return null;
  const url = u.toString();
  discovered.set(route, url);
  return url;
}

function linksOf(html: string, baseUrl: string): string[] {
  const $ = cheerio.load(html);
  const out: string[] = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    const abs = resolveHref(href, baseUrl);
    if (abs) out.push(abs);
  });
  return out;
}

async function main(): Promise<void> {
  log.step('discover: crawling Connect IQ documentation');

  let wave: string[] = [];
  for (const seed of SEEDS) {
    const url = add(seed);
    if (url) wave.push(url);
  }

  let processed = 0;
  while (wave.length > 0) {
    const nextWave: string[] = [];

    await Promise.all(
      wave.map((url) =>
        limit(async () => {
          if (REQUEST_DELAY_MS > 0) await sleep(REQUEST_DELAY_MS);
          const res = await fetchHtml(url);
          if (!res) {
            failures.push(url);
            return;
          }

          const route = toRoute(rawPathname(url));
          const kind = classify(url);
          const $ = cheerio.load(res.text);
          const title = ($('title').first().text() || $('h1').first().text() || '').trim();
          entries.push({
            url,
            path: route,
            kind,
            source: kind === 'apidoc' ? 'apidoc' : 'gatsby-dom',
            section: sectionOf(route),
            title,
          });

          processed++;
          if (processed % 50 === 0) log.info(`crawled ${processed} pages (frontier ${nextWave.length})`);

          for (const abs of linksOf(res.text, url)) {
            const added = add(abs);
            if (added) nextWave.push(added);
          }
        }),
      ),
    );

    wave = nextWave;
  }

  // Resolve the real content source for every Gatsby page: markdown-template
  // pages render from a DITA article HTML file, plain pages are SSR'd in place.
  const gatsbyEntries = entries.filter((e) => e.kind === 'gatsby');
  log.info(`probing page-data for ${gatsbyEntries.length} Gatsby pages`);
  let probed = 0;
  await Promise.all(
    gatsbyEntries.map((entry) =>
      limit(async () => {
        const res = await fetchHtml(pageDataUrl(entry.path));
        if (res) {
          try {
            const pd = JSON.parse(res.text) as {
              componentChunkName?: string;
              result?: { pageContext?: { fileName?: string } };
            };
            entry.component = pd.componentChunkName;
            const fileName = pd.result?.pageContext?.fileName;
            if (fileName) {
              entry.articleFile = fileName;
              entry.source = 'article';
            }
          } catch {
            // page-data.json missing or not JSON — keep the default source
          }
        }
        probed++;
        if (probed % 50 === 0) log.info(`probed ${probed}/${gatsbyEntries.length}`);
      }),
    ),
  );

  entries.sort((a, b) => a.path.localeCompare(b.path));
  await writeJson(MANIFEST_FILE, entries);

  const byKind = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.kind] = (acc[e.kind] ?? 0) + 1;
    return acc;
  }, {});
  const bySource = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.source] = (acc[e.source] ?? 0) + 1;
    return acc;
  }, {});

  log.ok(`discovered ${entries.length} pages → ${MANIFEST_FILE}`);
  log.info(`by kind: ${JSON.stringify(byKind)}`);
  log.info(`by source: ${JSON.stringify(bySource)}`);
  if (failures.length > 0) {
    log.warn(`${failures.length} URLs failed to fetch (first 5: ${failures.slice(0, 5).join(', ')})`);
  }
}

main().catch((err) => {
  log.error(`discover failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
