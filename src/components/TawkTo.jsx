import { useEffect } from 'react'

const PROPERTY_ID = import.meta.env.VITE_TAWK_PROPERTY_ID
const WIDGET_ID = import.meta.env.VITE_TAWK_WIDGET_ID || 'default'

export default function TawkTo() {
  useEffect(() => {
    if (!PROPERTY_ID) return
    if (window.Tawk_API) return

    const s = document.createElement('script')
    s.async = true
    s.src = `https://embed.tawk.to/${PROPERTY_ID}/${WIDGET_ID}`
    s.charset = 'UTF-8'
    s.setAttribute('crossorigin', '*')
    s.id = 'tawk-to-embed'

    const first = document.getElementsByTagName('script')[0]
    first.parentNode.insertBefore(s, first)

    return () => {
      if (window.Tawk_API && typeof window.Tawk_API.shutdown === 'function') {
        window.Tawk_API.shutdown()
      }
      const el = document.getElementById('tawk-to-embed')
      if (el) el.remove()
    }
  }, [])

  if (!PROPERTY_ID) return null
  return null
}
