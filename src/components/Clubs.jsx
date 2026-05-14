// ============================================================
// Clubs — Mountaineering clubs with OpenStreetMap embed
// ============================================================
import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CLUBS } from '../data/mountainData'

export default function Clubs() {
  const [ref, visible] = useIntersectionObserver()
  const [selected, setSelected] = useState(CLUBS[4]) // Default: Mountain Club of Kenya

  return (
    <section id="clubs" className="section clubs">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Global Community</p>
          <h2 className="section__title">World's Leading Clubs</h2>
          <p className="section__subtitle">
            Connect with the organizations that have shaped mountaineering history across every continent.
          </p>
        </div>

        <div className="clubs__layout">
          {/* Left: club list */}
          <div className="clubs__list">
            {CLUBS.map((club, i) => (
              <ClubCard
                key={club.name}
                club={club}
                index={i}
                isSelected={selected?.name === club.name}
                onClick={() => setSelected(club)}
              />
            ))}
          </div>

          {/* Right: map + detail */}
          <div className="clubs__map-panel">
            <div className="clubs__map-wrap">
              <iframe
                key={`${selected.lat},${selected.lng}`}
                title={`Map of ${selected.name}`}
                className="clubs__map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${selected.lng - 2},${selected.lat - 1.5},${selected.lng + 2},${selected.lat + 1.5}&layer=mapnik&marker=${selected.lat},${selected.lng}`}
                loading="lazy"
                allowFullScreen
              />
              <div className="clubs__map-overlay-badge">
                📍 {selected.country}
              </div>
            </div>

            {/* Selected club detail */}
            <div className="clubs__detail">
              <img src={selected.img} alt={selected.name} className="clubs__detail-img" loading="lazy" />
              <div className="clubs__detail-content">
                <h3 className="clubs__detail-name">{selected.name}</h3>
                <p className="clubs__detail-country">📍 {selected.country}</p>
                <p className="clubs__detail-desc">{selected.desc}</p>
                <a
                  href={selected.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline clubs__detail-btn"
                >
                  Visit Website ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ClubCard({ club, index, isSelected, onClick }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <button
      ref={ref}
      className={`clubs__card${isSelected ? ' clubs__card--active' : ''}${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.08}s` }}
      onClick={onClick}
    >
      <img src={club.img} alt={club.name} className="clubs__card-img" loading="lazy" />
      <div className="clubs__card-info">
        <h3 className="clubs__card-name">{club.name}</h3>
        <p className="clubs__card-country">{club.country}</p>
      </div>
      <span className="clubs__card-arrow">→</span>
    </button>
  )
}
