import type { APIRoute } from 'astro';
import { GUIDES } from '../lib/guides';

const SITE = 'https://1099estimator.com';

// Central list of indexable routes. Add per-state pages here as they ship (spec §4).
const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/guides',
  ...GUIDES.map((g) => `/guides/${g.slug}`),
];

export const GET: APIRoute = () => {
  const urls = ROUTES.map(
    (path) =>
      `  <url><loc>${SITE}${path === '/' ? '/' : path}</loc><changefreq>monthly</changefreq><priority>${path === '/' ? '1.0' : '0.6'}</priority></url>`
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
