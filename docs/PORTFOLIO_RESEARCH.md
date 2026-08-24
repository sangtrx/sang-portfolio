# Portfolio Research — 2026-08-25

## Decision
Build a proof-of-work portfolio, not an online CV clone.

The strongest pattern across current developer portfolios and hiring guidance is:

**positioning -> 2–3 flagship projects -> deep case studies -> experience -> evidence -> contact**

For a senior/lead profile, the differentiator is not a grid of technologies. It is the ability to explain architecture, trade-offs, operational constraints, validation, and outcomes.

## Reference patterns

### Brittany Chiang — recruiter clarity
https://brittanychiang.com

Useful ideas:
- role and value proposition are visible immediately;
- work and experience are easy to scan;
- accessible, restrained interaction;
- links to deeper proof without making the landing page dense.

### Rauno Freiberg — craft and restraint
https://rauno.me

Useful ideas:
- minimal text can feel premium when typography and interaction details are deliberate;
- the site itself demonstrates taste without turning into an effects demo.

### Lee Robinson — senior credibility through signal density
https://leerob.com

Useful ideas:
- concise biography;
- writing/notes as durable proof of technical thinking;
- no need for an oversized “skills cloud”.

### Josh Comeau — interactive teaching as proof
https://www.joshwcomeau.com

Useful idea:
- interaction is valuable when it teaches or demonstrates expertise, not when it merely decorates the page.

### Bruno Simon — memorable technical spectacle
https://bruno-simon.com

Useful idea:
- an interactive portfolio can itself be the proof of skill, but this approach is appropriate mainly when creative/WebGL engineering is the role being sold.
- For Sang's AI/technical-lead positioning, borrowing this level of spectacle would reduce clarity and increase load/maintenance risk.

## Hiring evidence synthesized

Recent 2026 hiring-oriented portfolio guides consistently favor:
- a clear above-the-fold role/value proposition;
- 2–5 strong projects rather than many shallow cards;
- live/deployed proof where possible;
- project narratives covering problem, role, decisions, and result;
- code links when public, otherwise architecture/evidence when source is private;
- fast load, mobile responsiveness, keyboard navigation, accessible contrast;
- a visible contact path.

References:
- https://soychristian.com/contents/developer-portfolio-guide/
- https://designtocodes.com/blog/developer-portfolio-website-that-gets-you-hired/
- https://showproof.io/guides/how-recruiters-read-developer-portfolios/
- https://www.w3.org/TR/WCAG22/

## Why Astro

Astro is a strong fit because this site is primarily content and case studies, with small islands of optional interaction. Astro 7 focuses heavily on build speed and static/content workloads, while keeping the default client-JS footprint low.

Reference:
- https://astro.build/blog/astro-7/
- https://astro.build/blog/astro-720/

## Content strategy for Sang

### Homepage
1. “I build AI systems that have to work.”
2. Short positioning statement.
3. YHCT + Curren as flagship systems.
4. Work history.
5. Selected research publications.
6. Contact.

### YHCT case study
Emphasize:
- bounded LLM assistance;
- deterministic clinical authority;
- governed retrieval and exact citations;
- provenance/audit;
- identity/HIS/security/recovery acceptance controls;
- safe sanitized demo only.

### Curren case study
Emphasize:
- point-in-time data contracts;
- structural/divergence hypothesis families;
- leakage-aware validation;
- multiple-testing / uniqueness / PBO diagnostics;
- restart-safe signal lifecycle;
- historical showcase without exposing private alpha or credentials.

## Explicitly avoid
- skill percentage bars;
- 10+ project grids;
- “passionate developer who loves solving problems” filler;
- fake usage metrics;
- generic cyberpunk/crypto visuals;
- autoplay video/audio;
- 3D/WebGL hero that delays proof of work;
- exposing internal production systems as the public demo.
