export const profile = {
  name: 'Sang Truong',
  title: 'Senior AI Engineer · AI Agent & Applied AI Lead',
  eyebrow: 'Agentic AI · Voice & RAG · Computer Vision · Quantitative ML',
  intro:
    'Senior AI engineer and technical lead with 6+ years across agentic AI, LLM/RAG systems, voice and real-time AI, computer vision and video intelligence, multimodal learning, quantitative ML, time-series forecasting, edge inference, and production AI engineering. I own systems end to end from research and data acquisition through model/tool design, retrieval and orchestration, APIs, distributed workloads, product surfaces, deployment, observability, reliability, and stakeholder delivery.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
  resumeSource: 'https://github.com/sangtrx/Sang_Resume',
};

export const credibility = [
  { label: 'Current role', value: 'Head of Artificial Intelligence' },
  { label: 'Applied AI experience', value: '6+ years' },
  { label: 'Graduate degree', value: 'MEng Computer Engineering · 4.0/4.0' },
  { label: 'Research', value: 'IJCV · AAAI Oral · IEEE JBHI · Poultry Science' },
];

export const ownership = [
  {
    title: 'AI & system architecture',
    detail: 'Translate ambiguous product goals into model/data contracts, authority boundaries, APIs, state, deployment, testing, observability, and acceptance criteria.',
  },
  {
    title: 'Model, tools & knowledge',
    detail: 'Design agent orchestration, retrieval, tool/model routing, context and memory, browser/tool workflows, structured outputs, guardrails, provenance, and safe boundaries around side effects and fact ownership.',
  },
  {
    title: 'Backend & product engineering',
    detail: 'Build the application path around the model: FastAPI services, durable state, async workers, streaming, integrations, product surfaces, permissions, and operational controls.',
  },
  {
    title: 'Evaluation & reliability',
    detail: 'Define what “working” means, separate implemented from validated, test retrieval/response/speech and failure behavior, and make evidence visible instead of hiding uncertainty behind fluent output.',
  },
  {
    title: 'Cloud, edge & deployment',
    detail: 'Carry systems through Docker/Linux, cloud and on-prem delivery, GPU/edge optimization, networking, observability, recovery, runtime verification, and stakeholder handoff.',
  },
  {
    title: 'Research to production',
    detail: 'Move from experimental methods and reproducible evaluation into constrained production systems without erasing the assumptions that made the research valid.',
  },
];

export const capabilityDomains = [
  {
    index: '01',
    title: 'Applied AI · Agents · Voice · RAG',
    summary:
      'Production AI systems where retrieval, tools, memory, voice/real-time interaction, authority, safety, evaluation, and distributed application state matter as much as the model call.',
    evidence: [
      'YHCT hospital clinical AI: bounded agent loop, governed corpus, deterministic clinical authority, durable state, exact citations, UAT gates',
      'FPT AI4U: Azure OpenAI, LangGraph/LangChain, Qdrant RAG, tool/model routing, code execution, web search, memory controls, guardrails',
      'Voice and tool workflows: multilingual Azure Speech transcription/evaluation, Vietnamese ASR/TTS, WebSockets/SSE, Playwright-based browser verification and failure handling',
    ],
    stack: 'FastAPI · LangGraph · LangChain · Azure OpenAI · Azure Speech · Qdrant · Milvus · pgvector · Playwright · Celery · RabbitMQ · Redis · PostgreSQL · Docker',
  },
  {
    index: '02',
    title: 'Computer Vision · Video · Edge AI',
    summary:
      'Physical-world AI spanning camera/media ingest, perception, tracking, temporal events, evidence capture, edge inference, and recovery under unreliable real-world conditions.',
    evidence: [
      'Production multi-camera video intelligence: YOLO11, Vietnamese ALPR, ByteTrack, line crossing, event video, identity/freshness checks, watchdog recovery',
      'University of Arkansas: temporal action understanding, vision-language modeling, industrial CV, CarcassFormer, YOLOv8 Jetson deployment',
      '5D Agriculture: autonomous braking, face recognition, Intel RealSense D435 RGB-D livestock measurement, embedded AI',
    ],
    stack: 'PyTorch · TensorFlow · OpenCV · YOLO11/YOLOv8 · Fast-ALPR · ByteTrack · TensorRT · CUDA · ONNX Runtime · Jetson · FFmpeg · MediaMTX',
  },
  {
    index: '03',
    title: 'Quantitative Research · Trading Systems',
    summary:
      'Research infrastructure built around point-in-time data, reproducible hypotheses, leakage-aware validation, ML selection, portfolio/risk evaluation, and durable live-system state.',
    evidence: [
      'Curren: point-in-time data lineage, reusable feature/hypothesis pipelines, event studies/backtests, OOS validation, lifecycle/risk/recovery, public API/CLI/MCP',
      'Confidential Fund: equity alpha research with LightGBM/XGBoost ensembles, sentiment-derived signals, AWS execution, MLflow tracking',
      'Bluebelt Group: cryptocurrency/FX signal infrastructure and market-data ML experimentation',
    ],
    stack: 'Python · Polars · Pandas · PyArrow/Parquet · DuckDB · LightGBM · CatBoost · XGBoost · SciPy · Statsmodels · Optuna · NautilusTrader',
  },
  {
    index: '04',
    title: 'Research · Multimodal & Temporal ML',
    summary:
      'Peer-reviewed research across temporal video understanding, vision-language learning, medical time-series representation learning, and industrial computer vision.',
    evidence: [
      'ABN → AEI → AOE-Net: action boundaries and actor/object/environment interaction modeling for long untrimmed video',
      'VLCAP → VLTinT: contrastive vision-language learning and coherent video paragraph captioning; VLTinT was an AAAI 2023 Oral',
      'sCL-ST + CarcassFormer: medical time-series contrastive learning and industrial localization/segmentation/classification',
    ],
    stack: 'Transformers · Contrastive Learning · PyTorch · TensorFlow · Detectron2 · MATLAB · NumPy · SciPy · Scikit-learn · Weights & Biases',
  },
];

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'Hospital Clinical AI Platform',
    kicker: 'EPIC TECHNOLOGY · Ho Chi Minh City Traditional Medicine Hospital',
    summary:
      'A clinician-facing AI chatbot and decision-support platform with a bounded interleaved agent loop, governed local-corpus research, clinical tools, deterministic release-pinned clinical authority, durable conversation state, provider portability, and explicit provenance/evidence boundaries.',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    year: '2026',
    status: 'Protected UAT · clinician-feedback stabilization',
    proof: ['7-turn provenance acceptance passed', '1,018-test backend suite collected', '303 source files under strict mypy'],
    tags: ['Clinical AI', 'Agents', 'FastAPI', 'Next.js', 'PostgreSQL', 'Qdrant', 'RAG'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '02',
    title: 'Curren',
    kicker: 'Independent quantitative research & trading-systems project',
    summary:
      'A solo-built multi-repository research and trading-systems stack spanning point-in-time market data, reusable feature/hypothesis pipelines, leakage-controlled validation, ML quality filtering, signal lifecycle, guarded execution, access/product surfaces, and a verifiable public API/CLI/MCP layer.',
    role: 'Independent AI/Quant Side Project · Solo Builder',
    year: 'Jun 2026 — Present',
    status: 'Public platform v0.4 alpha · live public feed not claimed',
    proof: ['PIT research contract', 'Read-only API · CLI · MCP', 'Immutable plan/result proofs'],
    tags: ['Quant Research', 'PIT Data', 'FastAPI', 'MCP', 'Python', 'Trading Systems'],
    href: '/work/curren',
    accent: 'cyan',
  },
];

export const systemPortfolio = [
  {
    period: '2026',
    title: 'Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Clinical assistant for drug/herb lookup, interaction analysis, prescription review, governed knowledge Q&A, contextual follow-up, exact citations, role-scoped state, auditability, and explicit clinical authority boundaries.',
    signal: 'Protected hospital UAT',
    href: '/work/yhct',
  },
  {
    period: '2025 — Present',
    title: 'Production Multi-Camera Video Intelligence Platform',
    owner: 'EPIC TECHNOLOGY · AI / Computer Vision Systems Lead',
    summary:
      'Real-time multi-camera system covering media acquisition, stream normalization, YOLO11 perception, Vietnamese ALPR, ByteTrack tracking, temporal event logic, evidence capture, alerts, access control, monitoring, and automated recovery.',
    signal: 'Production physical-world AI',
  },
  {
    period: '2025 — Present',
    title: 'AI-Powered Open edX Platform',
    owner: 'EPIC TECHNOLOGY · AI Architect / Lead Builder',
    summary:
      'Teacher-reviewable course generation from textbooks/syllabi into lessons and OLX packages, plus Milvus-backed tutoring, secure question context and answer-key handling, Vietnamese ASR/TTS, WebSockets, Live2D browser interaction, Playwright verification, and Tutor/Docker/Nginx operations.',
    signal: 'Education AI platform',
  },
  {
    period: '2024 — 2025',
    title: 'AI4U Enterprise Conversational Agent',
    owner: 'FPT Software · AI Engineer',
    summary:
      'Azure OpenAI agent with LangGraph/LangChain orchestration, Qdrant RAG, model/tool routing, controlled code/tool execution, web search, Mermaid generation, token-aware memory, content safety, multilingual speech/transcription evaluation, and distributed AI workloads.',
    signal: 'Enterprise agent + voice platform',
  },
  {
    period: 'Jun 2026 — Present',
    title: 'Curren Quant Research & Trading Systems',
    owner: 'Independent side project · Solo Builder',
    summary:
      'Point-in-time research factory, reproducible validation, ML quality selection, monitored signal lifecycle and guarded execution, plus FastAPI, CLI, MCP, access/payment, and proof/distribution surfaces.',
    signal: 'Research → production → public verification',
    href: '/work/curren',
  },
];

export const experience = [
  {
    period: 'Jun 2025 — Present',
    role: 'Head of Artificial Intelligence',
    company: 'EPIC TECHNOLOGY',
    summary:
      'Leading architecture and delivery across clinical AI, education AI, production computer vision/video intelligence, and AI platform engineering; owning requirements decomposition, data/model contracts, APIs, authority boundaries, deployment, testing, observability, and stakeholder acceptance.',
    details: [
      'Built the Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform for UAT, covering conversational drug/herb lookup, interaction analysis, prescription review, governed knowledge Q&A, contextual follow-up, exact citations, role-scoped state, and auditability.',
      'Built an AI-powered Open edX platform with teacher-reviewable course generation, Milvus-backed AI tutoring, secure question context and answer-key handling, Vietnamese ASR/TTS, WebSockets, Live2D interaction, OLX automation, Tutor/Docker/Nginx operations, and Playwright verification.',
      'Built and operate a production multi-camera AI program with video acquisition, stream normalization, YOLO11 detection, Vietnamese ALPR, ByteTrack tracking, temporal event logic, evidence capture, monitoring, and automated recovery.',
      'Technologies include Python, FastAPI, AsyncIO, WebSockets/SSE, Next.js, React, PostgreSQL, pgvector, RabbitMQ, Celery, Open edX, Tutor/Django, Milvus, LangChain/LLMs, ASR/TTS, PyTorch, ONNX Runtime, OpenCV, YOLO11, Fast-ALPR, ByteTrack, MediaMTX, Docker, Nginx, Linux, and Playwright.',
    ],
  },
  {
    period: 'Jun 2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Leading real-time environmental IoT forecasting with continuous preprocessing, evaluation, inference, visualization, and stakeholder-facing reporting across LSTM, XGBoost, ARIMA, and Prophet workflows.',
    details: [
      'Built continuous sensor preprocessing, model training/evaluation, inference, visualization, and reporting workflows.',
      'Technologies include Python, TensorFlow, XGBoost, ARIMA, Prophet, Pandas, NumPy, Matplotlib, and Jupyter.',
    ],
  },
  {
    period: 'Oct 2024 — Jun 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Built enterprise conversational agents and multilingual voice/real-time AI systems with Azure OpenAI, LangGraph/LangChain, Qdrant RAG, tool/model routing, distributed workers, guardrails, evaluation workflows, and production APIs.',
    details: [
      'Developed AI4U with Azure OpenAI, LangGraph/LangChain orchestration, Qdrant-backed RAG, multi-stage dialogue state, model/tool routing, controlled code/tool execution, web search, diagram generation, memory controls, and content safety.',
      'Built multilingual recording/transcription and speech-evaluation services for English, Japanese, Korean, and Vietnamese with Azure Speech/OpenAI, FastAPI, Celery, RabbitMQ, Redis, distributed crawling, retries, and production controls.',
      'Technologies included Python, FastAPI, Azure OpenAI, Azure Speech, LangChain, LangGraph, Qdrant, NeMo Guardrails, RabbitMQ, Redis, Celery, MongoDB, Docker, Kubernetes, Playwright, and Azure Blob Storage.',
    ],
  },
  {
    period: 'May 2021 — Jan 2024',
    role: 'Graduate Researcher / PhD Student Researcher & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Graduate research in multimodal video understanding, temporal representation learning, vision-language modeling, medical time-series learning, industrial computer vision, and real-time edge inference; completed an MEng in Computer Engineering during this period.',
    details: [
      'Co-developed ABN, AEI, and AOE-Net for temporal action proposal generation and actor/object/environment interaction modeling in long untrimmed videos.',
      'Co-developed VLCAP and VLTinT for coherent video paragraph captioning; VLTinT was selected as an AAAI 2023 Oral.',
      'Worked on sCL-ST for multi-lead ECG arrhythmia classification and CarcassFormer/poultry-defect inspection for industrial computer vision.',
      'Built data/annotation workflows and optimized YOLOv8 on NVIDIA Jetson with TensorRT, FP16, CUDA streams, CUDA preprocessing, and memory-oriented tuning.',
    ],
  },
];

export const additionalExperience = [
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Confidential Fund · NDA Project',
    details: [
      'Developed alpha-focused equity prediction research using feature engineering, LightGBM/XGBoost ensembles, sentiment-analysis agents, iterative market-data evaluation/backtesting, constrained AWS execution, parallel processing, and MLflow experiment tracking.',
    ],
  },
  {
    period: 'Mar 2024 — Jun 2024',
    role: 'AI Engineer / Data Scientist · Contract',
    company: 'Crypto Communities Chatbot Development',
    details: [
      'Designed LLM/RAG community chatbots with LangChain and Pinecone for knowledge-grounded support automation across social platforms.',
    ],
  },
  {
    period: 'Sep 2019 — Oct 2020',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Bluebelt Group',
    details: [
      'Built Python/FastAPI infrastructure for cryptocurrency and FX trading signals and quantitative/ML experimentation, providing an early production foundation for later fund and Curren research work.',
    ],
  },
  {
    period: 'Aug 2018 — Sep 2019',
    role: 'AI Engineer · Computer Vision / Embedded AI',
    company: '5D Agriculture Solutions JSC',
    details: [
      'Built computer-vision systems for autonomous braking, face-recognition attendance, and contactless livestock-weight estimation with Intel RealSense D435 RGB-D sensing.',
      'Worked across camera acquisition, image/depth preprocessing, model inference, application/control logic, NVIDIA Jetson/Raspberry Pi integration, and real-time system behavior.',
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
    detail: 'Prepared course material and instructed graduate Computer Vision practice sessions across image processing, classical/learning-based vision, implementation, and experiment interpretation.',
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
    items: ['LLM/RAG/agents', 'LangGraph/LangChain orchestration', 'tool/model routing', 'code/tool execution', 'web-search workflows', 'memory/context management', 'grounded generation', 'guardrails', 'human-review boundaries', 'evaluation', 'authority separation'],
  },
  {
    title: 'Retrieval & knowledge systems',
    items: ['Qdrant', 'Milvus', 'Pinecone', 'pgvector', 'embeddings', 'chunking/metadata strategy', 'governed ingestion', 'metadata/permission filtering', 'exact citations', 'immutable provenance', 'retrieval evaluation', 'retrieval failure handling'],
  },
  {
    title: 'Voice / real-time AI',
    items: ['Azure Speech', 'multilingual ASR/transcription', 'Vietnamese ASR/TTS', 'speech evaluation', 'WebSockets/SSE', 'real-time conversation state', 'AsyncIO', 'background processing'],
  },
  {
    title: 'Computer vision / video / edge',
    items: ['YOLO11/YOLOv8', 'PyTorch', 'TensorFlow', 'OpenCV', 'Detectron2', 'Fast-ALPR', 'ByteTrack', 'TensorRT', 'ONNX Runtime', 'NVIDIA Jetson', 'CUDA', 'RGB-D', 'MediaMTX', 'RTSP/HLS', 'FFmpeg'],
  },
  {
    title: 'Quantitative ML & research data',
    items: ['Point-in-time data', 'event studies/backtesting', 'OOS/walk-forward validation', 'LightGBM', 'CatBoost', 'XGBoost', 'Scikit-learn', 'Polars', 'PyArrow/Parquet', 'DuckDB', 'SciPy', 'Statsmodels', 'Optuna', 'MLflow'],
  },
  {
    title: 'Backend & distributed systems',
    items: ['Python', 'FastAPI', 'AsyncIO', 'REST/SSE', 'WebSockets', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'SQLite', 'MongoDB', 'MinIO/S3', 'retries', 'idempotency', 'durable state'],
  },
  {
    title: 'Product, browser automation, cloud & delivery',
    items: ['Next.js', 'React', 'TypeScript/JavaScript', 'Open edX', 'Playwright', 'browser/tool verification', 'Docker', 'Kubernetes', 'Linux', 'Windows', 'systemd', 'Nginx', 'AWS', 'Azure', 'Prometheus', 'Grafana'],
  },
  {
    title: 'Languages',
    items: ['English — professional working proficiency', 'Vietnamese — native'],
  },
];

export const education = [
  {
    period: 'Jul 2021 — Sep 2023',
    title: 'Master of Engineering (MEng) in Computer Engineering',
    institution: 'University of Arkansas',
    detail: 'GPA 4.0/4.0 · thesis: “Towards Multi-modal Interpretable Video Understanding” · advisor: Prof. Ngan Le · fully funded Ph.D. admission in 2021 followed by endowed graduate scholarships in 2022 and 2023.',
  },
  {
    period: '2015 — 2019',
    title: 'Bachelor of Science in Automation and Control Engineering',
    institution: 'International University — VNU HCMC',
    detail: 'GPA 3.5/4.0 · Top 1% · half-tuition scholarship recipient.',
  },
];

export const researchTrajectory = [
  {
    period: '2021 → 2023',
    title: 'Temporal action understanding',
    detail: 'ABN → AEI → AOE-Net: action-boundary and actor/object/environment interaction modeling for long untrimmed video, culminating in IJCV.',
  },
  {
    period: '2022 → 2023',
    title: 'Vision-language video understanding',
    detail: 'VLCAP → VLTinT: contrastive and Transformer-based modeling for coherent video paragraph captioning; VLTinT was selected as an AAAI 2023 Oral.',
  },
  {
    period: '2021 → 2024',
    title: 'Medical & industrial ML',
    detail: 'sCL-ST for multi-lead ECG representation learning and CarcassFormer for poultry defect localization, segmentation, and classification, alongside Jetson/TensorRT deployment work.',
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
