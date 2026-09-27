# OrbitPi website SEO and content audit

Audit date: 27 September 2026. Site: https://orbitpi.com/. Source: `apps/orbitpi`.

## Scope and status

Reviewed all 19 URLs in the live sitemap, with 58 live URL/resource checks, then updated the existing Astro 4 + Tailwind app. The routes, shared components, product data model, images and Cloudflare Worker deployment architecture are retained. No dependencies were added.

The fixes below are in the local source and production build. **They have not been deployed by this audit.** Live observations describe the site before these changes. Search Console, analytics, customer evidence, search demand and field performance were not available. This is a technical/content audit, not a guarantee of indexing or rankings.

## Findings and changes

| Priority | Finding | Action / source |
| --- | --- | --- |
| High | Plain `http://orbitpi.com/` returned 200 instead of redirecting to HTTPS, despite HTTPS canonicals. | Added a permanent 308 redirect to HTTPS apex in `worker/index.ts`, preserving path/query and method. `wrangler.jsonc` runs the Worker before static assets so the redirect also covers asset-matched requests. |
| High | Source-labelled placeholder phone/address were public in contact blocks and organization schema. | Added `SITE.contactDetailsVerified: false` and gated these fields in footer, contact, about, privacy address and organization schema. Replace the values with verified details before enabling them. |
| High | Contact handler could report success with no configured webhook, losing a genuine enquiry without an error. | Missing configuration now returns JSON 503; failed or throwing webhook requests return JSON 502. Non-JavaScript failures return to contact instead of the success page. No real submission was sent. Live webhook configuration is unknown. |
| Medium | Homepage/about positioning was less explicit about OrbitPi being a software product company. | Updated homepage, about and product index headings/copy around the actual product portfolio and Indian business workflows. |
| Medium | Some wording implied established adoption or absolute outcomes without supplied evidence. | Changed “Most manufacturers use”, “Popular in”, “Who uses” and “used across” to suitability-focused language; softened the claim that no enquiry is forgotten. |
| Medium | Product pages had features but less help evaluating fit before a purchase. | Added distinct demo-evaluation content for each product through `src/lib/products.ts` and the existing shared product template, with pricing/contact links. |
| Medium | Pricing page did not explain enough about what determines a quote. | Added product/user scope, volumes/setup and integration/service cost questions using existing card styles. No invented prices or commercial commitments. |
| Medium | Upcoming functionality needs to remain clearly separate from available software. | Retained “coming soon” for Ledger and Voice AI, labelled Ledger workflow as planned, and excluded Ledger from SoftwareApplication schema. |
| Low | Software and page entities could be linked more clearly. | Added software-to-WebPage references, software images and organization description. Escaped `<` in JSON-LD serialization. |
| Low | README claimed hreflang without alternate-language pages. | Corrected the documentation. English-only pages do not need invented language alternatives. |

## Existing implementation retained and checked

- Unique titles/descriptions, HTTPS canonicals, Open Graph/Twitter metadata and one H1 per page.
- Crawlable static HTML, descriptive navigation, breadcrumbs and contextual product/industry links.
- Generated sitemap with 19 indexable URLs; `robots.txt` points to it. Thank-you and 404 pages are noindex and excluded from the sitemap.
- Live `www`, missing trailing slash and `/index.html` variants normalize to canonical routes. A deliberately nonexistent live URL returned HTTP 404.
- Existing WebP artwork, responsive sources, intrinsic image dimensions and descriptive alt text. No missing images were found in the checked build.
- Visible FAQs match FAQ schema. Available products retain SoftwareApplication schema; product pages link to relevant industries.
- The existing generic 1200×630 social image is valid. Product-specific social artwork is a future sharing improvement, not a prerequisite for indexing.

## Search intent and content ownership

These are editorial targets based on the products, not measured keyword volumes or promised positions. Keep product pages focused on capabilities and buying decisions; industry pages should explain distinct workflows rather than repeat product copy.

| Route | Main intent | Content source |
| --- | --- | --- |
| `/` | OrbitPi; business software for Indian companies | `src/pages/index.astro`, `src/lib/site.ts` |
| `/products/` | OrbitPi software suite / product comparison | `src/pages/products/index.astro`, `src/lib/products.ts` |
| `/products/ai-document-ocr/` | AI document OCR for invoices, statements and forms | `src/lib/products.ts` |
| `/products/warehouse-inventory-management/` | Warehouse inventory management software | `src/lib/products.ts` |
| `/products/lead-management-ai-voice-agent/` | Lead capture, routing and follow-up software; upcoming Voice AI | `src/lib/products.ts` |
| `/products/asset-management-software/` | Fixed asset management, QR tags and verification | `src/lib/products.ts` |
| `/products/accounting-software/` | Upcoming OrbitPi accounting software and requirements | `src/lib/products.ts` |
| `/industries/` | Find software by business workflow / industry | `src/pages/industries/index.astro`, `src/lib/industries.ts` |
| `/industries/manufacturing/` | Manufacturing inventory, supplier documents and equipment | `src/lib/industries.ts` |
| `/industries/distribution/` | Distributor stock, warehouse and enquiry workflows | `src/lib/industries.ts` |
| `/industries/logistics-3pl/` | 3PL inventory ownership, warehouse and document workflows | `src/lib/industries.ts` |
| `/industries/retail-ecommerce/` | Retail/ecommerce inventory and document workflows | `src/lib/industries.ts` |
| `/industries/healthcare-pharma/` | Healthcare/pharma stock, expiry and equipment workflows | `src/lib/industries.ts` |
| `/industries/real-estate/` | Real estate lead capture and sales follow-up | `src/lib/industries.ts` |
| `/pricing/` | Software scope and quote evaluation | `src/pages/pricing.astro` |
| `/about/` | Software company identity and portfolio | `src/pages/about.astro`, `src/lib/site.ts` |
| `/contact/` | Book a product demo / contact sales | `src/pages/contact.astro`, `src/lib/site.ts` |
| `/privacy/`, `/terms/` | Company policies and customer trust | Corresponding pages; owner/legal review required |

Shared page markup lives in `src/pages/products/[slug].astro` and `src/pages/industries/[slug].astro`. Metadata belongs in `src/layouts/BaseLayout.astro`; schema builders belong in `src/lib/schema.ts`. Continue extending these files rather than creating duplicate landing pages for small keyword variations.

## Validation

- `npm run build`: Astro check reported **0 errors, 0 warnings, 0 hints**; built 21 pages.
- `npm test`: **8 tests passed**, covering HTTPS/www routing, asset passthrough, form validation, honeypot, missing configuration, mocked delivery outcomes and Worker routing configuration.
- `npm run check:seo`: **21 HTML pages, 19 indexable URLs and 38 image placements passed**. Checks cover titles/descriptions, H1, language, canonical/social URLs, image dimensions/alt/assets, internal links/anchors, JSON-LD, FAQ consistency, sitemap/robots and upcoming-product labels.
- Headless Chrome: all 19 indexable pages at **1440, 768 and 390 pixels** (57 page/viewport combinations), with **no horizontal overflow or failed image decoding**. Representative home, about, pricing and warehouse page screenshots reviewed.
- `git diff --check`: passed.

The static checker is intentionally dependency-free and specific to this site's generated HTML. It does not replace Google's URL Inspection, Rich Results Test or an accessibility audit. Browser checks used the local production build; they do not measure real-user Core Web Vitals or production network conditions.

## Required owner / deployment follow-up

1. **Confirm business identity.** Replace the placeholder address and phone in `src/lib/site.ts`, then enable `contactDetailsVerified`. Confirm the legal company name, founding year, sales/support email delivery, support hours and available languages. The Gurugram jurisdiction in the existing terms remains unchanged and needs owner/legal verification; hiding a placeholder office address does not validate legal terms.
2. **Confirm product claims against released software.** Existing feature claims were retained, not independently tested against each application. Check supported documents, integrations, GST-provider requirements, depreciation/reporting scope and shared-platform behavior before publication. Ledger and Voice AI must stay marked coming soon until released.
3. **Configure lead delivery.** Set `CONTACT_WEBHOOK_URL` as a Cloudflare secret. Test delivery through an approved test process and confirm downstream receipt; the audit used mocks only.
4. **Deploy through the existing release process.** Run build, tests and SEO checks first. `run_worker_first: true` invokes the Worker for static requests as well; review account request limits/costs. An account-level Cloudflare HTTPS redirect rule is an alternative if the team later wants asset-first routing, but it must be verified before removing the code protection.
5. **Recheck production after deployment.** Confirm HTTP and www permanently redirect to HTTPS apex, paths/queries survive, asset caching/security headers remain correct, unknown routes return 404, and the form displays failures accurately.
6. **Use Google Search Console.** Verify the domain, submit the existing sitemap, inspect homepage and each product URL, and review selected canonical, crawl/indexing exclusions and structured-data reports. Monitor queries/impressions/clicks by product over time before deciding on new content. No Search Console access or indexing confirmation was available here.
7. **Measure production performance.** Use PageSpeed Insights and available CrUX/Search Console Core Web Vitals data on mobile. Assess LCP, INP and CLS on actual traffic; responsive image checks alone cannot establish a Core Web Vitals pass.
8. **Build verifiable product evidence.** Add actual product screenshots with sample data, useful setup/export documentation, and customer-approved case studies when available. Use measured outcomes and authorized testimonials only. Avoid stock claims of leadership, fabricated customer counts or reviews.
9. **Keep content current.** Update availability, screenshots, integration limits, pricing policy and FAQs with releases. Consider Hindi content only with complete translations and corresponding language URLs; don't add hreflang to nonexistent pages.

## Structured data and ranking expectations

SoftwareApplication markup describes the software, but the current quote-based pages do not include the genuine price offer and rating/review required for Google's software-app rich-result eligibility. Do not invent a zero price or reviews to satisfy a validator. Keeping useful semantic markup is reasonable without claiming enhanced-result eligibility.

Google deprecated FAQ rich results in May 2026. The visible FAQs remain useful and their schema still matches the content, but FAQ markup is not an expected rich-result benefit. There is no reliable “100% SEO” score or ranking guarantee; relevant content, verifiable business evidence, technical accessibility and measured improvements need ongoing work.

Primary references:

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google software-app structured data requirements](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google Search documentation updates](https://developers.google.com/search/updates)
- [Cloudflare Worker/static-asset routing](https://developers.cloudflare.com/workers/static-assets/routing/worker-script/)
- [Cloudflare HTML and trailing-slash handling](https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/)

## Second pass (seo-audit skill review), 27 September 2026

Local source and build only; **not deployed**. Verified with `npm run build` (0 errors), `npm test` (9 worker tests), `npm run check:seo` (28 pages, 26 indexable) and local Lighthouse (100/100/100/100 on home, a product, an industry, the industries hub, the guides hub and a guide).

| Area | Change |
| --- | --- |
| Redirects | Worker now sends one 308 hop to the canonical URL: HTTPS apex, lowercase page paths, trailing slash, `/index.html` removed (previously 307 from the asset layer). |
| URL | Leads moved to `/products/lead-management-software/`; the old `…-ai-voice-agent/` URL 308-redirects. Voice AI is still labelled coming soon. |
| Canonicals | Noindex pages (404, thank-you) no longer declare a canonical or `og:url`. |
| Sitemap | `lastmod` on every URL (`SITE.contentUpdated`, or a guide's `modified`). |
| Performance | CSS inlined; font CSS limited to Latin subsets (78 KB → 36 KB); Geist preloaded; `fetchpriority="high"` on eager hero images; first industries-hub card eager; 640w card variants; week-long cache on root icons and images. |
| Accessibility | Stock accent darkened to `#0A7558` (contrast 5.1:1); `article role="tabpanel"` replaced with `div`. |
| Schema | Removed the suite-level `SoftwareApplication` from the home page (duplicated the product entities); added `Article` for guides, `areaServed` and optional `sameAs` for the organisation. Product `SoftwareApplication` has no `offers` or ratings, so it is not eligible for software rich results until real pricing or reviews exist. |
| On-page | Home H1 aligned with the title; industries hub retitled "Business software by industry" with a comparison table and FAQ; per-page 1200×630 share images for products, industries and guides. |
| Content | New `/guides/` hub and six guides (e-way bills, e-invoice QR codes, CARO 2020 verification, FIFO vs weighted average, SLM vs WDV depreciation, lead routing), linked from nav, footer, home and product pages. Privacy policy expanded (DPDP rights, processor role, transfers, children). Terms no longer name the unverified city in the jurisdiction clause. |

Needs owner input (not invented): verified address and phone, company profiles for `sameAs`, named team/founders, customer evidence (testimonials, case studies, logos), analytics choice, Search Console/Bing submission, legal and CA review of the policy and guides, and comparison pages (need verified competitor facts).
