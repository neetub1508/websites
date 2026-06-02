# Build Spec — 1099 / Self-Employment Tax Calculator

> **Status:** Spec locked, ready to scaffold. Derived from a deep, adversarially-verified research pass (25/25 claims confirmed, 0 killed; IRS + SSA primary sources for all tax math).
> **Project name (LOCKED):** `easy1099tax` → app at `apps/easy1099tax/`, future domain `easy1099tax.com`. Keeps the `easy*` family consistent with the existing `easypaycalc` project.
> **Scope (LOCKED):** **Phased** — v1 = complete federal calculator (engine architected for state layering); v2 = per-state pages in waves. See §11 Roadmap.
> **Project type:** Single-purpose AdSense website (Idea #2 from [ideas.md](ideas.md), the highest-CPC pick per [validation-top3.md](validation-top3.md)).
> **Tech:** AstroJS 4.x (static) + Tailwind, 100% client-side calc, Cloudflare Pages.
> **Non-negotiables:** the 6 criteria in [CLAUDE.md](../../CLAUDE.md) Part B — best-in-class UI, ease of use, AdSense-grade content, SEO, GEO/AEO, 3–5s load.

---

## 1. The thesis (why this wins)

| Signal | Finding | Source confidence |
|---|---|---|
| Incumbents don't run ads | TurboTax & QuickBooks/Intuit calculators are **lead-gen / software upsell funnels, no AdSense**. We don't compete with them for ad RPM. | ✅ verified 3-0 |
| Proven solo model | **selfemploymenttaxestimator.com** ranks as a focused solo site with the full federal feature set — proof a one-person AdSense build works here. | ✅ verified 3-0 |
| **The gap** | That solo site (and the incumbents' free calcs) **do NOT compute state tax**. State income tax layered on top of federal + SE tax is the unclaimed differentiator. | ✅ verified 3-0 |
| Highest CPC of our shortlist | Tax-software advertisers (TurboTax, QuickBooks, FlyFin) bid hard on this niche. | 🔶 directional |

**Our edge = match the federal feature bar, then beat everyone on (a) per-state tax, (b) UI/UX quality, (c) speed, (d) genuinely useful wrapped content.**

---

## 2. Competitor teardown

### Verified in detail
- **TurboTax (self-employed calc)** — Inputs: 1099/gig income, business expenses, life-circumstance questions. Outputs: refund or tax owed + deduction savings. **Monetization: funnel to paid tiers, no ads.** UX is polished but gated/upsell-heavy.
- **selfemploymenttaxestimator.com (the solo benchmark — THIS is the bar)** — Inputs: filing status (Single/MFJ/HoH/MFS), W-2/salary gross, multiple self-employment income sources ("Add Income Source"), business expenses (Schedule C), auto-filled standard deduction. Outputs: **full SE breakdown** — Social Security (12.4%), Medicare (2.9%), Additional Medicare (0.9%), 50% SE-tax deduction, est. federal income tax, total tax owed, **effective + marginal rate**, and **4 quarterly estimated payments with due dates**. **Year selector: 2025 / 2026** (2026 flagged "estimated pending official IRS release"). **No state tax. No multi-state pages.**

### Named but NOT independently verified (validate at build time)
FlyFin, QuickBooks calc specifics, Keeper Tax, Everlance, Bonsai, NerdWallet, TaxAct, Jackson Hewitt, ADP, miniwebtool. Treat their feature/schema/monetization details as **unconfirmed** — spot-check before claiming superiority over any specific one.

### Feature bar to MATCH (table stakes)
Filing status · W-2 + multiple SE income sources · business expenses · SS/Medicare/Add'l Medicare split · 50% SE deduction · federal income tax · total tax · effective & marginal rate · 4 quarterly payments w/ due dates · 2025/2026 year toggle.

### Features to WIN on (our additions)
1. **State income tax layering** (per-state pages) — the headline gap.
2. **Best-in-class UI/UX** — cleaner, faster, more legible than the thin niche sites.
3. **Speed** — sub-3s static load vs. their JS-heavy pages.
4. **Richer wrapped content** — worked examples, plain-English explainers, AEO-structured Q&A.
5. **No upsell, no signup, no gating** — instant client-side result.
6. **QBI (20%) deduction toggle** — most free calcs skip it; it materially changes the income-tax line.

---

## 3. Calculation engine spec (the core — accuracy is mandatory)

All figures below are **IRS/SSA-verified and safe to hardcode** unless marked ⚠️.

### 3.1 Self-employment tax
```
net_profit        = SE_income - business_expenses          // Schedule C net
net_earnings      = net_profit × 0.9235                    // 92.35% (= 1 − 0.0765); Sch SE line 4a
                    // if net_earnings < $400 → SE tax = 0

// Social Security portion (12.4%) — CAPPED, and reduced by W-2 SS wages already taxed
ss_wage_base      = { 2025: 176_100, 2026: 184_500 }       // ✅ IRS / SSA
ss_taxable        = min(net_earnings, max(0, ss_wage_base − w2_social_security_wages))
ss_tax            = ss_taxable × 0.124

// Medicare portion (2.9%) — NO cap
medicare_tax      = net_earnings × 0.029

se_tax            = ss_tax + medicare_tax                  // Sch SE line 12

// Additional Medicare Tax (0.9%) — statutory thresholds, NOT inflation-indexed (same 2025 & 2026)
addl_med_threshold = { MFJ: 250_000, Single: 200_000, HoH: 200_000, QSS: 200_000, MFS: 125_000 }
// applies to combined Medicare wages + SE income above threshold; on SE income the
// threshold is reduced (not below 0) by W-2 Medicare wages. (Form 8959 Part II)
addl_medicare     = 0.009 × max(0, (net_earnings + w2_medicare_wages) − threshold)
                    // attribute the SE-income share per Form 8959

half_se_deduction = se_tax × 0.50                          // ✅ Sch SE line 13 → Schedule 1 line 15
```

### 3.2 Federal income tax (layers on top)
```
AGI            = w2_income + net_profit − half_se_deduction
taxable_income = AGI − standard_deduction − qbi_deduction   // (itemized out of scope v1)
qbi_deduction  = 0.20 × min(net_profit_after_half_se, taxable_income_before_qbi)  // ⚠️ simplified; see 3.4
federal_income_tax = progressive_brackets(taxable_income, filing_status, year)
```

### 3.3 Outputs to render
- SE tax with the **SS / Medicare / Add'l Medicare** breakdown
- 50% SE deduction (labelled "saves you money")
- Federal income tax
- **State income tax** (per-state pages) ← our differentiator
- **Total estimated tax** + take-home
- **Effective rate** and **marginal rate**
- **4 quarterly estimated payments** with due dates: Q1 Apr 15 · Q2 Jun 16 · Q3 Sep 15 · Q4 Jan 15 (next yr) — verify exact dates per tax year
- Year toggle **2025 / 2026**, with 2026 labelled *"estimated pending official IRS release."*

### 3.4 ⚠️ Numbers to VERIFY & source before launch (do NOT hardcode from memory)
Keep all of these in a single **`src/data/tax-tables.<year>.ts`** with an inline citation per value:
- **2025 & 2026 federal income-tax brackets** (all 4 filing statuses) — IRS / Tax Foundation. 2026 = estimate until IRS finalizes.
- **2025 & 2026 standard deduction** — note the OBBBA (One Big Beautiful Bill Act) changes raised these; pull exact final figures.
- **QBI §199A** — 20% rate, 2025/2026 taxable-income phase-out thresholds, and the OBBBA changes. Model conservatively; show as an optional toggle with a "simplified estimate" note.
- **Per-state income tax** — Tax Foundation "State Income Tax Rates" + each state DOR. 9 no-income-tax states; several cut rates for 2026. Each state needs accurate brackets/flat rate + unique editorial note (avoids "scaled content abuse").
- **Quarterly due dates** per tax year (weekend/holiday shifts).

> Build-time rule: **every number in the engine traces to a cited source in the data file.** No magic constants in component code.

---

## 4. Site structure & SEO

### Scope (LOCKED — phased)
Ship a complete, accurate **national federal calculator first** (fast, AdSense-ready), with the engine architected for state layering from day one. Then roll out state pages in waves — **not all 51 at once**, because each needs accurate, individually-verified tax data + unique copy or it triggers scaled-content-abuse risk. Full phase breakdown in **§11 Roadmap**.

- **v1 (ship first):** federal-complete calculator + the 4 legal pages + core content. One strong national page.
- **v2 (SEO moat):** Wave 1 of ~8–10 high-population / high-search states (CA, TX, NY, FL, IL, PA, OH, GA, NC, WA — note TX/FL/WA have no income tax, which is itself a useful, cited answer). Then expand to all 50 + DC.

### Page map
```
/                              → primary "Self-Employment Tax Calculator" (federal, national)
/1099-tax-calculator           → keyword-target variant (or canonical alias of /)
/quarterly-tax-calculator      → quarterly estimated payments angle
/self-employment-tax/<state>   → per-state pages (v2 wave) — "{State} Self-Employment Tax Calculator"
/1099-vs-w2-calculator         → comparison tool (high-intent long-tail)
/about /contact /privacy /terms
/sitemap.xml /robots.txt
```

### Target keywords (⚠️ volumes/CPC UNVERIFIED — validate in Google Keyword Planner before committing)
Head (hard, giants): "self employment tax calculator", "1099 tax calculator".
Long-tail (winnable): "[state] self employment tax calculator", "quarterly tax calculator self employed", "1099 vs w2 calculator", "freelance tax calculator", "how much to set aside for 1099 taxes".

> ⚠️ The research could **not** verify any search volume or CPC. **Run Keyword Planner first** and let real numbers confirm/adjust this structure.

### On-page SEO
Unique title + meta description per page · semantic headings · internal links (national ↔ state ↔ comparison) · canonical tags · `sitemap.xml` · structured data (see §5).

---

## 5. GEO / AEO + structured data

**Key change from research:** Google **FAQ rich results are deprecated (gone as of May 7, 2026)**. So:
- ✅ **Keep `FAQPage` JSON-LD anyway** — still valid schema.org, still consumed by AI answer engines (ChatGPT, Gemini, AI Overviews). Just **don't expect a visible Google FAQ snippet.**
- ✅ Add `WebApplication`/`SoftwareApplication` (calculator) + `Article`/`HowTo` + `BreadcrumbList` + `Organization` schema.
- ✅ **Question-style H2/H3 headings** with a **concise direct answer in the first sentence** ("Self-employment tax is 15.3%…"), then detail. This is what gets cited.
- ✅ Factual accuracy + cite IRS — AI engines favor sourced, authoritative answers.
- ✅ Short, extractable answer blocks; tables for numbers (wage base, rates, due dates).

---

## 6. Required content (AdSense-grade, original)

Per CLAUDE.md, the calculator alone is a thin page and **will be rejected**. Every page wraps the tool in genuinely useful original content:
- **What self-employment tax is** (plain English, direct-answer first line).
- **How it's calculated** — the 15.3% / 92.35% / wage-base mechanics, with a **worked example** ($X profit → $Y SE tax, step by step).
- **How to use this calculator** (step list).
- **Quarterly estimated taxes** — who owes, due dates, safe-harbor rule.
- **Deductions that lower it** — half-SE deduction, business expenses, QBI.
- **1099 vs W-2** explainer.
- **State-specific note** (per state page) — unique, cited.
- **FAQ** (8–12 Q&As, schema'd).
- **Disclaimer** — *estimates only, not professional tax advice* (mandatory; finance tool).

### Legal pages (mandatory for AdSense)
Privacy Policy · Terms of Service · About · Contact.

---

## 7. Performance & deploy

- **Astro static output** → `dist/`, served on Cloudflare Pages CDN. No SSR.
- **3–5s usable load (target faster):** ship static HTML, minimal JS (calc logic only, vanilla or tiny island), no heavy framework, lazy-load below-the-fold, optimize/inline critical CSS (Tailwind purged).
- **Ads never block the tool.** Ad slots ≥150px from the Calculate button / inputs (AdSense placement rule). Ads load after core content.
- Core Web Vitals targets: good LCP / CLS / INP.

---

## 8. Open questions to close before/at build

1. ~~**Project name**~~ — ✅ **DECIDED: `easy1099tax`.**
2. ~~**v1 scope**~~ — ✅ **DECIDED: phased** (see §11).
3. **2026 federal brackets + standard deduction** — pull final IRS figures; until then label 2026 as estimate. *(Build-time, Phase 1.)*
4. **Keyword validation** — Google Keyword Planner volumes/CPC to confirm page structure. *(Phase 0.)*
5. **QBI modeling depth** — full §199A phase-outs vs. simplified toggle for v1. *(Phase 1.)*
6. **State data sourcing** — Tax Foundation + state DOR tables for the v2 wave. *(Phase 4.)*
7. **Unverified competitors** — quick spot-check of FlyFin/Keeper/NerdWallet/Bonsai feature sets. *(Phase 0, optional.)*

---

## 9. Name (DECIDED)

✅ **`easy1099tax`** → folder `apps/easy1099tax/`, future domain `easy1099tax.com`.
Chosen for: high-intent "1099" keyword, short/brandable, and brand-family consistency with the existing `easypaycalc` project.

*(Rejected alternatives, for the record: `1099taxcalc`, `selfemploymenttaxcalc`, `taxsetaside`.)*

---

## 10. Sources (primary)

- IRS — [SE tax overview](https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes) · [Schedule SE PDF](https://www.irs.gov/pub/irs-pdf/f1040sse.pdf) · [Sch SE instructions](https://www.irs.gov/instructions/i1040sse) · [Additional Medicare Tax Q&A](https://www.irs.gov/businesses/small-businesses-self-employed/questions-and-answers-for-the-additional-medicare-tax) · [Form 8959 PDF](https://www.irs.gov/pub/irs-pdf/i8959.pdf) · [QBI deduction](https://www.irs.gov/newsroom/qualified-business-income-deduction)
- SSA — [2026 COLA fact sheet (wage base $184,500)](https://www.ssa.gov/news/en/cola/factsheets/2026.html)
- Tax Foundation — [2026 federal brackets](https://taxfoundation.org/data/all/federal/2026-tax-brackets/) · [2026 state income tax rates](https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/)
- Google — [FAQPage structured data (deprecation notice)](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- Benchmark competitor — [selfemploymenttaxestimator.com](https://selfemploymenttaxestimator.com/) · [TurboTax SE calc](https://turbotax.intuit.com/tax-tools/calculators/self-employed/)

---

## 11. Roadmap — phases (current ▸ next)

Status legend: ✅ done · 🔄 in progress · ⬜ not started.

### Phase 0 — Research & spec ✅ (DONE)
- ✅ Deep, fact-checked research pass (competitors, IRS tax math, SEO, GEO/AEO).
- ✅ This spec written and decisions locked (name `easy1099tax`, phased scope).
- ⬜ *Optional follow-ups before/while building:* Google Keyword Planner volume/CPC pull; quick spot-check of unverified competitors (FlyFin, Keeper, NerdWallet, Bonsai).

### Phase 1 — Scaffold + verified tax engine 🔄 (← WE ARE HERE / NEXT)
**Goal:** a working, accurate, fully-tested federal calculation engine + project skeleton.
1. Scaffold `apps/easy1099tax/` — Astro 4.x + Tailwind, static output, Cloudflare-ready config.
2. Build `src/data/tax-tables.2025.ts` / `.2026.ts` — every number cited to an IRS/SSA/Tax Foundation source (brackets, standard deduction, wage base, thresholds, QBI). 2026 flagged "estimated."
3. Build the pure calc engine (`src/lib/calc.ts`) per §3: SE tax, SS cap, Additional Medicare, 50% deduction, federal income tax, QBI toggle, effective/marginal rate, quarterly estimates.
4. **Verify:** unit tests with worked examples cross-checked against Schedule SE / known cases. Engine is correct before any UI.

### Phase 2 — Best-in-class UI + national calculator page ⬜
**Goal:** the polished, fast, single national calculator users actually touch.
1. Layout/design system (Tailwind): clean, modern, accessible (WCAG-minded), mobile-first.
2. Interactive calculator island: filing status, W-2 income, multiple SE income sources, expenses, year toggle (2025/2026), instant results with the full breakdown (§3.3).
3. Results UX: SS/Medicare/Add'l Medicare split, 50% deduction, federal income tax, total, effective + marginal rate, 4 quarterly payments w/ due dates.
4. **Verify:** Lighthouse — usable load 3–5s (target faster), good LCP/CLS/INP; flawless mobile + desktop.

### Phase 3 — AdSense-grade content, SEO, GEO/AEO, legal pages ⬜
**Goal:** clear AdSense's low-value bar + be rankable/citable.
1. Original wrapped content per §6 (what it is, how it's calculated, worked example, deductions, quarterly, 1099-vs-W2, FAQ).
2. SEO: titles/meta, semantic HTML, internal links, canonical, `sitemap.xml`, `robots.txt`.
3. Structured data: `WebApplication` + `Article`/`HowTo` + `FAQPage` (AEO-only) + `BreadcrumbList` + `Organization`. Question-style headings, direct-answer-first.
4. The 4 legal pages: Privacy, Terms, About, Contact.
5. Disclaimer ("estimates only, not professional tax advice") on every calculator page.
6. Ad slots: placeholders ≥150px from inputs/Calculate button; never block core tool.

### Phase 4 — Deploy + state expansion (v2 SEO moat) ⬜
**Goal:** live on Cloudflare, then build the per-state differentiator.
1. Deploy `dist/` to Cloudflare Pages; connect domain; submit to Google Search Console.
2. Add state income-tax data (Tax Foundation + state DOR), engine already supports layering.
3. Generate `/self-employment-tax/<state>` pages in waves — Wave 1 ≈ 8–10 high-population states, each with accurate data + unique editorial note (avoids scaled-content-abuse). Expand to 50 + DC.
4. Comparison page `/1099-vs-w2-calculator`; quarterly-tax landing page.
5. Apply to AdSense after ~10+ daily users.

### Immediate next action
▸ **Begin Phase 1:** scaffold `apps/easy1099tax/` and build the cited tax-data tables + verified calc engine with unit tests, before any UI.
