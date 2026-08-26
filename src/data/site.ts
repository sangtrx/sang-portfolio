export const profile = {
  name: 'Sang Truong',
  title: 'Senior AI/LLM Engineer · Technical Lead',
  eyebrow: 'Production AI · Reliable Agents · Quant Systems',
  intro:
    'Senior AI engineer and technical lead with 6+ years across LLM/RAG/agent systems, computer vision, multimodal and video understanding, quantitative ML, time-series forecasting, speech AI, edge inference, and production AI engineering. I own systems end to end from research and data through model/tool design, APIs, deployment, reliability, and stakeholder delivery.',
  email: 'tqsang97@gmail.com',
  github: 'https://github.com/sangtrx',
  linkedin: 'https://linkedin.com/in/tqsang',
  scholar: 'https://scholar.google.com/citations?user=JG2yzhgAAAAJ',
  resumeSource: 'https://github.com/sangtrx/Sang_Resume',
};

export const ownership = [
  {
    title: 'AI & system architecture',
    detail: 'Turn ambiguous product goals into explicit runtime, data, safety, authority, and acceptance contracts.',
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
    detail: 'Carry systems through containerization, cloud/edge delivery, observability, runtime checks, recovery, and handoff boundaries.',
  },
];

export const projects = [
  {
    slug: 'yhct',
    index: '01',
    title: 'YHCT Clinical AI Platform',
    kicker: 'EPIC TECHNOLOGY project for Ho Chi Minh City Traditional Medicine Hospital',
    summary:
      'A clinician-facing AI chatbot and decision-support platform with an interleaved agent loop, governed local-corpus research, deterministic clinical authority, durable conversation state, OpenAI/local provider portability, and explicit evidence boundaries.',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    year: '2026',
    status: 'Deployed UAT · clinician acceptance pending',
    proof: ['855 backend tests passed', 'Self-hosted UAT validated', 'OpenAI/local application contract'],
    tags: ['Clinical AI', 'Agents', 'FastAPI', 'Next.js', 'PostgreSQL', 'RAG'],
    href: '/work/yhct',
    accent: 'blue',
  },
  {
    slug: 'curren',
    index: '02',
    title: 'Curren',
    kicker: 'Independent point-in-time quant research + trading systems',
    summary:
      'An independent AI/quant side project spanning point-in-time market data, reusable feature and hypothesis pipelines, leakage-controlled validation, monitored signal lifecycle, guarded execution boundaries, and public API/CLI/MCP product surfaces.',
    role: 'Independent AI/Quant Side Project · Solo Builder',
    year: 'Jun 2026 — Present',
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
      'Leading architecture and delivery across clinical AI, education, industrial monitoring, and computer vision, with end-to-end ownership from requirements and data/model contracts through deployment, testing, observability, and stakeholder delivery.',
    details: [
      'Built the Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform under EPIC TECHNOLOGY for hospital UAT, covering conversational drug/herb lookup, interaction analysis, prescription review, governed knowledge Q&A, contextual follow-up, exact citations, role-scoped state, and auditability.',
      'Built an AI-powered Open edX platform with teacher-reviewable course generation, Milvus-backed AI tutoring, Vietnamese ASR/TTS, WebSockets, Live2D interaction, OLX automation, Tutor/Docker/Nginx operations, and Playwright verification.',
      'Built the EPIC TECHNOLOGY Shrimp Farm Multi-Camera AI Surveillance Platform with centralized monitoring, people/vehicle analytics, ALPR, tracking, line crossing, event recording, notifications, access control, and autonomous recovery.',
      'Technologies include Python, FastAPI, AsyncIO, WebSockets, Next.js, React, TypeScript/JavaScript, PostgreSQL, pgvector, RabbitMQ, Celery, Open edX, Django, Milvus, LangChain, LLMs, ASR/TTS, PyTorch, ONNX Runtime, OpenCV, YOLO11, Fast-ALPR, ByteTrack, MediaMTX, Docker, Nginx, Linux, and Playwright.',
    ],
  },
  {
    period: 'Jun 2024 — Present',
    role: 'AI Tech Lead · Part-time / Consulting',
    company: 'A9 IOT',
    summary:
      'Real-time environmental IoT forecasting with continuous preprocessing, evaluation, inference, visualization, and stakeholder-facing reporting.',
    details: [
      'Led real-time environmental forecasting using LSTM, XGBoost, ARIMA, and Prophet across continuous sensor workloads.',
      'Built preprocessing, evaluation, inference, visualization, and reporting workflows with Python, TensorFlow, Pandas, NumPy, Matplotlib, and Jupyter.',
    ],
  },
  {
    period: 'Oct 2024 — Jun 2025',
    role: 'AI Engineer',
    company: 'FPT Software',
    summary:
      'Enterprise conversational AI with agentic orchestration, Qdrant-backed RAG, model/tool routing, speech services, distributed workloads, guardrails, and production APIs.',
    details: [
      'Developed AI4U using Azure OpenAI, LangGraph/LangChain orchestration, Qdrant-backed RAG, model/tool routing, memory controls, code execution, web search, diagram generation, and content safety.',
      'Built multilingual recording/transcription and speech-evaluation services with FastAPI, Celery, RabbitMQ, Redis, Azure Speech/OpenAI, distributed crawling, retries, and production controls.',
      'Technologies included Python, FastAPI, Azure OpenAI, Azure Speech, LangChain, LangGraph, Qdrant, NeMo Guardrails, RabbitMQ, Redis, Celery, MongoDB, Docker, Kubernetes, Playwright, and Azure Blob Storage.',
    ],
  },
  {
    period: 'May 2021 — Jan 2024',
    role: 'Graduate Researcher / PhD Student Researcher & Teaching Assistant',
    company: 'University of Arkansas',
    summary:
      'Graduate research in multimodal video understanding, temporal representation learning, medical time-series learning, computer vision, and real-time edge inference; completed an MEng in Computer Engineering during this period.',
    details: [
      'Co-developed ABN, AEI, and AOE-Net for temporal action proposal generation and VLCAP/VLTinT for coherent vision-language video paragraph captioning.',
      'Worked on sCL-ST for multi-lead ECG arrhythmia classification and CarcassFormer/poultry-defect inspection for industrial computer vision.',
      'Built data/annotation workflows and optimized NVIDIA Jetson inference with TensorRT, FP16, CUDA streams, CUDA preprocessing, and memory tuning.',
      'Technologies included Python, C++, MATLAB, PyTorch, TensorFlow, OpenCV, Detectron2, YOLOv8, Transformer architectures, TensorRT, CUDA, NVIDIA V100/Jetson, CVAT, Docker, Kubernetes, NumPy, Pandas, SciPy, Scikit-learn, and Weights & Biases.',
    ],
  },
];

export const additionalExperience = [
  {
    period: 'Jan 2024 — Oct 2024',
    role: 'Quantitative Researcher / Data Scientist',
    company: 'Confidential Fund · NDA Project',
    details: [
      'Developed alpha-focused equity prediction research using feature engineering, LightGBM/XGBoost ensembles, sentiment-analysis agents, iterative market-data evaluation/backtesting, constrained AWS execution, and MLflow experiment tracking.',
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
      'Built Python/FastAPI infrastructure for cryptocurrency and FX trading signals, reducing dependence on third-party signal infrastructure.',
    ],
  },
  {
    period: 'Aug 2018 — Sep 2019',
    role: 'AI Engineer',
    company: '5D Agriculture Solutions JSC',
    details: [
      'Developed computer-vision systems for autonomous braking, face-recognition attendance, and contactless livestock-weight estimation using Intel RealSense D435 RGB-D sensing.',
      'Worked across camera acquisition, preprocessing, model inference, application logic, embedded/edge integration, and real-time system behavior.',
    ],
  },
];

export const epicSystems = [
  {
    period: '2026',
    title: 'Ho Chi Minh City Traditional Medicine Hospital AI Chatbot & Clinical Decision-Support Platform',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    summary: 'Hospital AI chatbot prepared for UAT with governed drug/herb lookup, interaction analysis, prescription review, local-corpus Q&A, exact citations, durable state, and deterministic release-pinned clinical authority.',
    href: '/work/yhct',
  },
  {
    period: '2025 — Present',
    title: 'Shrimp Farm Multi-Camera AI Surveillance Platform',
    role: 'AI / Computer Vision Systems Lead · EPIC TECHNOLOGY',
    summary: 'Production multi-camera platform with people/vehicle analytics, Vietnamese ALPR, multi-object tracking, line crossing, event video, reporting, notifications, identity-aware stream routing, and autonomous watchdog/recovery workflows.',
  },
  {
    period: '2025 — Present',
    title: 'AI-Powered Open edX Platform',
    role: 'AI Architect / Lead Builder · EPIC TECHNOLOGY',
    summary: 'Teacher-reviewable AI course generation, embedded Milvus-backed tutoring, answer-key protection, Vietnamese ASR/TTS, WebSockets, Live2D interaction, OLX automation, and Tutor/Docker/Nginx operations.',
  },
];

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
    detail: 'Prepared slides and instructed practice sessions for a graduate Computer Vision course.',
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
    title: 'Applied AI',
    items: ['LLM/RAG/agents', 'computer vision', 'multimodal learning', 'video understanding', 'quantitative ML', 'time-series forecasting', 'ASR/TTS', 'model evaluation', 'safety & authority boundaries'],
  },
  {
    title: 'LLM & retrieval',
    items: ['LangChain', 'LangGraph', 'Qdrant', 'Milvus', 'Pinecone', 'pgvector', 'Azure OpenAI', 'OpenAI', 'NeMo Guardrails', 'tool/model routing'],
  },
  {
    title: 'Computer vision & edge',
    items: ['YOLO11/YOLOv8', 'PyTorch', 'TensorFlow', 'OpenCV', 'Fast-ALPR', 'ByteTrack', 'TensorRT', 'ONNX Runtime', 'NVIDIA Jetson', 'CUDA', 'MediaMTX', 'RTSP/HLS'],
  },
  {
    title: 'Quant & data',
    items: ['LightGBM', 'CatBoost', 'XGBoost', 'Scikit-learn', 'NumPy', 'Polars', 'Pandas', 'PyArrow/Parquet', 'DuckDB', 'SciPy', 'Statsmodels', 'Numba', 'Optuna', 'MLflow'],
  },
  {
    title: 'Backend & data systems',
    items: ['Python', 'FastAPI', 'AsyncIO', 'WebSockets', 'REST/SSE', 'Celery', 'RabbitMQ', 'Redis', 'PostgreSQL', 'SQLite', 'MongoDB', 'MinIO/S3'],
  },
  {
    title: 'Product & delivery',
    items: ['Next.js', 'React', 'TypeScript/JavaScript', 'Open edX', 'Docker', 'Kubernetes', 'Linux', 'systemd', 'Nginx', 'AWS', 'Azure', 'Git', 'Playwright', 'Prometheus', 'Grafana'],
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
    detail: 'Visual-linguistic Transformer-in-Transformer for coherent video paragraph captioning',
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
