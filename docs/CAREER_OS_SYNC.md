# Career OS → Portfolio Sync Contract

The private `sangtrx/Sang_Resume` repository is Sang's Personal Career OS / second brain.

The public portfolio is a downstream presentation layer.

## Personal-fact authority

Use this order for identity/biography facts:

1. `Sang_Resume/brain/` — private verified truth;
2. `Sang_Resume/public/profile.yaml` — sanitized public projection;
3. this repository's `src/data/site.ts` presentation model.

`src/data/site.ts` can compress facts for presentation but must not create a new chronology, credential, technology-experience level, project ownership claim or canonical title.

## Project-status authority

Living project status is separate from biography truth:

- Hospital Clinical AI status must be reconciled against current YHCT source/validated-candidate authority, including any newer clinician-feedback stabilization state.
- Curren implementation/deployment status must be reconciled across its owning repositories and public read-model contract.

Do not infer current deployment status solely from the Career OS, because project status can change faster than career biography.

A validated/deployed baseline and a newer changed source are separate evidence states. Never transfer baseline validation to the newer source until that exact resulting source passes its own required gate.

## Canonical public identity

- Name: Sang Truong
- Handle: sangtrx
- Broad title: **Senior AI Engineer · Applied AI Lead**
- Professional anchor / current employer: **Head of Artificial Intelligence at EPIC TECHNOLOGY**
- Current consulting affiliation: **A9 IOT — Part-time / Consulting**
- Depth domains:
  - Applied AI / LLM / Agent Systems
  - Computer Vision / Video / Edge AI
  - Quantitative Research / Trading Systems
  - Research / Multimodal & Temporal ML

Agent/voice/RAG is an important depth domain, not a replacement canonical title.

For structured data, EPIC belongs under current employment (`worksFor`); A9 is an affiliation/consulting relationship rather than a second equivalent full-time employer.

## Technology evidence semantics

`Sang_Resume/public/profile.yaml` may group technologies by public capability domain, but group membership means only **safe to mention in that domain**. It does not mean production ownership.

The evidence-level owner remains `Sang_Resume/brain/skills/technology_registry.yaml`:

- `production`
- `hands_on`
- `research`
- `conceptual`
- `unsupported`

Portfolio prose, JSON-LD, `llms.txt`, and skills sections must preserve these distinctions whenever the wording could imply a stronger level.

## Unsupported direct-experience boundary

Unless the upstream Career OS evidence registry changes, do not present prior direct production ownership of:

- Supabase
- Hyperbrowser
- LaunchDarkly
- LangWatch
- Sentry

Adjacent architecture can be discussed where useful.

## Sync checklist

When updating biography/resume/public identity:

1. inspect current `Sang_Resume/public/profile.yaml`;
2. inspect relevant `brain/` evidence if the public projection is ambiguous;
3. change `src/data/site.ts` only as a downstream presentation update;
4. check page metadata/JSON-LD/`llms.txt` for the same identity wording;
5. preserve employer vs consulting-affiliation semantics;
6. preserve technology evidence levels;
7. build the Astro site;
8. verify no project-status claims were accidentally changed as part of an identity sync.
