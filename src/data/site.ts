export const profile = {
  name: 'Sang Truong',
  title: 'AI/LLM Engineer · Technical Lead',
  eyebrow: 'Production AI · Reliable Agents · Quant Research',
  intro:
    'I build reliable AI systems end to end — from model and retrieval architecture through APIs, data pipelines, deployment, safety controls, and production verification.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
};

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'YHCT Clinical AI Platform',
    kicker: 'Clinical decision support under governed evidence',
    summary:
      'A hospital-facing clinical AI system that combines bounded LLM assistance, deterministic clinical authority, governed retrieval, exact citations, provenance, role-scoped state, and auditability.',
    role: 'AI Architect / Lead Builder',
    year: '2026',
    tags: ['Clinical AI', 'FastAPI', 'Next.js', 'PostgreSQL', 'RAG', 'Safety'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '02',
    title: 'Curren',
    kicker: 'Point-in-time quant research & trading intelligence',
    summary:
      'A systematic crypto research and signal platform spanning point-in-time market data, multi-timeframe structural hypotheses, leakage-aware validation, risk logic, lifecycle tracking, and guarded execution.',
    role: 'Independent Founder & Solo Builder',
    year: '2025 — Present',
    tags: ['Quant Research', 'PIT Data', 'Backtesting', 'Python', 'ML', 'Trading Systems'],
    href: '/work/curren',
    accent: 'cyan',
  },
];

export const experience = [
  {
    period: '2025 — Present',
    role: 'Head of Artificial Intelligence',
    company: 'EPIC TECHNOLOGY',
    summary:
      'Leading architecture and delivery across clinical AI, education, and industrial monitoring; translating ambiguous product requirements into testable safety, data, and system contracts.',
  },
  {
    period: '2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Real-time forecasting systems for environmental IoT streams, including continuous preprocessing, training, inference, and stakeholder-facing evaluation.',
  },
  {
    period: '2024 — 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Enterprise conversational AI with agentic orchestration, RAG, model routing, speech services, distributed workloads, guardrails, and production APIs.',
  },
  {
    period: '2021 — 2024',
    role: 'Research Assistant & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Multimodal video understanding, medical time-series learning, computer vision, and real-time edge deployment research.',
  },
];

export const publications = [
  {
    year: '2024',
    title: 'CarcassFormer',
    detail: 'Transformer-based poultry carcass defect analysis',
    venue: 'Poultry Science',
    href: 'https://doi.org/10.1016/j.psj.2024.103765',
  },
  {
    year: '2023',
    title: 'sCL-ST',
    detail: 'Contrastive learning for ECG arrhythmia classification',
    venue: 'IEEE JBHI',
    href: 'https://doi.org/10.1109/jbhi.2023.3246241',
  },
  {
    year: '2023',
    title: 'AOE-Net',
    detail: 'Entity interaction modeling for temporal action proposals',
    venue: 'IJCV',
    href: 'https://doi.org/10.1007/s11263-022-01702-9',
  },
  {
    year: '2023',
    title: 'VLTinT',
    detail: 'Vision-language modeling for video paragraph captioning',
    venue: 'AAAI',
    href: 'https://doi.org/10.1609/aaai.v37i3.25412',
  },
];
