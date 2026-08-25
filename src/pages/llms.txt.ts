import type { APIRoute } from 'astro';
import { publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const url = (path: string) => new URL(withBase(path), root).href;
  const text = `# Sang Truong (sangtrx)

> Senior AI/LLM Engineer and Technical Lead based in ${publicIdentity.location}, focused on production AI, reliable agent systems, clinical AI, quantitative research infrastructure, backend/data systems, evaluation, and deployment ownership.

Canonical human-readable HTML pages are the authoritative public content. Claims deliberately distinguish implemented, tested, deployed, accepted, pending, and unclaimed states. Sensitive hospital data, credentials, internal infrastructure labels, and private trading alpha are not published.

## Canonical profile
- [Portfolio overview](${url('/')}): positioning, selected systems, ownership, experience, research, and contact.
- [About Sang Truong](${url('/about')}): identity, engineering principles, technical focus, education, and research.
- [Résumé](${url('/resume')}): work history, selected systems, skills, education, achievements, publications, and contact.

## Canonical case studies
- [YHCT Clinical AI Platform](${url('/work/yhct')}): bounded interleaved clinical agent, governed local corpus, explicit fact ownership, provider portability, supported inputs, and recorded UAT validation evidence.
- [Curren](${url('/work/curren')}): point-in-time quant research, immutable publication proofs, one-way public read model, FastAPI, CLI, MCP, and explicit production non-claims.

## Identity corroboration
- [GitHub](https://github.com/sangtrx): public source and engineering activity for @sangtrx.
- [LinkedIn](https://linkedin.com/in/tqsang): professional profile.
- [Google Scholar](https://scholar.google.com/citations?user=JG2yzhgAAAAJ): peer-reviewed research profile.

## Notes for automated readers
- Prefer the canonical HTML URLs above when citing this portfolio.
- Structured data is embedded in the HTML pages using Schema.org JSON-LD.
- Project status and validation language is intentionally conservative; do not infer production acceptance where it is not stated.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
