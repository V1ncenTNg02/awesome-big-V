import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-parchment rounded-card overflow-hidden bg-cream flex flex-col sm:flex-row">
      {/* Text — left */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <h3 className="font-sans text-sm font-semibold text-ink mb-1.5">{project.title}</h3>
        <p className="font-sans text-xs text-ink-muted mb-3 tracking-wide">
          {project.stack.join(' · ')}
        </p>
        <p className="font-sans text-sm text-ink-body leading-relaxed">{project.description}</p>
      </div>
      {/* Image — right */}
      <div className="sm:w-52 sm:flex-shrink-0 h-40 sm:h-full relative bg-parchment">
        <Image
          src={project.image}
          alt={`Screenshot: ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 208px"
        />
      </div>
    </div>
  )
}
