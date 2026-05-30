import { es } from './es';
import { en } from './en';

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const dictionaries = { es, en } as const;

export type Dictionary = typeof es;

export function useTranslations(locale: Locale | undefined): Dictionary {
  if (locale && locale in dictionaries) return dictionaries[locale as Locale];
  return dictionaries[DEFAULT_LOCALE];
}

/**
 * Devuelve la URL absoluta del path para un locale.
 * - Para el default (es) no agrega prefijo: '/precios'
 * - Para otros locales: '/en/precios'
 */
export function localizedPath(path: string, locale: Locale): string {
  const clean = path.replace(/^\/+/, '');
  if (locale === DEFAULT_LOCALE) return `/${clean}`;
  return `/${locale}/${clean}`;
}

/**
 * Devuelve el locale extraído de la URL actual.
 */
export function getLocaleFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg && (LOCALES as readonly string[]).includes(seg)) return seg as Locale;
  return DEFAULT_LOCALE;
}

/**
 * Misma path pero en el otro idioma (para el language switcher).
 */
export function switchLocaleUrl(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const currentLocale = (LOCALES as readonly string[]).includes(segments[0] ?? '')
    ? (segments[0] as Locale)
    : DEFAULT_LOCALE;

  // Saco el segmento del locale actual (si lo hay) y rearmo.
  const rest = currentLocale === DEFAULT_LOCALE ? segments : segments.slice(1);
  return localizedPath(rest.join('/'), targetLocale);
}
