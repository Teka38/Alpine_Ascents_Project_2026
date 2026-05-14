// ============================================================
// Hero — Full viewport cinematic mountain hero
// ============================================================
export default function Hero() {
  const smoothScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background with zoom animation */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Decorative diagonal lines */}
      <div className="hero__lines" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="hero__line" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Global Mountaineering Portal</p>
        <h1 className="hero__title">
          <span className="hero__title-line">Alpine</span>
          <span className="hero__title-line hero__title-line--gold"> Ascents</span>
        </h1>
        <p className="hero__subtitle">
          Where earth meets sky — explore the world's greatest peaks,
          <br />expeditions, and the art of high-altitude adventure.
        </p>

        <div className="hero__elevation">
          <span className="hero__elev-item">
            <span className="hero__elev-value">8,849m</span>
            <span className="hero__elev-label">Highest Peak</span>
          </span>
          <span className="hero__elev-divider" />
          <span className="hero__elev-item">
            <span className="hero__elev-value">200+</span>
            <span className="hero__elev-label">Countries</span>
          </span>
          <span className="hero__elev-divider" />
          <span className="hero__elev-item">
            <span className="hero__elev-value">14</span>
            <span className="hero__elev-label">Eight-thousanders</span>
          </span>
        </div>

        <div className="hero__cta">
          <button
            className="btn btn--primary"
            onClick={() => smoothScroll('#about')}
          >
            Explore More
          </button>
          <button
            className="btn btn--outline"
            onClick={() => smoothScroll('#services')}
          >
            Find Expeditions
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" onClick={() => smoothScroll('#about')}>
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}
