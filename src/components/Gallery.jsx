// ============================================================
// Gallery — Masonry grid + lightbox
// ============================================================
import { useState, useEffect } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { GALLERY_IMAGES } from '../data/mountainData'

export default function Gallery() {
  const [ref, visible] = useIntersectionObserver()
  const [lightbox, setLightbox] = useState(null) // index of open image

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % GALLERY_IMAGES.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Visual Journal</p>
          <h2 className="section__title">The Mountain Through the Lens</h2>
          <p className="section__subtitle">
            A curated collection of real expedition photography from the world's greatest ranges.
          </p>
        </div>

        <div className="gallery__masonry">
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryItem
              key={i}
              img={img}
              index={i}
              onClick={() => setLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="lightbox__prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length) }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_IMAGES[lightbox].url}
              alt={GALLERY_IMAGES[lightbox].caption}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{GALLERY_IMAGES[lightbox].caption}</p>
            <p className="lightbox__counter">{lightbox + 1} / {GALLERY_IMAGES.length}</p>
          </div>
          <button
            className="lightbox__next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length) }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

function GalleryItem({ img, index, onClick }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`gallery__item${img.tall ? ' gallery__item--tall' : ''}${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${(index % 4) * 0.08}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <img src={img.url} alt={img.caption} loading="lazy" />
      <div className="gallery__item-overlay">
        <span className="gallery__item-caption">{img.caption}</span>
        <span className="gallery__item-expand">⤢</span>
      </div>
    </div>
  )
}
