import type { APIRoute } from 'astro';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong

> Senior AI/LLM Engineer and Technical Lead focused on production AI, reliable agent systems, clinical AI, quantitative research infrastructure, backend/data systems, evaluation, and deployment ownership.

Claims on this portfolio deliberately distinguish implemented, tested, deployed, accepted, pending, and unclaimed states. Sensitive hospital data, credentials, production secrets, and private trading alpha are not published.

## Profile
- [Portfolio overview](${url('/index.md')}): positioning, selected systems, ownership, experience, research, and identity.
- [About Sang Truong](${url('/about.md')}): engineering principles, technical skills, education, achievements, research, and identity.
- [Résumé](${url('/resume.md')}): work history, additional experience, selected systems, skills, education, achievements, publications, and contact.

## Case studies
- [YHCT Clinical AI Platform](${url('/work/yhct.md')}): bounded interleaved clinical agent, governed local corpus, explicit fact ownership, provider portability, supported inputs, and recorded UAT validation evidence.
- [Curren](${url('/work/curren.md')}): point-in-time quant research, immutable publication proofs, one-way public read model, FastAPI, CLI, MCP, and explicit production non-claims.

## External identity
- [GitHub](https://github.com/sangtrx): public source and engineering activity.
- [LinkedIn](https://linkedin.com/in/tqsang): professional identity.
- [Google Scholar](https://scholar.google.com/citations?user=JG2yzhgAAAAJ): research publications.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
