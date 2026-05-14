// ============================================================
// Contact — Form with mountain background
// ============================================================
import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

export default function Contact() {
  const [ref, visible] = useIntersectionObserver()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      {/* BG image */}
      <div className="contact__bg" />
      <div className="contact__overlay" />

      <div className="container contact__inner" ref={ref}>
        <div className={`contact__content${visible ? ' animate-in' : ''}`}>
          <p className="section__eyebrow">Get In Touch</p>
          <h2 className="section__title contact__title">Begin Your Ascent</h2>
          <p className="contact__subtitle">
            Questions about expeditions, training, or becoming a member?
            Our team is ready to guide you.
          </p>

          <div className="contact__layout">
            {/* Left: info */}
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon">📍</span>
                <div>
                  <strong>Our Base</strong>
                  <p>Nairobi, Kenya<br />East Africa Expedition Hub</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+254 7 94503145</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>expeditions@alpineascents.com</p>
                </div>
              </div>
              <div className="contact__info-item">
                <span className="contact__info-icon">🕐</span>
                <div>
                  <strong>Response Time</strong>
                  <p>Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact__form-wrap">
              {sent ? (
                <div className="contact__success">
                  <div className="contact__success-icon">✉️</div>
                  <h3>Message Sent</h3>
                  <p>We'll respond within 24 hours. The mountain awaits.</p>
                  <button
                    className="btn btn--outline"
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="contact__field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Your Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your mountaineering goals..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn--primary contact__submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
