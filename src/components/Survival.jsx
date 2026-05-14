// ============================================================
// Survival — Sheltering + Hazards combined section
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { HAZARDS, SHELTERS } from '../data/mountainData'

function HazardCard({ item, index }) {
  const [ref, visible] = useIntersectionObserver()
  const severityColor = { Extreme: '#e74c3c', High: '#e67e22', Critical: '#8e44ad' }

  return (
    <div
      ref={ref}
      className={`hazard__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="hazard__img-wrap">
        <img src={item.img} alt={item.name} loading="lazy" />
        <div className="hazard__img-overlay" />
      </div>
      <div className="hazard__content">
        <div className="hazard__header">
          <h3 className="hazard__name">{item.name}</h3>
          <span
            className="hazard__severity"
            style={{ color: severityColor[item.severity] || '#fff' }}
          >
            ⚠ {item.severity}
          </span>
        </div>
        <p className="hazard__desc">{item.desc}</p>
      </div>
    </div>
  )
}

function ShelterCard({ item, index }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`shelter__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.12}s` }}
    >
      <div className="shelter__img-wrap">
        <img src={item.img} alt={item.name} loading="lazy" />
        <div className="shelter__overlay" />
      </div>
      <div className="shelter__content">
        <h3 className="shelter__name">{item.name}</h3>
        <p className="shelter__desc">{item.desc}</p>
      </div>
    </div>
  )
}

export default function Survival() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="survival" className="section survival">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Mountain Safety</p>
          <h2 className="section__title">Shelter & Hazards</h2>
          <p className="section__subtitle">
            Surviving the mountain requires knowing where to hide — and what to fear.
          </p>
        </div>

        {/* Sheltering */}
        <div className="survival__sub-title">
          <span>🏕️</span> Shelter Strategies
        </div>
        <div className="shelter__grid">
          {SHELTERS.map((s, i) => <ShelterCard key={s.name} item={s} index={i} />)}
        </div>

        {/* Hazards */}
        <div className="survival__sub-title" style={{ marginTop: '5rem' }}>
          <span>⚠️</span> Critical Hazards
        </div>
        <div className="hazard__grid">
          {HAZARDS.map((h, i) => <HazardCard key={h.name} item={h} index={i} />)}
        </div>
      </div>
    </section>
  )
}
