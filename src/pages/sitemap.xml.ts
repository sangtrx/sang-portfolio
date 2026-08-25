import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/resume', priority: '0.8', changefreq: 'monthly' },
  { path: '/work/yhct', priority: '0.9', changefreq: 'monthly' },
  { path: '/work/curren', priority: '0.9', changefreq: 'monthly' },
];

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const entries = routes.map(({ path, priority, changefreq }) => {
    const loc = new URL(withBase(path), root).href;
    return `<url><loc>${loc}</loc><lastmod>2026-08-25</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
