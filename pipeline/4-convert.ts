import { join, relative } from 'node:path';
import pLimit from 'p-limit';
import { CONCURRENCY, EXTRACTED_DIR, MARKDOWN_DIR } from './config';
import { readJson, walkFiles, writeText } from './lib/fsx';
import { log } from './lib/logger';
import { createConverter, sanitizeMarkdown } from './lib/markdown';
import type { ExtractedPage } from './lib/types';

const limit = pLimit(CONCURRENCY);

async function main(): Promise<void> {
  log.step('convert: HTML → Markdown');

  const files = (await walkFiles(EXTRACTED_DIR)).filter((f) => f.endsWith('.json'));
  log.info(`converting ${files.length} pages`);

  let empty = 0;
  let done = 0;

  await Promise.all(
    files.map((file) =>
      limit(async () => {
        const page = await readJson<ExtractedPage>(file);
        const rel = relative(EXTRACTED_DIR, file).replace(/\.json$/, '');

        let markdown = '';
        if (page.html.trim()) {
          const td = createConverter(page.url, page.kind);
          markdown = sanitizeMarkdown(td.turndown(page.html));
        }
        if (!markdown.trim()) empty++;

        await writeText(join(MARKDOWN_DIR, `${rel}.md`), markdown);
        done++;
        if (done % 100 === 0) log.info(`converted ${done}/${files.length}`);
      }),
    ),
  );

  log.ok(`converted ${files.length} pages → ${MARKDOWN_DIR}`);
  if (empty > 0) log.warn(`${empty} page(s) produced no Markdown (stubs)`);
}

main().catch((err) => {
  log.error(`convert failed: ${(err as Error).stack ?? err}`);
  process.exit(1);
});
