# AGENTS.md

## Product goal

This repository is the public proof-of-work portfolio for Sang Truong at `sangtruong.me`.

Every change should improve one or more of these outcomes:

1. A recruiter understands Sang's positioning in under 10 seconds.
2. A technical interviewer can verify depth through bounded case studies, system contracts, research methodology, and evidence.
3. Search engines and AI discovery systems can identify the canonical public pages.
4. The site remains fast, accessible, truthful, and safe to expose publicly.

## Canonical public positioning

- **Senior AI Engineer · Applied AI Systems**
- Current professional anchor: **Head of Artificial Intelligence at EPIC TECHNOLOGY**
- Depth domains:
  - Applied AI / LLM / Agent Systems
  - Computer Vision / Video / Edge AI
  - Quantitative Research / Trading Systems
  - Research / Multimodal & Temporal ML

Do not self-assign Staff/Principal as the public title. Demonstrate that level of capability through ownership, architecture, debugging depth, evaluation, delivery, and technical judgment.

## Truth hierarchy

The portfolio is a downstream public projection of Sang's current career records and owning-project evidence. When updating factual content:

1. use the newest reconciled public career projection;
2. cross-check the current owning-project evidence when project status matters;
3. preserve validation/deployment boundaries instead of inferring stronger states;
4. let this repository compress facts for presentation, never create new facts.

Never invent metrics, users, scale, uptime, revenue, validation state, production state, performance, or profitability.

## Public abstraction rule

The public portfolio should reveal enough architecture to prove senior ownership without becoming an implementation blueprint.

Prefer showing:

- system responsibilities and authority boundaries;
- what owns facts, state, evidence, permissions, and side effects;
- causal/reproducible research methodology;
- important failure classes and recovery concepts;
- deployment constraints at a capability level;
- explicit ownership and non-claims.

Do **not** publish:

- patient, clinician, private corpus, customer, or proprietary source data;
- credentials, tokens, secrets, account state, or exchange controls;
- unnecessary private vendor/source identities;
- private repository/package topology or internal subsystem names;
- hostnames, machine names, network layout, ports, or operator runbooks;
- private prompts/system instructions;
- model feature definitions, alpha parameters, trading strategy internals, or private trading databases;
- transient branch names, commit SHAs, release identifiers, worktree names, or deployment receipts;
- detailed architecture HTML/JSON artifacts that expose more than the bounded public case study needs.

Public technical depth should come from coherent scope and explicit contracts, not a wall of tools or hidden-system trivia.

## Project presentation boundaries

### Clinical AI

Present the hospital work as clinician-facing AI and decision support with governed knowledge/evidence, durable application state, explicit clinical authority, failure handling, and delivery constraints. Keep private corpus structure, prompts, schemas, infrastructure topology, operational procedures, and clinician data out of the public repository.

### Quantitative systems

Present Curren as an independent side project connecting point-in-time evidence, disciplined research/evaluation, shared research/runtime semantics, guarded operational state, and sanitized public verification. Do not expose private data-source identities, feature definitions, strategy parameters, execution controls, account state, internal topology, or unreconciled performance claims. Do not claim guaranteed or validated profitable alpha without current authoritative evidence.

### Computer vision / edge AI

Describe production and research systems through media/perception/state/evidence/recovery responsibilities. Do not publish unnecessary camera topology, credentials, vendor-specific private interfaces, or unsupported scale/performance metrics.

### Employer/client work

Preserve ownership boundaries. Employer/client systems must not be presented as unrelated personal products. Use public links only when the linked resource is intentionally public and safe.

## Design rules

Read `DESIGN.md` before changing layout, typography, color, motion, cards, or visual assets.

- Editorial, premium, technical, evidence-first.
- Midnight navy + true cobalt blue.
- Large typography, strong hierarchy, generous whitespace.
- Use diagrams for real system responsibilities, not decorative architecture theater.
- Avoid generic neon-hacker/crypto styling, purple gradients, fake dashboards, fake testimonials, fake client logos, or unverified screenshots.
- Keep motion optional and respect `prefers-reduced-motion`.
- Maintain WCAG AA contrast, keyboard navigation, visible focus, and semantic headings.

## SEO / discovery

- Every indexable page needs a unique title, description, canonical URL, and semantic heading structure.
- Structured data must match visible factual content.
- Keep the custom domain canonical.
- Keep `robots.txt`, `sitemap.xml`, and `llms.txt` aligned with current public pages.
- Do not keyword-stuff or create pages only for crawlers.

## Technical rules

- Astro static-first.
- Zero client JavaScript unless an interaction genuinely needs it.
- No UI framework by default.
- Keep dependencies minimal.
- Root-path deployment only; do not reintroduce a GitHub project-page subpath.

## Git / working policy

For routine bounded portfolio maintenance, work directly on `main`. Use a branch/PR only for risky, experimental, parallel, or review-heavy work.

Before a direct-main push:

- inspect the exact affected authority source;
- preserve public abstraction boundaries;
- run or rely on the repository's existing CI/build checks;
- do not leave temporary public artifacts containing sensitive details.
