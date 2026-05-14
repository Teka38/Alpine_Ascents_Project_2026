// ============================================================
// Guidelines — Safety, ethics, gear, health
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { GUIDELINES } from '../data/mountainData'

export default function Guidelines() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="guidelines" className="section guidelines">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Code of the Mountain</p>
          <h2 className="section__title">Climber's Guidelines</h2>
          <p className="section__subtitle">
            The principles that protect climbers, mountains, and the communities that surround them.
          </p>
        </div>
        <div className="guidelines__grid">
          {GUIDELINES.map((g, i) => (
            <GuideCard key={g.title} guide={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GuideCard({ guide, index }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`guide__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="guide__icon">{guide.icon}</div>
      <h3 className="guide__title">{guide.title}</h3>
      <ul className="guide__points">
        {guide.points.map((p) => (
          <li key={p}>
            <span className="guide__bullet">▸</span> {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
