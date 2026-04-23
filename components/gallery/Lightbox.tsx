'use client'

import { useEffect, useRef } from 'react'
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
  const dialogRef = useRef<HTMLDivElement>(null)
  useEffect(() => { dialogRef.current?.focus() }, [])

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
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-caption"
      className="fixed inset-0 z-50 bg-ink/90 flex items-center justify-center p-4 outline-none"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          className="max-h-[85vh] w-auto h-auto object-contain rounded-sm"
          sizes="(max-width: 1024px) 100vw, 1024px"
          priority
        />

        <p id="lightbox-caption" className="sr-only">{photo.alt}</p>

        {/* Prev */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full text-cream/70 hover:text-cream text-2xl px-3 py-2"
          onClick={onPrev}
          aria-label="Previous photo"
        >
          ←
        </button>

        {/* Next */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full text-cream/70 hover:text-cream text-2xl px-3 py-2"
          onClick={onNext}
          aria-label="Next photo"
        >
          →
        </button>

        {/* Close */}
        <button
          className="absolute -top-10 right-0 text-cream/70 hover:text-cream text-sm font-sans px-2 py-1"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          ✕
        </button>

        {/* Counter */}
        <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-sans text-xs text-cream/50">
          {index + 1} / {photos.length}
        </p>
      </div>
    </div>
  )
}
