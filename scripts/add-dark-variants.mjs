// One-shot: agrega variantes dark: a las clases más comunes en componentes.
// Solo toca `bg-white` standalone (no `bg-white/30` con opacidad).
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'glob';

const files = globSync('src/**/*.astro').filter((f) => !f.includes('email-templates'));

const REPLACEMENTS = [
  // bg-white standalone → agregar dark variant (no toca bg-white/95, bg-white/60, etc.)
  { pattern: /\bbg-white\b(?!\/|\s+dark:)/g, replacement: 'bg-white dark:bg-surface-secondary' },
];

let totalChanges = 0;
for (const file of files) {
  const src = await readFile(file, 'utf8');
  let out = src;
  let changes = 0;
  for (const { pattern, replacement } of REPLACEMENTS) {
    out = out.replace(pattern, (match) => {
      changes++;
      return replacement;
    });
  }
  if (changes > 0) {
    await writeFile(file, out);
    console.log(`  ${changes}x: ${file}`);
    totalChanges += changes;
  }
}
console.log(`\nTotal: ${totalChanges} reemplazos en ${files.length} archivos.`);
