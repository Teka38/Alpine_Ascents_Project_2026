// ============================================================
// Ticker — Fixed bottom live information bar
// ============================================================
import { useState, useEffect } from 'react'
import { useGeolocation } from '../hooks/useGeolocation'
import { MOUNTAINEERING_FACTS } from '../data/mountainData'

export default function Ticker() {
  const { city } = useGeolocation()
  const [time, setTime] = useState(new Date())
  const [factIndex, setFactIndex] = useState(0)

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Rotate facts every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFactIndex((i) => (i + 1) % MOUNTAINEERING_FACTS.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (d) =>
    d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })

  const formatTime = (d) =>
    d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <div className="ticker">
      <div className="ticker__track">
        <div className="ticker__content">
          {/* Static info segments */}
          <span className="ticker__segment ticker__segment--date">
            <span className="ticker__label">DATE</span>
            <span>{formatDate(time)}</span>
          </span>
          <span className="ticker__sep">◆</span>
          <span className="ticker__segment ticker__segment--time">
            <span className="ticker__label">TIME</span>
            <span>{formatTime(time)}</span>
          </span>
          <span className="ticker__sep">◆</span>
          <span className="ticker__segment ticker__segment--loc">
            <span className="ticker__label">LOCATION</span>
            <span>📍 {city}</span>
          </span>
          <span className="ticker__sep">◆</span>
          {/* Scrolling facts */}
          <span className="ticker__segment ticker__segment--fact">
            <span className="ticker__label">ALPINE FACT</span>
            <span key={factIndex} className="ticker__fact-text">
              {MOUNTAINEERING_FACTS[factIndex]}
            </span>
          </span>
          {/* Duplicate for seamless loop */}
          <span className="ticker__sep">◆</span>
          <span className="ticker__segment ticker__segment--date">
            <span className="ticker__label">DATE</span>
            <span>{formatDate(time)}</span>
          </span>
          <span className="ticker__sep">◆</span>
          <span className="ticker__segment ticker__segment--time">
            <span className="ticker__label">TIME</span>
            <span>{formatTime(time)}</span>
          </span>
          <span className="ticker__sep">◆</span>
          <span className="ticker__segment ticker__segment--loc">
            <span className="ticker__label">LOCATION</span>
            <span>📍 {city}</span>
          </span>
        </div>
      </div>
    </div>
  )
}
