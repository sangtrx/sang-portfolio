# AGENTS.md

## Product goal
This repository is the public portfolio for Sang Truong at `sangtruong.me`.
It is not a playground or a generic developer template. Every change should improve one of three outcomes:
1. A recruiter understands Sang's positioning in under 10 seconds.
2. A technical interviewer can verify depth through case studies and evidence.
3. The site remains extremely fast, accessible, and safe to expose publicly.

## Positioning
- Senior AI/LLM Engineer / Technical Lead.
- Production AI, reliable agentic systems, retrieval, clinical AI, quantitative research infrastructure.
- Flagship case studies: YHCT Clinical AI Platform and Curren.

## Design rules
- Editorial, premium, restrained. Avoid generic neon-hacker/crypto styling.
- Large typography, strong hierarchy, generous whitespace, subtle system diagrams.
- Animation must be optional, purposeful, and respect `prefers-reduced-motion`.
- No skill percentage bars, fake metrics, fake testimonials, fake client logos, or unverified claims.
- Prefer proof of work over decorative effects.

## Technical rules
- Astro static-first; ship zero client JS unless an interaction genuinely needs it.
- No UI framework by default. Keep dependencies minimal.
- Maintain keyboard navigation, visible focus, semantic headings, and WCAG AA contrast.
- Never commit secrets, hospital data, patient data, exchange credentials, or private alpha parameters.
- Public demos must use sanitized/synthetic data and isolated demo environments.

## Deployment
- Intended origin: BigLinux.
- Container binds to `127.0.0.1:3000` only.
- Public traffic should reach it via Cloudflare Tunnel -> localhost:3000.
