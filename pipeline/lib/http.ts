import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { CACHE_HTML_DIR, CACHE_IMAGE_DIR, FETCH_RETRIES, USER_AGENT } from '../config';
import { exists, readText, sleep, writeText } from './fsx';
import { log } from './logger';

export function sha1(input: string): string {
  return createHash('sha1').update(input).digest('hex');
}

export interface FetchResult {
  text: string;
  fromCache: boolean;
}

/** Fetch an HTML document, caching it on disk. Returns null on permanent failure / 404. */
export async function fetchHtml(url: string): Promise<FetchResult | null> {
  const file = join(CACHE_HTML_DIR, `${sha1(url)}.html`);
  if (await exists(file)) {
    return { text: await readText(file), fromCache: true };
  }

  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': USER_AGENT, accept: 'text/html,application/xhtml+xml' },
        redirect: 'follow',
      });
      if (res.status === 404 || res.status === 410) return null;
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      await writeText(file, text);
      return { text, fromCache: false };
    } catch (err) {
      if (attempt === FETCH_RETRIES) {
        log.warn(`fetch failed after ${FETCH_RETRIES + 1} tries: ${url} (${(err as Error).message})`);
        return null;
      }
      await sleep(400 * 2 ** attempt);
    }
  }
  return null;
}

export interface BinaryResult {
  buffer: Buffer;
  contentType: string;
}

/** Fetch a binary asset (image), caching it on disk. */
export async function fetchBinary(url: string): Promise<BinaryResult | null> {
  const file = join(CACHE_IMAGE_DIR, sha1(url));
  const meta = `${file}.type`;
  if ((await exists(file)) && (await exists(meta))) {
    const { readFile } = await import('node:fs/promises');
    return { buffer: await readFile(file), contentType: (await readText(meta)).trim() };
  }

  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': USER_AGENT, accept: 'image/*,*/*' },
        redirect: 'follow',
      });
      if (!res.ok) return null;
      const contentType = (res.headers.get('content-type') ?? '').split(';')[0].trim();
      const buffer = Buffer.from(await res.arrayBuffer());
      const { writeFile } = await import('node:fs/promises');
      const { ensureDir } = await import('./fsx');
      await ensureDir(CACHE_IMAGE_DIR);
      await writeFile(file, buffer);
      await writeText(meta, contentType);
      return { buffer, contentType };
    } catch (err) {
      if (attempt === FETCH_RETRIES) {
        log.warn(`image fetch failed: ${url} (${(err as Error).message})`);
        return null;
      }
      await sleep(400 * 2 ** attempt);
    }
  }
  return null;
}
