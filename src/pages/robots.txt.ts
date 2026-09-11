import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const sitemap = new URL(withBase('sitemap.xml'), root).href;
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /yhct-internal/',
    '',
    '# OpenAI search discovery. GPTBot controls model-training crawling separately;',
    '# public portfolio content remains discoverable; the encrypted internal atlas does not.',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    'Disallow: /yhct-internal/',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    'Disallow: /yhct-internal/',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    'Disallow: /yhct-internal/',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
