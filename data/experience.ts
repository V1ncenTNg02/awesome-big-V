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
  {
    company: 'Fyto Technologies Inc.',
    role: 'Full-Stack Intern',
    location: 'Melbourne, VIC · Remote',
    period: 'Aug 2023 – Nov 2023',
    stack: ['Swift', 'AWS Cognito', 'AWS'],
    bullets: [
      'Developed an iOS application using Swift, AWS Cognito, and cloud services for real-time data retrieval and interaction with a fire extinguishing system',
      'Implemented real-time connection between the app and back-end servers, including live data retrieval from third-party services via APIs',
      'Collaborated with UI designers to integrate visual elements with back-end functionality',
      'Completed app development on schedule — estimated for App Store release Dec 2023',
    ],
  },
  {
    company: 'Dalongyi Hot Pot',
    role: 'Waiter',
    location: 'Melbourne, VIC',
    period: 'Jan 2022 – Mar 2022',
    stack: [],
    bullets: [
      'Delivered front-of-house service in a busy CBD restaurant, handling customer communication and unexpected situations under pressure',
      'Worked closely with teammates in a fast-paced environment to maintain service quality',
    ],
  },
]

export interface EducationEntry {
  institution: string
  degree: string
  period: string
  grade?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'The University of Melbourne',
    degree: 'Bachelor of Science — Computing and Software Systems',
    period: 'Feb 2021 – Dec 2023',
  },
  {
    institution: 'Trinity College, The University of Melbourne',
    degree: 'Foundation Degree — Computer Science',
    period: 'Aug 2019 – Dec 2021',
    grade: '90.5',
  },
]

export const certifications = [
  { name: 'AWS Cloud Practitioner', year: '2023' },
  { name: 'Foundational C# with Microsoft', year: '2024' },
]
