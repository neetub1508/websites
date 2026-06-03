# Easy1099Tax — Status & Pending Items

_Living tracker for the easy1099tax.com launch. Last updated: 2026-06-03._

**Live site:** _(not deployed yet)_ · **Planned domain:** `easy1099tax.com` · **Spec:** [ideas/1099-self-employment-tax-calculator-spec.md](ideas/1099-self-employment-tax-calculator-spec.md)

Built to the same coding standard as the live [easypaycalc](easypaycalc-status.md).

---

## ✅ Done

- [x] Federal 1099 / self-employment tax calculator — SE tax (SS/Medicare/Add'l), 50% SE deduction, federal income tax, QBI toggle, effective/marginal rates, quarterly estimates
- [x] Dual tax year 2025 + 2026, both FINAL IRS figures (2025 brackets Rev. Proc. 2024-40 + OBBBA standard deduction; 2026 Rev. Proc. 2025-32), cross-checked vs Tax Foundation. Defaults to 2026.
- [x] Best-in-class indigo UI, gradient coin logo, donut breakdown, mobile-first
- [x] Verified calc engine in `src/lib/` (`calc.ts` + cited `tax-data.ts`), imported by the page
- [x] AdSense-grade content: how-it-works, worked example, what-is-SE-tax, quarterly, deductions, FAQ, disclaimer
- [x] SEO: titles/meta/canonical, FAQ + BreadcrumbList + WebApplication schema, `sitemap.xml`, `robots.txt`
- [x] Legal pages: Privacy, Terms, About, Contact
- [x] Zero broken links (all internal links + anchor targets verified)
- [x] Multi-slot ad layout: desktop side-rail `AdSlot`s (≥1560px); in-content ads removed (matches easypaycalc)
- [x] `wrangler.jsonc` deploy config (static assets) + `.nvmrc` (Node 22)
- [x] AdSense loader + `ads.txt` are **config-driven** (`src/lib/config.ts`) and OFF until this site's OWN publisher id is set — never reuses another site's id

---

## ⏳ Waiting / external (no action until deploy)

- [ ] **easy1099tax.com domain** — purchase + connect (+ `www`, SSL)
- [ ] **Own Google AdSense account** for easy1099tax → set `ADSENSE_CLIENT` in `src/lib/config.ts` (do NOT reuse easypaycalc's pub id)
- [ ] **Google Search Console** — verify domain + submit sitemap
- [ ] **AdSense review** — request after the site has live traffic/content

---

## 🔧 Pending — to do when ready

- [ ] **Set OWN AdSense id** in `src/lib/config.ts` (turns on the `<head>` loader + real `ads.txt` line). Then drop ad unit code into the side-rail `AdSlot`s after approval.
- [x] **2026 federal brackets + standard deduction** — final IRS figures in `tax-data.ts` (verified 2026-06 vs IRS Rev. Proc. 2025-32 + Tax Foundation).
- [ ] **Calc unit tests** — lock the SE-tax math against worked examples (spec Phase 1).
- [ ] **Keyword validation** — Google Keyword Planner volumes/CPC to confirm page structure.
- [ ] **Real contact email** — replace placeholder `hello@easy1099tax.com` with a working inbox.
- [ ] **og:image** — branded 1200×630 social/AI share preview (declared in meta, not created).

---

## 📈 Growth backlog (v2 — the SEO moat)

- [ ] **Per-state pages** `/self-employment-tax/<state>` — layer state income tax on top of federal (the differentiator vs every competitor). Roll out in waves; each state needs accurate data + unique copy (avoids scaled-content-abuse).
- [ ] `/1099-vs-w2-calculator` comparison page; quarterly-tax landing page.
- [ ] Supporting guides/content for top states (boosts AdSense + SEO).

---

## 🎯 Target SEO keywords

- **Winnable (focus):** `[state] self employment tax calculator`, `quarterly tax calculator self employed`, `1099 vs w2 calculator`, `freelance tax calculator`, `how much to set aside for 1099 taxes`
- **Hard (don't expect early):** `self employment tax calculator`, `1099 tax calculator`
- **Track via:** Search Console → Performance (real queries + positions)

---

## 🛠 Deploy notes

- Same workflow as easypaycalc: commit to `main` → release branch → Cloudflare deployment.
- **`NODE_VERSION = 22`** (Wrangler requirement; `.nvmrc` set).
- **Don't delete** `wrangler.jsonc` — it tells Wrangler where the static assets (`dist/`) are.
- AdSense stays off until `ADSENSE_CLIENT` is set — safe to deploy pre-AdSense.
