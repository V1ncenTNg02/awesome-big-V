export interface Project {
  title: string
  stack: string[]
  description: string
  image: string
}

export const projects: Project[] = [
  {
    title: 'Security Architecture Overhaul',
    stack: ['Next.js BFF', 'Redis', 'RBAC', 'Row-Level Security'],
    description:
      'Identified critical JWT exposure and client-side access control vulnerabilities during product testing. Designed and implemented a zero-trust 4-layer architecture — browser → Next.js BFF with Redis session cache → Node.js backend with JWT validation → PostgreSQL with RLS — eliminating client-side trust entirely before paying customers onboarded.',
    image: '/projects/security-architecture.png',
  },
  {
    title: 'Stripe Billing System',
    stack: ['Stripe', 'Firestore', 'Webhooks', 'TypeScript'],
    description:
      'Built the full SaaS billing lifecycle from scratch: hosted checkout, seat-based subscriptions, webhook processing with Firestore-backed idempotency, a 7-day grace period with Smart Retries, and a self-service billing portal. Enabled commercial launch and reduced involuntary churn from payment failures.',
    image: '/projects/stripe-billing.png',
  },
  {
    title: 'RAG Pipeline Integration',
    stack: ['LLM', 'Embeddings', 'VectorDB', 'Node.js'],
    description:
      'Supported the migration from plain-text LLM prompting to a full RAG pipeline for ESG document Q&A. Owned the retrieval search layer and identified a hybrid search bottleneck during testing, researching and optimising it to significantly improve answer quality and processing speed.',
    image: '/projects/rag-pipeline.png',
  },
  {
    title: 'Intelligent Voicemail System',
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Cloud Run'],
    description:
      'Engineered an AI voicemail triage system using an LLM-driven workflow architecture. Designed an intelligent pipeline that extracts intent, urgency, and key details from voicemails. Deployed as a containerised production workflow on Google Cloud Platform.',
    image: '/projects/voicemail-system.png',
  },
]
