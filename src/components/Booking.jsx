import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Booking() {
  const [ref, visible] = useIntersectionObserver();
  const [form, setForm] = useState({ name: '', email: '', package: 'Standard', date: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="booking" className="section" style={{ background: 'var(--color-midnight)', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .booking-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=1600&q=70');
          background-size: cover;
          background-position: center;
          opacity: 0.12;
        }
        .booking-inner {
          position: relative;
          z-index: 1;
          max-width: 680px;
          margin: 0 auto;
        }
        .booking-header { text-align: center; margin-bottom: 3rem; }
        .booking-header .section-label { justify-content: center; }
        .booking-header .section-label::before { display: none; }

        .booking-form {
          background: var(--glass-bg);
          backdrop-filter: blur(24px);
          border: 1px solid var(--glass-border);
          border-radius: 4px;
          padding: 3rem;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; }
        .form-group:last-of-type { margin-bottom: 2rem; }
        .form-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--color-gold);
        }
        .form-input, .form-select, .form-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--color-border-bright);
          border-radius: 2px;
          padding: 0.85rem 1.1rem;
          color: var(--color-snow);
          font-family: var(--font-body);
          font-size: 0.92rem;
          transition: border-color 0.25s ease, background 0.25s ease;
          outline: none;
          width: 100%;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--color-gold);
          background: rgba(200,168,75,0.05);
        }
        .form-select option { background: var(--color-deep); }
        .form-textarea { resize: vertical; min-height: 100px; }
        .booking-success {
          text-align: center;
          padding: 4rem 2rem;
        }
        .booking-success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(200,168,75,0.12);
          border: 1px solid var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          font-size: 2rem;
          color: var(--color-gold);
        }
        .booking-success-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          color: var(--color-snow);
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .booking-success-text {
          color: rgba(232,238,245,0.6);
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        @media (max-width: 640px) {
          .form-row { grid-template-columns: 1fr; }
          .booking-form { padding: 2rem 1.5rem; }
        }
      `}</style>

      <div className="booking-bg" />
      <div className="container">
        <div className="booking-inner" ref={ref}>
          <div className={`booking-header animate-fade-up ${visible ? 'visible' : ''}`}>
            <div className="section-label">Reserve Your Summit</div>
            <h2 className="section-title">Book an Expedition</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>Fill out the form below and our expedition team will contact you within 24 hours to confirm your booking.</p>
          </div>

          <div className={`booking-form animate-fade-up delay-2 ${visible ? 'visible' : ''}`}>
            {submitted ? (
              <div className="booking-success">
                <div className="booking-success-icon"><i className="fas fa-check" /></div>
                <div className="booking-success-title">Booking Received Successfully</div>
                <p className="booking-success-text">
                  Thank you, <strong style={{ color: 'var(--color-gold-light)' }}>{form.name}</strong>! Your {form.package} package booking has been received.<br />
                  Our expedition team will reach you at <strong style={{ color: 'var(--color-gold-light)' }}>{form.email}</strong> within 24 hours.
                </p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-name">Full Name *</label>
                    <input id="booking-name" className="form-input" type="text" name="name" placeholder="John Doe" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-email">Email Address *</label>
                    <input id="booking-email" className="form-input" type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-package">Selected Package</label>
                    <select id="booking-package" className="form-select" name="package" value={form.package} onChange={handleChange}>
                      <option value="Base">Base — $1,850 / 7 Days</option>
                      <option value="Standard">Standard — $4,200 / 14 Days</option>
                      <option value="Premium">Premium — $12,500 / 28 Days</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-date">Preferred Start Date</label>
                    <input id="booking-date" className="form-input" type="date" name="date" value={form.date} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="booking-notes">Additional Notes</label>
                  <textarea id="booking-notes" className="form-textarea" name="notes" placeholder="Tell us about your experience level, any special requirements, or questions..." value={form.notes} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  <i className="fas fa-mountain" /> Confirm Booking Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
