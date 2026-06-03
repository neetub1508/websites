// ============================================================================
// Federal tax data for the self-employment / 1099 calculator.
// Every value below is sourced and FINAL for both 2025 and 2026 (verified
// 2026-06). Keep all constants here, never inline.
//
// Sources:
//  - SE tax rate 15.3% / 92.35%: IRS, Schedule SE (f1040sse)
//  - SS wage base: SSA ($176,100 for 2025; $184,500 for 2026 COLA fact sheet)
//  - Additional Medicare 0.9% thresholds: IRS Form 8959 (statutory, not indexed)
//  - 2025 brackets: IRS Rev. Proc. 2024-40 · 2025 standard deduction: OBBBA
//    (One Big Beautiful Bill Act) raised it to $15,750 / $31,500 / $23,625
//  - 2026 brackets & standard deduction: IRS Rev. Proc. 2025-32 (FINAL)
//  - Cross-checked against Tax Foundation 2025 & 2026 bracket tables
// ============================================================================

export type Filing = 'single' | 'mfj' | 'hoh' | 'mfs';
export type Year = 2025 | 2026;

/** [upperBound, rate] — last bracket uses Infinity. */
export type Bracket = [number, number];

export interface YearData {
  ssWageBase: number;
  stdDeduction: Record<Filing, number>;
  brackets: Record<Filing, Bracket[]>;
  estimated: boolean;
}

export const SE_RATE = { socialSecurity: 0.124, medicare: 0.029, netEarnings: 0.9235 };

/** Additional Medicare Tax (0.9%) income thresholds — statutory, same every year. */
export const ADDITIONAL_MEDICARE_THRESHOLD: Record<Filing, number> = {
  single: 200_000,
  mfj: 250_000,
  hoh: 200_000,
  mfs: 125_000,
};

export const TAX_DATA: Record<Year, YearData> = {
  2025: {
    ssWageBase: 176_100,
    stdDeduction: { single: 15_750, mfj: 31_500, hoh: 23_625, mfs: 15_750 },
    brackets: {
      single: [[11_925, 0.1], [48_475, 0.12], [103_350, 0.22], [197_300, 0.24], [250_525, 0.32], [626_350, 0.35], [Infinity, 0.37]],
      mfj: [[23_850, 0.1], [96_950, 0.12], [206_700, 0.22], [394_600, 0.24], [501_050, 0.32], [751_600, 0.35], [Infinity, 0.37]],
      hoh: [[17_000, 0.1], [64_850, 0.12], [103_350, 0.22], [197_300, 0.24], [250_500, 0.32], [626_350, 0.35], [Infinity, 0.37]],
      mfs: [[11_925, 0.1], [48_475, 0.12], [103_350, 0.22], [197_300, 0.24], [250_525, 0.32], [375_800, 0.35], [Infinity, 0.37]],
    },
    estimated: false,
  },
  2026: {
    // FINAL — IRS Rev. Proc. 2025-32 (released Oct 2025).
    ssWageBase: 184_500,
    stdDeduction: { single: 16_100, mfj: 32_200, hoh: 24_150, mfs: 16_100 },
    brackets: {
      single: [[12_400, 0.1], [50_400, 0.12], [105_700, 0.22], [201_775, 0.24], [256_225, 0.32], [640_600, 0.35], [Infinity, 0.37]],
      mfj: [[24_800, 0.1], [100_800, 0.12], [211_400, 0.22], [403_550, 0.24], [512_450, 0.32], [768_700, 0.35], [Infinity, 0.37]],
      hoh: [[17_700, 0.1], [67_450, 0.12], [105_700, 0.22], [201_775, 0.24], [256_200, 0.32], [640_600, 0.35], [Infinity, 0.37]],
      mfs: [[12_400, 0.1], [50_400, 0.12], [105_700, 0.22], [201_775, 0.24], [256_225, 0.32], [384_350, 0.35], [Infinity, 0.37]],
    },
    estimated: false,
  },
};
