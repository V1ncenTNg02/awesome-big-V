import Link from 'next/link'
import { experience } from '@/data/experience'
import { projects } from '@/data/projects'

export default function ExperiencePreview() {
  const latestJob = experience[0]
  const featuredProject = projects[0]

  if (!latestJob || !featuredProject) return null

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
          className="border border-parchment rounded-card p-5 bg-cream hover:border-ink-muted transition-colors block"
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
          className="border border-parchment rounded-card p-5 bg-cream hover:border-ink-muted transition-colors block"
        >
          <div className="flex justify-between items-baseline">
            <span className="font-sans text-sm font-semibold text-ink">{featuredProject.title}</span>
            <span className="font-sans text-xs text-ink-muted">View on Career →</span>
          </div>
          <p className="font-sans text-xs text-ink-body mt-1.5">{featuredProject.stack.join(' · ')}</p>
        </Link>
      </div>
    </section>
  )
}
