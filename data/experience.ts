export interface ExperienceEntry {
  company: string
  role: string
  location: string
  period: string
  stack: string[]
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Vellum ESG Pty Ltd',
    role: 'Full-stack Developer',
    location: 'Melbourne, VIC',
    period: 'Nov 2024 – Mar 2026',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'GCP', 'RAG'],
    bullets: [
      'Integrated LLM and RAG workflows into ESG reporting, enhancing automated reporting process',
      'Re-architected frontend and backend using SOLID, MVC and introduced a BFF layer to improve system security, session handling and API scalability',
      'Implemented Stripe billing and Postmark email automation systems, enabling event-driven customer and internal notification workflows',
      'Implemented CI/CD and containerised deployments on GCP Cloud Run, cutting release time by ~30%',
    ],
  },
  {
    company: 'Greythorn Asset Management',
    role: 'Frontend Developer Intern',
    location: 'Melbourne, VIC',
    period: 'Jan 2024 – Mar 2024',
    stack: ['TypeScript', 'Next.js', 'TailwindCSS', 'PostgreSQL', 'Docker'],
    bullets: [
      'Developed marketing and client-facing SPAs in Next.js/TypeScript, delivering responsive, production-ready interfaces',
      'Worked with RESTful APIs and PostgreSQL-backed services to surface portfolio and analytics data in the UI',
    ],
  },
  {
    company: 'China Unicom',
    role: 'IT Support',
    location: 'China',
    period: '2022',
    stack: [],
    bullets: [
      'Provided network operations support and resolved client technical issues under time pressure',
      'Automated monthly reporting workflow, reducing manual effort by ~50%',
    ],
  },
]

export const education = {
  institution: 'The University of Melbourne',
  degree: 'Bachelor of Science — Computing and Software Systems',
  period: 'Feb 2021 – Dec 2023',
  courses: ['Data Structures & Algorithms', 'Database Design', 'Operating Systems', 'Artificial Intelligence'],
}

export const certifications = [
  { name: 'AWS Cloud Practitioner', year: '2023' },
  { name: 'Foundational C# with Microsoft', year: '2024' },
]
