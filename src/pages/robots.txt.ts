import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const sitemap = new URL(withBase('sitemap.xml'), root).href;
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    '# OpenAI search discovery. GPTBot controls model-training crawling separately;',
    '# this portfolio allows both because all published content is intentionally public.',
    'User-agent: OAI-SearchBot',
    'Allow: /',
    '',
    'User-agent: GPTBot',
    'Allow: /',
    '',
    'User-agent: ChatGPT-User',
    'Allow: /',
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
