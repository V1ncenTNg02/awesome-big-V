'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import type { Photo } from '@/data/photos'

interface LightboxProps {
  photos: Photo[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ photos, index, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[index]

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo lightbox"
      className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Photo */}
      <div
        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[85vh] w-auto h-auto object-contain rounded-sm"
          priority
        />
      </div>

      {/* Prev */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous photo"
      >
        ←
      </button>

      {/* Next */}
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-2xl px-3 py-2"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next photo"
      >
        →
      </button>

      {/* Close */}
      <button
        className="absolute top-4 right-4 text-cream/70 hover:text-cream text-sm font-sans px-2 py-1"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ✕
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-xs text-cream/50">
        {index + 1} / {photos.length}
      </p>
    </div>
  )
}
