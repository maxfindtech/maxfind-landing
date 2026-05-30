// Parche post-build: @astrojs/vercel v7 escribe runtime "nodejs18.x" en los
// .vc-config.json de cada función serverless, pero Vercel ya deprecó Node 18.
// Cambiamos a nodejs20.x antes del deploy.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const TARGET_RUNTIME = 'nodejs20.x';
const FUNCTIONS_DIR = '.vercel/output/functions';

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  const out = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else if (entry.name === '.vc-config.json') out.push(path);
  }
  return out;
}

const configs = await walk(FUNCTIONS_DIR);
if (configs.length === 0) {
  console.log(`[patch-vercel-runtime] sin funciones que parchear en ${FUNCTIONS_DIR}`);
  process.exit(0);
}

let patched = 0;
for (const file of configs) {
  const raw = await readFile(file, 'utf8');
  const cfg = JSON.parse(raw);
  if (cfg.runtime && cfg.runtime !== TARGET_RUNTIME) {
    const before = cfg.runtime;
    cfg.runtime = TARGET_RUNTIME;
    await writeFile(file, JSON.stringify(cfg, null, 2));
    console.log(`[patch-vercel-runtime] ${file}: ${before} -> ${TARGET_RUNTIME}`);
    patched++;
  }
}
console.log(`[patch-vercel-runtime] ${patched}/${configs.length} archivos actualizados`);
