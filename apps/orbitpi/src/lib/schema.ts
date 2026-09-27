// schema.org JSON-LD builders. Pages compose these and pass them to <BaseLayout schema={...}>.
import { SITE, absoluteUrl } from './site';
import type { Faq, Product } from './products';

export type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#org`;
const WEBSITE_ID = `${SITE.url}/#website`;

export const organization = (): JsonLd => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: `${SITE.url}/`,
  logo: absoluteUrl(SITE.logo),
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.countryCode,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: SITE.salesEmail,
    telephone: SITE.phone,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
});

export const website = (): JsonLd => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
});

export const webPage = (url: string, name: string, description: string, type = 'WebPage'): JsonLd => ({
  '@type': type,
  '@id': `${url}#webpage`,
  url,
  name,
  description,
  inLanguage: 'en-IN',
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
});

export const breadcrumbs = (items: { name: string; path: string }[]): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqPage = (faqs: Faq[]): JsonLd => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const softwareApp = (p: Product): JsonLd => ({
  '@type': 'SoftwareApplication',
  '@id': `${absoluteUrl(`/products/${p.slug}/`)}#software`,
  name: p.fullName,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: p.category,
  operatingSystem: 'Web',
  description: p.metaDescription,
  url: absoluteUrl(`/products/${p.slug}/`),
  featureList: p.features.map((f) => f.title),
  publisher: { '@id': ORG_ID },
});

export const itemList = (name: string, items: { name: string; path: string }[]): JsonLd => ({
  '@type': 'ItemList',
  name,
  itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: absoluteUrl(it.path) })),
});

export const graph = (...nodes: JsonLd[]): JsonLd => ({ '@context': 'https://schema.org', '@graph': [organization(), website(), ...nodes] });
