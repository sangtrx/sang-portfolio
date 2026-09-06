# sangtrx.github.io

Public proof-of-work portfolio for **Sang Truong** — Senior AI Engineer & Applied AI Lead.

**Canonical site:** https://sangtruong.me/

GitHub user-site repository: `sangtrx/sangtrx.github.io`

## Purpose

This is intentionally not a generic “skills + project cards” portfolio. The hiring path is:

**positioning → domain depth → deep case studies → broader system portfolio → ownership/career → research → contact**

The portfolio reflects the current `Sang_Resume` architecture: one canonical chronology with separate evidence layers for four technical domains instead of flattening the career into an LLM-only profile.

### Technical depth

- **Applied AI / LLM / Agent Systems** — single-owner and multi-stage agents, RAG/knowledge systems, tool/model routing, durable evidence/context, guardrails, authority boundaries, distributed AI backends, UAT and production delivery.
- **Computer Vision / Video / Edge AI** — camera/media pipelines, detection, ALPR/OCR, tracking, temporal events, video understanding, NVIDIA Jetson/TensorRT/CUDA, physical-world reliability and recovery.
- **Quantitative Research / Trading Systems** — Rust/Python causal research cores, point-in-time Arrow/Parquet evidence, shared event stores, OOF/multiplicity controls, research/streaming parity, ML quality gates, lifecycle/risk/execution/reconciliation, and public verification boundaries.
- **Research / Multimodal & Temporal ML** — ABN, AEI, AOE-Net, VLCAP, VLTinT, sCL-ST, CarcassFormer and peer-reviewed work across IJCV, AAAI, IEEE JBHI, Poultry Science, IEEE Access, ICIP, BMVC and IEEE BHI.

### Deep case studies

- **Ho Chi Minh City Traditional Medicine Hospital — Clinical AI & Decision Support** — EPIC TECHNOLOGY project for https://www.yhct.vn/; one main semantic owner for the clinician turn, bounded approved-corpus evidence research, durable PostgreSQL evidence state, deterministic clinical authority, and explicit separation between an accepted protected-UAT baseline and a newer source-complete architecture update awaiting execution validation.
- **Curren** — independent AI/quant side project and multi-system quantitative intelligence platform; causal evidence infrastructure, hypothesis/OOF/multiplicity governance, append-only Alpha History, research-to-streaming parity, signal intelligence, fail-closed ML quality gating, lifecycle/risk/execution/reconciliation, access/content distribution, and isolated API/CLI/MCP public verification. Live public feed and profitable alpha are not claimed.

### Broader selected systems

- Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence Platform — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent — FPT Software.
- Curren Quant Intelligence & Trading Systems — independent side project.

## Stack

- Astro 7 (static output)
- TypeScript in Astro/config endpoints
- Plain CSS, no UI framework
- Minimal client JavaScript (theme preference plus isolated architecture-map interactions)
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
- optional IndexNow notification after successful GitHub Pages deployment.

See `docs/SEO_GEO.md` for the implementation rationale and launch checklist.

## Content authority

Public biography and chronology are reconciled against the private `sangtrx/Sang_Resume` source. The current canonical resume is `resume_master.tex`; domain depth is expanded from `cv/ai_systems_blocks.tex`, `cv/computer_vision_blocks.tex`, `cv/quant_research_blocks.tex`, and `cv/academic_blocks.tex`.

Project truth is intentionally cross-checked rather than inferred from one default branch:

- **Hospital Clinical AI** — inspect the current default branch plus the newest active candidate/PR/source path that represents the latest worktree-equivalent architecture. Separate the last validated/UAT baseline from any newer source-complete but unvalidated source state. Current code/invariants override stale prose when they disagree.
- **Curren** — treat the system as a cross-repository platform: canonical quant research/evidence, private signal/lifecycle/risk runtime, access/membership, content production, product-policy contracts, marketing, and public developer/read-model surfaces. Public copy describes capability/data/authority roles rather than private repository, channel, host, package, branch, or release identifiers.
- **Curren public platform** — `docs/PROJECT_STATUS.md` in the public Curren repository remains the source for API/read-model/CLI/MCP production-connectivity claims.

## Public abstraction policy

The public portfolio should expose enough architecture to prove senior ownership without leaking implementation trivia or internal release language. Prefer stable system concepts such as:

- `external alpha-source observations` instead of a named private transport/channel;
- `signal intelligence runtime` instead of a private repository/package name;
- `content production pipeline` instead of an internal social repository name;
- `access & membership` instead of payment/support implementation internals;
- `shared causal research core` instead of an internal research version label;
- `single semantic-owner clinical architecture` instead of an internal hospital-system version label.

Never publish patient data, private corpus material, source-channel identities, internal host/machine names, exchange credentials, private alpha parameters, model feature definitions, operator controls, internal release identifiers, or private trading database details.

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

## Hosting

This is the GitHub user-site repository `sangtrx/sangtrx.github.io`, so GitHub Pages serves it from the account root rather than a project subpath. The custom domain is the canonical public identity.

Production build:

```text
SITE_URL=https://sangtruong.me
BASE_PATH=/
```

The GitHub-native `sangtrx.github.io` hostname is only the platform origin/fallback. Public links, canonical metadata, social cards, sitemap URLs and IndexNow notifications should use `sangtruong.me`.

Cloudflare Pages and the Caddy container remain optional preview/self-hosting paths. Do not leave an independently indexable second production copy online.

## Self-hosted deployment

Optional self-hosting remains available:

```bash
docker compose up -d --build
```

The compose file binds only to:

```text
127.0.0.1:3000
```

Current production route:

```text
sangtruong.me
  → GitHub Pages
  → Astro static site
```

## Public demo policy

Future interactive demos for the hospital platform or Curren must be separate isolated deployments. Never publish:

- patient/hospital production data;
- uncleared hospital source material;
- production credentials or secrets;
- exchange credentials or execution controls;
- private alpha parameters or strategy internals.

Read `AGENTS.md`, `DESIGN.md`, `docs/PORTFOLIO_RESEARCH.md`, and `docs/SEO_GEO.md` before major content or architecture changes.
