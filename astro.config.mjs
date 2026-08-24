import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL ?? 'https://sangtruong.me';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'never',
  compressHTML: true,
});
