# Personal Website — Design Spec
**Date:** 2026-04-23
**Author:** Vincent Ng
**Status:** Approved

---

## 1. Overview

A personal portfolio website for Vincent Ng — full-stack developer and photographer. Three pages: a home/general page, a projects & career page, and a photography gallery. Built with Next.js, deployed to Vercel.

---

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Playfair Display (headings) + Inter (body) via Google Fonts |
| Gallery | `react-masonry-css` |
| Images | `next/image` (automatic optimisation + lazy loading) |
| Deployment | Vercel (free tier) |

---

## 3. Visual Design — Warm Editorial

| Token | Value |
|---|---|
| Background | `#fffdf7` (cream) |
| Primary text | `#1a1a1a` |
| Body text | `#6b5f54` (warm brown) |
| Muted / accent | `#9a8878` (warm taupe) |
| Border / divider | `#e5e1d6` |
| Card background | `#ffffff` |
| Card border-radius | `6px` |

Typography:
- Headings: Playfair Display, weight 400–700, negative letter-spacing on large sizes
- Body / labels: Inter, weight 400–600
- Section labels: Inter, 10–11px, uppercase, letter-spacing 2px, colour `#9a8878`

---

## 4. Folder Structure

```
app/
  layout.tsx            ← shared Nav + Footer
  page.tsx              ← Home
  career/
    page.tsx            ← Projects & Career
  gallery/
    page.tsx            ← Photography Gallery
components/
  nav/
    Nav.tsx
  footer/
    Footer.tsx
  home/
    Hero.tsx
    Bio.tsx
    ExperiencePreview.tsx
    PhotoPreview.tsx
  career/
    ExperienceTimeline.tsx
    ProjectCard.tsx
    SkillsEducation.tsx
  gallery/
    MasonryGrid.tsx
    Lightbox.tsx
data/
  experience.ts         ← jobs + education
  projects.ts           ← project cards
  photos.ts             ← photo filenames + metadata
public/
  photos/               ← photography images
  projects/             ← one cover image per project
```

---

## 5. Page Designs

### 5.1 Home (`/`)

Sections in order:

1. **Nav** — `Vincent Ng` left, `Home / Career / Gallery` right. Sticky, cream background, bottom border.
2. **Hero** — Section label `Full-stack Developer` (taupe uppercase). Large serif name `Vincent Ng`. One-line tagline. Two CTA buttons: `View Career` (filled dark) + `Gallery` (outlined).
3. **Bio** — Section label `About`. 2–3 sentence intro paragraph. GitHub, LinkedIn, Email links.
4. **Experience & Projects preview** — Section label + `View all →` link. Two preview cards (one job, one project) linking to `/career`.
5. **Photography preview** — Section label + `View gallery →` link. Mini 3-column masonry teaser of 6 photos linking to `/gallery`.
6. **Footer** — `© 2026 Vincent Ng` left, `wuyinghong0323@gmail.com` right.

**Bio copy (draft):**
> Full-stack developer and University of Melbourne graduate, building production SaaS at Vellum ESG — from zero-trust security architecture to RAG pipelines and billing infrastructure. Also a photographer.

---

### 5.2 Career (`/career`)

Sections in order:

1. **Nav** (same as home, `Career` underlined as active)
2. **Page header** — Label `Career`, serif heading `Experience & Projects`, short descriptor.
3. **Experience timeline** — Vertical timeline with dot + connecting line. Three entries:
   - Vellum ESG Pty Ltd — Full-stack Developer (Nov 2024 – Mar 2026)
   - Greythorn Asset Management — Frontend Developer Intern (Jan – Mar 2024)
   - China Unicom — IT Support (2022)
   Each entry shows: company + role, date range, tech stack tags, 3–4 bullet points.
4. **Featured Projects** — Section label. Four full-width horizontal cards, one per row:
   - Layout: text content (title, tech tags, description) on left — cover image on right (200px wide, `object-fit: cover`)
   - Corner radius: `6px`
   - Projects: Security Architecture Overhaul · Stripe Billing System · RAG Pipeline Integration · Intelligent Voicemail System
   - Images stored in `public/projects/`, one per project
5. **Skills + Education** — Two-column row.
   - Skills: TypeScript, Node.js, Next.js, PostgreSQL, Redis, GCP, AWS, RAG, LLM, Docker, CI/CD, REST APIs, Tailwind CSS
   - Education: University of Melbourne — BSc Computing & Software Systems (Feb 2021 – Dec 2023). Certifications: AWS Cloud Practitioner, Foundational C# with Microsoft.
6. **Footer** (same as home)

---

### 5.3 Gallery (`/gallery`)

Sections in order:

1. **Nav** (`Gallery` underlined as active)
2. **Page header** — Label `Photography`, serif heading `Gallery`, short descriptor (user to provide — e.g. genres, locations).
3. **Masonry grid** — 2 columns, 10px gap, `4px` border-radius on each photo. Photos loaded from `public/photos/`. `next/image` with `object-fit: cover`, natural aspect ratios preserved via masonry layout.
4. **Lightbox** — Click any photo to open full-screen overlay. Prev/next navigation, close on Escape or click outside.
5. **Footer** (same as home)

**Gallery implementation note:**
- Use `react-masonry-css` with `breakpointCols={{ default: 2, 640: 1 }}` — collapses to 1 column on mobile.
- Alternative layouts saved at `docs/design/gallery-layout-options.md` for future reference.

---

## 6. Shared Components

### Nav
- Sticky top, `z-50`
- Logo: `Vincent Ng` — links to `/`
- Links: `Home`, `Career`, `Gallery`
- Active link: `color: #1a1a1a`, `border-bottom: 1px solid #1a1a1a`
- Background: `#fffdf7`, `border-bottom: 1px solid #e5e1d6`

### Footer
- Two columns: copyright left, email right
- Text: `#9a8878`, 11px Inter

---

## 7. Content Data

### `data/experience.ts`
```ts
export const experience = [
  {
    company: 'Vellum ESG Pty Ltd',
    role: 'Full-stack Developer',
    location: 'Melbourne, VIC',
    period: 'Nov 2024 – Mar 2026',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'GCP', 'RAG'],
    bullets: [
      'Re-architected platform with 4-layer zero-trust BFF security architecture',
      'Built Stripe billing lifecycle & Postmark email automation system',
      'Integrated LLM/RAG workflows into ESG reporting pipeline',
      'CI/CD on GCP Cloud Run, cutting release time ~30%',
    ],
  },
  // ...
]
```

### `data/projects.ts`
```ts
export const projects = [
  {
    title: 'Security Architecture Overhaul',
    stack: ['Next.js BFF', 'Redis', 'RBAC', 'RLS'],
    description: 'Zero-trust 4-layer architecture eliminating client-side trust before customer launch.',
    image: '/projects/security-architecture.png',
  },
  // ...
]
```

### `data/photos.ts`
```ts
export const photos = [
  { src: '/photos/img-001.jpg', alt: '' },
  // ...
]
```

---

## 8. Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| Mobile (`< 640px`) | Gallery: 1 column. Project cards: image stacks above text. Nav: links hidden, hamburger button toggles a dropdown. |
| Tablet (`640–1024px`) | Gallery: 2 columns. Project cards: horizontal (narrower image). |
| Desktop (`> 1024px`) | All layouts as designed. |

---

## 9. Personal Details

| Field | Value |
|---|---|
| Name | Vincent Ng |
| Tagline | Full-stack developer specialising in AI-powered systems and scalable cloud infrastructure |
| Email | wuyinghong0323@gmail.com |
| Phone | 0412 389 694 |
| GitHub | https://github.com/V1ncenTNg02 |
| LinkedIn | https://www.linkedin.com/in/yingwang-ng-14b29725b |
| University | University of Melbourne — BSc Computing & Software Systems (Feb 2021 – Dec 2023) |

---

## 10. Out of Scope (v1)

- Contact form (email link only)
- Dark mode toggle
- Blog / writing section
- CMS integration
- Analytics
- i18n
