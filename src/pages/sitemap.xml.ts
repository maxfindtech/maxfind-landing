import type { APIRoute } from 'astro';
import { SITE } from '@lib/constants';

const ROUTES: { path: string; changefreq: 'weekly' | 'monthly'; priority: number }[] = [
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
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];
  const entries = ROUTES.map(
    (route) => `  <url>
    <loc>${SITE.url}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/sitemaps/0.9">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
