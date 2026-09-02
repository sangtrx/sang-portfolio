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
- Distinguish `implemented`, `source complete`, `locally verified`, `tested`, `protected-UAT validated`, `deployed`, `accepted`, `production-ready`, `pending`, and `not claimed`.
- Biography, chronology, employment type, project ownership, education, teaching, honors, publications, and broad skills must be reconciled against the current canonical files in private `sangtrx/Sang_Resume`.
- Canonical résumé entrypoint is `resume_master.tex`. `resume.tex` is an alias; `resume_master_3page.tex` is legacy compatibility only.
- Use `RESUME_VARIANTS.md` to understand the facts → domain evidence → target storytelling architecture.
- Domain-specific depth comes from `cv/ai_systems_blocks.tex`, `cv/computer_vision_blocks.tex`, `cv/quant_research_blocks.tex`, and `cv/academic_blocks.tex`; do not flatten those into an inaccurate generic skills list.
- Preserve the canonical boundaries from Sang_Resume: Curren starts Jun 2026 and is an independent side project / Solo Builder; A9 IOT is part-time / consulting; YHCT, production multi-camera video intelligence, and Open edX are projects under EPIC TECHNOLOGY rather than separate employers.
- The completed University of Arkansas degree is Master of Engineering (MEng) in Computer Engineering, Jul 2021–Sep 2023, GPA 4.0/4.0. Prior PhD-track research may be described separately but must never imply a completed PhD.

### YHCT authority
- Do not assume the default branch is the newest execution candidate. Before changing YHCT architecture/status language, inspect current `main`, the latest active candidate/PR/branch that represents the newest worktree-equivalent source state, and the exact source files governing that path.
- When an active candidate is newer than the last validated baseline, report both states explicitly: e.g. `prior protected-UAT baseline accepted` versus `newer source-complete candidate awaiting exact-candidate validation`. Never transfer test/UAT evidence from an older SHA to a newer source revision.
- Prefer current code and active candidate invariants over stale architecture prose when they disagree. Do not expose transient PR numbers, candidate SHAs, machine/operator names, private corpus data, or runbook details in public copy.
- Public YHCT language should describe capabilities and authority boundaries: single semantic owner, bounded local-corpus evidence research, durable evidence state, deterministic clinical facts, conditional evidence verification, protected-UAT/production boundaries.

### Curren authority
- Treat Curren as one cross-repository platform, not as the public `curren` repository alone. Before changing the case study, reconcile the current state of quantitative research/evidence, the private signal/lifecycle/risk runtime, access/membership, social/content production, cross-repository product contracts, marketing, and the public developer/read-model surface.
- Quant research authority comes from the current canonical `curren-research` state and V9 evidence cutover, including its causal data/event core, OOF/multiplicity/holdout rules, Alpha History, execution bridge, and offline/streaming parity boundaries.
- The public `curren` repository owns the sanitized read model/API/CLI/MCP contract, not alpha generation or private execution. Check `docs/PROJECT_STATUS.md` before claiming live API/feed/deployment status.
- Public portfolio copy must use capability-level names instead of private repository/package identities. Examples: `signal intelligence runtime`, `external alpha-source data`, `ML quality gate`, `lifecycle & risk state`, `content production pipeline`, `access & membership`, `public verification read model`.
- Never expose the internal signal-runtime repository name, legacy package names, source-channel/vendor identities, private feed/channel counts, internal hostnames/machine nicknames, exact account/exchange credentials, model feature definitions, alpha parameters, operator controls, or private trading database details.
- Describe source ingestion by the economic/data role, not transport implementation. For example, say `external alpha-source observations are normalized into candidate signals`, not that the system reads a named chat/community channel.
- Curren research metrics must preserve their authority boundary. Development/screening market size, smoke releases, calibration runs, or representative screens must never be presented as validated profitable alpha or final promotion evidence.

## Public abstraction rule
- Public technical depth should reveal architecture, contracts, failure modes, causal methodology, evidence and ownership — not operational secrets or implementation trivia.
- Prefer the stable system concept over an internal code/repository label. Internal identifiers may appear only when they are themselves public-facing technology or materially useful to a technical reviewer (e.g. FastAPI, PostgreSQL, Rust, Arrow, Parquet, Qdrant, NautilusTrader), not merely because they exist in the source tree.
- “Impressive” should come from coherent scope and explicit authority boundaries, not a wall of tool names. Every named subsystem should answer: what does it own, what evidence proves it, and what can it not do?

## Design rules
- Read `DESIGN.md` before changing layout, typography, color, motion, cards, or visual assets.
- Editorial, premium, restrained. Avoid generic neon-hacker/crypto styling and avoid making the portfolio look like a template landing page.
- Preserve hierarchy: positioning → domain depth → deep case studies → broader systems → ownership/career → research → contact.
- Prefer dense evidence in well-structured editorial sections over skill-logo walls, percentage bars, decorative metrics, or dozens of shallow project cards.
- Large typography, strong hierarchy, generous whitespace, and diagrams that explain real system behavior.
- Architecture maps should expose capability and authority boundaries first; internal repo topology belongs in private engineering docs, not the public portfolio.
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
