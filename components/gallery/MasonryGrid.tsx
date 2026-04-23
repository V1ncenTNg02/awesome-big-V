'use client'

import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Lightbox from './Lightbox'
import type { Photo } from '@/data/photos'

const breakpointCols = {
  default: 2,
  640: 1,
}

export default function MasonryGrid({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  if (photos.length === 0) {
    return (
      <p className="font-sans text-xs text-ink-muted">Photos coming soon.</p>
    )
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointCols}
        className="masonry-grid"
        columnClassName="masonry-grid-column"
      >
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setLightboxIndex(i)}
            className="block w-full cursor-pointer"
            aria-label={`Open photo: ${photo.alt}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto rounded-[4px] hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </button>
        ))}
      </Masonry>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => ((i ?? 0) - 1 + photos.length) % photos.length)}
          onNext={() => setLightboxIndex((i) => ((i ?? 0) + 1) % photos.length)}
        />
      )}
    </>
  )
}
