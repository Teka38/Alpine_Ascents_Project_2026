import { useState, useEffect } from 'react';

export function useVisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const STORAGE_KEY = 'alpine_visitor_count';
    const LAST_VISIT_KEY = 'alpine_last_visit';
    const stored = parseInt(localStorage.getItem(STORAGE_KEY) || '3241', 10);
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      const newCount = stored + 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());
      localStorage.setItem(LAST_VISIT_KEY, today);
      setCount(newCount);
    } else {
      setCount(stored);
    }
  }, []);

  return count;
}
