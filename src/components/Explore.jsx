// ============================================================
// Explore — Types & Techniques split layout
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { CLIMBING_TYPES, TECHNIQUES } from '../data/mountainData'

export default function Explore() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="explore" className="section explore">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Explore Mountaineering</p>
          <h2 className="section__title">Types & Techniques</h2>
          <p className="section__subtitle">
            Understand the disciplines of the vertical world and the skills that keep you alive.
          </p>
        </div>

        <div className="explore__grid">
          {/* Left: Types */}
          <div className="explore__col">
            <h3 className="explore__col-title">
              <span className="explore__col-title-icon">🏔️</span>
              Climbing Styles
            </h3>
            <div className="explore__cards">
              {CLIMBING_TYPES.map((t, i) => (
                <ExploreCard key={t.name} item={t} delay={i * 0.08} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="explore__divider" />

          {/* Right: Techniques */}
          <div className="explore__col">
            <h3 className="explore__col-title">
              <span className="explore__col-title-icon">🪢</span>
              Core Techniques
            </h3>
            <div className="explore__cards">
              {TECHNIQUES.map((t, i) => (
                <ExploreCard key={t.name} item={t} delay={i * 0.08 + 0.3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExploreCard({ item, delay }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`explore__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${delay}s` }}
    >
      <span className="explore__card-icon">{item.icon}</span>
      <div>
        <h4 className="explore__card-name">{item.name}</h4>
        <p className="explore__card-desc">{item.desc}</p>
      </div>
    </div>
  )
}
