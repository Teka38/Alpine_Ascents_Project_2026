// ============================================================
// Services — Expedition services + Packages + Booking
// ============================================================
import { useState, useRef } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { SERVICES, PACKAGES } from '../data/mountainData'

function ServiceCard({ service, index }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`service__card${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="service__icon">{service.icon}</div>
      <h3 className="service__title">{service.title}</h3>
      <p className="service__desc">{service.desc}</p>
      <ul className="service__features">
        {service.features.map((f) => (
          <li key={f}>
            <span className="service__check">✓</span> {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PackageCard({ pkg, index, onBook }) {
  const [ref, visible] = useIntersectionObserver()
  return (
    <div
      ref={ref}
      className={`package__card${pkg.featured ? ' package__card--featured' : ''}${visible ? ' animate-in' : ''}`}
      style={{ '--delay': `${index * 0.15}s`, '--pkg-color': pkg.color }}
    >
      {pkg.featured && <div className="package__badge">Most Popular</div>}
      <div className="package__tier">{pkg.tier}</div>
      <h3 className="package__name">{pkg.name}</h3>
      <div className="package__price">
        <span className="package__amount">{pkg.price}</span>
        <span className="package__per">/ person</span>
      </div>
      <div className="package__duration">⏱ {pkg.duration}</div>
      <ul className="package__features">
        {pkg.features.map((f) => (
          <li key={f}><span>✓</span> {f}</li>
        ))}
      </ul>
      <button
        className={`btn ${pkg.featured ? 'btn--primary' : 'btn--outline'} package__btn`}
        onClick={() => onBook(pkg.name)}
      >
        Book Now
      </button>
    </div>
  )
}

export default function Services() {
  const [ref, visible] = useIntersectionObserver()
  const bookingRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', package: '', date: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleBook = (pkgName) => {
    setForm((f) => ({ ...f, package: pkgName }))
    setTimeout(() => bookingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="services" className="section services">
      <div className="container">
        {/* Section header */}
        <div ref={ref} className={`section__header${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Expedition Services</p>
          <h2 className="section__title">What We Offer</h2>
          <p className="section__subtitle">
            Comprehensive mountaineering services built on decades of expedition experience.
          </p>
        </div>

        {/* Services grid */}
        <div className="service__grid">
          {SERVICES.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>

        {/* Packages */}
        <div className="packages__header">
          <p className="section__eyebrow">Expedition Packages</p>
          <h2 className="section__title">Choose Your Ascent</h2>
        </div>
        <div className="package__grid">
          {PACKAGES.map((p, i) => (
            <PackageCard key={p.name} pkg={p} index={i} onBook={handleBook} />
          ))}
        </div>

        {/* Booking Form */}
        <div ref={bookingRef} className="booking">
          <div className="booking__inner">
            <p className="section__eyebrow">Reservations</p>
            <h2 className="booking__title">Book Your Expedition</h2>
            {submitted ? (
              <div className="booking__success">
                <div className="booking__success-icon">🏔️</div>
                <h3>Booking Received Successfully</h3>
                <p>
                  Thank you for your reservation. Our expedition team will contact you
                  within 24 hours to confirm your booking details.
                </p>
                <button
                  className="btn btn--outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', package: '', date: '', notes: '' }) }}
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form className="booking__form" onSubmit={handleSubmit}>
                <div className="booking__row">
                  <div className="booking__field">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="booking__field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="booking__row">
                  <div className="booking__field">
                    <label>Selected Package *</label>
                    <select
                      value={form.package}
                      onChange={(e) => setForm({ ...form, package: e.target.value })}
                      required
                    >
                      <option value="">Choose a package...</option>
                      {PACKAGES.map((p) => (
                        <option key={p.name} value={p.name}>{p.name} — {p.price}</option>
                      ))}
                    </select>
                  </div>
                  <div className="booking__field">
                    <label>Preferred Date *</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                <div className="booking__field">
                  <label>Additional Notes</label>
                  <textarea
                    placeholder="Tell us about your experience level, special requirements..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    rows={4}
                  />
                </div>
                <button type="submit" className="btn btn--primary booking__submit">
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
