# Portfolio Research — 2026-08-25

## Decision
Build a proof-of-work portfolio, not an online CV clone.

The strongest pattern for a senior/lead technical profile is:

**positioning → 2 flagship systems → deep case studies → experience → research → contact**

The differentiator is not a grid of technologies. It is the ability to explain architecture, ownership, trade-offs, operational constraints, evidence, and outcomes without overstating system status.

## Reference patterns

### Brittany Chiang — recruiter clarity
Useful ideas: immediate role/value proposition, fast scan, restrained interaction, clear path to deeper proof.

### Rauno Freiberg — craft and restraint
Useful idea: minimal interfaces feel senior when typography, spacing, and interaction details are deliberate.

### Lee Robinson — signal density
Useful idea: concise biography plus durable technical writing/proof is stronger than an oversized skill cloud.

### Josh Comeau — explanation as proof
Useful idea: interaction and visuals are valuable when they teach something about the work, not when they merely decorate it.

### Bruno Simon — spectacle as the product
Useful idea: highly interactive/WebGL portfolios work when creative frontend engineering is itself the role being sold. That level of spectacle would distract from Sang's AI/technical-lead positioning.

## Portfolio-specific content decisions

### Homepage
- Keep “I build AI systems that have to work.”
- Make the job function explicit: Senior AI/LLM Engineer · Technical Lead.
- Use YHCT + Curren only as flagship systems.
- Add ownership/evidence, not extra shallow projects.
- Keep selected peer-reviewed research visible.

### YHCT case study
Current canonical framing:
- bounded interleaved agent loop;
- `FINAL / CALL_TOOLS / ASK_USER` application contract;
- model owns workflow/synthesis, tools/sources own returned facts;
- governed local corpus at clinician runtime;
- OpenAI and fully-local provider portability through the same application contract;
- durable bounded conversation state;
- explicit UAT validation and production non-claims.

### Curren case study
Present two layers:
1. private point-in-time research / signal lifecycle;
2. public verifiable distribution surface.

Emphasize:
- `available_time <= event_time` research invariant;
- OOS/leakage-aware validation;
- one-way sanitized publication;
- immutable plan/lifecycle/outcome proofs;
- read-only API, CLI, MCP, and Omarchy clients;
- public-platform alpha status and pending production integration.

## Explicitly avoid
- skill percentage bars;
- 10+ project grids;
- generic “passionate developer” copy;
- fake usage metrics;
- generic cyberpunk/crypto visuals;
- autoplay video/audio;
- WebGL hero that delays proof of work;
- exposing internal production systems as portfolio demos;
- confusing “implemented” with “production accepted”.
