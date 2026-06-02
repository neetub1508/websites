// ============================================================================
// Reusable schema.org / JSON-LD builders. FAQPage rich results are deprecated
// in Google Search (May 2026) but the markup is still read by AI answer engines
// (ChatGPT, Gemini, AI Overviews), so we keep it for GEO/AEO. See spec §5.
// ============================================================================

export const SITE = {
  name: 'Easy1099Tax',
  url: 'https://easy1099tax.com',
  tagline: 'Free 1099 & self-employment tax calculator for U.S. freelancers, gig workers, and contractors.',
};

export interface Faq {
  q: string;
  a: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function webAppSchema(opts: { name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: opts.name,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: opts.description,
    url: SITE.url,
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
