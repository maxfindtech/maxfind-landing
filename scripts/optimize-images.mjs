// Optimizador de imágenes del landing.
// - hero.jpg (~2.7MB) -> hero.webp 1600w q80 + hero.jpg resized fallback
// - og-image.jpg (~2MB) -> 1200x630 q85 in place
import sharp from 'sharp';
import { readFile, writeFile, stat, rm } from 'node:fs/promises';

const formatBytes = (n) =>
  n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(2)} MB` : `${(n / 1024).toFixed(1)} KB`;

async function report(label, file) {
  const s = await stat(file);
  console.log(`  ${label}: ${formatBytes(s.size)}  ${file}`);
}

async function optimizeHero() {
  const src = 'public/images/hero.jpg';
  const original = await readFile(src);
  console.log('\n--- HERO ---');
  console.log(`  original: ${formatBytes(original.length)}  ${src}`);

  await sharp(original)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile('public/images/hero.webp');
  await report('webp 1600w q80', 'public/images/hero.webp');

  await sharp(original)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile('public/images/hero.jpg.tmp');
  await rm(src);
  await readFile('public/images/hero.jpg.tmp').then((b) => writeFile(src, b));
  await rm('public/images/hero.jpg.tmp');
  await report('jpg fallback', src);
}

async function optimizeOg() {
  const src = 'public/og/og-image.jpg';
  const original = await readFile(src);
  console.log('\n--- OG IMAGE ---');
  console.log(`  original: ${formatBytes(original.length)}  ${src}`);

  const { width, height } = await sharp(original).metadata();
  console.log(`  dims source: ${width}x${height}`);

  await sharp(original)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'center' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile('public/og/og-image.jpg.tmp');
  await rm(src);
  await readFile('public/og/og-image.jpg.tmp').then((b) => writeFile(src, b));
  await rm('public/og/og-image.jpg.tmp');
  await report('jpg 1200x630 q85', src);
}

async function removeUnused() {
  console.log('\n--- LIMPIEZA (no referenciados en el código) ---');
  for (const f of ['public/images/pattern-bg.jpg', 'public/images/empty-state.jpg']) {
    try {
      const s = await stat(f);
      await rm(f);
      console.log(`  removido (${formatBytes(s.size)}): ${f}`);
    } catch {
      console.log(`  ya no existe: ${f}`);
    }
  }
}

await optimizeHero();
await optimizeOg();
await removeUnused();
console.log('\nDone.');
