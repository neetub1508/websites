// Single source of truth for company details, navigation and URLs.
// Placeholder address/phone — replace before launch.

export const SITE = {
  name: 'OrbitPi',
  legalName: 'OrbitPi Technologies Pvt. Ltd.',
  url: 'https://orbitpi.com',
  tagline: 'AI that runs your back office',
  description:
    'OrbitPi builds AI business software for Indian businesses: AI document OCR, warehouse inventory with e-way bills, lead management and fixed asset management.',
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
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV: NavLink[] = [
  { label: 'Industries', href: '/industries/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Company', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Contact', href: '/contact/' },
];

export const LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

export const absoluteUrl = (path: string): string => new URL(path, SITE.url).toString();
