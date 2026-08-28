# sang-portfolio

Public proof-of-work portfolio for **Sang Truong** — Senior AI Engineer & Applied AI Lead.

**Live preview:** https://sangtrx.github.io/sang-portfolio/

Target canonical domain: **https://sangtruong.me**

## Purpose

This is intentionally not a generic “skills + project cards” portfolio. The hiring path is:

**positioning → domain depth → deep case studies → broader system portfolio → ownership/career → research → contact**

The portfolio reflects the current `Sang_Resume` architecture: one canonical chronology with separate evidence layers for four technical domains instead of flattening the career into an LLM-only profile.

### Technical depth

- **Applied AI / LLM / Agent Systems** — bounded agents, RAG/knowledge systems, tool/model routing, context/memory, guardrails, authority boundaries, distributed AI backends, UAT and production delivery.
- **Computer Vision / Video / Edge AI** — camera/media pipelines, detection, ALPR/OCR, tracking, temporal events, video understanding, NVIDIA Jetson/TensorRT/CUDA, physical-world reliability and recovery.
- **Quantitative Research / Trading Systems** — point-in-time data, feature/hypothesis pipelines, event studies/backtests, OOS/walk-forward validation, leakage/overfitting controls, ML selection, lifecycle/risk/execution/recovery.
- **Research / Multimodal & Temporal ML** — ABN, AEI, AOE-Net, VLCAP, VLTinT, sCL-ST, CarcassFormer and peer-reviewed work across IJCV, AAAI, IEEE JBHI, Poultry Science, IEEE Access, ICIP, BMVC and IEEE BHI.

### Deep case studies

- **YHCT Clinical AI Platform** — EPIC TECHNOLOGY project for Ho Chi Minh City Traditional Medicine Hospital; bounded agentic clinical AI, deterministic release-pinned authority, governed local-corpus research, durable state, protected-UAT validation and clinician-feedback stabilization.
- **Curren** — independent AI/quant side project; point-in-time research, leakage/overfitting controls, ML selection, durable signal/risk lifecycle, guarded execution boundaries, immutable public proofs, FastAPI, CLI and MCP.

### Broader selected systems

- Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence Platform — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent — FPT Software.
- Curren Quant Research & Trading Systems — independent side project.

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
- static-generated `/sitemap.xml` containing canonical HTML URLs only;
- static-generated `/robots.txt` with OAI-SearchBot access;
- `/llms.txt` as a concise discovery map pointing to canonical HTML pages and current domain evidence;
- entity disambiguation for `Sang Truong` / `sangtrx` / Ho Chi Minh City, Vietnam;
- an entity-focused `/about` page;
- semantic case studies with explicit evidence, project ownership boundaries and non-claims;
- IndexNow notification after successful GitHub Pages deployment.

See `docs/SEO_GEO.md` for the implementation rationale and launch checklist.

## Content authority

Public biography and chronology are reconciled against the private `sangtrx/Sang_Resume` source. The current canonical resume is `resume_master.tex`; domain depth is expanded from `cv/ai_systems_blocks.tex`, `cv/computer_vision_blocks.tex`, `cv/quant_research_blocks.tex`, and `cv/academic_blocks.tex`.

Project status is intentionally sourced separately:

- YHCT implementation/validation status → `docs/v3/PROJECT_STATE.yaml` in the private YHCT repository.
- Curren public-platform status → `docs/PROJECT_STATUS.md` in the public Curren repository.

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

Read `AGENTS.md`, `DESIGN.md`, `docs/PORTFOLIO_RESEARCH.md`, and `docs/SEO_GEO.md` before major content or architecture changes.
