import { experience } from '@/data/experience'

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
      <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-10">Experience</p>
      <div className="flex flex-col">
        {experience.map((entry, i) => (
          <div key={`${entry.company}-${entry.period}`} className="flex gap-6">
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
              <ul className="flex flex-col gap-1.5 list-none">
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
