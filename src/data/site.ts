export const profile = {
  name: 'Sang Truong',
  title: 'Senior AI Engineer · Applied AI Systems',
  eyebrow: 'AI Systems · Computer Vision · Quantitative ML · Research',
  intro:
    'Senior AI engineer and technical lead with 6+ years building applied AI across agents and knowledge systems, computer vision and video, quantitative ML, speech, edge inference, and production software. I work end to end: from research and data contracts to application architecture, deployment, evaluation, reliability, and stakeholder acceptance.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
  resumeSource: '/resume',
};

export const credibility = [
  { label: 'Current role', value: 'Head of Artificial Intelligence' },
  { label: 'Applied AI experience', value: '6+ years' },
  { label: 'Graduate degree', value: 'MS Computer Engineering · 4.0/4.0' },
  { label: 'Research', value: 'IJCV · AAAI Oral · IEEE JBHI · Poultry Science' },
];

export const ownership = [
  {
    title: 'Architecture & authority',
    detail: 'Turn ambiguous requirements into clear system boundaries, data ownership, interfaces, permissions, state, and acceptance criteria.',
  },
  {
    title: 'AI, tools & knowledge',
    detail: 'Design model, retrieval, tool, memory, and human-review paths without letting probabilistic output silently become system truth.',
  },
  {
    title: 'Backend & product',
    detail: 'Build the software around the model: APIs, durable state, async work, streaming, integrations, product surfaces, and operational controls.',
  },
  {
    title: 'Evaluation & reliability',
    detail: 'Separate implemented from validated, make failure modes observable, and use evidence rather than fluent output as the acceptance boundary.',
  },
  {
    title: 'Cloud, edge & deployment',
    detail: 'Carry systems through Docker/Linux, cloud or on-prem delivery, GPU/edge constraints, monitoring, recovery, and handoff.',
  },
  {
    title: 'Research to production',
    detail: 'Preserve causality, provenance, reproducibility, and experimental assumptions while turning research into usable systems.',
  },
];

export const capabilityDomains = [
  {
    index: '01',
    title: 'Applied AI · Agents · Voice · RAG',
    summary:
      'Production AI where knowledge, tools, state, safety, evaluation, and user workflows matter as much as the model call.',
    evidence: [
      'Clinical decision support with governed knowledge, citations, deterministic application authority, and explicit human/production boundaries',
      'Enterprise conversational AI with retrieval, tool/model routing, memory controls, guardrails, and distributed workloads',
      'Multilingual speech and real-time interaction across API, worker, and browser-facing paths',
    ],
    stack: 'Python · FastAPI · LangGraph/LangChain · Azure OpenAI · Qdrant/Milvus/pgvector · PostgreSQL · Playwright · Celery/RabbitMQ/Redis',
  },
  {
    index: '02',
    title: 'Computer Vision · Video · Edge AI',
    summary:
      'Physical-world AI spanning camera/media input, perception, tracking, temporal state, evidence, target-device inference, and recovery.',
    evidence: [
      'Production multi-camera video intelligence across heterogeneous real-world sources and operational failure modes',
      'Industrial and academic vision workflows for inspection, recognition, tracking, and workstation state',
      'Edge optimization with TensorRT/CUDA/Jetson plus RGB-D and embedded perception work',
    ],
    stack: 'PyTorch · TensorFlow · OpenCV · YOLO · ALPR · Tracking · TensorRT · CUDA · ONNX Runtime · Jetson · RTSP/HLS · FFmpeg',
  },
  {
    index: '03',
    title: 'Quantitative Research · Trading Systems',
    summary:
      'Research and runtime engineering built around point-in-time evidence, causal computation, disciplined evaluation, durable state, and guarded execution boundaries.',
    evidence: [
      'Curren: point-in-time research pipeline and shared research/runtime semantics without exposing strategy internals',
      'Leakage-aware evaluation, reproducible data artifacts, selection controls, lifecycle/risk state, and reconciliation',
      'Earlier equity, crypto, and FX research with ML ensembles, market data, cloud execution, and experiment tracking',
    ],
    stack: 'Rust · Python · Arrow/Parquet · Polars · DuckDB · LightGBM · CatBoost · XGBoost · Scikit-learn · SciPy · Statsmodels · Optuna · NautilusTrader',
  },
  {
    index: '04',
    title: 'Research · Multimodal & Temporal ML',
    summary:
      'Peer-reviewed research across temporal video understanding, vision-language learning, medical time-series representation learning, and industrial computer vision.',
    evidence: [
      'Temporal action proposal generation and interaction modeling for long untrimmed video',
      'Vision-language learning and coherent video paragraph captioning, including an AAAI 2023 Oral',
      'Medical time-series representation learning and industrial visual inspection research',
    ],
    stack: 'Transformers · Contrastive Learning · PyTorch · TensorFlow · Detectron2 · MATLAB · NumPy · SciPy · Scikit-learn · Weights & Biases',
  },
];

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'Clinical AI for a Traditional Medicine Hospital',
    kicker: 'EPIC TECHNOLOGY · Clinical AI & Decision Support',
    summary:
      'A clinician-facing AI system for knowledge lookup, interaction analysis, prescription review, and grounded Q&A. The public case study shows the engineering boundary and safety model while intentionally withholding private corpus, deployment, and implementation detail.',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    year: '2026',
    status: 'Clinician-facing system · governed validation and deployment boundary',
    proof: ['Governed knowledge', 'Durable application state', 'Explicit clinical authority'],
    tags: ['Clinical AI', 'Agents', 'RAG', 'FastAPI', 'PostgreSQL', 'On-prem'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '02',
    title: 'Curren',
    kicker: 'Independent quantitative intelligence & trading-systems project',
    summary:
      'A solo-built quantitative research and systems platform connecting point-in-time evidence, reproducible evaluation, shared research/runtime semantics, guarded operational state, and a sanitized public verification surface — without publishing strategy internals.',
    role: 'Independent AI/Quant Side Project · Solo Builder',
    year: 'Jun 2026 — Present',
    status: 'Research + platform engineering · no profitability claim',
    proof: ['Point-in-time evidence', 'Research/runtime parity', 'Read-only public surface'],
    tags: ['Quant Research', 'Rust', 'Python', 'PIT Data', 'Trading Systems', 'MCP'],
    href: '/work/curren',
    accent: 'blue',
  },
];

export const systemPortfolio = [
  {
    period: '2026',
    title: 'Hospital Clinical AI & Decision Support',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Clinician-facing lookup, interaction analysis, prescription review, and knowledge Q&A with governed evidence, citations, durable state, and explicit clinical authority boundaries.',
    signal: 'Clinical AI · governed knowledge',
    href: '/work/yhct',
  },
  {
    period: '2025 — Present',
    title: 'Production Multi-Camera Video Intelligence',
    owner: 'EPIC TECHNOLOGY · AI / Computer Vision Systems Lead',
    summary:
      'Physical-world video AI spanning heterogeneous media sources, perception and tracking, temporal events, evidence, monitoring, and recovery under constrained hardware and vendor interfaces.',
    signal: 'Production physical-world AI',
  },
  {
    period: '2025 — Present',
    title: 'AI-Powered Open edX Platform',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Teacher-reviewable content generation and AI tutoring with retrieval, Vietnamese speech, real-time interaction, platform integration, browser verification, and operational delivery.',
    signal: 'Education AI · human review',
  },
  {
    period: '2024 — 2025',
    title: 'AI4U Enterprise Conversational Agent',
    owner: 'FPT Software · AI Engineer',
    summary:
      'Enterprise conversational AI with retrieval, tool/model routing, memory and safety controls, multilingual speech workflows, distributed background work, and production APIs.',
    signal: 'Enterprise agents · voice · RAG',
  },
  {
    period: '2021 — 2024',
    title: 'Industrial & Poultry Vision Research',
    owner: 'University of Arkansas · Applied Research',
    summary:
      'Visual inspection and workstation-state research connecting perception models to bounded physical-process evidence, alongside Jetson/TensorRT/CUDA edge optimization.',
    signal: 'Industrial CV · edge inference',
  },
  {
    period: 'Jun 2026 — Present',
    title: 'Curren Quant Intelligence & Trading Systems',
    owner: 'Independent side project · Solo Builder',
    summary:
      'Point-in-time research evidence, reproducible evaluation, shared causal semantics, durable lifecycle/risk state, guarded execution boundaries, and sanitized public verification.',
    signal: 'Research discipline · system parity',
    href: '/work/curren',
  },
];

export const experience = [
  {
    period: 'Jun 2025 — Present',
    role: 'Head of Artificial Intelligence',
    company: 'EPIC TECHNOLOGY',
    summary:
      'Leading hands-on architecture and delivery across clinical AI, education AI, computer vision/video intelligence, and AI platform engineering.',
    details: [
      'Own system boundaries, architecture, implementation, deployment, evaluation, observability, recovery, and stakeholder acceptance across applied AI programs.',
      'Built clinician-facing clinical AI with governed knowledge and explicit fact/safety boundaries.',
      'Built education AI and production multi-camera vision systems under real infrastructure, hardware, and operational constraints.',
    ],
  },
  {
    period: 'Jun 2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Leading environmental IoT forecasting workflows from preprocessing and evaluation through inference, visualization, and stakeholder reporting.',
    details: [
      'Worked across LSTM, XGBoost, ARIMA, Prophet, continuous sensor processing, model evaluation, and reporting.',
    ],
  },
  {
    period: 'Oct 2024 — Jun 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Built enterprise conversational agents and multilingual voice/real-time AI systems with retrieval, orchestration, distributed workers, guardrails, and production APIs.',
    details: [
      'Developed stateful enterprise AI with Azure OpenAI, LangGraph/LangChain, Qdrant RAG, tool/model routing, memory controls, and safety boundaries.',
      'Built multilingual transcription and speech-evaluation services with FastAPI and distributed background processing.',
    ],
  },
  {
    period: 'May 2021 — Jan 2024',
    role: 'Graduate Researcher / PhD Student Researcher & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Graduate research in multimodal video understanding, vision-language learning, medical time-series learning, industrial computer vision, and edge inference; completed an MS in Computer Engineering.',
    details: [
      'Co-developed peer-reviewed temporal action and video-language methods including ABN, AEI, AOE-Net, VLCAP, and VLTinT.',
      'Worked on medical time-series representation learning and poultry/industrial vision, including CarcassFormer.',
      'Optimized target-hardware inference using NVIDIA Jetson, TensorRT, CUDA, and FP16 techniques.',
    ],
  },
];

export const additionalExperience = [
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Confidential Fund · NDA Project',
    details: [
      'Developed equity-prediction research with feature engineering, gradient-boosting ensembles, sentiment-derived signals, market-data evaluation/backtesting, constrained AWS execution, and MLflow tracking.',
    ],
  },
  {
    period: 'Mar 2024 — Jun 2024',
    role: 'AI Engineer / Data Scientist · Contract',
    company: 'Crypto Communities Chatbot Development',
    details: [
      'Designed LLM/RAG community assistants with LangChain and Pinecone for grounded support automation.',
    ],
  },
  {
    period: 'Sep 2019 — Oct 2020',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Bluebelt Group',
    details: [
      'Built Python/FastAPI infrastructure for cryptocurrency and FX trading signals and quantitative/ML experimentation.',
    ],
  },
  {
    period: 'Aug 2018 — Sep 2019',
    role: 'AI Engineer · Computer Vision / Embedded AI',
    company: '5D Agriculture Solutions JSC',
    details: [
      'Built computer-vision systems for autonomous braking, face recognition, and contactless livestock measurement with RGB-D sensing and embedded devices.',
    ],
  },
];

export const epicSystems = systemPortfolio.filter((item) => item.owner.startsWith('EPIC TECHNOLOGY'));

export const teachingExperience = [
  {
    period: '2022 — 2023',
    role: 'Teaching Assistant',
    company: 'University of Arkansas',
    detail: 'Assisted with Algorithms course slides, homework assignments, and exams.',
  },
  {
    period: 'May 2019 — Aug 2019',
    role: "Teaching Assistant · Master's Computer Vision course",
    company: 'HCMC University of Technology and Education',
    detail: 'Prepared course material and instructed graduate Computer Vision practice sessions.',
  },
  {
    period: '2018 — 2019',
    role: 'Teaching Assistant',
    company: 'International University — VNU HCMC',
    detail: 'Taught undergraduate labs/tutorials in Sensors and Instrumentation, Robotics, and Biosignal Processing.',
  },
];

export const achievements = [
  { year: '2023', title: 'Rodger S. Kline Chair in Computer Science and Computer Engineering Scholarship', institution: 'University of Arkansas' },
  { year: '2022', title: 'Reginald R. “Barney” and Jameson A. Baxter Endowed Graduate Scholarship', institution: 'University of Arkansas' },
  { year: '2021', title: 'Fully Funded Ph.D. Admission', institution: 'University of Arkansas' },
  { year: '2015', title: 'First Prize · Ba Ria–Vung Tau Informatics Competition', institution: 'Ba Ria–Vung Tau, Vietnam' },
  { year: '2014', title: 'First Prize · Ba Ria–Vung Tau Informatics Competition', institution: 'Ba Ria–Vung Tau, Vietnam' },
  { year: '2014', title: 'Gold Medal · Vietnam Southern Region Olympic 30/4 — Informatics', institution: 'Vietnam' },
];

export const skillGroups = [
  {
    title: 'Applied AI / LLM / agents',
    items: ['LLM/RAG/agents', 'LangGraph/LangChain', 'tool/model routing', 'memory/context', 'grounded generation', 'guardrails', 'human-review boundaries', 'evaluation'],
  },
  {
    title: 'Retrieval & knowledge systems',
    items: ['Qdrant', 'Milvus', 'Pinecone', 'pgvector', 'PostgreSQL', 'embeddings', 'governed ingestion', 'metadata filtering', 'citations', 'provenance'],
  },
  {
    title: 'Voice / real-time AI',
    items: ['Azure Speech', 'multilingual ASR', 'Vietnamese ASR/TTS', 'speech evaluation', 'WebSockets/SSE', 'AsyncIO', 'background processing'],
  },
  {
    title: 'Computer vision / video / edge',
    items: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'Detectron2', 'ALPR', 'tracking', 'TensorRT', 'ONNX Runtime', 'CUDA', 'Jetson', 'RGB-D', 'RTSP/HLS', 'FFmpeg'],
  },
  {
    title: 'Quantitative ML & research data',
    items: ['Rust', 'Python', 'point-in-time data', 'Arrow/Parquet', 'Polars', 'DuckDB', 'LightGBM', 'CatBoost', 'XGBoost', 'Scikit-learn', 'SciPy', 'Statsmodels', 'Optuna', 'NautilusTrader'],
  },
  {
    title: 'Backend & distributed systems',
    items: ['Python', 'FastAPI', 'REST/SSE', 'WebSockets', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'SQLite', 'MongoDB', 'MinIO/S3', 'retries', 'idempotency', 'durable state'],
  },
  {
    title: 'Product, cloud & delivery',
    items: ['Next.js', 'React', 'TypeScript/JavaScript', 'Open edX', 'Playwright', 'Docker', 'Kubernetes', 'Linux', 'systemd', 'Nginx', 'AWS', 'Azure'],
  },
  {
    title: 'Languages',
    items: ['English — professional working proficiency', 'Vietnamese — native'],
  },
];

export const education = [
  {
    period: 'Jul 2021 — Dec 2023',
    title: 'Master of Science in Computer Engineering (MSCmpE)',
    institution: 'University of Arkansas',
    detail: 'GPA 4.0/4.0 · thesis: “Towards Multi-modal Interpretable Video Understanding” · advisor: Prof. Ngan Le.',
  },
  {
    period: '2015 — Nov 2019',
    title: 'Bachelor of Engineering in Automation and Control Engineering',
    institution: 'International University — VNU HCMC',
    detail: 'GPA 3.50/4.00 · Very Good · Top 1% · half-tuition scholarship recipient.',
  },
];

export const researchTrajectory = [
  {
    period: '2021 → 2023',
    title: 'Temporal action understanding',
    detail: 'ABN → AEI → AOE-Net: action-boundary and interaction modeling for long untrimmed video, culminating in IJCV.',
  },
  {
    period: '2022 → 2023',
    title: 'Vision-language video understanding',
    detail: 'VLCAP → VLTinT: contrastive and Transformer-based modeling for coherent video paragraph captioning; VLTinT was selected as an AAAI 2023 Oral.',
  },
  {
    period: '2021 → 2024',
    title: 'Medical & industrial ML',
    detail: 'Medical time-series representation learning plus industrial/poultry vision and target-hardware edge optimization.',
  },
];

export const publications = [
  {
    year: '2024',
    title: 'CarcassFormer',
    detail: 'Simultaneous localization, segmentation, and classification of poultry carcass defects',
    venue: 'Poultry Science',
    href: 'https://doi.org/10.1016/j.psj.2024.103765',
  },
  {
    year: '2023',
    title: 'AOE-Net',
    detail: 'Entity-interaction modeling with adaptive attention for temporal action proposal generation',
    venue: 'International Journal of Computer Vision',
    href: 'https://doi.org/10.1007/s11263-022-01702-9',
  },
  {
    year: '2023',
    title: 'VLTinT',
    detail: 'Visual-linguistic Transformer-in-Transformer for coherent video paragraph captioning · AAAI Oral',
    venue: 'AAAI',
    href: 'https://doi.org/10.1609/aaai.v37i3.25412',
  },
  {
    year: '2023',
    title: 'sCL-ST',
    detail: 'Supervised contrastive learning with semantic transformations for multi-lead ECG arrhythmia classification',
    venue: 'IEEE JBHI',
    href: 'https://doi.org/10.1109/JBHI.2023.3246241',
  },
  {
    year: '2022',
    title: 'VLCAP',
    detail: 'Vision-language contrastive learning for coherent video paragraph captioning',
    venue: 'IEEE ICIP',
    href: 'https://doi.org/10.1109/ICIP46576.2022.9897766',
  },
  {
    year: '2021',
    title: 'AEI',
    detail: 'Actor-environment interaction with adaptive attention for temporal action proposal generation',
    venue: 'BMVC',
    href: 'https://doi.org/10.5244/C.35.306',
  },
  {
    year: '2021',
    title: 'ABN',
    detail: 'Agent-aware boundary networks for temporal action proposal generation',
    venue: 'IEEE Access',
    href: 'https://doi.org/10.1109/ACCESS.2021.3110973',
  },
  {
    year: '2021',
    title: 'Multi-module RCNN + Transformer',
    detail: 'Multi-module recurrent convolutional neural network with Transformer encoder for ECG arrhythmia classification',
    venue: 'IEEE BHI',
    href: 'https://doi.org/10.1109/BHI50953.2021.9508527',
  },
];