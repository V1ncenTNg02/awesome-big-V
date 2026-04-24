import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-parchment rounded-card overflow-hidden bg-cream flex flex-col">
      {/* Text */}
      <div className="p-6 flex flex-col">
        <h3 className="font-sans text-sm font-semibold text-ink mb-1.5">{project.title}</h3>
        <p className="font-sans text-xs text-ink-muted mb-3 tracking-wide">
          {project.stack.join(' · ')}
        </p>
        <p className="font-sans text-sm text-ink-body leading-relaxed">{project.description}</p>
        <ul className="mt-4 pt-4 border-t border-parchment list-none flex flex-col gap-2">
          {project.bullets.map((bullet, i) => (
            <li key={i} className="font-sans text-sm text-ink-body leading-relaxed flex gap-2">
              <span className="text-ink-muted flex-shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Image — bottom, full width */}
      <div className="relative h-56 w-full bg-parchment">
        <Image
          src={project.image}
          alt={`Screenshot: ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
        />
      </div>
    </div>
  )
}
