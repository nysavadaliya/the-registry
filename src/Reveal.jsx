import { useEffect, useRef, useState } from 'react'

// Fades content in once as it scrolls into view. Skipped for reduced-motion users.
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'rv ' + (on ? 'in ' : '') + className} style={{ '--d': delay + 'ms' }}>{children}</div>
}
