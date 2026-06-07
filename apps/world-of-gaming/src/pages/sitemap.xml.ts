import type { APIRoute } from 'astro';
import { GAMES } from '../lib/games';
import { SITE_URL } from '../lib/config';

// Central list of indexable routes. Game pages are derived from the catalog.
const STATIC_ROUTES = ['/', '/about', '/contact', '/privacy', '/terms'];

export const GET: APIRoute = () => {
  const routes = [...STATIC_ROUTES, ...GAMES.map((g) => `/play/${g.slug}`)];
  const urls = routes
    .map(
      (path) =>
        `  <url><loc>${SITE_URL}${path === '/' ? '/' : path}</loc><changefreq>monthly</changefreq><priority>${path === '/' ? '1.0' : '0.7'}</priority></url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
