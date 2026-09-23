import { exists } from './lib/fsx';
import { join } from 'node:path';
import pLimit from 'p-limit';
import { CONCURRENCY, CACHE_HTML_DIR, MANIFEST_FILE, REQUEST_DELAY_MS } from './config';
import { readJson, sleep } from './lib/fsx';
import { fetchHtml, sha1 } from './lib/http';
import { log } from './lib/logger';
import type { ManifestEntry } from './lib/types';

const limit = pLimit(CONCURRENCY);

async function main(): Promise<void> {
  log.step('fetch: ensuring every manifest page is cached locally');

  const manifest = await readJson<ManifestEntry[]>(MANIFEST_FILE);

  const missing: ManifestEntry[] = [];
  for (const entry of manifest) {
    if (!(await exists(join(CACHE_HTML_DIR, `${sha1(entry.url)}.html`)))) missing.push(entry);
  }

  log.info(`${manifest.length - missing.length}/${manifest.length} pages already cached`);

  if (missing.length === 0) {
    log.ok('nothing to fetch');
    return;
  }

  let ok = 0;
  let failed = 0;
  let done = 0;

  await Promise.all(
    missing.map((entry) =>
      limit(async () => {
        if (REQUEST_DELAY_MS > 0) await sleep(REQUEST_DELAY_MS);
        const res = await fetchHtml(entry.url);
        if (res) ok++;
        else {
          failed++;
          log.warn(`unavailable: ${entry.path}`);
        }
        done++;
        if (done % 50 === 0) log.info(`fetched ${done}/${missing.length}`);
      }),
    ),
  );

  log.ok(`fetched ${ok}, failed ${failed}`);
}

main().catch((err) => {
  log.error(`fetch failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
