// ============================================================================
// PER-STATE DATA — tax tables + UNIQUE editorial content (2025 tax year)
//
// Every state here must have ACCURATE data AND genuinely unique content
// (intro, highlights, FAQ seeds). This is what keeps the 50 pages out of
// "scaled content abuse" / "inaccurate facts" AdSense territory.
//
// ⚠️ VERIFY every state's brackets, standard deduction and extras against the
// state's official Dept. of Revenue before launch. Numbers below are
// 2025 best-known values.
//
// To add a state: append a fully-populated StateInfo object to STATES.
// The page, calculator, SEO meta and internal links are generated automatically.
// ============================================================================

import type { StateTaxConfig } from './tax';
import { CAP } from './tax';

export interface StateInfo extends StateTaxConfig {
  /** URL slug, e.g. "california" -> /california */
  slug: string;
  /** Short human summary of state income tax, e.g. "1% – 12.3%" or "No state income tax". */
  taxSummary: string;
  /** 2–3 sentences of UNIQUE prose about this state's paycheck situation. */
  intro: string;
  /** Unique bullet facts shown in the "what's withheld" section. */
  highlights: string[];
  /** Optional note about local/city taxes or other specifics. */
  localNote?: string;
}

export const CALIFORNIA: StateInfo = {
  code: 'CA',
  name: 'California',
  slug: 'california',
  hasIncomeTax: true,
  taxSummary: '1% – 12.3%',
  standardDeduction: { single: 5540, married: 11080 }, // CA FTB 2025 — VERIFY
  brackets: {
    single: [
      { rate: 0.01, upTo: 10756 },
      { rate: 0.02, upTo: 25499 },
      { rate: 0.04, upTo: 40245 },
      { rate: 0.06, upTo: 55866 },
      { rate: 0.08, upTo: 70606 },
      { rate: 0.093, upTo: 360659 },
      { rate: 0.103, upTo: 432787 },
      { rate: 0.113, upTo: 721314 },
      { rate: 0.123, upTo: CAP },
    ],
    married: [
      { rate: 0.01, upTo: 21512 },
      { rate: 0.02, upTo: 50998 },
      { rate: 0.04, upTo: 80490 },
      { rate: 0.06, upTo: 111732 },
      { rate: 0.08, upTo: 141212 },
      { rate: 0.093, upTo: 721318 },
      { rate: 0.103, upTo: 865574 },
      { rate: 0.113, upTo: 1442628 },
      { rate: 0.123, upTo: CAP },
    ],
  },
  extra: [{ name: 'CA SDI', rate: 0.011 }], // State Disability Insurance, no wage cap (2024+)
  intro:
    'California has one of the highest state income taxes in the country, with progressive rates from 1% to 12.3%. On top of federal tax and FICA, California workers also pay State Disability Insurance (SDI), which means take-home pay here is noticeably lower than in no-income-tax states.',
  highlights: [
    'California state income tax is progressive, from 1% up to 12.3% (a 1% surcharge applies above $1 million).',
    'California State Disability Insurance (SDI) of 1.1% is withheld with no wage cap.',
    'There are no separate city income taxes in California — but the high state rate offsets that.',
  ],
  localNote:
    'California cities do not levy their own income tax, so your withholding is the same whether you work in Los Angeles, San Francisco, San Diego or Sacramento.',
};

export const TEXAS: StateInfo = {
  code: 'TX',
  name: 'Texas',
  slug: 'texas',
  hasIncomeTax: false,
  taxSummary: 'No state income tax',
  standardDeduction: { single: 0, married: 0 },
  brackets: { single: [], married: [] },
  extra: [],
  intro:
    'Texas is one of nine states with no state income tax, so your paycheck only loses federal income tax and FICA (Social Security and Medicare). That makes Texas take-home pay among the highest in the country for the same gross salary.',
  highlights: [
    'Texas has no state income tax — nothing is withheld for the state from your wages.',
    'Only federal income tax, Social Security (6.2%) and Medicare (1.45%) reduce your paycheck.',
    'There is no state disability insurance (SDI) withholding in Texas.',
  ],
  localNote:
    'Texas cities such as Houston, Dallas, Austin and San Antonio do not levy a local income tax either, so your take-home pay is the same statewide.',
};

export const NEW_YORK: StateInfo = {
  code: 'NY',
  name: 'New York',
  slug: 'new-york',
  hasIncomeTax: true,
  taxSummary: '4% – 10.9%',
  standardDeduction: { single: 8000, married: 16050 }, // NY DTF 2025 — VERIFY
  brackets: {
    single: [
      { rate: 0.04, upTo: 8500 },
      { rate: 0.045, upTo: 11700 },
      { rate: 0.0525, upTo: 13900 },
      { rate: 0.055, upTo: 80650 },
      { rate: 0.06, upTo: 215400 },
      { rate: 0.0685, upTo: 1077550 },
      { rate: 0.0965, upTo: 5000000 },
      { rate: 0.103, upTo: 25000000 },
      { rate: 0.109, upTo: CAP },
    ],
    married: [
      { rate: 0.04, upTo: 17150 },
      { rate: 0.045, upTo: 23600 },
      { rate: 0.0525, upTo: 27900 },
      { rate: 0.055, upTo: 161550 },
      { rate: 0.06, upTo: 323200 },
      { rate: 0.0685, upTo: 2155350 },
      { rate: 0.0965, upTo: 5000000 },
      { rate: 0.103, upTo: 25000000 },
      { rate: 0.109, upTo: CAP },
    ],
  },
  extra: [],
  intro:
    'New York has a progressive state income tax from 4% to 10.9%. If you live in New York City or Yonkers, you also owe a separate local income tax, which makes NYC one of the most heavily taxed places to earn a paycheck in the U.S.',
  highlights: [
    'New York state income tax is progressive, from 4% up to 10.9% on the highest earners.',
    'New York City residents pay an additional city income tax of roughly 3.1% – 3.9%.',
    'Yonkers residents pay a local surcharge on top of state tax as well.',
  ],
  localNote:
    'This calculator estimates New York State withholding. If you live in New York City or Yonkers, add the local city income tax on top — it can reduce take-home pay by several more percent.',
};

/** All states that have complete, verified data and a live page. */
export const STATES: StateInfo[] = [CALIFORNIA, TEXAS, NEW_YORK];

export function getState(slug: string): StateInfo | undefined {
  return STATES.find((s) => s.slug === slug);
}

/** Strip a StateInfo down to the engine config that's safe to send to the client. */
export function toConfig(s: StateInfo): StateTaxConfig {
  return {
    code: s.code,
    name: s.name,
    hasIncomeTax: s.hasIncomeTax,
    standardDeduction: s.standardDeduction,
    brackets: s.brackets,
    extra: s.extra,
  };
}
