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
npm test          # Worker tests; webhook requests are mocked
npm run check:seo # check generated dist/ after a successful build
```

## Structure

```
src/
  lib/            # single source of truth (edit content here)
    site.ts         company details, nav, placeholder Gurugram address
    products.ts     5 products → /products/<slug>/ (copy, features, FAQ)
    industries.ts   6 industries → /industries/<slug>/
    guides.ts       6 guides → /guides/<slug>/ (Article + FAQ schema, official sources, review dates)
    demo.ts         sample data for the home-page demo
    schema.ts       schema.org JSON-LD builders
  layouts/BaseLayout.astro   <head>: title, description, canonical, OG/Twitter, JSON-LD
  components/                Header, Footer, Faq, Breadcrumbs, CtaBanner, cards …
  components/home/           ProductDemo, IndustryExplorer, VoiceCallCard (vanilla JS islands)
  pages/                     routes (index, products, industries, pricing, about, contact, privacy, terms, 404, sitemap.xml)
worker/index.ts              Cloudflare Worker: canonical URL redirects (HTTPS apex, lowercase, trailing slash, moved pages) and the demo form (POST /api/contact)
wrangler.jsonc               Worker config: serves dist/ as static assets
public/                      robots.txt, _headers, favicon, manifest, og-image.png, logo.png,
                             images/products/*.webp (launch-art crops), images/industries/*.svg
```

Adding a product or industry to its data file creates its page, menu/footer links,
sitemap entry and structured data automatically.

## SEO built in

- Unique `<title>` and meta description per page, canonical URL, OG/Twitter tags (English-only site; no alternate-language pages)
- JSON-LD on every page: Organization, WebSite, WebPage, BreadcrumbList, plus
  SoftwareApplication (products), FAQPage (visible FAQ text matches schema), ItemList
- One `<h1>` per page, ordered headings, breadcrumbs, descriptive internal links
- `/sitemap.xml` generated from routes, `robots.txt`, trailing-slash canonical URLs
- Static HTML, minimal JS (only demo tabs, menus, form), fonts with `display=swap`,
  images lazy-loaded with fixed dimensions (no layout shift)

See [SEO-AUDIT.md](./SEO-AUDIT.md) for the live-site findings, implemented fixes, validation and owner/deployment follow-up.

## Before launch

- [ ] Confirm contact email and replace placeholder address/phone in `src/lib/site.ts`; set `contactDetailsVerified` only after verification
- [ ] Add official company profiles (LinkedIn etc.) to `SITE.sameAs` in `src/lib/site.ts`
- [ ] Bump `SITE.contentUpdated` (sitemap lastmod) when product, industry or company copy changes; bump a guide's `modified` when it changes
- [ ] Have a chartered accountant review the tax/accounting guides and the privacy policy before relying on them
- [ ] Keep product claims in sync with the task repos: update `src/lib/products.ts` when
      Ledger or the Leads AI voice agent ships (both are labelled "coming soon" today)
- [ ] Set `CONTACT_WEBHOOK_URL` in Cloudflare (Worker → Settings → Variables and Secrets)
- [ ] Submit `https://orbitpi.com/sitemap.xml` in Google Search Console

## Deploy (Cloudflare Workers)

- Root directory: `apps/orbitpi`
- Build command: `npm run build` · Deploy command: `npx wrangler deploy` · `NODE_VERSION = 22`
- Release branches as in `DEPLOYMENTS.md`: `./release.sh patch orbitpi` → `orbitpi-v0.1.1`
