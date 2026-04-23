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
