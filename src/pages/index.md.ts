import type { APIRoute } from 'astro';
import { experience, ownership, profile, projects, publications } from '../data/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const text = `# Sang Truong — Senior AI/LLM Engineer & Technical Lead

> ${profile.intro}

## Positioning
- Production AI and agent systems
- Retrieval and knowledge systems
- Clinical AI
- Quantitative research and trading infrastructure
- Backend/data architecture, evaluation, deployment, and technical leadership

## Selected systems
${projects.map((p) => `- **${p.title}** — ${p.kicker}. ${p.summary} Status: ${p.status}.`).join('\n')}

## Engineering ownership
${ownership.map((x) => `- **${x.title}:** ${x.detail}`).join('\n')}

## Current / recent experience
${experience.map((x) => `- **${x.role}, ${x.company} (${x.period})** — ${x.summary}`).join('\n')}

## Selected research
${publications.map((p) => `- **${p.title}** — ${p.venue}, ${p.year}. ${p.detail}. ${p.href}`).join('\n')}

## Identity
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Google Scholar: ${profile.scholar}
- Email: ${profile.email}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
