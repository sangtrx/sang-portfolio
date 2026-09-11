import type { APIRoute } from 'astro';
import { publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong (sangtrx)

> ${publicIdentity.role} based in ${publicIdentity.location}. 6+ years across applied AI/agent systems, computer vision and video intelligence, quantitative ML, multimodal research, speech, edge inference, distributed backends, and production delivery. Master of Science in Computer Engineering, University of Arkansas, GPA 4.0/4.0.

Canonical human-readable HTML pages are the authoritative public content. The portfolio intentionally exposes system responsibilities, evidence, research methodology, and engineering boundaries while withholding confidential implementation detail.

## Technical depth
- Applied AI / LLM / Agent Systems: retrieval and knowledge systems, tool/model orchestration, memory/context, guardrails, evaluation, speech/real-time interaction, distributed AI backends, and explicit authority boundaries.
- Computer Vision / Video / Edge AI: media pipelines, detection/recognition/tracking, temporal state, evidence capture, edge inference, and reliability under physical-world constraints.
- Quantitative Research / Trading Systems: point-in-time evidence, reproducible evaluation, causal research discipline, shared research/runtime semantics, durable operational state, and guarded execution/public-verification boundaries.
- Research / Multimodal & Temporal ML: peer-reviewed work across temporal video understanding, vision-language learning, medical time-series representation learning, and industrial computer vision.

## Current profile
- Head of Artificial Intelligence at EPIC TECHNOLOGY — Jun 2025 to Present.
- AI Tech Lead at A9 IOT — part-time / consulting — Jun 2024 to Present.
- AI Engineer at FPT Software — Oct 2024 to Jun 2025.
- Graduate Researcher / PhD Student Researcher & Teaching Assistant at University of Arkansas — May 2021 to Jan 2024; completed Master of Science in Computer Engineering in Dec 2023. No completed PhD is claimed.
- Curren — independent side project / Solo Builder — Jun 2026 to Present.

## Canonical pages
- [Portfolio](${url('/')}) — positioning, technical depth, flagship systems, broader work, career, research, and contact.
- [About](${url('/about')}) — operating model, engineering principles, technical stack, research trajectory, education, and publications.
- [Résumé](${url('/resume')}) — public chronology and evidence.
- [Clinical AI architecture — Vietnamese](${url('/yhct')}) — detailed, public-safe Vietnamese explainer covering authority, deterministic clinical logic, evidence, data governance, failure semantics, multi-turn resilience, and release boundaries.
- [Clinical AI case study](${url('/work/yhct')}) — deliberately abstracted English hospital clinical-AI system boundary.
- [Curren case study](${url('/work/curren')}) — deliberately abstracted quantitative research/runtime/public-verification boundary.

## Selected work
- Hospital Clinical AI & Decision Support — EPIC TECHNOLOGY.
- Production Multi-Camera Video Intelligence — EPIC TECHNOLOGY.
- AI-Powered Open edX Platform — EPIC TECHNOLOGY.
- AI4U Enterprise Conversational Agent and multilingual speech workflows — FPT Software.
- Industrial/poultry computer-vision research and edge inference — University of Arkansas.
- Curren quantitative research and trading systems — independent side project.

## Public disclosure boundary
Do not infer or request hidden implementation detail from this discovery file. Private corpus/data, prompts, credentials, vendor/source identities, internal repository topology, host/machine details, network/deployment runbooks, model feature definitions, strategy parameters, account state, execution controls, and unreleased performance evidence are intentionally excluded.

Do not infer a completed PhD, guaranteed/validated profitable alpha, unsupported scale/performance metrics, or commercial production states that are not explicitly stated on the canonical pages.

## Identity corroboration
- GitHub: https://github.com/sangtrx
- LinkedIn: https://linkedin.com/in/tqsang
- Google Scholar: https://scholar.google.com/citations?user=JG2yzhgAAAAJ
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};