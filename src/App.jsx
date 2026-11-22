import { useEffect, useState } from 'react'
import c from './content.js'
import Tour from './Tour.jsx'
import { Lobby, Registry, Rooms, TestSection, Checkout, Sources, Gate } from './Sections.jsx'

const isTour = () => window.location.hash === '#tour'

export default function App() {
  const [tour, setTour] = useState(isTour())
  const [unlocked, setUnlocked] = useState(false)
  const [gate, setGate] = useState(false)
  useEffect(() => {
    const f = () => setTour(isTour())
    window.addEventListener('hashchange', f)
    return () => window.removeEventListener('hashchange', f)
  }, [])
  useEffect(() => { document.title = c.site.title }, [])
  if (tour) return <Tour />
  const openGate = () => setGate(true)
  return (
    <>
      <a className="skip" href="#main">{c.site.skipLink}</a>
      <header className="top">
        <a className="wordmark" href="#lobby">{c.site.wordmark}</a>
        <nav aria-label="Main">
          {c.nav.map((n) => (
            <a key={n.id} href={'#' + n.id}>{n.label}</a>
          ))}
        </nav>
        <span className="mode">{unlocked ? c.modeLabels.returning : c.modeLabels.new}</span>
      </header>
      <main id="main">
        <Lobby unlocked={unlocked} onReturning={openGate} />
        <Registry unlocked={unlocked} onOpenGate={openGate} />
        <Rooms unlocked={unlocked} onOpenGate={openGate} />
        <TestSection unlocked={unlocked} />
        <Checkout />
        <Sources />
      </main>
      <footer className="foot"><p>{c.site.tagline}</p></footer>
      {gate && <Gate onCancel={() => setGate(false)} onConfirm={() => { setUnlocked(true); setGate(false) }} />}
    </>
  )
}
