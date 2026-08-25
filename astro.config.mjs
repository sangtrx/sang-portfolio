import { defineConfig } from 'astro/config';

const cloudflarePreview = process.env.CF_PAGES === '1' ? process.env.CF_PAGES_URL : undefined;
const site = process.env.SITE_URL ?? cloudflarePreview ?? 'https://sangtruong.me';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
});
