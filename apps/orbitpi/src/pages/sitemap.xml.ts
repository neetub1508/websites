import type { APIRoute } from 'astro';
import { PRODUCTS } from '../lib/products';
import { INDUSTRIES } from '../lib/industries';
import { SITE } from '../lib/site';

// Generates /sitemap.xml at build time from the real routes. Adding a product or
// industry to its data file adds it here automatically. Referenced from robots.txt.
const STATIC_PAGES = ['', 'products/', 'industries/', 'pricing/', 'about/', 'contact/', 'privacy/', 'terms/'];

export const GET: APIRoute = () => {
  const urls = [
    ...STATIC_PAGES.map((p) => `${SITE.url}/${p}`),
    ...PRODUCTS.map((p) => `${SITE.url}/products/${p.slug}/`),
    ...INDUSTRIES.map((i) => `${SITE.url}/industries/${i.slug}/`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
