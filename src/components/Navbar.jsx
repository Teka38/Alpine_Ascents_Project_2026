// ============================================================
// Navbar — Fixed glass nav with dropdowns + hamburger
// ============================================================
import { useState, useEffect, useRef } from 'react'
import { NAV_ITEMS } from '../data/mountainData'
import { useVisitorCount } from '../hooks/useVisitorCount'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const visitorCount = useVisitorCount()
  const navRef = useRef(null)

  // Scroll shadow + active section tracking
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id]')
      let current = 'home'
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const smoothScroll = (href) => {
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    setOpenDropdown(null)
    setMobileOpen(false)
    setMobileExpanded(null)
  }

  const isActive = (item) => {
    if (item.href) return activeSection === item.href.replace('#', '')
    if (item.dropdown) return item.dropdown.some((d) => '#' + activeSection === d.href)
    return false
  }

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
    >
      <div className="navbar__inner">
        {/* Logo + Visitor Count */}
        <button
          className="navbar__brand"
          onClick={() => smoothScroll('#home')}
          aria-label="Go to home"
        >
          <svg className="navbar__logo-icon" viewBox="0 0 40 40" aria-hidden="true">
            <polygon points="20,3 37,36 3,36" fill="none" stroke="var(--gold)" strokeWidth="2.5"/>
            <polygon points="20,12 30,32 10,32" fill="var(--gold)" opacity="0.25"/>
            <line x1="20" y1="3" x2="20" y2="38" stroke="var(--gold)" strokeWidth="1.5" opacity="0.5"/>
          </svg>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Alpine Ascents</span>
            <span className="navbar__visitors">
              <span className="navbar__visitors-dot" />
              {visitorCount.toLocaleString()} visitors
            </span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`navbar__item${item.dropdown ? ' navbar__item--dropdown' : ''}${isActive(item) ? ' navbar__item--active' : ''}`}
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.href ? (
                <button
                  className="navbar__link"
                  onClick={() => smoothScroll(item.href)}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  className="navbar__link navbar__link--has-dropdown"
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  aria-expanded={openDropdown === item.label}
                >
                  {item.label}
                  <svg className={`navbar__chevron${openDropdown === item.label ? ' open' : ''}`} viewBox="0 0 12 8" aria-hidden="true">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
              {item.dropdown && openDropdown === item.label && (
                <ul className="navbar__dropdown">
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <button
                        className="navbar__dropdown-link"
                        onClick={() => smoothScroll(sub.href)}
                      >
                        {sub.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="navbar__mobile-item">
              {item.href ? (
                <button
                  className={`navbar__mobile-link${isActive(item) ? ' active' : ''}`}
                  onClick={() => smoothScroll(item.href)}
                >
                  {item.label}
                </button>
              ) : (
                <>
                  <button
                    className="navbar__mobile-link navbar__mobile-link--parent"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <svg className={`navbar__chevron${mobileExpanded === item.label ? ' open' : ''}`} viewBox="0 0 12 8">
                      <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
                    </svg>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="navbar__mobile-sub">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          className="navbar__mobile-sub-link"
                          onClick={() => smoothScroll(sub.href)}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}
