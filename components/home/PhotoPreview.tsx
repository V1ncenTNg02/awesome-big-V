import Link from 'next/link'
import Image from 'next/image'
import { photos } from '@/data/photos'

export default function PhotoPreview() {
  const preview = photos.slice(0, 6)

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex justify-between items-baseline mb-8">
        <p className="font-sans text-xs uppercase tracking-[2px] text-ink-muted">Photography</p>
        <Link href="/gallery" className="font-sans text-xs text-ink-muted hover:text-ink transition-colors">
          View gallery →
        </Link>
      </div>
      {preview.length === 0 ? (
        <p className="font-sans text-xs text-ink-muted">Photos coming soon.</p>
      ) : (
        <Link href="/gallery" className="block">
          <div className="columns-3 gap-2">
            {preview.map((photo, i) => (
              <div key={i} className="break-inside-avoid mb-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto rounded-sm"
                />
              </div>
            ))}
          </div>
        </Link>
      )}
    </section>
  )
}
