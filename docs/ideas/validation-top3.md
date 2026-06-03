# Validation — Built Tools + Next 3 Candidates (SERP / Competition)

> **Method:** exact search volume & CPC are paywalled (SEMrush/Ahrefs) — pull those from **Google Keyword Planner (free)** before final commit. But the **live SERP composition** (who already ranks: incumbents vs. beatable micro-sites) is a strong free signal, and that's the basis below.

---

## ✅ Built so far

### 1. Take-Home Pay / Paycheck Calculator by State → **easypaycalc.com** (LIVE)
- **Who ranks:** SmartAsset, ADP, PaycheckCity, Gusto, Intuit (big brands) **+ many small per-state niche sites** (`paycheckcalculatorcalifornia.com`, `thecalcs.com/ohio-paycheck-calculator`, etc.).
- Demand & monetization **proven** (lots of small sites = real money), but the per-state long-tail is **crowded** — wins on deeper angle + better UX/content.
- **Status:** shipped, 51 states, AdSense applied. The 51-state tax engine here is our reusable **moat**.

### 2. 1099 / Self-Employment Tax Calculator → **easy1099tax** (built)
- **Who ranks:** ADP, Everlance, Jackson Hewitt, FlyFin, QuickBooks, TurboTax **+ a solo niche site (`selfemploymenttaxestimator.com`)** — proof a focused site can break in.
- **Very high CPC** (tax-software advertisers), **fewer micro-competitors** than paycheck. Weaker per-state moat (SE tax is federal 15.3%).
- **Status:** built.

---

## 🔜 Next 3 candidates (validated 2026-06-03)

### 3. Bonus Tax Calculator (by state)
**Who ranks:** PaycheckCity (`/flatbonus/california`), SurePayroll, PrimePay, OnPay, TurboTax — payroll-software brands.
- **Volume:** High — "how much will my bonus be taxed?" is a huge, emotional, recurring query.
- **Competition:** Medium — only PaycheckCity really does it per-state; small-site field is open. Not lead-gen-aggressive.
- **CPC:** Med-High (payroll/tax software).
- **Build:** ⭐ **Fastest** — near drop-in variant of easypaycalc: reuse the 51-state engine + add federal supplemental rates (22% / 37% over $1M) and per-state supplemental rates.
- **Verdict:** 🟢 Strong, fastest win, maximum reuse of our moat.

### 4. Capital Gains Tax Calculator (federal + state + crypto)
**Who ranks:** NerdWallet, SmartAsset at top **+ smaller focused tools that rank** (Keeper, Cache, Public.com) on the federal+state+crypto angle.
- **Volume:** High (investing huge; crypto trending).
- **Competition:** Medium — top incumbents exist, but the **per-state + crypto + collectibles** angle has room.
- **CPC:** High (investing/brokerage/crypto-tax advertisers bid hard).
- **Build:** Moderate — **state capital-gains = state income tax, which we already have for all 51 states** from easypaycalc. Big reuse + accuracy advantage.
- **Verdict:** 🟢 Highest value; exploits data we already own.

### 5. Overtime Pay Calculator (by state)
**Who ranks:** generic calculators only — Omni, GoodCalculators, TheCalculatorSite, Harvest (simple "hourly × 1.5").
- **Volume:** Very High (hourly workers = massive audience).
- **Competition:** ✅ **Low** — nobody does it **properly per state** (CA daily OT, double-time, state OT laws). Clear quality gap.
- **CPC:** Low-Med — pay calc, lower commercial intent (the honest weakness).
- **Build:** Easy; per-state OT-rule data. Cross-links with easypaycalc.
- **Verdict:** 🟢 True "low-crowd, high-volume" pick — a **traffic engine** more than a revenue engine.

---

## ❌ Rejected (kept here so we don't re-evaluate)
- **HELOC / home-equity calculator** — SERP is all **lenders** (BoA, US Bank, LendingTree) running lead-gen; they out-monetize AdSense. Solar-style trap.
- **Cost-of-living calculator** — incumbents license **C2ER proprietary data** we can't replicate. Data moat.
- **RMD calculator** — owned by IRS/Schwab/Fidelity/AARP/FINRA (.gov + brokerages). Unwinnable.
- **W-4 / withholding calculator** — winnable, but basically a clone of easypaycalc → would cannibalize, not expand.

---

## Ranked outcome (next 3) + build order

| Order | Candidate | Volume | Competition | CPC | Reuse of moat | Call |
|---|---|---|---|---|---|---|
| 1 | **Bonus Tax by State** | High | Medium | Med-High | **Very High** | **Build first — fastest, near drop-in** |
| 2 | **Capital Gains (fed+state+crypto)** | High | Medium | **High** | High | Highest value; reuses state data |
| 3 | **Overtime Pay by State** | **Very High** | **Low** | Low-Med | Medium | Traffic engine; lowest competition |

**Strategic insight:** our moat is the **51-state research-verified tax engine**. Picks #1 and #2 reuse it directly — we can ship accurate per-state tax tools faster and more correctly than competitors. **Honest tradeoff:** genuinely low-competition tools skew lower-CPC (overtime); high-CPC tools have more competition (capital gains). This trio balances both.

## Still to pull before build (free)
- **Google Keyword Planner** → exact volume + CPC for: "bonus tax calculator", "[state] bonus tax calculator", "capital gains tax calculator", "crypto tax calculator", "overtime calculator", "[state] overtime pay".

## Sources
- [PaycheckCity bonus](https://www.paycheckcity.com/calculator/flatbonus) · [SurePayroll bonus](https://www.surepayroll.com/resources/calculators/bonus-tax) · [OnPay supplemental](https://onpay.com/payroll/calculator-tax-rates/flat-bonus-tax-rates-calculator/)
- [NerdWallet capital gains](https://www.nerdwallet.com/taxes/calculators/capital-gains-tax-calculator) · [SmartAsset capital gains](https://smartasset.com/investing/capital-gains-tax-calculator) · [Keeper](https://www.keepertax.com/capital-gains-tax-calculator) · [Cache (fed+state+local)](https://usecache.com/calculators/capital-gains-tax-calculator/)
- [Omni overtime](https://www.omnicalculator.com/finance/overtime) · [GoodCalculators overtime](https://goodcalculators.com/overtime-calculator/)
- Rejected refs: [LendingTree HELOC](https://www.lendingtree.com/home/home-equity/home-equity-loan-calculator/) · [NerdWallet cost-of-living (C2ER)](https://www.nerdwallet.com/cost-of-living-calculator) · [Schwab RMD](https://www.schwab.com/ira/ira-calculators/rmd)
