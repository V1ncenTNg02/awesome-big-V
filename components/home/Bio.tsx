export default function Bio() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-b border-parchment">
      <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-6">About</p>
      <p className="font-serif text-xl text-ink leading-relaxed max-w-2xl">
        Full-stack developer and University of Melbourne graduate, building production SaaS at
        Vellum ESG — from zero-trust security architecture to RAG pipelines and billing
        infrastructure. Also a photographer.
      </p>
      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/V1ncenTNg02"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.linkedin.com/in/yingwang-ng-14b29725b"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:wuyinghong0323@gmail.com"
          className="font-sans text-xs text-ink-muted hover:text-ink transition-colors"
        >
          Email ↗
        </a>
      </div>
    </section>
  )
}
