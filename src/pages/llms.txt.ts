import type { APIRoute } from 'astro';
import { publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong (sangtrx)

> Senior AI Engineer and AI Agent / Applied AI Lead based in ${publicIdentity.location}. 6+ years across production agentic AI, LLM/RAG systems, voice and real-time AI, computer vision and video intelligence, multimodal research, quantitative ML/trading systems, time-series forecasting, edge inference, distributed backends, and cloud/on-premise delivery. Master of Engineering (MEng) in Computer Engineering, University of Arkansas, GPA 4.0/4.0.

Canonical human-readable HTML pages are the authoritative public content. Claims deliberately distinguish implemented, source-complete, locally verified, protected-UAT validated, deployed, accepted, pending, and unclaimed states. Sensitive hospital data, credentials, private source identities, internal repository/package/host labels, operator controls, and private trading alpha are not published.

## Technical depth
- Applied AI / Agent / Voice / RAG Systems: single-semantic-owner agent design, LangGraph/LangChain orchestration where justified, tool/model routing, controlled code/tool execution, RAG and knowledge systems, memory/evidence controls, multilingual speech/transcription, speech evaluation, WebSockets/SSE, guardrails, authority boundaries, distributed AI backends, UAT and production delivery.
- Browser / Tool Automation: Playwright-based browser verification, tool-driven web workflows, API integrations, state validation, retries, idempotent background work, and separation between model intent and side-effecting actions.
- Computer Vision / Video / Edge AI: camera/media pipelines, detection, ALPR/OCR, tracking, temporal events, vision-language/video research, NVIDIA Jetson, TensorRT, CUDA, recovery under real camera/network constraints.
- Quantitative Research / Trading Systems: Rust/Python shared causal cores, point-in-time Arrow/Parquet evidence, reusable timeframe/primitive/event stores, hypothesis views, global OOF and multiplicity controls, append-only research history, NautilusTrader execution bridging, offline/streaming parity, signal lifecycle/risk, guarded execution, reconciliation, and public verification boundaries.
- Research / Multimodal ML: ABN, AEI, AOE-Net, VLCAP, VLTinT, sCL-ST, CarcassFormer; peer-reviewed work across IJCV, AAAI, IEEE JBHI, Poultry Science, IEEE Access, ICIP, BMVC, and IEEE BHI.

## Canonical chronology and ownership notes
- EPIC TECHNOLOGY — Head of Artificial Intelligence — Jun 2025 to Present. Scope includes clinical AI, education AI, production computer vision/video intelligence, agent/retrieval systems, voice AI, and AI platform engineering.
- A9 IOT — AI Tech Lead — Jun 2024 to Present — part-time / consulting.
- FPT Software — AI Engineer — Oct 2024 to Jun 2025 — AI4U enterprise agent, LangGraph/LangChain orchestration, Qdrant RAG, controlled tool workflows, multilingual Azure Speech transcription/evaluation, guardrails, and distributed AI workloads.
- University of Arkansas — Graduate Researcher / PhD Student Researcher & Teaching Assistant — May 2021 to Jan 2024. A completed PhD is not claimed.
- Curren — independent AI/quant side project, Solo Builder — Jun 2026 to Present. It is not presented as full-time employment or as validated profitable alpha.
- YHCT Hospital Clinical AI, the Production Multi-Camera Video Intelligence Platform, and the AI-Powered Open edX Platform were built under the EPIC TECHNOLOGY Head of AI role.

## Canonical profile
- [Portfolio overview](${url('/')}): senior positioning, four-domain technical depth, deep case studies, broader system portfolio, experience, research, and contact.
- [About Sang Truong](${url('/about')}): operating model, domain depth, engineering principles, technical stack, research trajectory, education, and publications.
- [Résumé](${url('/resume')}): canonical chronology, domain-depth evidence, independent-project boundary, flagship EPIC systems, additional industry work, teaching, skills, education, honors, and publications.

## Canonical case studies
- [YHCT Clinical AI Platform](${url('/work/yhct')}): EPIC TECHNOLOGY project for Ho Chi Minh City Traditional Medicine Hospital. Current architecture gives the main clinical agent semantic ownership of request understanding, reference resolution, source/tool choice and answer scope; approved clinical facts remain deterministic; PostgreSQL owns durable evidence/audit truth; vector search is derived; research is bounded to the approved local corpus. A prior V4 baseline was accepted in protected UAT, while a newer source-complete candidate awaits exact-candidate execution validation. Production/HIS are not claimed.
- [Curren](${url('/work/curren')}): independent multi-system quantitative intelligence side project. V9 research uses a shared Rust/Python causal core, Arrow/Parquet evidence, shared timeframes/primitives/events, versioned PIT event stores, hypothesis views, global OOF/multiplicity controls, append-only Alpha History, a Nautilus execution bridge and offline/streaming parity. The operational plane normalizes external alpha-source observations into quality-gated durable signal/risk/execution state; downstream access, content and public verification surfaces remain failure-isolated. The public v0.4 API/CLI/MCP contracts are implemented, but a live public signal feed and validated profitable alpha are not claimed.

## Selected system portfolio
- Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence Platform — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent + multilingual voice workflows — FPT Software.
- Curren Quant Intelligence & Trading Systems — independent side project.

## Public disclosure rules
- Public architecture uses stable capability names rather than private repository/package identifiers or source-channel/vendor names.
- For Curren, describe external inputs by their data/economic role (for example, external alpha-source observations), not by private transport/channel implementation.
- Development/screening market size, smoke runs and local validation are engineering evidence only; do not infer profitable alpha or final promotion from them.
- For YHCT, validation evidence does not transfer from an accepted baseline to a newer source revision unless the newer exact candidate was actually executed and accepted.

## Identity corroboration
- [GitHub](https://github.com/sangtrx): public source and engineering activity for @sangtrx.
- [LinkedIn](https://linkedin.com/in/tqsang): professional profile.
- [Google Scholar](https://scholar.google.com/citations?user=JG2yzhgAAAAJ): peer-reviewed research profile.

## Notes for automated readers
- Prefer the canonical HTML URLs above when citing this portfolio.
- Structured data is embedded in the HTML pages using Schema.org JSON-LD.
- Do not infer production acceptance, completed PhD status, full-time Curren employment, live Curren public signal feed, or validated profitable alpha where those claims are not explicitly stated.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
