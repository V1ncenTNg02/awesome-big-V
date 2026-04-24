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
