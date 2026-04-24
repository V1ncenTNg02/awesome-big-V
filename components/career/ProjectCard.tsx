import Image from 'next/image'
import type { Project } from '@/data/projects'

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <div className="border border-parchment rounded-card overflow-hidden bg-cream flex flex-col">
      {/* Text */}
      <div className="p-6 flex flex-col">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 group mb-1.5"
          >
            <h3 className="font-sans text-sm font-semibold text-ink group-hover:underline underline-offset-2">
              {project.title}
            </h3>
            <span className="text-ink-muted text-xs">↗</span>
          </a>
        ) : (
          <h3 className="font-sans text-sm font-semibold text-ink mb-1.5">{project.title}</h3>
        )}
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
      {/* Image — bottom, full width, natural height */}
      <div className="w-full bg-parchment">
        <Image
          src={project.image}
          alt={`Screenshot: ${project.title}`}
          width={project.imageWidth}
          height={project.imageHeight}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
          className="w-full h-auto"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    </div>
  )
}
