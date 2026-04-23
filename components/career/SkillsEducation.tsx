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
          <h2 className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">Skills</h2>
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
          <h2 className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">Education</h2>
          <div className="flex flex-col gap-5">
            {education.map((entry) => (
              <div key={entry.institution}>
                <p className="font-sans text-sm font-semibold text-ink mb-0.5">{entry.institution}</p>
                <p className="font-sans text-sm text-ink-body leading-relaxed">{entry.degree}</p>
                <p className="font-sans text-xs text-ink-muted mt-0.5">
                  {entry.period}{entry.grade ? ` · Grade: ${entry.grade}` : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications & Licences — full-width row below */}
        <div className="sm:col-span-2 pt-4 border-t border-parchment">
          <h2 className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">Certifications &amp; Licences</h2>
          <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <p className="font-sans text-sm font-semibold text-ink leading-snug">{cert.name}</p>
                <p className="font-sans text-xs text-ink-muted mt-0.5">
                  {cert.issuer} · {cert.issued}
                  {cert.expires ? ` – ${cert.expires}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
