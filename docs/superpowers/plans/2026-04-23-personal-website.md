# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a three-page personal portfolio site (Home, Career, Gallery) for Vincent Ng using Next.js 14 App Router, TypeScript, and Tailwind CSS, deployed to Vercel.

**Architecture:** Static site — all content in TypeScript data files, all pages statically generated at build time. No backend, no API routes. Photos live in `public/photos/`, project images in `public/projects/`.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, `react-masonry-css`, `next/image`, Google Fonts (Playfair Display + Inter), Vercel.

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout — injects fonts, renders Nav + Footer |
| `app/page.tsx` | Home page — composes home section components |
| `app/career/page.tsx` | Career page — composes career section components |
| `app/gallery/page.tsx` | Gallery page — composes gallery section components |
| `app/globals.css` | Global CSS resets + masonry grid classes |
| `tailwind.config.ts` | Custom colour tokens + font families |
| `components/nav/Nav.tsx` | Sticky nav with active link state + mobile hamburger |
| `components/footer/Footer.tsx` | Footer with copyright + email |
| `components/home/Hero.tsx` | Hero section — name, tagline, CTA buttons |
| `components/home/Bio.tsx` | Bio section — intro paragraph + social links |
| `components/home/ExperiencePreview.tsx` | 2-card preview strip linking to /career |
| `components/home/PhotoPreview.tsx` | 6-photo masonry teaser linking to /gallery |
| `components/career/ExperienceTimeline.tsx` | Vertical timeline of 3 job entries |
| `components/career/ProjectCard.tsx` | Single horizontal card: text left, image right |
| `components/career/SkillsEducation.tsx` | Two-column skills + education section |
| `components/gallery/MasonryGrid.tsx` | 2-column masonry grid with click handler |
| `components/gallery/Lightbox.tsx` | Full-screen overlay with prev/next/close |
| `data/experience.ts` | Job entries array with full content |
| `data/projects.ts` | Project cards array with full content |
| `data/photos.ts` | Photo array with src, alt, width, height |

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `package.json`, `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `next.config.ts`

- [ ] **Step 1: Run create-next-app in the project root**

```bash
npx create-next-app@latest . --typescript --tailwind --app --no-src-dir --import-alias "@/*" --no-git --yes
```

When prompted (if `--yes` doesn't suppress all):
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- `src/` directory: No
- App Router: Yes
- Import alias: `@/*`

- [ ] **Step 2: Verify the scaffold works**

```bash
npm run dev
```

Open http://localhost:3000 — you should see the default Next.js welcome page. Kill the server (`Ctrl+C`).

- [ ] **Step 3: Replace `tailwind.config.ts` with the project design tokens**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fffdf7',
        ink: '#1a1a1a',
        'ink-body': '#6b5f54',
        'ink-muted': '#9a8878',
        parchment: '#e5e1d6',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '6px',
      },
    },
  },
  plugins: [],
}
export default config
```

- [ ] **Step 4: Replace `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    background-color: #fffdf7;
    color: #1a1a1a;
  }
}

/* react-masonry-css */
.masonry-grid {
  display: flex;
  gap: 10px;
}
.masonry-grid-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
```

- [ ] **Step 5: Replace `app/layout.tsx` with fonts + shell layout**

```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vincent Ng',
  description: 'Full-stack developer specialising in AI-powered systems and scalable cloud infrastructure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 6: Create placeholder public directories**

```bash
mkdir -p public/photos public/projects
```

Add a `.gitkeep` to each so they're tracked:

```bash
touch public/photos/.gitkeep public/projects/.gitkeep
```

- [ ] **Step 7: Commit the scaffold**

```bash
git add -A
git commit -m "chore: scaffold Next.js 14 project with Tailwind and design tokens"
```

---

## Task 2: Data files

**Files:**
- Create: `data/experience.ts`
- Create: `data/projects.ts`
- Create: `data/photos.ts`

- [ ] **Step 1: Create `data/experience.ts`**

```ts
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
```

- [ ] **Step 2: Create `data/projects.ts`**

```ts
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
```

- [ ] **Step 3: Create `data/photos.ts`**

```ts
export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

// Add your photos to public/photos/ and list them here.
// width and height are the natural dimensions of the source file.
export const photos: Photo[] = [
  // Example entries — replace with your actual photos:
  // { src: '/photos/img-001.jpg', alt: 'Melbourne city at dusk', width: 1200, height: 800 },
  // { src: '/photos/img-002.jpg', alt: 'Portrait in natural light', width: 800, height: 1200 },
]
```

- [ ] **Step 4: Commit the data layer**

```bash
git add data/
git commit -m "feat: add content data files for experience, projects, and photos"
```

---

## Task 3: Nav and Footer

**Files:**
- Create: `components/nav/Nav.tsx`
- Create: `components/footer/Footer.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/nav/Nav.tsx`**

```tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/career', label: 'Career' },
  { href: '/gallery', label: 'Gallery' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-parchment">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-sans font-bold text-sm text-ink tracking-wide">
          Vincent Ng
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs uppercase tracking-[2px] transition-colors ${
                pathname === link.href
                  ? 'text-ink border-b border-ink pb-0.5'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-parchment bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-sans text-xs uppercase tracking-[2px] ${
                pathname === link.href ? 'text-ink' : 'text-ink-muted'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 2: Create `components/footer/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-parchment mt-24">
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <span className="font-sans text-xs text-ink-muted">© 2026 Vincent Ng</span>
        <a
          href="mailto:wuyinghong0323@gmail.com"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          wuyinghong0323@gmail.com
        </a>
      </div>
    </footer>
  )
}
```

- [ ] **Step 3: Update `app/layout.tsx` to include Nav and Footer**

```tsx
import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vincent Ng',
  description: 'Full-stack developer specialising in AI-powered systems and scalable cloud infrastructure.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify Nav and Footer render**

```bash
npm run dev
```

Open http://localhost:3000 — you should see the nav bar (`Vincent Ng` left, links right) and footer at the bottom. Resize to mobile width — the hamburger should appear and toggle the dropdown.

- [ ] **Step 5: Commit**

```bash
git add components/nav/ components/footer/ app/layout.tsx
git commit -m "feat: add Nav and Footer shared components"
```

---

## Task 4: Home page

**Files:**
- Create: `components/home/Hero.tsx`
- Create: `components/home/Bio.tsx`
- Create: `components/home/ExperiencePreview.tsx`
- Create: `components/home/PhotoPreview.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/home/Hero.tsx`**

```tsx
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 border-b border-parchment">
      <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-4">
        Full-stack Developer
      </p>
      <h1 className="font-serif text-5xl sm:text-6xl font-normal text-ink leading-tight tracking-tight mb-5">
        Vincent Ng
      </h1>
      <p className="font-sans text-sm text-ink-body leading-relaxed max-w-md mb-8">
        Specialising in AI-powered systems and scalable cloud infrastructure. Based in Melbourne.
      </p>
      <div className="flex gap-3">
        <Link
          href="/career"
          className="font-sans text-xs uppercase tracking-[1px] bg-ink text-cream px-5 py-2.5 rounded-sm hover:bg-ink-body transition-colors"
        >
          View Career
        </Link>
        <Link
          href="/gallery"
          className="font-sans text-xs uppercase tracking-[1px] border border-parchment text-ink-muted px-5 py-2.5 rounded-sm hover:border-ink-muted hover:text-ink transition-colors"
        >
          Gallery
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/home/Bio.tsx`**

```tsx
export default function Bio() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
      <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">About</p>
      <p className="font-serif text-xl text-ink leading-relaxed max-w-2xl">
        Full-stack developer and University of Melbourne graduate, building production SaaS at
        Vellum ESG — from zero-trust security architecture to RAG pipelines and billing
        infrastructure. Also a photographer.
      </p>
      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/V1ncenTNg02"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/yingwang-ng-14b29725b"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:wuyinghong0323@gmail.com"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          Email ↗
        </a>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `components/home/ExperiencePreview.tsx`**

```tsx
import Link from 'next/link'
import { experience, projects } from '@/data/experience'
import { projects as projectList } from '@/data/projects'

export default function ExperiencePreview() {
  const latestJob = experience[0]
  const featuredProject = projectList[0]

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
      <div className="flex justify-between items-baseline mb-8">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted">
          Experience &amp; Projects
        </p>
        <Link href="/career" className="font-sans text-xs text-ink-muted hover:text-ink transition-colors">
          View all →
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {/* Job preview */}
        <Link
          href="/career"
          className="border border-parchment rounded-card p-5 bg-white hover:border-ink-muted transition-colors block"
        >
          <div className="flex justify-between items-baseline">
            <span className="font-sans text-sm font-semibold text-ink">{latestJob.company} — {latestJob.role}</span>
            <span className="font-sans text-xs text-ink-muted">{latestJob.period}</span>
          </div>
          <p className="font-sans text-xs text-ink-body mt-1.5">{latestJob.stack.join(' · ')}</p>
        </Link>
        {/* Project preview */}
        <Link
          href="/career"
          className="border border-parchment rounded-card p-5 bg-white hover:border-ink-muted transition-colors block"
        >
          <div className="flex justify-between items-baseline">
            <span className="font-sans text-sm font-semibold text-ink">{featuredProject.title}</span>
            <span className="font-sans text-xs text-ink-muted">Project ↗</span>
          </div>
          <p className="font-sans text-xs text-ink-body mt-1.5">{featuredProject.stack.join(' · ')}</p>
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create `components/home/PhotoPreview.tsx`**

```tsx
import Link from 'next/link'
import Image from 'next/image'
import { photos } from '@/data/photos'

export default function PhotoPreview() {
  const preview = photos.slice(0, 6)

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex justify-between items-baseline mb-8">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted">Photography</p>
        <Link href="/gallery" className="font-sans text-xs text-ink-muted hover:text-ink transition-colors">
          View gallery →
        </Link>
      </div>
      {preview.length === 0 ? (
        <p className="font-sans text-xs text-ink-muted">Photos coming soon.</p>
      ) : (
        <Link href="/gallery" className="block">
          <div className="columns-3 gap-2">
            {preview.map((photo, i) => (
              <div key={i} className="break-inside-avoid mb-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto rounded-sm"
                />
              </div>
            ))}
          </div>
        </Link>
      )}
    </section>
  )
}
```

- [ ] **Step 5: Replace `app/page.tsx`**

```tsx
import Hero from '@/components/home/Hero'
import Bio from '@/components/home/Bio'
import ExperiencePreview from '@/components/home/ExperiencePreview'
import PhotoPreview from '@/components/home/PhotoPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Bio />
      <ExperiencePreview />
      <PhotoPreview />
    </>
  )
}
```

- [ ] **Step 6: Verify the home page**

```bash
npm run dev
```

Open http://localhost:3000. Verify:
- Hero section shows name, tagline, and two buttons
- Bio section shows intro text and three social links
- Experience preview shows two cards linking to /career
- Photography section shows "Photos coming soon." (no photos added yet)

- [ ] **Step 7: Fix the import in ExperiencePreview.tsx**

The file has a duplicate import — remove the second `projects` import. Replace the top of `components/home/ExperiencePreview.tsx`:

```tsx
import Link from 'next/link'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'
```

- [ ] **Step 8: Commit**

```bash
git add components/home/ app/page.tsx
git commit -m "feat: add Home page with Hero, Bio, ExperiencePreview, and PhotoPreview"
```

---

## Task 5: Career page

**Files:**
- Create: `components/career/ExperienceTimeline.tsx`
- Create: `components/career/ProjectCard.tsx`
- Create: `components/career/SkillsEducation.tsx`
- Create: `app/career/page.tsx`

- [ ] **Step 1: Create `components/career/ExperienceTimeline.tsx`**

```tsx
import { experience } from '@/data/experience'

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
      <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-10">Experience</p>
      <div className="flex flex-col">
        {experience.map((entry, i) => (
          <div key={i} className="flex gap-6">
            {/* Timeline spine */}
            <div className="flex flex-col items-center w-4 flex-shrink-0 pt-1">
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 0 ? 'bg-ink' : i === 1 ? 'bg-ink-muted' : 'bg-parchment border border-ink-muted'}`} />
              {i < experience.length - 1 && (
                <div className="w-px flex-1 bg-parchment mt-1" />
              )}
            </div>
            {/* Content */}
            <div className={`flex-1 ${i < experience.length - 1 ? 'pb-10' : ''}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <span className="font-sans text-sm font-semibold text-ink">
                  {entry.company} — {entry.role}
                </span>
                <span className="font-sans text-xs text-ink-muted flex-shrink-0">{entry.period}</span>
              </div>
              {entry.stack.length > 0 && (
                <p className="font-sans text-xs text-ink-muted mb-3 tracking-wide">
                  {entry.stack.join(' · ')}
                </p>
              )}
              <ul className="flex flex-col gap-1.5">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="font-sans text-sm text-ink-body leading-relaxed">
                    • {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `components/career/ProjectCard.tsx`**

```tsx
import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-parchment rounded-card overflow-hidden bg-white flex flex-col sm:flex-row">
      {/* Text — left */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <h3 className="font-sans text-sm font-semibold text-ink mb-1.5">{project.title}</h3>
        <p className="font-sans text-xs text-ink-muted mb-3 tracking-wide">
          {project.stack.join(' · ')}
        </p>
        <p className="font-sans text-sm text-ink-body leading-relaxed">{project.description}</p>
      </div>
      {/* Image — right */}
      <div className="sm:w-52 sm:flex-shrink-0 h-40 sm:h-auto relative bg-parchment">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 208px"
          onError={() => {/* image not yet added — shows bg-parchment placeholder */}}
        />
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create `components/career/SkillsEducation.tsx`**

```tsx
import { education, certifications } from '@/data/experience'

const skills = [
  'TypeScript', 'JavaScript', 'Python',
  'Node.js', 'Next.js', 'React', 'Tailwind CSS',
  'PostgreSQL', 'Redis', 'REST APIs',
  'GCP', 'AWS', 'Docker', 'CI/CD',
  'RAG', 'LLM', 'Agentic Systems', 'VectorDB',
]

export default function SkillsEducation() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Skills */}
        <div>
          <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-sans text-xs text-ink-body border border-parchment rounded-sm px-2.5 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Education */}
        <div>
          <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">Education</p>
          <p className="font-sans text-sm font-semibold text-ink mb-1">{education.institution}</p>
          <p className="font-sans text-sm text-ink-body leading-relaxed mb-1">{education.degree}</p>
          <p className="font-sans text-xs text-ink-muted mb-5">{education.period}</p>
          <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-3">Certifications</p>
          {certifications.map((cert) => (
            <p key={cert.name} className="font-sans text-sm text-ink-body leading-relaxed">
              {cert.name} · {cert.year}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Create `app/career/page.tsx`**

```tsx
import ExperienceTimeline from '@/components/career/ExperienceTimeline'
import ProjectCard from '@/components/career/ProjectCard'
import SkillsEducation from '@/components/career/SkillsEducation'
import { projects } from '@/data/projects'

export default function CareerPage() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 border-b border-parchment">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-4">Career</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink leading-tight tracking-tight mb-4">
          Experience &amp; Projects
        </h1>
        <p className="font-sans text-sm text-ink-body leading-relaxed max-w-lg">
          Full-stack developer with a focus on AI systems, cloud infrastructure, and production SaaS.
        </p>
      </div>

      <ExperienceTimeline />

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-10">
          Featured Projects
        </p>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <SkillsEducation />
    </>
  )
}
```

- [ ] **Step 5: Verify the career page**

```bash
npm run dev
```

Open http://localhost:3000/career. Verify:
- Page header shows correctly
- Timeline shows 3 entries with dots and connecting lines
- 4 project cards render (image area shows cream placeholder since no images added yet)
- Skills tags and education section render at the bottom

- [ ] **Step 6: Commit**

```bash
git add components/career/ app/career/
git commit -m "feat: add Career page with timeline, project cards, and skills"
```

---

## Task 6: Gallery page

**Files:**
- Modify: `package.json` (add `react-masonry-css`)
- Create: `components/gallery/MasonryGrid.tsx`
- Create: `components/gallery/Lightbox.tsx`
- Create: `app/gallery/page.tsx`

- [ ] **Step 1: Install react-masonry-css**

```bash
npm install react-masonry-css
```

- [ ] **Step 2: Create `components/gallery/Lightbox.tsx`**

```tsx
'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { Photo } from '@/data/photos'

interface LightboxProps {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Photo */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[85vh] w-auto h-auto object-contain rounded-sm"
          priority
        />
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous photo"
      >
        ←
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next photo"
      >
        →
      </button>

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-cream/70 hover:text-cream text-sm font-sans"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-cream/50">
        {index + 1} / {photos.length}
      </p>
    </div>
  )
}
```

- [ ] **Step 3: Create `components/gallery/MasonryGrid.tsx`**

```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Lightbox from './Lightbox'
import type { Photo } from '@/data/photos'

const breakpointCols = {
  default: 2,
  640: 1,
}

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    return (
      <p className="font-sans text-xs text-ink-muted">Photos coming soon.</p>
    )
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointCols}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="block w-full cursor-pointer"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto rounded-[4px] hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </button>
        ))}
      </Masonry>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => (i! - 1 + photos.length) % photos.length)}
          onNext={() => setLightboxIndex((i) => (i! + 1) % photos.length)}
        />
      )}
    </>
  )
}
```

- [ ] **Step 4: Create `app/gallery/page.tsx`**

```tsx
import MasonryGrid from '@/components/gallery/MasonryGrid'
import { photos } from '@/data/photos'

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 border-b border-parchment">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-4">Photography</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink leading-tight tracking-tight mb-4">
          Gallery
        </h1>
        <p className="font-sans text-sm text-ink-body leading-relaxed max-w-lg">
          A mix of landscapes, street, and travel photography.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <MasonryGrid photos={photos} />
      </div>
    </>
  )
}
```

- [ ] **Step 5: Verify the gallery page**

```bash
npm run dev
```

Open http://localhost:3000/gallery. Verify:
- Page header renders correctly
- "Photos coming soon." placeholder shows (no photos yet)

To test the masonry grid and lightbox, add 2–3 test images to `public/photos/` and add their entries to `data/photos.ts`:
```ts
export const photos: Photo[] = [
  { src: '/photos/test-1.jpg', alt: 'Test photo 1', width: 1200, height: 800 },
  { src: '/photos/test-2.jpg', alt: 'Test photo 2', width: 800, height: 1200 },
  { src: '/photos/test-3.jpg', alt: 'Test photo 3', width: 1000, height: 1000 },
]
```

Verify:
- Photos appear in 2-column masonry layout
- Clicking a photo opens the lightbox
- Arrow keys and ← → buttons navigate between photos
- Escape key and ✕ button close the lightbox
- Clicking outside the photo closes the lightbox

- [ ] **Step 6: Commit**

```bash
git add components/gallery/ app/gallery/ package.json package-lock.json
git commit -m "feat: add Gallery page with masonry grid and lightbox"
```

---

## Task 7: Responsive polish and final verification

**Files:**
- Verify: all pages at mobile, tablet, desktop widths
- Verify: `next build` passes with zero errors

- [ ] **Step 1: Test all pages at mobile width (375px)**

Open Chrome DevTools, set device to 375px width. Check each page:

**Home (/):**
- Nav collapses to hamburger — tap it, dropdown appears, links work
- Hero text doesn't overflow
- Buttons stack or stay side by side (flex-wrap is fine)

**Career (/career):**
- Timeline dots + content don't overflow
- Project cards: image appears above text (flex-col on mobile via `flex-col sm:flex-row`)
- Skills tags wrap correctly

**Gallery (/gallery):**
- Grid collapses to 1 column (`breakpointCols={{ default: 2, 640: 1 }}`)
- Lightbox still usable at mobile width

- [ ] **Step 2: Test at tablet width (768px)**

Check each page at 768px. All layouts should be in their desktop configuration since breakpoints start at `sm:` (640px).

- [ ] **Step 3: Add your actual photos**

Add your photos to `public/photos/` and update `data/photos.ts` with each file's:
- `src`: `/photos/your-filename.jpg`
- `alt`: descriptive text for accessibility
- `width` + `height`: the natural pixel dimensions of the source file (check in macOS Preview → Tools → Show Inspector, or Windows → right-click → Properties → Details)

Add project cover images to `public/projects/` matching the filenames in `data/projects.ts`:
- `security-architecture.png`
- `stripe-billing.png`
- `rag-pipeline.png`
- `voicemail-system.png`

Update the gallery description in `app/gallery/page.tsx` with your own copy.

- [ ] **Step 4: Run a production build to catch any errors**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with no TypeScript errors. If `next/image` throws about missing dimensions, verify all photos in `data/photos.ts` have correct `width` and `height` values.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete personal website — Home, Career, Gallery pages"
```

- [ ] **Step 6: Deploy to Vercel**

```bash
npx vercel
```

Follow the prompts:
- Link to existing project or create new
- Project name: `vincent-ng` (or your preference)
- Framework: Next.js (auto-detected)

Vercel will provide a live URL. Every subsequent `git push` to `main` auto-deploys.

---

## Self-Review Notes

- All four spec sections covered: Home ✓, Career ✓, Gallery ✓, shared Nav/Footer ✓
- Responsive behaviour specified: mobile hamburger nav ✓, 1-col gallery on mobile ✓, stacked project cards on mobile ✓
- Design tokens wired: Tailwind config with all 5 colour tokens ✓, both fonts ✓
- Data files have full content, not placeholders ✓
- `ProjectCard` image uses `fill` + `relative` parent for correct `object-fit: cover` ✓
- `MasonryGrid` and `Lightbox` both marked `'use client'` (they use state/effects) ✓
- `Nav` marked `'use client'` (uses `usePathname` + `useState`) ✓
- Gallery description in `app/gallery/page.tsx` flagged for user to personalise ✓
