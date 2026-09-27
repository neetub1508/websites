import type { APIRoute } from 'astro';
import { PRODUCTS } from '../lib/products';
import { INDUSTRIES } from '../lib/industries';
import { GUIDES } from '../lib/guides';
import { SITE } from '../lib/site';

// Generates /sitemap.xml at build time from the real routes. Adding a product,
// industry or guide to its data file adds it here automatically. Referenced from robots.txt.
// lastmod: a guide's own `modified` date; SITE.contentUpdated for every other page.
const STATIC_PAGES = ['', 'products/', 'industries/', 'guides/', 'pricing/', 'about/', 'contact/', 'privacy/', 'terms/'];

export const GET: APIRoute = () => {
  const urls = [
    ...STATIC_PAGES.map((p) => ({ loc: `${SITE.url}/${p}`, lastmod: SITE.contentUpdated })),
    ...PRODUCTS.map((p) => ({ loc: `${SITE.url}/products/${p.slug}/`, lastmod: SITE.contentUpdated })),
    ...INDUSTRIES.map((i) => ({ loc: `${SITE.url}/industries/${i.slug}/`, lastmod: SITE.contentUpdated })),
    ...GUIDES.map((g) => ({ loc: `${SITE.url}/guides/${g.slug}/`, lastmod: g.modified })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
