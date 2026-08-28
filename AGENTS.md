# AGENTS.md

## Product goal
This repository is the public proof-of-work portfolio for Sang Truong at `sangtruong.me`.
It is not a playground or a generic developer template. Every change should improve one or more of these outcomes:
1. A recruiter understands Sang's positioning in under 10 seconds.
2. A technical interviewer can verify depth through case studies, system boundaries, research methodology, and evidence.
3. Search engines and AI discovery systems can crawl, identify, and cite the canonical public pages.
4. The site remains extremely fast, accessible, and safe to expose publicly.

## Positioning
- Canonical broad positioning: Senior AI Engineer / Applied AI Lead.
- Four depth domains: Applied AI/LLM/Agent Systems; Computer Vision/Video/Edge AI; Quantitative Research/Trading Systems; Research/Multimodal & Temporal ML.
- Current professional anchor: Head of Artificial Intelligence at EPIC TECHNOLOGY.
- Deep public case studies: YHCT Clinical AI Platform and Curren.
- Broader system portfolio should preserve ownership boundaries for EPIC/FPT work instead of presenting employer/client systems as unrelated personal projects.

## Content truth rules
- Never invent metrics, validation states, customer outcomes, users, revenue, uptime, performance numbers, deployment states, or profitability claims.
- Distinguish `implemented`, `locally verified`, `tested`, `protected-UAT validated`, `deployed`, `accepted`, `production-ready`, `pending`, and `not claimed`.
- Biography, chronology, employment type, project ownership, education, teaching, honors, publications, and broad skills must be reconciled against the current canonical files in private `sangtrx/Sang_Resume`.
- Canonical résumé entrypoint is `resume_master.tex`. `resume.tex` is an alias; `resume_master_3page.tex` is legacy compatibility only.
- Use `RESUME_VARIANTS.md` to understand the facts → domain evidence → target storytelling architecture.
- Domain-specific depth comes from `cv/ai_systems_blocks.tex`, `cv/computer_vision_blocks.tex`, `cv/quant_research_blocks.tex`, and `cv/academic_blocks.tex`; do not flatten those into an inaccurate generic skills list.
- Preserve the canonical boundaries from Sang_Resume: Curren starts Jun 2026 and is an independent side project / Solo Builder; A9 IOT is part-time / consulting; YHCT, production multi-camera video intelligence, and Open edX are projects under EPIC TECHNOLOGY rather than separate employers.
- The completed University of Arkansas degree is Master of Engineering (MEng) in Computer Engineering, Jul 2021–Sep 2023, GPA 4.0/4.0. Prior PhD-track research may be described separately but must never imply a completed PhD.
- YHCT current implementation/validation/status claims must be checked against canonical `docs/v3/PROJECT_STATE.yaml` in `sangtrx/yhct-clinical-ai-platform` before changing status language.
- Curren public-platform implementation/validation/status claims must be checked against `docs/PROJECT_STATUS.md` in `sangtrx/curren` before changing status language.
- Do not expose hospital data, patient data, private source documents, exchange credentials, execution controls, private alpha parameters, internal hostnames, machine nicknames, or other non-public infrastructure labels.

## Design rules
- Read `DESIGN.md` before changing layout, typography, color, motion, cards, or visual assets.
- Editorial, premium, restrained. Avoid generic neon-hacker/crypto styling and avoid making the portfolio look like a template landing page.
- Preserve hierarchy: positioning → domain depth → deep case studies → broader systems → ownership/career → research → contact.
- Prefer dense evidence in well-structured editorial sections over skill-logo walls, percentage bars, decorative metrics, or dozens of shallow project cards.
- Large typography, strong hierarchy, generous whitespace, and diagrams that explain real system behavior.
- Animation must be optional, purposeful, and respect `prefers-reduced-motion`.
- No fake testimonials, fake client logos, fake dashboards, or unverified screenshots.
- Prefer proof of work over decorative effects.

## SEO / GEO / AI discovery rules
- Optimize for people first. Do not keyword-stuff, create doorway pages, or write filler for bots.
- Every indexable page needs a unique title, description, canonical URL, semantic heading structure, and useful internal links.
- Structured data must match visible page content and factual project state.
- Keep `robots.txt` crawlable and allow OAI-SearchBot for ChatGPT search discovery.
- `llms.txt` is an optional machine-readable convenience, not an SEO ranking mechanism; keep it concise, factual, and aligned with canonical HTML.
- Keep sitemap routes canonical and update `lastmod` only when content materially changes.
- Preserve stable slugs when moving from preview hosting to the custom domain; use redirects rather than duplicate public copies when possible.

## Technical rules
- Astro static-first; ship zero client JS unless an interaction genuinely needs it.
- No UI framework by default. Keep dependencies minimal.
- Maintain keyboard navigation, visible focus, semantic headings, and WCAG AA contrast.
- Prefer server/static-rendered visible content; do not hide primary meaning behind client-only rendering.

## Deployment
- The codebase must support a subpath preview (`/sang-portfolio/`) and a root custom-domain build (`/`).
- A self-hosted origin, when used, binds only to `127.0.0.1:3000` and should sit behind Cloudflare Tunnel or another deliberate ingress boundary.
- Cloudflare Pages or another static host may be used without changing public URL structure once the custom domain is attached.
