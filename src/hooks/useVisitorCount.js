// ============================================================
// useVisitorCount — Tracks daily unique visitors via localStorage
// ============================================================
import { useState, useEffect } from 'react'

export function useVisitorCount() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const STORAGE_KEY = 'alpine_visitor_count'
    const DATE_KEY = 'alpine_last_visit_date'

    const today = new Date().toDateString()
    const lastVisit = localStorage.getItem(DATE_KEY)
    let current = parseInt(localStorage.getItem(STORAGE_KEY) || '3842', 10)

    // Increment only once per day
    if (lastVisit !== today) {
      current += 1
      localStorage.setItem(STORAGE_KEY, current.toString())
      localStorage.setItem(DATE_KEY, today)
    }

    setCount(current)
  }, [])

  return count
}
