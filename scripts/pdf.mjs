import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);

const root = process.cwd();
const input = process.argv[2] ?? 'README.html';
const output = process.argv[3] ?? 'README.pdf';

const browser = CANDIDATES.find((p) => existsSync(p));
if (!browser) {
  console.error('No se encontro Chrome ni Edge. Define CHROME_PATH.');
  process.exit(1);
}

const html = path.resolve(root, input);
const pdf = path.resolve(root, output);
const url = `file:///${html.replace(/\\/g, '/')}`;

const res = spawnSync(browser, [
  '--headless=new',
  '--disable-gpu',
  '--no-sandbox',
  '--no-pdf-header-footer',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=10000',
  `--print-to-pdf=${pdf}`,
  url,
], { stdio: 'inherit' });

if (res.status !== 0 || !existsSync(pdf)) {
  console.error('Fallo la generacion del PDF');
  process.exit(res.status ?? 1);
}
console.log(`[ok] ${input} -> ${output}`);