import MasonryGrid from '@/components/gallery/MasonryGrid'
import { photos } from '@/data/photos'

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-14 border-b border-parchment">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted mb-4">Photography</p>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-ink leading-tight tracking-tight mb-4">
          Gallery
        </h1>
        <p className="font-sans text-sm text-ink-body leading-relaxed max-w-lg">
          A mix of landscapes, street, and travel photography.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <MasonryGrid photos={photos} />
      </div>
    </>
  )
}
