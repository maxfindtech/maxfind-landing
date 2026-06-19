// Regenera el favicon con fondo sólido indigo + símbolo en blanco + dot cyan.
// Así siempre se ve, en tab bars light o dark.
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const svgFavicon = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#1E1B4B"/>
  <circle cx="30" cy="32" r="14" fill="none" stroke="#FAFAF9" stroke-width="2.6"/>
  <line x1="20" y1="44" x2="44" y2="18" stroke="#FAFAF9" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="40" cy="40" r="3.6" fill="#06B6D4"/>
</svg>`;

// Apple touch icon: mismo motivo pero un poco más generoso (iOS lo recorta a su forma).
const svgAppleTouch = `<svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="180" height="180" fill="#1E1B4B"/>
  <circle cx="84" cy="90" r="40" fill="none" stroke="#FAFAF9" stroke-width="7.5"/>
  <line x1="56" y1="124" x2="124" y2="50" stroke="#FAFAF9" stroke-width="7.5" stroke-linecap="round"/>
  <circle cx="112" cy="112" r="10" fill="#06B6D4"/>
</svg>`;

const out = 'public/brand';

await writeFile(`${out}/favicon.svg`, svgFavicon);
await sharp(Buffer.from(svgFavicon)).resize(512, 512).png().toFile(`${out}/icon-symbol.png`);
await sharp(Buffer.from(svgFavicon)).resize(32, 32).png().toFile(`${out}/favicon-32x32.png`);
await sharp(Buffer.from(svgFavicon)).resize(16, 16).png().toFile(`${out}/favicon-16x16.png`);
await sharp(Buffer.from(svgAppleTouch))
  .resize(180, 180)
  .png()
  .toFile(`${out}/apple-touch-icon.png`);

console.log('Favicons regenerados con fondo indigo sólido.');
