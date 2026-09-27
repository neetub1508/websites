/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0B0D12', 700: '#3F4451', 500: '#5B6170', 400: '#6B7080' },
        line: { DEFAULT: '#EDEEF1', strong: '#E1E3E8' },
        mist: '#F8F9FB',
        brand: { DEFAULT: '#2F4BFF', dark: '#1F37D6', soft: '#EEF1FF', light: '#8FA0FF' },
        docai: { DEFAULT: '#2F4BFF', soft: '#EEF1FF' },
        stock: { DEFAULT: '#0E8A6A', soft: '#E6F6F1' },
        leads: { DEFAULT: '#C2410C', soft: '#FDEEE6' },
        assets: { DEFAULT: '#7C3AED', soft: '#F2EDFF' },
        ledger: { DEFAULT: '#0B0D12', soft: '#EEEFF2' },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { page: '1440px' },
      letterSpacing: { tightest: '-0.045em', display: '-0.04em' },
      boxShadow: {
        card: '0 20px 40px -24px rgba(21,32,90,0.25)',
        window: '0 40px 80px -30px rgba(21,32,90,0.28), 0 12px 24px -12px rgba(11,13,18,0.08)',
        cta: '0 8px 20px -8px rgba(47,75,255,0.6)',
      },
    },
  },
  plugins: [],
};
