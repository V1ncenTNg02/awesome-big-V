export interface Project {
  title: string
  stack: string[]
  description: string
  bullets: string[]
  image: string
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
  },
  {
    title: 'Intelligent Voicemail System',
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Cloud Run'],
    description: 'An AI-powered voicemail triage system that automatically extracts intent, urgency, and key details from incoming messages using an LLM-driven workflow architecture.',
    bullets: [
      'Designed an intelligent pipeline that classifies voicemail intent and urgency using OpenAI',
      'Persisted structured triage results in Supabase for downstream retrieval and notifications',
      'Deployed as a containerised production workflow on GCP Cloud Run',
    ],
    image: '/projects/voicemail-system.png',
  },
]
