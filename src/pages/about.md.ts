import type { APIRoute } from 'astro';
import { achievements, education, profile, publications, skillGroups } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const text = `# About Sang Truong

> Senior AI/LLM Engineer and Technical Lead focused on research rigor, explicit system boundaries, and production ownership.

## What I do
I work across AI/LLM architecture, bounded agent runtimes, retrieval and knowledge systems, backend APIs, data pipelines, evaluation, deployment, and the product behavior around them. The recurring goal is to turn probabilistic model capability into a system with explicit authority, evidence, failure, and acceptance contracts.

## Engineering principles
- Bound the model where authority, permissions, or safety require it.
- Make evidence inspectable instead of treating fluent output as proof.
- Treat deployment, restart behavior, auditability, observability, and handoff as product requirements.
- Distinguish implemented, tested, deployed, accepted, and production-ready claims.

## Technical skills
${skillGroups.map((g) => `- **${g.title}:** ${g.items.join(', ')}`).join('\n')}

## Education
${education.map((e) => `- **${e.title}, ${e.institution} (${e.period})** — ${e.detail}`).join('\n')}

## Achievements
${achievements.map((a) => `- **${a.title}** — ${a.institution}, ${a.year}`).join('\n')}

## Selected publications
${publications.map((p) => `- **${p.title}** — ${p.venue}, ${p.year}. ${p.detail}. ${p.href}`).join('\n')}

## Identity
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Google Scholar: ${profile.scholar}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
