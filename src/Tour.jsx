import { useEffect, useState } from 'react'
import c from './content.js'
import { Test } from './Sections.jsx'

const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k])

export default function Tour() {
  const t = c.tour
  const [i, setI] = useState(0)
  const total = t.stops.length
  const go = (d) => setI((n) => Math.min(total - 1, Math.max(0, n + d)))
  useEffect(() => {
    const f = (e) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', f)
    return () => window.removeEventListener('keydown', f)
  }, [])
  const s = t.stops[i]
  const molly = c.registry.characters[0]
  return (
    <div className="tour dark">
      <header className="tour-top">
        <span className="wordmark">{c.site.wordmark}</span>
        <a className="label" href="#lobby">{t.exit}</a>
      </header>
      <main className="tour-main" key={i}>
        <p className="label">{s.label}</p>
        <h1>{s.title}</h1>
        {s.lines.map((l, k) => <p key={k} className="tour-line">{l}</p>)}
        {i === 1 && <div className="tour-card"><p className="label">{c.registry.fieldLabels.first}</p><p>{molly.first}</p></div>}
        {i === 2 && <Test single />}
        {i === 4 && (
          <div className="tour-verdict">
            <p className="stars">{s.rating}</p>
            <div className="cols">
              <div><p className="label">{s.highlightsLabel}</p>{s.highlights.map((h) => <p key={h}>{h}</p>)}</div>
              <div><p className="label">{s.lowlightsLabel}</p>{s.lowlights.map((h) => <p key={h}>{h}</p>)}</div>
            </div>
            <p className="tour-line">{s.conclusion}</p>
          </div>
        )}
      </main>
      <footer className="tour-bottom">
        <button className="btn ghost" onClick={() => go(-1)} disabled={i === 0}>{t.previous}</button>
        <div className="dots" aria-label={fill(t.progress, { n: i + 1, total })}>
          {t.stops.map((_, k) => <span key={k} className={k === i ? 'dot on' : 'dot'} />)}
          <span className="label">{fill(t.progress, { n: i + 1, total })}</span>
        </div>
        <button className="btn brass" onClick={() => go(1)} disabled={i === total - 1}>{t.next}</button>
      </footer>
    </div>
  )
}
