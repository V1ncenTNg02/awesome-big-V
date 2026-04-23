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
