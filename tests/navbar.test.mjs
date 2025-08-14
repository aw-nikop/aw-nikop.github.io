import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const navbarPath = join(__dirname, '../src/components/Navbar.astro');

async function readNavbar() {
  return readFile(navbarPath, 'utf8');
}

test('Navbar links to home and articles', async () => {
  const content = await readNavbar();
  assert.match(content, /href="\/"/);
  assert.match(content, /href="\/altons-articles\//);
});

test('Navbar includes schedule a call button', async () => {
  const content = await readNavbar();
  assert.match(content, /SCHEDULE A CALL/);
});
