import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, '../astro.config.mjs');

async function readConfig() {
  return readFile(configPath, 'utf8');
}

test('Astro config defines site URL', async () => {
  const content = await readConfig();
  assert.match(content, /site: 'https:\/\/aw-nikop.github.io'/);
});
