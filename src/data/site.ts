export const profile = {
  name: 'Sang Truong',
  title: 'Senior AI/LLM Engineer · Technical Lead',
  eyebrow: 'Production AI · Reliable Agents · Quant Systems',
  intro:
    'I design and ship AI systems end to end — model and retrieval architecture, agent runtimes, APIs, data, evaluation, deployment, safety boundaries, and production verification.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
  resumeSource: 'https://github.com/sangtrx/Sang_Resume',
};

export const ownership = [
  {
    title: 'AI & system architecture',
    detail: 'Turn ambiguous product goals into explicit runtime, data, safety, and acceptance contracts.',
  },
  {
    title: 'Backend & product engineering',
    detail: 'Build the application path around the model: APIs, durable state, integrations, user-facing behavior, and operational controls.',
  },
  {
    title: 'Evaluation & reliability',
    detail: 'Define what “working” means, separate implemented from validated, and make failure modes visible instead of hiding them.',
  },
  {
    title: 'Deployment ownership',
    detail: 'Carry systems through containerization, environment profiles, observability, browser/runtime checks, and handoff boundaries.',
  },
];

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'YHCT Clinical AI Platform',
    kicker: 'Bounded agentic clinical AI with explicit fact ownership',
    summary:
      'A clinician-facing AI platform with an interleaved agent loop, governed local-corpus research, clinical tools, durable conversation state, OpenAI/local provider portability, and explicit evidence boundaries.',
    role: 'AI Architect / Lead Builder',
    year: '2026',
    status: 'Deployed UAT · clinician acceptance pending',
    proof: ['855 backend tests passed', 'BigLinux UAT validated', 'OpenAI ↔ local contract'],
    tags: ['Clinical AI', 'Agents', 'FastAPI', 'Next.js', 'PostgreSQL', 'RAG'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '02',
    title: 'Curren',
    kicker: 'Point-in-time research + verifiable public distribution',
    summary:
      'A quant research and trading-intelligence system spanning point-in-time data contracts, leakage-aware validation, private signal lifecycle, and a public read model exposed through API, CLI, MCP, and desktop integrations.',
    role: 'Independent Founder & Solo Builder',
    year: '2025 — Present',
    status: 'Public platform v0.4 alpha',
    proof: ['PIT research contract', 'Read-only API / CLI / MCP', 'Immutable result proofs'],
    tags: ['Quant Research', 'PIT Data', 'FastAPI', 'MCP', 'Python', 'Trading Systems'],
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

export const skillGroups = [
  {
    title: 'LLM & agent systems',
    items: ['Agent runtimes', 'RAG', 'tool orchestration', 'evaluation', 'guardrails', 'provider abstraction'],
  },
  {
    title: 'Backend & data',
    items: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'RabbitMQ', 'REST/SSE', 'data pipelines'],
  },
  {
    title: 'ML & research',
    items: ['PyTorch', 'computer vision', 'time series', 'multimodal learning', 'experimental design'],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'Linux', 'Kubernetes', 'Azure', 'AWS', 'CI/CD', 'on-prem deployment'],
  },
];

export const education = [
  {
    period: '2021 — 2023',
    title: 'M.S. Computer Engineering',
    institution: 'University of Arkansas',
    detail: 'GPA 4.0/4.0 · research in computer vision, multimodal AI, and medical time-series analysis.',
  },
  {
    period: '2015 — 2019',
    title: 'B.S. Automation and Control Engineering',
    institution: 'International University — VNU HCMC',
    detail: 'Top 1% of class · half-tuition scholarship recipient.',
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
