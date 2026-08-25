import { education, profile } from '../data/site';
import { withBase } from './paths';

export const publicIdentity = {
  handle: 'sangtrx',
  location: 'Ho Chi Minh City, Vietnam',
  city: 'Ho Chi Minh City',
  country: 'Vietnam',
  countryCode: 'VN',
  role: 'Senior AI/LLM Engineer and Technical Lead',
  currentOrganizations: ['EPIC TECHNOLOGY', 'A9 IOT'],
  languages: ['Vietnamese', 'English'],
  expertise: [
    'Artificial intelligence',
    'Large language models',
    'AI agents',
    'Retrieval-augmented generation',
    'LLM evaluation',
    'Clinical AI',
    'Machine learning',
    'Computer vision',
    'Time-series forecasting',
    'Quantitative research',
    'Backend engineering',
    'MLOps',
  ],
} as const;

export const personId = (site: URL) => new URL(withBase('/about#person'), site).href;
export const websiteId = (site: URL) => new URL(withBase('/#website'), site).href;

export function personSchema(site: URL) {
  return {
    '@type': 'Person',
    '@id': personId(site),
    name: profile.name,
    alternateName: [publicIdentity.handle],
    givenName: 'Sang',
    familyName: 'Truong',
    url: new URL(withBase('/about'), site).href,
    jobTitle: publicIdentity.role,
    description: profile.intro,
    email: `mailto:${profile.email}`,
    homeLocation: {
      '@type': 'Place',
      name: publicIdentity.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: publicIdentity.city,
        addressCountry: publicIdentity.countryCode,
      },
    },
    worksFor: publicIdentity.currentOrganizations.map((name) => ({ '@type': 'Organization', name })),
    alumniOf: education.map((item) => ({ '@type': 'CollegeOrUniversity', name: item.institution })),
    knowsLanguage: publicIdentity.languages,
    knowsAbout: publicIdentity.expertise,
    sameAs: [profile.github, profile.linkedin, profile.scholar],
  };
}

export function websiteSchema(site: URL) {
  return {
    '@type': 'WebSite',
    '@id': websiteId(site),
    url: new URL(withBase('/'), site).href,
    name: 'Sang Truong — AI Engineering Portfolio',
    alternateName: 'Sang Truong (sangtrx) — AI/LLM Engineering Portfolio',
    description: 'Proof-of-work portfolio covering production AI, agent systems, clinical AI, quantitative research, and technical leadership.',
    inLanguage: 'en',
    author: { '@id': personId(site) },
    publisher: { '@id': personId(site) },
    about: { '@id': personId(site) },
  };
}
