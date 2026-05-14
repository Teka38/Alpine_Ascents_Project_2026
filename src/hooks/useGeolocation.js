// ============================================================
// useGeolocation — HTML5 Geolocation with city reverse-lookup
// ============================================================
import { useState, useEffect } from 'react'

export function useGeolocation() {
  const [location, setLocation] = useState({ city: 'Detecting...', coords: null })

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation({ city: 'Unknown Location', coords: null })
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords
        setLocation({ city: 'Locating...', coords: { lat: latitude, lng: longitude } })

        // Reverse geocode using a free public API
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            { headers: { 'Accept-Language': 'en' } }
          )
          const data = await res.json()
          const city =
            data.address?.city ||
            data.address?.town ||
            data.address?.village ||
            data.address?.county ||
            'Mountain Region'
          setLocation({ city, coords: { lat: latitude, lng: longitude } })
        } catch {
          setLocation({ city: 'Your Location', coords: { lat: latitude, lng: longitude } })
        }
      },
      () => {
        setLocation({ city: 'Location Unavailable', coords: null })
      },
      { timeout: 8000 }
    )
  }, [])

  return location
}
