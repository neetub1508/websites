# EasyPayCalc — Status & Pending Items

_Living tracker for the easypaycalc.com launch. Last updated: 2026-06-02._

**Live site:** https://easypaycalc.com · **Current release:** `easypaycalc-v0.1.3`

---

## ✅ Done

- [x] 51-state paycheck calculator (50 states + DC), research-verified 2025 tax data
- [x] Best-in-class UI, homepage search + 6 popular states, donut breakdown
- [x] Per-state files (`src/lib/states/<slug>.ts`), data-driven template
- [x] SEO: titles/meta/canonical, FAQ + BreadcrumbList + WebApplication schema, sitemap.xml, robots.txt
- [x] Legal pages: Privacy, Terms, About, Contact
- [x] Zero broken links
- [x] Domain purchased + connected: `easypaycalc.com` + `www` (SSL active)
- [x] Versioned release workflow (`./release.sh`) + Cloudflare Workers deploy
- [x] `wrangler.jsonc` deploy config (static assets)
- [x] AdSense code live in `<head>` + `ads.txt` (pub-8016259834034338)
- [x] Google Search Console: domain verified + sitemap submitted
- [x] AdSense: ownership verified + **review requested**
- [x] AdSense consent message (CMP) set up

---

## ⏳ Waiting (no action needed — external)

- [ ] **AdSense review verdict** — Google emails result (days to ~2 weeks)
- [ ] **Search Console sitemap** flips to "Success" (currently "Couldn't fetch" = normal lag)
- [ ] **Google indexing** — pages get indexed; check `site:easypaycalc.com` + Search Console → Performance in 1–2 weeks

---

## 🔧 Pending — to do when ready

- [ ] **og:image** — branded 1200×630 social/AI share preview (declared in meta, image not created yet)
- [ ] **Tax-data spot-check** — verify ~5–8 states' 2025 numbers vs official DOR/IRS before relying publicly (data is high-confidence research-verified, this is a final sanity pass)
- [ ] **www → root redirect** — optional SEO tidiness (one canonical version)
- [ ] **Real contact email** — replace placeholder `hello@easypaycalc.com` with a working inbox
- [ ] **Wire real AdSense ad units** — after approval, drop ad unit code into side-rail `AdSlot`s (in-content ads were removed; only desktop side rails remain)

---

## 📈 Growth backlog

- [ ] Prioritize high-volume states (keyword research) → extra content for top states
- [ ] Add supporting content/guides (boosts AdSense + SEO)
- [ ] Build **easy1099tax** (idea #2 — highest CPC, less crowded)

---

## 🎯 Target SEO keywords

- **Winnable (focus):** `[state] paycheck calculator`, `[state] take home pay calculator`, `[state] salary calculator`, `how much taxes taken out of paycheck in [state]`
- **Hard (don't expect early):** `paycheck calculator`, `take home pay calculator`, `salary calculator`
- **Track via:** Search Console → Performance (real queries + positions)

---

## 🛠 Deploy notes (so we don't forget)

- **Release:** commit to `main` → run `./release.sh` (patch|minor|major) → creates `easypaycalc-vX.Y.Z`
- **Go live:** Cloudflare → Settings → Build → **Production branch** → set to the new version → **Deployments → Create deployment** (changing the branch alone does NOT redeploy)
- **`NODE_VERSION = 22`** must stay set (Wrangler requires it)
- **Don't delete** the `wrangler.jsonc` — it tells Wrangler where the static assets are
