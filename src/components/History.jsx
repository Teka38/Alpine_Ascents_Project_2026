// ============================================================
// History — Animated vertical timeline
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { TIMELINE } from '../data/mountainData'

function TimelineItem({ item, index }) {
  const [ref, visible] = useIntersectionObserver()
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`timeline__item${isLeft ? ' timeline__item--left' : ' timeline__item--right'}${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="timeline__card">
        <div className="timeline__img-wrap">
          <img src={item.img} alt={item.title} loading="lazy" />
          <div className="timeline__img-overlay" />
        </div>
        <div className="timeline__content">
          <span className="timeline__year">{item.year}</span>
          <h3 className="timeline__title">{item.title}</h3>
          <p className="timeline__desc">{item.desc}</p>
        </div>
      </div>
      <div className="timeline__dot">
        <div className="timeline__dot-inner" />
      </div>
    </div>
  )
}

export default function History() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="history" className="section history">
      <div className="container">
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Timeline</p>
          <h2 className="section__title">A Century of Ascents</h2>
          <p className="section__subtitle">
            From the first Alpine summits to the modern speed-climbing era — the milestones that shaped mountaineering.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline__spine" />
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
