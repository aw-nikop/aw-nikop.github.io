import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, '../src/pages/index.astro');

async function readIndex() {
  return readFile(indexPath, 'utf8');
}

test('Index page uses BaseLayout with title and description', async () => {
  const content = await readIndex();
  assert.match(content, /<BaseLayout/);
  assert.match(content, /title="Altonworks"/);
  assert.match(content, /description="Alton Computer Solutions is the outsourced IT provider for Seattle-area businesses./);
});

test('Index page contains analytics scripts', async () => {
  const content = await readIndex();
  assert.match(content, /googletagmanager/);
  assert.match(content, /recaptcha/);
});
