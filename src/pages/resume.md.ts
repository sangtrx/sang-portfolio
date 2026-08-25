import type { APIRoute } from 'astro';
import { achievements, additionalExperience, education, experience, profile, projects, publications, skillGroups } from '../data/site';

export const prerender = true;

const bullets = (items: string[]) => items.map((x) => `  - ${x}`).join('\n');

export const GET: APIRoute = () => {
  const text = `# Sang Truong — Résumé

> Senior AI/LLM Engineer and Technical Lead with 6+ years building production AI products and research systems end to end.

## Work experience
${experience.map((x) => `### ${x.role} — ${x.company}\n${x.period}\n\n${x.summary}\n${bullets(x.details)}`).join('\n\n')}

## Additional experience
${additionalExperience.map((x) => `### ${x.role} — ${x.company}\n${x.period}\n${bullets(x.details)}`).join('\n\n')}

## Selected systems
${projects.map((p) => `- **${p.title}** — ${p.summary} Status: ${p.status}.`).join('\n')}

## Technical skills
${skillGroups.map((g) => `- **${g.title}:** ${g.items.join(', ')}`).join('\n')}

## Education
${education.map((e) => `- **${e.title}, ${e.institution} (${e.period})** — ${e.detail}`).join('\n')}

## Achievements
${achievements.map((a) => `- **${a.title}** — ${a.institution}, ${a.year}`).join('\n')}

## Selected publications
${publications.map((p) => `- **${p.title}** — ${p.venue}, ${p.year}. ${p.detail}. ${p.href}`).join('\n')}

## Contact
- Email: ${profile.email}
- GitHub: ${profile.github}
- LinkedIn: ${profile.linkedin}
- Google Scholar: ${profile.scholar}
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
