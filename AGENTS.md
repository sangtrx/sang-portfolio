# AGENTS.md

## Product goal
This repository is the public proof-of-work portfolio for Sang Truong at `sangtruong.me`.
It is not a playground or a generic developer template. Every change should improve one or more of these outcomes:
1. A recruiter understands Sang's positioning in under 10 seconds.
2. A technical interviewer can verify depth through case studies, system boundaries, research methodology, and evidence.
3. Search engines and AI discovery systems can crawl, identify, and cite the canonical public pages.
4. The site remains extremely fast, accessible, and safe to expose publicly.

## Positioning
- Canonical broad positioning: **Senior AI Engineer · Applied AI Lead**.
- Four depth domains: Applied AI/LLM/Agent Systems; Computer Vision/Video/Edge AI; Quantitative Research/Trading Systems; Research/Multimodal & Temporal ML.
- Current professional anchor: Head of Artificial Intelligence at EPIC TECHNOLOGY.
- Deep public case studies: Ho Chi Minh City Traditional Medicine Hospital Clinical AI and Curren.
- Broader system portfolio should preserve ownership boundaries for EPIC/FPT work instead of presenting employer/client systems as unrelated personal projects.
- `AI Agent`, `Computer Vision`, `Quant`, or similar specializations are depth/target labels, not replacements for the canonical broad title unless the user explicitly requests a target-specific public positioning change.

## Upstream Career OS authority

The private `sangtrx/Sang_Resume` repository is Sang's Personal Career OS / second brain.

For biography, title, chronology, engagement type, education, technical-experience level, project ownership and reusable personal claims, use this authority order:

1. `Sang_Resume/brain/` — private reconciled truth;
2. `Sang_Resume/public/profile.yaml` — sanitized public projection intended for this portfolio;
3. current owning-project repository evidence for project implementation/deployment status;
4. this repository's local presentation data.

The portfolio is a **downstream public view**. It may compress or present facts, but must not create a new personal fact or silently upgrade a technology from conceptual/research/hands-on to production.

When `Sang_Resume/public/profile.yaml` conflicts with `src/data/site.ts` on a personal fact, reconcile the portfolio to the public projection unless newer primary evidence has first been reconciled upstream.

## Content truth rules
- Never invent metrics, validation states, customer outcomes, users, revenue, uptime, performance numbers, deployment states, or profitability claims.
- Distinguish `implemented`, `source complete`, `locally verified`, `tested`, `protected-UAT validated`, `deployed`, `accepted`, `production-ready`, `pending`, and `not claimed`.
- Biography, chronology, employment type, project ownership, education, teaching, honors, publications, and broad skills must be reconciled against the current Career OS in private `sangtrx/Sang_Resume`.
- Canonical broad title is `Senior AI Engineer · Applied AI Lead`.
- Canonical résumé entrypoint/full personal career inventory view is `resume_master.tex`. `resume.tex` is an alias; `resume_master_3page.tex` is legacy compatibility only.
- Use `RESUME_VARIANTS.md` to understand the brain truth → reusable evidence → target storytelling architecture.
- Domain-specific depth comes from the relevant Career OS evidence/domain layers; do not flatten them into an inaccurate generic skills list.
- A public technology group means the technology is safe to mention in that capability domain; it does **not** imply production ownership. Preserve the evidence level from `Sang_Resume/brain/skills/technology_registry.yaml` whenever wording could imply a stronger claim.
- Preserve canonical boundaries from Sang_Resume: Curren starts Jun 2026 and is an independent side project / Solo Builder; A9 IOT is part-time / consulting; the Ho Chi Minh City Traditional Medicine Hospital project, production multi-camera video intelligence, and Open edX are projects under EPIC TECHNOLOGY rather than separate employers.
- The completed University of Arkansas degree is Master of Engineering (MEng) in Computer Engineering, Jul 2021–Sep 2023, GPA 4.0/4.0. Prior PhD-track research may be described separately but must never imply a completed PhD.
- Do not present Supabase, Hyperbrowser, LaunchDarkly, LangWatch or Sentry as prior direct production experience unless the upstream Career OS evidence registry is explicitly updated first.

### Hospital Clinical AI authority
- Do not assume the default branch or an old status document is the newest execution state. Before changing hospital architecture/status language, inspect current `main`, the latest active candidate/PR/branch that represents the newest worktree-equivalent source state, and the exact source files governing that path.
- When a newer source state exists after a validated/deployed baseline, report both states explicitly in plain language. A safe pattern is: **`validated/deployed protected-UAT baseline` versus `newer clinician-feedback stabilization awaiting its own exact validation/deployment gate`**. Never transfer test/UAT evidence from the older baseline to changed source.
- Real clinician feedback may supersede an earlier “doctor-ready” snapshot. Prefer current code and active-candidate authority over stale project-state prose when they disagree.
- Do not expose transient PR numbers, candidate SHAs, branch names, internal release labels, machine/operator names, private corpus data, or runbook details in public copy.
- Public hospital language should use the English institution name **Ho Chi Minh City Traditional Medicine Hospital**, link to `https://www.yhct.vn/` where useful, and describe capabilities and authority boundaries: single semantic owner, bounded approved-corpus evidence research, durable evidence state, deterministic clinical facts, conditional evidence verification, protected-UAT/production boundaries.

### Curren authority
- Treat Curren as one cross-repository platform, not as the public `curren` repository alone. Before changing the case study, reconcile the current state of quantitative research/evidence, the private signal/lifecycle/risk runtime, access/membership, social/content production, cross-repository product contracts, marketing, and the public developer/read-model surface.
- Quant research authority comes from the current canonical research state, including its causal data/event core, OOF/multiplicity/holdout rules, Alpha History, execution bridge, and offline/streaming parity boundaries. Public copy must not expose internal research release/version labels.
- The public `curren` repository owns the sanitized read model/API/CLI/MCP contract, not alpha generation or private execution. Check `docs/PROJECT_STATUS.md` before claiming live API/feed/deployment status, but do not surface internal public-platform release numbers unless they are genuinely useful to an external reader.
- Public portfolio copy must use capability-level names instead of private repository/package identities. Examples: `signal intelligence runtime`, `external alpha-source data`, `ML quality gate`, `lifecycle & risk state`, `content production pipeline`, `access & membership`, `public verification read model`.
- Never expose the internal signal-runtime repository name, legacy package names, source-channel/vendor identities, private feed/channel counts, internal hostnames/machine nicknames, exact account/exchange credentials, model feature definitions, alpha parameters, operator controls, private trading database details, or internal release identifiers.
- Describe source ingestion by the economic/data role, not transport implementation. For example, say `external alpha-source observations are normalized into candidate signals`, not that the system reads a named chat/community channel.
- Curren research metrics must preserve their authority boundary. Development/screening market size, smoke releases, calibration runs, or representative screens must never be presented as validated profitable alpha or final promotion evidence.

## Public abstraction rule
- Public technical depth should reveal architecture, contracts, failure modes, causal methodology, evidence and ownership — not operational secrets, repository topology, internal release labels, or implementation trivia.
- Prefer the stable system concept over an internal code/repository/version label. Internal identifiers may appear only when they are themselves public-facing technology or materially useful to a technical reviewer (e.g. FastAPI, PostgreSQL, Rust, Arrow, Parquet, Qdrant, NautilusTrader), not merely because they exist in the source tree.
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

## Git / working policy
- **Default for routine, bounded portfolio maintenance: work directly on `main`.** Keep one canonical working line instead of accumulating long-lived branches.
- Use a branch/PR only for risky, experimental, genuinely parallel, or review-heavy changes.
- If a temporary branch is needed, reconcile it promptly; do not leave it as a second canonical content state.
- Before a direct-main push, inspect the exact affected authority source and run the relevant build/CI checks when available.

## Deployment
- The codebase must support a subpath preview (`/sang-portfolio/`) and a root custom-domain build (`/`).
- A self-hosted origin, when used, binds only to `127.0.0.1:3000` and should sit behind Cloudflare Tunnel or another deliberate ingress boundary.
- Cloudflare Pages or another static host may be used without changing public URL structure once the custom domain is attached.
