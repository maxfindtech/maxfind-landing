// Reemplaza URLS.SIGNUP/LOGIN por localizedPath(...) en componentes y páginas,
// asegurando que locale + localizedPath estén importados.
import { readFile, writeFile } from 'node:fs/promises';
import { globSync } from 'glob';

const files = globSync('src/**/*.astro').filter(
  (f) => !f.includes('email-templates'),
);

let totalChanged = 0;
for (const file of files) {
  let src = await readFile(file, 'utf8');
  const before = src;

  // Reemplazo de las dos referencias.
  src = src
    .replace(/URLS\.SIGNUP/g, "localizedPath('registro', locale)")
    .replace(/URLS\.LOGIN/g, "localizedPath('login', locale)");

  if (src === before) continue;

  // Asegurar imports: locale (Astro.currentLocale) + localizedPath del helper i18n.
  const needsI18nImport =
    !/from\s+['"]@i18n\/ui['"]/.test(src) ||
    !/localizedPath/.test(
      src.match(/import\s+\{[^}]*\}\s+from\s+['"]@i18n\/ui['"]/)?.[0] ?? '',
    );

  const needsLocaleConst =
    !/const\s+locale\s*=/.test(src);

  if (needsI18nImport || needsLocaleConst) {
    // Necesitamos un frontmatter `---`. Si no existe, lo creamos al inicio.
    if (!src.startsWith('---')) {
      src = '---\n---\n' + src;
    }

    // Manipular el frontmatter.
    const fmEnd = src.indexOf('\n---', 3); // segundo `---`
    const head = src.slice(0, 3); // primer ---
    const fm = src.slice(3, fmEnd);
    const rest = src.slice(fmEnd);

    let newFm = fm;

    // Asegurar import del helper i18n con localizedPath y type Locale.
    if (/import\s+\{([^}]*)\}\s+from\s+['"]@i18n\/ui['"]/.test(newFm)) {
      newFm = newFm.replace(
        /import\s+\{([^}]*)\}\s+from\s+['"]@i18n\/ui['"]/,
        (_, names) => {
          const set = new Set(
            names
              .split(',')
              .map((s) => s.trim())
              .filter(Boolean),
          );
          set.add('localizedPath');
          set.add('useTranslations');
          set.add('type Locale');
          return `import { ${Array.from(set).join(', ')} } from '@i18n/ui'`;
        },
      );
    } else {
      newFm = `\nimport { useTranslations, localizedPath, type Locale } from '@i18n/ui';${newFm}`;
    }

    // Asegurar `const locale = ...`.
    if (!/const\s+locale\s*=/.test(newFm)) {
      newFm += `\nconst locale = (Astro.currentLocale ?? 'es') as Locale;\nconst t = useTranslations(locale);\n`;
    }

    src = head + newFm + rest;
  }

  await writeFile(file, src);
  console.log(`  ${file}`);
  totalChanged++;
}
console.log(`\n${totalChanged} archivos modificados.`);
