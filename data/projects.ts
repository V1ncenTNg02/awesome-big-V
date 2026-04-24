export interface Project {
  title: string
  stack: string[]
  description: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Vellum ESG Platform',
    stack: ['Next.js BFF', 'Node.js', 'Redis', 'PostgreSQL', 'Stripe', 'RAG', 'LLM', 'GCP'],
    description:
      'Full-stack contributions across three production systems on the Vellum ESG SaaS platform. Designed a zero-trust 4-layer security architecture — browser → Next.js BFF with Redis session cache → Node.js backend with JWT validation → PostgreSQL with RLS — eliminating client-side trust before launch. Built the complete Stripe billing lifecycle: hosted checkout, seat-based subscriptions, webhook idempotency, Smart Retries, and a self-service portal. Integrated a RAG pipeline for ESG document Q&A, identifying and resolving a hybrid search bottleneck to significantly improve answer quality and speed.',
    image: '/projects/vellum-esg.png',
  },
  {
    title: 'Intelligent Voicemail System',
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Cloud Run'],
    description:
      'Engineered an AI voicemail triage system using an LLM-driven workflow architecture. Designed an intelligent pipeline that extracts intent, urgency, and key details from voicemails. Deployed as a containerised production workflow on Google Cloud Platform.',
    image: '/projects/voicemail-system.png',
  },
]
