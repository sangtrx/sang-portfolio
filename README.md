# sang-portfolio

Public proof-of-work portfolio for **Sang Truong** — Senior AI/LLM Engineer & Technical Lead.

Target canonical domain: **https://sangtruong.me**

## Purpose

This is intentionally not a generic “skills + project cards” portfolio. The site is built around a simple hiring path:

**positioning → flagship systems → architecture/evidence → experience → research → contact**

Flagship case studies:

- **YHCT Clinical AI Platform** — bounded agentic clinical AI, governed local-corpus research, explicit fact ownership, provider portability, durable conversation state, and UAT validation boundaries.
- **Curren** — point-in-time quantitative research, leakage-aware validation, private signal lifecycle, and a verifiable public read model exposed through API, CLI, MCP, and desktop integrations.

## Stack

- Astro 7 (static output)
- TypeScript in Astro/config endpoints
- Plain CSS, no UI framework
- Minimal client JavaScript (theme preference only)
- Optional Caddy container for self-hosted Linux deployment

## SEO / GEO / AI discovery

The repository includes:

- unique per-page title/description/canonical metadata;
- Open Graph + Twitter PNG social cards;
- `Person`, `ProfilePage`, `Article`, `WebSite`, and `BreadcrumbList` JSON-LD where appropriate;
- static-generated `/sitemap.xml`;
- static-generated `/robots.txt` with OAI-SearchBot access;
- `/llms.txt` as a concise machine-readable site map for systems that use the emerging convention;
- an entity-focused `/about` page;
- semantic case studies with explicit evidence and non-claims.

See `docs/SEO_GEO.md` for the implementation rationale and launch checklist.

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Preview hosting

On Cloudflare Pages, `CF_PAGES_URL` is detected automatically for preview builds. Once `sangtruong.me` is attached, set `SITE_URL=https://sangtruong.me` so canonical and social URLs point to the custom domain.

The site also supports GitHub project-page hosting with:

```text
SITE_URL=https://sangtrx.github.io
BASE_PATH=/sang-portfolio
```

and root-domain hosting with:

```text
SITE_URL=https://sangtruong.me
BASE_PATH=/
```

The same codebase can be deployed to GitHub Pages, Cloudflare Pages, or a self-hosted Linux origin. Avoid leaving multiple independently indexable copies online after `sangtruong.me` becomes canonical; redirect or de-index the old preview when practical.

## Self-hosted deployment

```bash
docker compose up -d --build
```

The compose file binds only to:

```text
127.0.0.1:3000
```

Recommended public route:

```text
sangtruong.me
  → Cloudflare
  → Cloudflare Tunnel
  → http://127.0.0.1:3000
  → Caddy container
  → Astro static site
```

## Public demo policy

Future interactive demos for YHCT or Curren must be separate isolated deployments. Never publish:

- patient/hospital production data;
- uncleared hospital source material;
- production credentials or secrets;
- exchange credentials or execution controls;
- private alpha parameters or strategy internals.

Read `AGENTS.md`, `docs/PORTFOLIO_RESEARCH.md`, and `docs/SEO_GEO.md` before major content or architecture changes.
