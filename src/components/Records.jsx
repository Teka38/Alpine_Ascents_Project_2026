// ============================================================
// Records + Stories — Achievements and expedition storytelling
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { RECORDS, STORIES } from '../data/mountainData'

function RecordCard({ rec, index }) {
  const [ref, visible] = useIntersectionObserver()
  const categoryColor = { Speed: '#c9a84c', Achievement: '#4a7fa5', Historic: '#8b4513' }
  return (
    <div
      ref={ref}
      className={`record__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="record__img-wrap">
        <img src={rec.img} alt={rec.title} loading="lazy" />
        <div className="record__img-overlay" />
        <span
          className="record__category"
          style={{ background: categoryColor[rec.category] || '#333' }}
        >
          {rec.category}
        </span>
      </div>
      <div className="record__content">
        <span className="record__year">{rec.year}</span>
        <h3 className="record__title">{rec.title}</h3>
        <p className="record__holder">— {rec.holder}</p>
        <p className="record__detail">{rec.detail}</p>
      </div>
    </div>
  )
}

function StoryCard({ story, index }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`story__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.12}s` }}
    >
      <div className="story__img-wrap">
        <img src={story.img} alt={story.title} loading="lazy" />
        <div className="story__img-overlay" />
      </div>
      <div className="story__content">
        <h3 className="story__title">{story.title}</h3>
        <p className="story__excerpt">{story.excerpt}</p>
        <button className="story__read-btn">Read Story →</button>
      </div>
    </div>
  )
}

export default function Records() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="records" className="section records">
      <div className="container">
        {/* Records */}
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Records & Achievements</p>
          <h2 className="section__title">Limits Redefined</h2>
          <p className="section__subtitle">
            The climbers who pushed beyond what was thought possible.
          </p>
        </div>
        <div className="record__grid">
          {RECORDS.map((r, i) => <RecordCard key={r.title} rec={r} index={i} />)}
        </div>

        {/* Stories */}
        <div className="records__stories-header">
          <p className="section__eyebrow">Expedition Stories</p>
          <h2 className="section__title">From the Mountain</h2>
        </div>
        <div className="story__grid">
          {STORIES.map((s, i) => <StoryCard key={s.title} story={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
