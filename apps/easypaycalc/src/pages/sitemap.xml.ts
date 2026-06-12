import type { APIRoute } from 'astro';
import { STATES } from '../lib/states';

// Generates /sitemap.xml at build time from our actual routes — adding a state
// to states.ts automatically adds it here. Referenced from public/robots.txt.
const SITE = 'https://easypaycalc.com';
const STATIC_PAGES = ['', 'about', 'contact', 'privacy', 'terms'];

export const GET: APIRoute = () => {
  const urls = [
    ...STATIC_PAGES.map((p) => (p ? `${SITE}/${p}` : `${SITE}/`)),
    ...STATES.map((s) => `${SITE}/${s.slug}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
