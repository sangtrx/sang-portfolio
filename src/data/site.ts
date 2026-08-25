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
    proof: ['855 backend tests passed', 'BigLinux UAT validated', 'OpenAI/local application contract'],
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
    period: 'Jun 2025 — Present',
    role: 'Head of Artificial Intelligence',
    company: 'EPIC TECHNOLOGY',
    summary:
      'Leading architecture and delivery across clinical AI, education, and industrial monitoring; translating ambiguous product requirements into testable safety, data, and system contracts.',
    details: [
      'Led architecture and delivery of AI products across clinical workflows, education, and industrial monitoring.',
      'Built an AI-powered Open edX platform with AI Course Generator and real-time AI Teacher workflows that turn textbooks and syllabi into teacher-reviewable lessons, exercises, quizzes, and OLX packages.',
      'Implemented course-grounded tutoring with LangChain and Milvus, secure context handoff, answer-key protection, pedagogical planning, Vietnamese ASR/TTS, WebSockets, and Live2D interaction.',
      'Owned Tutor/Docker/Nginx delivery, HTTPS, SSO, CSRF/CORS, role provisioning, deployment automation, and Playwright smoke coverage across LMS, Studio, and Learning MFE.',
    ],
  },
  {
    period: 'Jun 2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Real-time forecasting systems for environmental IoT streams, including continuous preprocessing, training, inference, and stakeholder-facing evaluation.',
    details: [
      'Led real-time forecasting for environmental IoT streams using LSTM, XGBoost, ARIMA, and Prophet with RMSE/MAE evaluation and stakeholder-facing reporting.',
      'Built continuous preprocessing, training, and inference pipelines for real-time sensor workloads.',
    ],
  },
  {
    period: 'Oct 2024 — Jun 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Enterprise conversational AI with agentic orchestration, RAG, model routing, speech services, distributed workloads, guardrails, and production APIs.',
    details: [
      'Developed AI4U, an enterprise conversational AI agent using Azure OpenAI, LangChain, and LangGraph for multi-stage tool orchestration, Qdrant-backed RAG, content safety, and context-aware generation.',
      'Added code interpretation, Mermaid generation, web search, automated unit-test generation, token-aware memory trimming, model routing, and conversation-history management.',
      'Built multilingual recording/transcription and speech-evaluation services with Azure Speech/OpenAI, FastAPI, Celery, RabbitMQ, and Redis; integrated NeMo Guardrails, retry/sensitive-topic controls, distributed crawling, and service-health paths.',
    ],
  },
  {
    period: 'May 2021 — Jan 2024',
    role: 'Research Assistant & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Multimodal video understanding, medical time-series learning, computer vision, and real-time edge deployment research.',
    details: [
      'Built real-time poultry-defect inspection and optimized YOLOv8 with TensorRT, FP16, CUDA streams, and memory tuning for NVIDIA Jetson deployment.',
      'Built a CVAT quality-control workflow, mentored three annotators, and co-authored research in multimodal video understanding, medical time-series learning, and computer vision.',
    ],
  },
];

export const additionalExperience = [
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Confidential Fund · NDA Project',
    details: [
      'Developed equity-prediction models using feature engineering, LightGBM/XGBoost ensembles, sentiment-analysis agents, and iterative backtesting across market datasets.',
      'Scaled training and evaluation on constrained AWS infrastructure with parallel processing, MLflow experiment tracking, and disciplined validation cycles.',
    ],
  },
  {
    period: 'Mar 2024 — Jun 2024',
    role: 'AI Engineer',
    company: 'Crypto Communities Chatbot Development',
    details: [
      'Designed RAG community chatbots with LangChain and Pinecone for high-volume support workflows, including retrieval grounding, conversation context, and production API integration.',
      'Partnered with stakeholders to refine chatbot behavior across social platforms and automate repetitive support workflows.',
    ],
  },
  {
    period: '2019 — 2020',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Bluebelt Group',
    details: [
      'Built a FastAPI service for cryptocurrency and FX trading signals that replaced an external signal provider and reduced dependency on third-party infrastructure.',
    ],
  },
  {
    period: 'Aug 2018 — Sep 2019',
    role: 'AI Engineer',
    company: '5D Agriculture Solutions JSC',
    details: [
      'Developed computer-vision systems for autonomous braking, face-recognition attendance, and contactless livestock weight estimation with Intel RealSense D435.',
    ],
  },
];

export const achievements = [
  { year: '2023', title: 'Rodger S. Kline Chair in Computer Science and Computer Engineering Scholarship', institution: 'University of Arkansas' },
  { year: '2022', title: 'Reginald R. “Barney” and Jameson A. Baxter Endowed Graduate Scholarship', institution: 'University of Arkansas' },
  { year: '2021', title: 'Fully Funded Ph.D. Admission', institution: 'University of Arkansas' },
];

export const skillGroups = [
  {
    title: 'LLM & retrieval',
    items: ['RAG', 'AI agents', 'prompt engineering', 'LangChain', 'LangGraph', 'Milvus', 'Qdrant', 'Pinecone', 'Azure OpenAI', 'NeMo Guardrails'],
  },
  {
    title: 'AI / ML',
    items: ['ASR/TTS', 'computer vision', 'time-series forecasting', 'PyTorch', 'TensorFlow', 'TensorRT', 'ONNX Runtime', 'XGBoost', 'LightGBM', 'Scikit-learn'],
  },
  {
    title: 'Backend & data',
    items: ['Python', 'FastAPI', 'AsyncIO', 'WebSockets', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'MongoDB', 'JavaScript/TypeScript', 'REST APIs'],
  },
  {
    title: 'Cloud & MLOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Linux', 'Nginx', 'MLflow', 'Prometheus', 'Grafana', 'Playwright', 'Git'],
  },
  {
    title: 'Languages',
    items: ['English — professional working proficiency', 'Vietnamese — native'],
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
