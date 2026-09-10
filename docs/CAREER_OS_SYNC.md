# Career Records → Portfolio Sync Contract

The public portfolio is a downstream presentation of Sang Truong's current career records and project evidence.

## Public identity

- Name: Sang Truong
- Handle: sangtrx
- Broad title: **Senior AI Engineer · Applied AI Systems**
- Current professional anchor: **Head of Artificial Intelligence at EPIC TECHNOLOGY**
- Consulting affiliation: **A9 IOT — Part-time / Consulting**
- Depth domains:
  - Applied AI / LLM / Agent Systems
  - Computer Vision / Video / Edge AI
  - Quantitative Research / Trading Systems
  - Research / Multimodal & Temporal ML

Staff/Principal-level capability should be demonstrated through ownership and technical depth, not used as an unsupported public title.

## Sync rules

1. Use the newest reconciled public career projection for biography, chronology, education, ownership, and positioning.
2. Cross-check current owning-project evidence when a project-status claim matters.
3. Preserve the distinction between implemented, tested, validated, deployed, accepted, and unclaimed states.
4. Keep employer/client ownership explicit.
5. Preserve technology evidence levels; a tool being safe to mention does not automatically mean production ownership.
6. Keep confidential project material out of the public portfolio even when it exists in private engineering records.

## Public abstraction boundary

The portfolio may summarize system responsibilities, architectural boundaries, causal methodology, failure classes, and evidence. It must not expose private repositories, internal package topology, credentials, prompts, proprietary data, private source identities, host/machine details, runbooks, trading strategy internals, transient release identifiers, or client-sensitive implementation details.

## Update checklist

When updating the public portfolio:

1. reconcile identity and chronology against the current public career projection;
2. cross-check relevant project evidence;
3. update `src/data/site.ts` as the presentation model;
4. align page metadata, structured data, and `llms.txt`;
5. verify no stronger project-status or technology claim was introduced;
6. verify all public links and artifacts are intentionally safe to expose;
7. run the Astro build/CI checks.
