import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong

Senior AI/LLM Engineer and Technical Lead. Production AI, reliable agent systems, clinical AI, quantitative research infrastructure, backend/data systems, evaluation, and deployment ownership.

## Canonical pages
- [Home](${url('/')}) — concise positioning, selected systems, experience, research, contact.
- [About](${url('/about')}) — professional profile, engineering principles, skills, education, research.
- [Résumé](${url('/resume')}) — web résumé.
- [YHCT Clinical AI Platform](${url('/work/yhct')}) — bounded agentic clinical AI, governed local corpus, explicit fact ownership, UAT validation.
- [Curren](${url('/work/curren')}) — point-in-time quantitative research, immutable publication proofs, API, CLI, MCP.

## External identity
- GitHub: https://github.com/sangtrx
- LinkedIn: https://linkedin.com/in/tqsang
- Google Scholar: https://scholar.google.com/citations?user=JG2yzhgAAAAJ

## Evidence policy
Portfolio claims distinguish implemented, tested, deployed, accepted, pending, and explicitly unclaimed states. Sensitive hospital data, credentials, private alpha, and production secrets are not published.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
