# sang-portfolio

Public portfolio for **Sang Truong** — AI/LLM Engineer & Technical Lead.

Target domain: **https://sangtruong.me**

## What this is

A proof-of-work portfolio built around two flagship system case studies:
- **YHCT Clinical AI Platform** — governed clinical AI, deterministic authority, retrieval grounding, citations, provenance, and production acceptance controls.
- **Curren** — point-in-time quant research, leakage-aware validation, signal lifecycle, and trading infrastructure.

The site intentionally avoids a generic project-card/skills-bar portfolio. The goal is to let a recruiter understand the profile quickly, then give technical interviewers enough architecture and trade-off depth to ask serious questions.

## Stack

- Astro 7
- TypeScript
- CSS (no UI framework)
- Static output
- Caddy container for BigLinux
- Cloudflare Tunnel expected in front of the origin

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

## BigLinux

```bash
docker compose up -d --build
```

The compose file intentionally binds only to:

```text
127.0.0.1:3000
```

Recommended public route:

```text
sangtruong.me
  -> Cloudflare
  -> Cloudflare Tunnel
  -> http://127.0.0.1:3000
  -> Caddy container
  -> Astro static site
```

Do not expose the container port directly to the public internet unless the network design is intentionally changed.

## Demo policy

`yhct.sangtruong.me` and `curren.sangtruong.me` should be separate isolated demo deployments.

Never publish:
- patient/hospital production data;
- internal hospital documents not cleared for public use;
- exchange credentials;
- trading execution controls;
- private alpha parameters;
- production secrets.

See `AGENTS.md` and `docs/PORTFOLIO_RESEARCH.md` before making major design or content changes.

## GitHub Pages preview

While the custom domain is pending, this repository is configured to publish from `main` to:

`https://sangtrx.github.io/sang-portfolio/`

This repository deploys `main` through GitHub Actions. If Pages is not enabled automatically on the first run, open **Settings → Pages** and set **Source** to **GitHub Actions**, then rerun the deployment workflow.

The workflow builds with `SITE_URL=https://sangtrx.github.io` and `BASE_PATH=/sang-portfolio`, so internal navigation, metadata, and assets work correctly under a GitHub project-page subpath.

### Moving to `sangtruong.me`

When the domain is ready, either:

- keep GitHub Pages: configure the custom domain, set `SITE_URL=https://sangtruong.me`, set `BASE_PATH=/`, and add `public/CNAME`; or
- move hosting to BigLinux: keep the default root build (`npm run build`) and serve `dist/` behind the planned Cloudflare Tunnel.
