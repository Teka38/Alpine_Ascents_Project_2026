// ============================================================
// About — Mountain intro with stats and split image
// ============================================================
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { STATS } from '../data/mountainData'

export default function About() {
  const [ref, visible] = useIntersectionObserver()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className={`container about__inner${visible ? ' animate-in' : ''}`}>
        {/* Left: text */}
        <div className="about__text">
          <p className="section__eyebrow">About Mountaineering</p>
          <h2 className="section__title">The Art of the Ascent</h2>
          <p className="about__lead">
            Mountaineering is the pursuit of summits — a discipline that fuses physical
            endurance, technical skill, mental fortitude, and a profound respect for
            wild, vertical environments.
          </p>
          <p className="about__body">
            From the granite walls of Yosemite to the glaciated giants of the Karakoram,
            mountaineering encompasses dozens of disciplines unified by a single ethos:
            the mountain demands everything you have. It rewards those who prepare,
            punishes those who rush, and humbles everyone who stands beneath its ridges.
          </p>
          <p className="about__body">
            Alpine Ascents exists to connect aspiring and experienced climbers with the
            knowledge, community, and resources to pursue their highest ambitions — safely,
            ethically, and with the full weight of this extraordinary tradition behind them.
          </p>

          {/* Stats grid */}
          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stacked images */}
        <div className="about__images">
          <div className="about__img-stack">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
              alt="Mount Everest North Face"
              className="about__img about__img--main"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80"
              alt="Summit ridge"
              className="about__img about__img--accent"
              loading="lazy"
            />
            <div className="about__img-badge">
              <span>Est. 1953</span>
              <span>First Everest Summit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
