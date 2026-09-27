# OrbitPi website

Marketing site for OrbitPi, the AI business suite (DocAI, Stock, Leads, Assets, Ledger).
Astro 4 + Tailwind, static output deployed as a Cloudflare Worker (static assets) — same stack as the other apps in this repo.

## Develop

```bash
cd apps/orbitpi
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + static build to dist/
npm run preview
```

## Structure

```
src/
  lib/            # single source of truth (edit content here)
    site.ts         company details, nav, placeholder Gurugram address
    products.ts     5 products → /products/<slug>/ (copy, features, FAQ)
    industries.ts   6 industries → /industries/<slug>/
    demo.ts         sample data for the home-page demo
    schema.ts       schema.org JSON-LD builders
  layouts/BaseLayout.astro   <head>: title, description, canonical, OG/Twitter, JSON-LD
  components/                Header, Footer, Faq, Breadcrumbs, CtaBanner, cards …
  components/home/           ProductDemo, IndustryExplorer, VoiceCallCard (vanilla JS islands)
  pages/                     routes (index, products, industries, pricing, about, contact, privacy, terms, 404, sitemap.xml)
worker/index.ts              Cloudflare Worker for the demo form (POST /api/contact)
wrangler.jsonc               Worker config: serves dist/ as static assets
public/                      robots.txt, _headers, favicon, manifest, og-image.png, logo.png,
                             images/products/*.webp (launch-art crops), images/industries/*.svg
```

Adding a product or industry to its data file creates its page, menu/footer links,
sitemap entry and structured data automatically.

## SEO built in

- Unique `<title>` and meta description per page, canonical URL, hreflang, OG/Twitter tags
- JSON-LD on every page: Organization, WebSite, WebPage, BreadcrumbList, plus
  SoftwareApplication (products), FAQPage (visible FAQ text matches schema), ItemList
- One `<h1>` per page, ordered headings, breadcrumbs, descriptive internal links
- `/sitemap.xml` generated from routes, `robots.txt`, trailing-slash canonical URLs
- Static HTML, minimal JS (only demo tabs, menus, form), fonts with `display=swap`,
  images lazy-loaded with fixed dimensions (no layout shift)

## Before launch

- [ ] Replace placeholder address/phone/email in `src/lib/site.ts`
- [ ] Keep product claims in sync with the task repos: update `src/lib/products.ts` when
      Ledger or the Leads AI voice agent ships (both are labelled "coming soon" today)
- [ ] Set `CONTACT_WEBHOOK_URL` in Cloudflare (Worker → Settings → Variables and Secrets)
- [ ] Submit `https://orbitpi.com/sitemap.xml` in Google Search Console

## Deploy (Cloudflare Workers)

- Root directory: `apps/orbitpi`
- Build command: `npm run build` · Deploy command: `npx wrangler deploy` · `NODE_VERSION = 22`
- Release branches as in `DEPLOYMENTS.md`: `./release.sh patch orbitpi` → `orbitpi-v0.1.1`
