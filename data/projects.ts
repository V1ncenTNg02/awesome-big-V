export interface Project {
  title: string
  stack: string[]
  description: string
  bullets: string[]
  image: string
  imageWidth: number
  imageHeight: number
  url?: string
}

export const projects: Project[] = [
  {
    title: 'Vellum ESG Platform',
    stack: ['Next.js BFF', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe', 'RAG', 'LLM', 'GCP'],
    description: 'Full-stack contributions across three production systems on the Vellum ESG SaaS platform, shipping security, billing, and AI features ahead of commercial launch.',
    bullets: [
      'Designed a zero-trust 4-layer security architecture — browser → Next.js BFF with Redis session cache → Node.js backend with JWT validation → PostgreSQL with RLS — eliminating client-side trust entirely',
      'Built the complete Stripe billing lifecycle: hosted checkout, seat-based subscriptions, webhook idempotency, Smart Retries, and a self-service portal',
      'Integrated a RAG pipeline for ESG document Q&A; identified and resolved a hybrid search bottleneck to significantly improve answer quality and processing speed',
    ],
    image: '/projects/vellum-esg.png',
    imageWidth: 1917,
    imageHeight: 699,
    url: 'https://vellum.com.au/',
  },
  {
    title: 'Intelligent Clinic',
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Cloud Run'],
    description: 'An AI-powered clinic management system that automatically extracts patient intent, urgency, and key details from incoming messages using an LLM-driven workflow architecture.',
    bullets: [
      'Designed an intelligent pipeline that classifies patient intent and urgency using OpenAI',
      'Persisted structured triage results in Supabase for downstream retrieval and notifications',
      'Deployed as a containerised production workflow on GCP Cloud Run',
    ],
    image: '/projects/intelligent-clinic.png',
    imageWidth: 2532,
    imageHeight: 693,
    url: 'https://heidi-challenge-820963910490.us-central1.run.app/',
  },
  {
    title: 'LKG Furniture Market Researcher',
    stack: ['Claude Code Plugin', 'Claude Platform', 'LangGraph', 'Claude', 'Python', 'FastAPI', 'AWS Lambda'],
    description: 'A Claude Code plugin and Claude Platform hosted agent system that adapts Anthropic\'s market-researcher template for Australian bedding, mattresses, sleep products, and bedroom furniture — producing weekly digests for Hypnos Group / LK Group.',
    bullets: [
      'Built a 7-subagent orchestration pipeline (sector overview, competitive analysis, comps, idea generation, GM/Board classifier, note writer) with parallel research execution and a human-approval gate before any output is distributed',
      'Added two custom Claude Code skills — lkg-furniture-market-digest and gm-board-classifier — that encode Hypnos Group context, a 10-public-source scan, and GM / Board / Both / Ignore routing criteria with confidence and guardrail rules',
      'Deployed the same agent definitions as a Claude Platform Managed Agent via a SAM-style deploy script, enabling production governance (model selection, tool permissions, structured run logs) without rebuilding the plugin from scratch',
    ],
    image: '/projects/furniture-market-plugin.png',
    imageWidth: 895,
    imageHeight: 545,
    url: 'https://github.com/V1ncenTNg02/lkg-furniture-market-researcher/tree/main',
  },
  {
    title: 'Property Development Control Tower',
    stack: ['Next.js', 'FastAPI', 'LangGraph', 'Claude', 'Supabase', 'AWS Lambda', 'Docker'],
    description: 'A full-stack AI agent prototype for property development risk management — monitors project signals, detects risks, selects stakeholders, and drafts targeted communications without human triage.',
    bullets: [
      'Built an 8-node LangGraph agent that classifies contractor emails with Claude, updates project risk levels, and selects stakeholders via rule-based notification logic',
      'Architected a dual-Lambda deployment (Next.js + FastAPI) on AWS using SAM and Lambda Web Adapter with a full GitHub Actions CI/CD pipeline',
      'Designed the data model on Supabase PostgreSQL with Supabase connection pooler to handle serverless burst connections safely across cold starts',
    ],
    image: '/projects/property-dev.png',
    imageWidth: 1897,
    imageHeight: 655,
    url: 'https://g77qqkbg42g6s7pni2ociwjrbu0tedjw.lambda-url.ap-southeast-2.on.aws/',
  },
  {
    title: 'Greythorn IDO Platform',
    stack: ['TypeScript', 'Next.js', 'TailwindCSS', 'Storyblok', 'PostgreSQL', 'Docker'],
    description: 'Two full-stack single-page applications built for Greythorn Asset Management, integrating blockchain features to enhance data security and transparency for investment clients.',
    bullets: [
      'Delivered two full-stack SPAs with blockchain integration, improving data security and transparency for asset management clients',
      'Built component-driven UI with TypeScript, Next.js, and TailwindCSS; managed content via Storyblok CMS',
      'Added unit tests across React components to improve reliability and catch regressions early',
    ],
    image: '/projects/next-ido.png',
    imageWidth: 1199,
    imageHeight: 495,
    url: 'https://next-ido.vercel.app/',
  },
]
