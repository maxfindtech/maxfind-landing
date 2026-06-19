import type { APIRoute } from 'astro';
import { SITE } from '@lib/constants';

type Entry = { path: string; changefreq: 'weekly' | 'monthly' | 'yearly'; priority: number };

const ES_ROUTES: Entry[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/producto', changefreq: 'monthly', priority: 0.9 },
  { path: '/producto/verificacion-dni', changefreq: 'monthly', priority: 0.8 },
  { path: '/producto/validacion-identidad', changefreq: 'monthly', priority: 0.8 },
  { path: '/producto/red-reputacion', changefreq: 'monthly', priority: 0.8 },
  { path: '/producto/sandbox', changefreq: 'monthly', priority: 0.8 },
  { path: '/soluciones', changefreq: 'monthly', priority: 0.9 },
  { path: '/soluciones/clinicas', changefreq: 'monthly', priority: 0.7 },
  { path: '/soluciones/edificios', changefreq: 'monthly', priority: 0.7 },
  { path: '/soluciones/fintech', changefreq: 'monthly', priority: 0.7 },
  { path: '/soluciones/comercio', changefreq: 'monthly', priority: 0.7 },
  { path: '/precios', changefreq: 'monthly', priority: 0.9 },
  { path: '/sobre', changefreq: 'monthly', priority: 0.5 },
  { path: '/contacto', changefreq: 'monthly', priority: 0.5 },
  { path: '/demo', changefreq: 'monthly', priority: 0.6 },
  { path: '/blog', changefreq: 'weekly', priority: 0.6 },
  { path: '/changelog', changefreq: 'weekly', priority: 0.4 },
  { path: '/docs', changefreq: 'monthly', priority: 0.5 },
  { path: '/libro-reclamaciones', changefreq: 'yearly', priority: 0.3 },
  { path: '/legal/terminos', changefreq: 'yearly', priority: 0.3 },
  { path: '/legal/privacidad', changefreq: 'yearly', priority: 0.3 },
  { path: '/legal/cancelacion', changefreq: 'yearly', priority: 0.3 },
];

// Paths que tienen contraparte en inglés (las que duplicamos a /en/).
const EN_ROUTES: Entry[] = [
  { path: '/en/', changefreq: 'weekly', priority: 1.0 },
  { path: '/en/producto', changefreq: 'monthly', priority: 0.9 },
  { path: '/en/producto/verificacion-dni', changefreq: 'monthly', priority: 0.8 },
  { path: '/en/producto/validacion-identidad', changefreq: 'monthly', priority: 0.8 },
  { path: '/en/producto/red-reputacion', changefreq: 'monthly', priority: 0.8 },
  { path: '/en/producto/sandbox', changefreq: 'monthly', priority: 0.8 },
  { path: '/en/soluciones', changefreq: 'monthly', priority: 0.9 },
  { path: '/en/soluciones/clinicas', changefreq: 'monthly', priority: 0.7 },
  { path: '/en/soluciones/edificios', changefreq: 'monthly', priority: 0.7 },
  { path: '/en/soluciones/fintech', changefreq: 'monthly', priority: 0.7 },
  { path: '/en/soluciones/comercio', changefreq: 'monthly', priority: 0.7 },
  { path: '/en/precios', changefreq: 'monthly', priority: 0.9 },
  { path: '/en/sobre', changefreq: 'monthly', priority: 0.5 },
  { path: '/en/contacto', changefreq: 'monthly', priority: 0.5 },
  { path: '/en/demo', changefreq: 'monthly', priority: 0.6 },
  { path: '/en/docs', changefreq: 'monthly', priority: 0.5 },
];

const ROUTES = [...ES_ROUTES, ...EN_ROUTES];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  // Construir un mapa para hreflang alternates: clave = base sin /en
  const pairs = new Map<string, { es?: string; en?: string }>();
  for (const r of ROUTES) {
    const isEn = r.path.startsWith('/en/');
    const base = isEn ? r.path.slice(3) : r.path; // '/en/precios' -> '/precios', '/en/' -> '/'
    const normalized = base === '' ? '/' : base;
    const entry = pairs.get(normalized) ?? {};
    if (isEn) entry.en = r.path;
    else entry.es = r.path;
    pairs.set(normalized, entry);
  }

  const entries = ROUTES.map((route) => {
    const isEn = route.path.startsWith('/en/');
    const base = isEn ? route.path.slice(3) : route.path;
    const normalized = base === '' ? '/' : base;
    const pair = pairs.get(normalized) ?? {};

    const links: string[] = [];
    if (pair.es) links.push(`    <xhtml:link rel="alternate" hreflang="es" href="${SITE.url}${pair.es}"/>`);
    if (pair.en) links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}${pair.en}"/>`);
    links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}${pair.es ?? pair.en ?? normalized}"/>`);

    return `  <url>
    <loc>${SITE.url}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
${links.join('\n')}
  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/sitemaps/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
