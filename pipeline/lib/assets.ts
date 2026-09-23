import { writeFile } from 'node:fs/promises';
import { dirname, extname, join } from 'node:path';
import type { AnyNode } from 'domhandler';
import type { CheerioAPI } from 'cheerio';
import { DOCS_ROOT, ORIGIN } from '../config';
import { ensureDir } from './fsx';
import { fetchBinary } from './http';
import { log } from './logger';
import { resolveHref } from './routes';

const PUBLIC_ROOT = join(DOCS_ROOT, 'public');

const EXT_BY_TYPE: Record<string, string> = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/gif': '.gif',
  'image/svg+xml': '.svg',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/bmp': '.bmp',
};

/**
 * Download every image referenced by the extracted content and point it at the
 * local copy. Paths are preserved verbatim under `docs/public`, so URLs stay
 * valid without rewriting.
 */
export async function localizeImages($: CheerioAPI, root: AnyNode, pageUrl: string): Promise<void> {
  const imgs = $(root).find('img[src]').toArray();
  let downloaded = 0;

  for (const img of imgs) {
    const src = $(img).attr('src') ?? '';
    if (src.startsWith('data:')) continue;

    const abs = resolveHref(src, pageUrl);
    if (!abs) continue;

    let u: URL;
    try {
      u = new URL(abs);
    } catch {
      continue;
    }
    if (u.origin !== ORIGIN) continue;

    let pathname = decodeURIComponent(u.pathname);
    let ext = extname(pathname);

    const bin = await fetchBinary(abs);
    if (!bin) {
      log.warn(`image unavailable: ${abs}`);
      continue;
    }

    if (!ext) {
      ext = EXT_BY_TYPE[bin.contentType] ?? '.bin';
      pathname = `${pathname}${ext}`;
    }

    const dest = join(PUBLIC_ROOT, pathname);
    await ensureDir(dirname(dest));
    await writeFile(dest, bin.buffer);
    $(img).attr('src', pathname);
    downloaded++;
  }
}
