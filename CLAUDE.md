# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes, merged with this project's specific instructions.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

---

# Part A — Behavioral Guidelines

_Source: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)_

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

# Part B — Project Instructions

## What this repo is

A collection of **single-purpose web tools** (calculators, estimators, generators) built to rank on Google and earn passive income via Google AdSense. Each tool is its own focused site targeting a specific high-value search keyword (US traffic, high-CPC niches).

Strategy, the validated Top 10 ideas, and the build process live in [docs/ideas/ideas.md](docs/ideas/ideas.md). Read it before starting a new tool.

## Repo layout

```
docs/
  ideas/ideas.md            # business strategy + Top 10 tool ideas (verified research)
  ideas/validation-top3.md  # SERP/competition validation of the top candidates
apps/
  <tool-name>/              # the actual buildable website project (one per tool)
```

- **`docs/` = research and strategy only. NO code.**
- **`apps/<tool-name>/` = the real website project**, named in `kebab-case`. This is where all code lives.

## Tech stack (standard for every tool)

- **AstroJS** — static HTML output (best for SEO). Pinned to **Astro 4.x** (Node 20 compatible; Astro 5 needs Node 22).
- **Tailwind CSS** — styling.
- **Cloudflare Pages** — free hosting. **Every tech choice MUST be Cloudflare Pages-compatible** — default to Astro **static** output (`dist/`), served directly on Cloudflare's CDN. If SSR is ever needed, use the official `@astrojs/cloudflare` adapter; never adopt a stack Cloudflare Pages can't deploy.
- Custom domain per tool (~₹1,000/year).
- All calculation logic runs **client-side** (instant, no backend, no data leaves the browser).

## ⭐ Non-negotiable criteria (apply to EVERY tool, 100%)

These are mandatory on every page of every site. Do not ship without them.

1. **Best-in-class UI/UX** — the site must look and feel top-tier: clean modern design, clear visual hierarchy, polished spacing/typography, accessible (WCAG-minded), flawless on mobile and desktop. Treat design quality as a first-class requirement, not an afterthought.
2. **Ease of use** — the user must be able to operate the tool effortlessly: obvious inputs, instant results, no instructions needed, no friction. Optimize relentlessly for the simplest possible user journey.
3. **AdSense-grade content** — every tool page carries genuinely original, optimized content (what it does, how-to, worked examples, FAQ) so it clears AdSense's "low-value content" bar. No thin pages, no unverified auto-generated facts.
4. **SEO optimized** — proper titles, meta descriptions, semantic HTML, headings, internal links, structured data (schema.org), sitemap, and per-variant (e.g. per-state) long-tail targeting.
5. **Generative-AI / answer-engine optimization (GEO/AEO)** — structure content so AI answer engines (ChatGPT, Gemini, Google AI Overviews) can cite it: clear question-style headings, concise direct answers, FAQ schema, factual accuracy.
6. **Performance — fast load is mandatory.** Base/above-the-fold content must be usable on the user's side within **3–5 seconds** (target faster). Keep JS minimal, ship static HTML, lazy-load below-the-fold, optimize images, aim for strong Core Web Vitals (LCP, CLS, INP). Ads must never block the core tool from loading.

## Build conventions

- Keep each site **single-purpose** — one tool solving one real problem. No feature creep.
- The tool must work **instantly client-side** — no signup, no install, no server round-trip.
- Build for **long-tail SEO**: where it fits, generate one page per variant (e.g. per US state) to capture specific searches.
- Every site MUST ship with these pages: **Privacy Policy, Terms of Service, About, Contact** (required for AdSense).
- Add an **FAQ section** + **structured data (schema.org)** on every tool page.
- Mobile-first, fast, accessible. Minimal JS. No heavy frameworks.
- Content must be **original and genuinely useful** — AdSense rejects thin/auto-generated sites.

## Workflow for a new tool

1. **Validate keyword** (free): Ahrefs Keyword Generator / WordStream — target 1,000–10,000 searches/mo with high CPC.
2. **Check competition** — Google the keyword; if page 1 is all big sites, pick a longer-tail variant.
3. **Scaffold** an AstroJS + Tailwind project in `apps/<tool-name>/`.
4. **Build** the tool to the 6 non-negotiable criteria above + FAQ + schema + the 4 legal pages.
5. **Ship**: Cloudflare Pages + domain, submit to Google Search Console, apply to AdSense after ~10+ daily users.

## Code style

- Prefer plain, readable code over cleverness. Match the style of surrounding files.
- No secrets or API keys in the repo.
- Reference disclaimers where legally relevant (finance, legal, health tools are **not** professional advice).

## Disclaimers (important)

Finance, legal, medical, and tax tools must display a clear disclaimer that results are **estimates only and not professional advice**.
