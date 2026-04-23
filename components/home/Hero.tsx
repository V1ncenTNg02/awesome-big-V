import Link from 'next/link'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 border-b border-parchment">
      <h2 className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-4">
        Full-stack Developer
      </h2>
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
