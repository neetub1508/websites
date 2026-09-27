// Single source of truth for company details, navigation and URLs.
// Confirm the address and phone before enabling them in public copy and structured data.

export const SITE = {
  name: 'OrbitPi',
  legalName: 'OrbitPi Technologies Pvt. Ltd.',
  url: 'https://orbitpi.com',
  tagline: 'Business software for Indian companies',
  contactDetailsVerified: false,
  description:
    'OrbitPi builds business software for Indian companies: AI document OCR, warehouse inventory, lead management and fixed assets. Explore products and book a demo.',
  email: 'hello@orbitpi.com',
  salesEmail: 'sales@orbitpi.com',
  phone: '+91 124 400 0000',
  phoneHref: '+911244000000',
  address: {
    street: 'Tower B, 5th Floor, Cyber Park, Sector 39',
    city: 'Gurugram',
    region: 'Haryana',
    postalCode: '122001',
    country: 'India',
    countryCode: 'IN',
  },
  hours: 'Monday to Friday, 9:30 am to 6:30 pm IST',
  ogImage: '/og-image.png',
  logo: '/logo.png',
  locale: 'en_IN',
  foundingYear: 2026,
  // Official company profiles (LinkedIn, X, YouTube…). Listed in Organization schema as sameAs once added.
  sameAs: [] as string[],
  // Date of the last substantive copy change to product, industry and company pages; used as sitemap lastmod.
  contentUpdated: '2026-09-27',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV: NavLink[] = [
  { label: 'Industries', href: '/industries/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Company', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Guides', href: '/guides/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Contact', href: '/contact/' },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export const absoluteUrl = (path: string): string => new URL(path, SITE.url).toString();
