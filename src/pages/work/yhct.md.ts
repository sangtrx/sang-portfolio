import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const text = `# YHCT Clinical AI Platform — Case Study

> A clinician-facing AI assistant designed so flexible model reasoning and governed clinical authority can coexist without pretending they are the same thing.

Last portfolio verification: 25 Aug 2026.

## Role
AI Architect / Lead Builder.

## Current state
- V3 merged and deployed to UAT.
- Current phase: clinician UAT ready.
- Manual clinician acceptance / hospital handoff is pending.
- Production deployment and production acceptance are not claimed.

## Architecture
Clinician input, supported files, and durable conversation state flow into a bounded interleaved main-agent loop. Each model round returns one validated action: **FINAL**, **CALL_TOOLS**, or **ASK_USER**. Tool observations return to the model for the next bounded reasoning round.

Tool groups:
- Clinical: interaction checks, drug/herb lookup, prescription review.
- Local corpus: search corpus, open result, search within source.
- Files/compute: open/search attachment, calculator, unit conversion, optional isolated Python analysis.

Core invariant: **the model owns workflow and synthesis; tools and governed sources own the facts they return.**

## Reliability boundaries
- Runtime clinician research uses a governed local corpus, not arbitrary live web fetches.
- OpenAI and fully local model paths use the same application-level action contract; full-local mode cannot silently fall back to OpenAI.
- Recent messages, rolling summaries, active clinical items, attachments, prior tool observations, and clarification checkpoints are bounded and durable.
- Total model rounds, tool calls, concurrency, repeated calls, and turn wall time are bounded.

## Runtime/data stack
- Next.js clinician UI
- FastAPI backend / agent runtime
- PostgreSQL canonical conversation and metadata state
- Qdrant derived vector index
- MinIO / S3-compatible source bytes
- Redis coordination

## Supported inputs
Broad safe/medical text, pasted prescriptions/tables, TXT, Markdown, text-extractable PDF, DOCX, CSV, XLS, XLSX.

Not claimed: image vision, scanned-document OCR, audio/video input, live web freshness, exhaustive black-box clinical evaluation, or production acceptance.

## Recorded validation evidence
- 855 backend tests passed; 59 external-resource cases skipped.
- Ruff checks/format over 538 files.
- Strict mypy across 301 source files.
- 30 frontend rendering contracts passed.
- Frontend production build passed.
- Migration head 0023 with 59 required tables.
- UAT compose/render/image and protected runtime checks passed.
- Recorded grounded interaction, prescription, empty-evidence, history, and automated desktop/mobile browser cases passed.

## Public demo policy
Any portfolio demo must be isolated and sanitized: synthetic prescriptions, cleared knowledge, no patient data, no hospital production credentials, and no production integration surface.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
