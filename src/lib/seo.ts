import { SITE, SOCIAL } from './constants';

export type SeoProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
  canonical?: string;
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/icon-symbol.png`,
    email: SITE.contactEmail,
    sameAs: [SOCIAL.x, SOCIAL.linkedin, SOCIAL.github],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'es-PE',
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    operatingSystem: 'Web',
    applicationCategory: 'BusinessApplication',
    description: SITE.defaultDescription,
    url: SITE.url,
    offers: {
      '@type': 'Offer',
      price: '19.00',
      priceCurrency: 'PEN',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function buildTitle(title?: string): string {
  if (!title) return SITE.defaultTitle;
  if (title.toLowerCase().includes(SITE.name.toLowerCase())) return title;
  return `${title} — ${SITE.name}`;
}

export function buildOgImage(ogImage?: string): string {
  const image = ogImage ?? SITE.defaultOgImage;
  if (image.startsWith('http')) return image;
  return `${SITE.url}${image}`;
}
