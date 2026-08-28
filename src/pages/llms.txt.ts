import type { APIRoute } from 'astro';
import { publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong (sangtrx)

> Senior AI Engineer and Applied AI Lead based in ${publicIdentity.location}. 6+ years across production LLM/RAG/agent systems, computer vision and video intelligence, multimodal research, quantitative ML/trading systems, time-series forecasting, speech AI, edge inference, distributed backends, and cloud/on-premise delivery. Master of Engineering (MEng) in Computer Engineering, University of Arkansas, GPA 4.0/4.0.

Canonical human-readable HTML pages are the authoritative public content. Claims deliberately distinguish implemented, locally verified, protected-UAT validated, deployed, accepted, pending, and unclaimed states. Sensitive hospital data, credentials, internal infrastructure labels, and private trading alpha are not published.

## Technical depth
- Applied AI / LLM / Agent Systems: agent orchestration, tool/model routing, RAG and knowledge systems, memory/context controls, guardrails, authority boundaries, distributed AI backends, UAT and production delivery.
- Computer Vision / Video / Edge AI: camera/media pipelines, detection, ALPR/OCR, tracking, temporal events, vision-language/video research, NVIDIA Jetson, TensorRT, CUDA, recovery under real camera/network constraints.
- Quantitative Research / Trading Systems: point-in-time data, reusable feature/hypothesis pipelines, event studies/backtests, OOS/walk-forward validation, leakage and overfitting controls, ML selection, signal lifecycle, risk, execution/reconciliation/recovery.
- Research / Multimodal ML: ABN, AEI, AOE-Net, VLCAP, VLTinT, sCL-ST, CarcassFormer; peer-reviewed work across IJCV, AAAI, IEEE JBHI, Poultry Science, IEEE Access, ICIP, BMVC, and IEEE BHI.

## Canonical chronology and ownership notes
- EPIC TECHNOLOGY — Head of Artificial Intelligence — Jun 2025 to Present. Scope includes clinical AI, education AI, production computer vision/video intelligence, and AI platform engineering.
- A9 IOT — AI Tech Lead — Jun 2024 to Present — part-time / consulting.
- FPT Software — AI Engineer — Oct 2024 to Jun 2025 — enterprise AI4U agent, Qdrant RAG, multilingual speech and distributed AI workloads.
- University of Arkansas — Graduate Researcher / PhD Student Researcher & Teaching Assistant — May 2021 to Jan 2024. A completed PhD is not claimed.
- Curren — independent AI/quant side project, Solo Builder — Jun 2026 to Present. It is not presented as full-time employment.
- YHCT Hospital Clinical AI, the Production Multi-Camera Video Intelligence Platform, and the AI-Powered Open edX Platform were built under the EPIC TECHNOLOGY Head of AI role.

## Canonical profile
- [Portfolio overview](${url('/')}): senior positioning, four-domain technical depth, deep case studies, broader system portfolio, experience, research, and contact.
- [About Sang Truong](${url('/about')}): operating model, domain depth, engineering principles, technical stack, research trajectory, education, and publications.
- [Résumé](${url('/resume')}): canonical chronology, domain-depth evidence, independent-project boundary, flagship EPIC systems, additional industry work, teaching, skills, education, honors, and publications.

## Canonical case studies
- [YHCT Clinical AI Platform](${url('/work/yhct')}): EPIC TECHNOLOGY project for Ho Chi Minh City Traditional Medicine Hospital; bounded interleaved clinical agent, deterministic release-pinned clinical authority, governed local corpus, durable state, protected-UAT provenance acceptance, clinician-feedback stabilization, and explicit production non-claims.
- [Curren](${url('/work/curren')}): independent side project; point-in-time quant data and hypothesis research, leakage/overfitting controls, ML selection, durable signal/risk lifecycle, guarded execution boundaries, immutable public proofs, FastAPI, CLI, MCP, and explicit live-feed/profitability non-claims.

## Selected system portfolio
- Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence Platform — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent — FPT Software.
- Curren Quant Research & Trading Systems — independent side project.

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
