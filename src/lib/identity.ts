import { education, profile } from '../data/site';
import { withBase } from './paths';

export const publicIdentity = {
  handle: 'sangtrx',
  location: 'Ho Chi Minh City, Vietnam',
  city: 'Ho Chi Minh City',
  country: 'Vietnam',
  countryCode: 'VN',
  role: profile.title,
  currentEmployers: ['EPIC TECHNOLOGY'],
  currentAffiliations: ['A9 IOT'],
  languages: ['Vietnamese', 'English'],
  expertise: [
    'Artificial intelligence',
    'Applied AI systems',
    'Large language models',
    'AI agents',
    'Retrieval-augmented generation',
    'Knowledge systems',
    'LLM evaluation and guardrails',
    'Clinical AI',
    'Computer vision',
    'Video intelligence',
    'Multimodal learning',
    'Vision-language learning',
    'Temporal video understanding',
    'Speech AI',
    'Edge AI',
    'NVIDIA Jetson and TensorRT inference',
    'Time-series forecasting',
    'Quantitative machine learning',
    'Quantitative research',
    'Point-in-time market data',
    'Trading systems',
    'Backend engineering',
    'Distributed AI systems',
    'MLOps',
    'Cloud and on-premise deployment',
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
    worksFor: publicIdentity.currentEmployers.map((name) => ({ '@type': 'Organization', name })),
    affiliation: publicIdentity.currentAffiliations.map((name) => ({ '@type': 'Organization', name })),
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
    name: 'Sang Truong — Applied AI Engineering Portfolio',
    alternateName: 'Sang Truong (sangtrx) — AI Systems, Computer Vision & Quantitative ML Portfolio',
    description: 'Proof-of-work portfolio covering production AI and agent systems, computer vision/video intelligence, multimodal research, clinical AI, quantitative ML/trading systems, distributed backends, edge inference, and technical leadership.',
    inLanguage: 'en',
    author: { '@id': personId(site) },
    publisher: { '@id': personId(site) },
    about: { '@id': personId(site) },
  };
}
