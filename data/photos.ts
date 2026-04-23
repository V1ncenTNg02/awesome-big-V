export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

// Add your photos to public/photos/ and list them here.
// width and height are the natural dimensions of the source file.
export const photos: Photo[] = [
  // Example entries — replace with your actual photos:
  // { src: '/photos/img-001.jpg', alt: 'Melbourne city at dusk', width: 1200, height: 800 },
  // { src: '/photos/img-002.jpg', alt: 'Portrait in natural light', width: 800, height: 1200 },
]
