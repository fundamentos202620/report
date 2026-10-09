import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

const root = process.cwd();
const argv = process.argv.slice(2);
const useMdx = argv.includes('--mdx');
const positional = argv.filter((a) => !a.startsWith('--'));
const input = positional[0] ?? 'README.md';
const output = positional[1] ?? 'README.html';

const MIME = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

const toDataUri = async (src) => {
  if (/^(https?:|data:)/.test(src)) return src;
  const file = path.resolve(root, src.split('?')[0].split('#')[0]);
  try {
    const buf = await readFile(file);
    const mime = MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream';
    return `data:${mime};base64,${buf.toString('base64')}`;
  } catch {
    console.warn(`[warn] image not found: ${src}`);
    return src;
  }
};

const resolveImages = async () => async (tree) => {
  const jobs = [];
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'img' && typeof node.properties?.src === 'string') {
      jobs.push(toDataUri(node.properties.src).then((src) => { node.properties.src = src; }));
    }
    node.children?.forEach(walk);
  };
  walk(tree);
  await Promise.all(jobs);
};

const css = await readFile(path.join(root, 'styles', 'print.css'), 'utf8');

// Por defecto: markdown + HTML crudo (estilo GitHub), via rehype-raw.
// Con --mdx: semántica MDX (import/export/JSX). Ojo: en MDX las etiquetas
// vacías deben cerrarse (<br />) porque el HTML se parsea como JSX.
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm);

if (useMdx) processor.use(remarkMdx);

const file = await processor
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(resolveImages)
  .use(rehypeStringify)
  .process(await readFile(path.resolve(root, input)));

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>${input}</title>
<style>${css}</style>
</head>
<body>
${file}
</body>
</html>
`;

await mkdir(path.dirname(path.resolve(root, output)), { recursive: true });
await writeFile(path.resolve(root, output), html, 'utf8');
console.log(`[ok] ${input} -> ${output}`);