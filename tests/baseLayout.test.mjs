import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));

const layoutPath = join(__dirname, '../src/layouts/BaseLayout.astro');

async function readLayout() {
  return readFile(layoutPath, 'utf8');
}

test('BaseLayout uses common components', async () => {
  const content = await readLayout();
  assert.match(content, /<Navbar \/>/);
  assert.match(content, /<Footer \/>/);
  assert.match(content, /<Copyright \/>/);
});

test('BaseLayout exposes title and description slots', async () => {
  const content = await readLayout();
  assert.match(content, /<title>\{title\}<\/title>/);
  assert.match(content, /<meta name="description" content=\{description\} \/>/);
});
