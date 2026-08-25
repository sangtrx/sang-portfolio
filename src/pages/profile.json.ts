import type { APIRoute } from 'astro';
import { achievements, education, experience, profile, projects, publications, skillGroups } from '../data/site';
import { personSchema, publicIdentity } from '../lib/identity';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const root = site ?? new URL('https://sangtruong.me');
  const canonical = new URL(withBase('/about'), root).href;
  const payload = {
    schemaVersion: '1.0',
    updated: '2026-08-25',
    canonical,
    identity: {
      ...personSchema(root),
      handle: publicIdentity.handle,
      locationLabel: publicIdentity.location,
    },
    positioning: {
      title: profile.title,
      summary: profile.intro,
      expertise: publicIdentity.expertise,
      skills: skillGroups,
    },
    currentExperience: experience,
    education,
    achievements,
    selectedProjects: projects.map((project) => ({
      title: project.title,
      role: project.role,
      summary: project.summary,
      status: project.status,
      url: new URL(withBase(project.href), root).href,
    })),
    selectedPublications: publications,
    publicProfiles: {
      github: profile.github,
      linkedin: profile.linkedin,
      scholar: profile.scholar,
      resumeSource: profile.resumeSource,
    },
    claimPolicy: 'Public claims distinguish implemented, tested, deployed, accepted, pending, and unclaimed states. Confidential hospital data, credentials, internal infrastructure labels, and private trading alpha are excluded.',
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'X-Robots-Tag': 'noindex, follow',
      Link: `<${canonical}>; rel="canonical"`,
    },
  });
};
