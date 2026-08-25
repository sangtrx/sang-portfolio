import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

const routes = [
  { path: '/', lastmod: '2026-08-25' },
  { path: '/about', lastmod: '2026-08-25' },
  { path: '/resume', lastmod: '2026-08-25' },
  { path: '/work/yhct', lastmod: '2026-08-25' },
  { path: '/work/curren', lastmod: '2026-08-25' },
];

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const buildBase = import.meta.env.BASE_URL || '/';
  const entries = routes.map(({ path, lastmod }) => {
    let loc = new URL(withBase(path), root).href;
    if (path === '/' && buildBase !== '/' && loc.endsWith('/')) loc = loc.slice(0, -1);
    return `<url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
