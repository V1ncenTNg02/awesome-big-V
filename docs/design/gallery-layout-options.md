# Gallery Layout Options

**Active choice:** Masonry

---

## Masonry (current)
Photos flow into columns at their natural proportions. Organic, editorial feel — works beautifully with mixed orientations. The classic choice for serious photography.
- Implementation: CSS `columns` or a JS masonry library (e.g. `react-masonry-css`)
- Best for: mixed genres, variable aspect ratios

---

## Alternative A — Justified Grid
Each row is filled edge-to-edge with photos scaled to the same row height. Clean and structured, like a photo book or newspaper spread.
- Implementation: `react-justified-layout` (Flickr's algorithm) or similar
- Best for: when you want a tidier, more uniform look without cropping
- Switch to this if the masonry feel becomes too chaotic as the photo count grows

## Alternative B — Editorial Mixed
Hero shots span full width, others pair side-by-side. Curated, magazine-style layout.
- Implementation: manually curated CSS grid with `grid-column: span 2` on featured photos
- Best for: a smaller, hand-picked collection where specific shots deserve emphasis
- Switch to this if you want to tell a story through photo sequencing
