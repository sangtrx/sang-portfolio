import type { APIRoute } from 'astro';
import { publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong (sangtrx)

> ${publicIdentity.role} based in ${publicIdentity.location}. 6+ years across production agentic AI, LLM/RAG systems, voice and real-time AI, computer vision and video intelligence, multimodal research, quantitative ML/trading systems, time-series forecasting, edge inference, distributed backends, and cloud/on-premise delivery. Master of Engineering (MEng) in Computer Engineering, University of Arkansas, GPA 4.0/4.0.

Canonical human-readable HTML pages are the authoritative public content. Claims deliberately distinguish implemented, source-complete, locally verified, protected-UAT validated, deployed, accepted, pending, and unclaimed states. Sensitive hospital data, credentials, private source identities, internal repository/package/host labels, operator controls, release identifiers, and private trading alpha are not published.

## Technical depth
- Applied AI / Agent / Voice / RAG Systems: single-semantic-owner agent design, LangGraph/LangChain orchestration where justified, tool/model routing, controlled code/tool execution, RAG and knowledge systems, memory/evidence controls, multilingual speech/transcription, speech evaluation, WebSockets/SSE, guardrails, authority boundaries, distributed AI backends, UAT and production delivery.
- Browser / Tool Automation: Playwright-based browser verification, tool-driven web workflows, API integrations, state validation, retries, idempotent background work, and separation between model intent and side-effecting actions.
- Computer Vision / Video / Edge AI: camera/media pipelines, detection, ALPR/OCR, tracking, temporal events, vision-language/video research, NVIDIA Jetson, TensorRT, CUDA, recovery under real camera/network constraints. Named technologies here do not imply production ownership when the Career OS evidence level is research or hands-on.
- Quantitative Research / Trading Systems: Rust/Python shared causal cores, point-in-time Arrow/Parquet evidence, reusable timeframe/primitive/event stores, hypothesis views, global OOF and multiplicity controls, append-only research history, NautilusTrader execution bridging, offline/streaming parity, signal lifecycle/risk, guarded execution, reconciliation, and public verification boundaries.
- Research / Multimodal ML: ABN, AEI, AOE-Net, VLCAP, VLTinT, sCL-ST, CarcassFormer; peer-reviewed work across IJCV, AAAI, IEEE JBHI, Poultry Science, IEEE Access, ICIP, BMVC, and IEEE BHI.

## Canonical chronology and ownership notes
- EPIC TECHNOLOGY — Head of Artificial Intelligence — Jun 2025 to Present. Scope includes clinical AI, education AI, production computer vision/video intelligence, agent/retrieval systems, voice AI, and AI platform engineering.
- A9 IOT — AI Tech Lead — Jun 2024 to Present — part-time / consulting affiliation.
- FPT Software — AI Engineer — Oct 2024 to Jun 2025 — AI4U enterprise agent, LangGraph/LangChain orchestration, Qdrant RAG, controlled tool workflows, multilingual Azure Speech transcription/evaluation, guardrails, and distributed AI workloads.
- University of Arkansas — Graduate Researcher / PhD Student Researcher & Teaching Assistant — May 2021 to Jan 2024. A completed PhD is not claimed.
- Curren — independent AI/quant side project, Solo Builder — Jun 2026 to Present. It is not presented as full-time employment or as validated profitable alpha.
- Ho Chi Minh City Traditional Medicine Hospital Clinical AI, the Production Multi-Camera Video Intelligence Platform, and the AI-Powered Open edX Platform were built under the EPIC TECHNOLOGY Head of AI role.

## Canonical profile
- [Portfolio overview](${url('/')}): senior positioning, four-domain technical depth, deep case studies, broader system portfolio, experience, research, and contact.
- [About Sang Truong](${url('/about')}): operating model, domain depth, engineering principles, technical stack, research trajectory, education, and publications.
- [Résumé](${url('/resume')}): canonical chronology, domain-depth evidence, independent-project boundary, flagship EPIC systems, additional industry work, teaching, skills, education, honors, and publications.

## Canonical case studies
- [Ho Chi Minh City Traditional Medicine Hospital](${url('/work/yhct')}): EPIC TECHNOLOGY clinical AI and decision-support project for https://www.yhct.vn/. The V4 clinician architecture keeps semantic turn ownership in the main clinical agent while approved clinical facts, durable evidence/audit truth, permissions and publication safety remain application-controlled. A protected-UAT baseline was validated and deployed, but subsequent real clinician feedback superseded the previous doctor-ready snapshot. Feedback-driven stabilization is currently in progress and the resulting source must pass its exact validation/deployment gate before being treated as the next UAT baseline. Production/HIS are not claimed.
- [Curren](${url('/work/curren')}): independent multi-system quantitative intelligence side project. Research uses a shared Rust/Python causal core, Arrow/Parquet evidence, shared timeframes/primitives/events, versioned PIT event stores, hypothesis views, global OOF/multiplicity controls, append-only Alpha History, an execution simulation bridge and offline/streaming parity. The operational plane normalizes external alpha-source observations into quality-gated durable signal/risk/execution state; downstream access, content and public verification surfaces remain failure-isolated. Public API/CLI/MCP contracts are implemented, but a live public signal feed and validated profitable alpha are not claimed.

## Selected system portfolio
- Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence Platform — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent + multilingual voice workflows — FPT Software.
- Curren Quant Intelligence & Trading Systems — independent side project.

## Public disclosure rules
- Public architecture uses stable capability names rather than private repository/package identifiers, source-channel/vendor names, branch names, or internal release labels.
- For Curren, describe external inputs by their data/economic role (for example, external alpha-source observations), not by private transport/channel implementation.
- Development/screening market size, smoke runs and local validation are engineering evidence only; do not infer profitable alpha or final promotion from them.
- Technology-group membership means public-safe mention in a capability domain; it does not automatically mean production ownership. Preserve the Career OS evidence level when wording would otherwise imply a stronger level.
- For the hospital platform, validation/deployment evidence from the previous protected-UAT baseline does not transfer to the current clinician-feedback stabilization source until the exact resulting source passes the required gate and is deliberately redeployed.

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
