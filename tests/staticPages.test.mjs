import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(__dirname, '../src/pages');

async function readPage(name) {
  return readFile(join(pagesDir, `${name}.astro`), 'utf8');
}

['industries', 'team', 'thank-you', '404'].forEach((page) => {
  test(`${page} page uses BaseLayout`, async () => {
    const content = await readPage(page);
    assert.match(content, /<BaseLayout/);
  });
});

test('legacy html files removed', async () => {
  const legacy = ['industries.html', 'team.html', 'thank-you.html', '404.html'];
  for (const file of legacy) {
    await assert.rejects(access(join(__dirname, '../src', file)));
  }
});
