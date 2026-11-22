import { useEffect, useState } from 'react'
import c from './content.js'
import { KeyIcon, Figure } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k])

export function Locked({ onOpen }) {
  return (
    <div className="locked">
      <KeyIcon size={36} />
      <p>{c.locked.text}</p>
      <button className="btn ghost" onClick={onOpen}>{c.locked.button}</button>
    </div>
  )
}

export function Gate({ onConfirm, onCancel }) {
  useEffect(() => {
    const f = (e) => e.key === 'Escape' && onCancel()
    window.addEventListener('keydown', f)
    return () => window.removeEventListener('keydown', f)
  }, [onCancel])
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <div className="panel light-panel">
        <h2 id="gate-title">{c.gate.title}</h2>
        <p>{c.gate.text}</p>
        <div className="row">
          <button className="btn brass" autoFocus onClick={onConfirm}>{c.gate.confirm}</button>
          <button className="btn ghost-dark" onClick={onCancel}>{c.gate.cancel}</button>
        </div>
      </div>
    </div>
  )
}

export function Lobby({ onReturning, unlocked }) {
  const h = c.hero, p = c.premise
  return (
    <>
      <section className="dark hero" id="lobby">
        <div className="wrap hero-grid">
          <div>
            <p className="label">{h.label}</p>
            <h1>{h.headline}</h1>
            <p className="subtitle">{h.subtitle}</p>
            <p className="lede">{h.copy}</p>
            <div className="row">
              <a className="btn brass" href="#registry">{h.primaryButton}</a>
            </div>
            <a className="quiet" href="#tour">{c.tourLink}</a>
          </div>
          <div className="visual">
            {h.imagePath ? (
              <img src={h.imagePath} alt={h.imageAlt} />
            ) : (
              <div className="rack" role="img" aria-label={h.rackLabel}>
                {c.rooms.items.map((r) => (
                  <div className="rack-cell" key={r.number}>
                    <KeyIcon size={34} />
                    <span className="tag">{r.number}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="light" id="premise">
        <div className="wrap split">
          <div>
            <h2>{p.heading}</h2>
            {p.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
            <aside className="thesis">
              <p className="label dark-label">{p.thesisLabel}</p>
              <p>{p.thesis}</p>
            </aside>
          </div>
          <Reveal><Figure img={c.images.premise} className="tall" /></Reveal>
        </div>
        <div className="wrap">
          <h3 className="center">{p.pathsHeading}</h3>
          <div className="paths">
            <div className="path">
              <p className="label dark-label">{p.newPath.label}</p>
              <p>{p.newPath.text}</p>
            </div>
            <div className="path">
              <p className="label dark-label">{p.returningPath.label}</p>
              <p>{p.returningPath.text}</p>
              {unlocked ? (
                <a className="btn brass" href="#rooms">{c.modeLabels.returning}</a>
              ) : (
                <button className="btn brass" onClick={onReturning}>{p.returningPath.button}</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, text }) {
  return (
    <div className="field">
      <p className="label dark-label">{label}</p>
      <p>{text}</p>
    </div>
  )
}

export function Registry({ unlocked, onOpenGate }) {
  const r = c.registry
  const [who, setWho] = useState(0)
  const [mode, setMode] = useState('first')
  const ch = r.characters[who]
  const L = r.fieldLabels
  return (
    <section className="light alt" id="registry">
      <div className="wrap">
        <p className="label dark-label">{r.number}</p>
        <h2>{r.heading}</h2>
        <p className="lede-dark">{r.intro}</p>
        <div className="tabs" role="tablist" aria-label={r.heading}>
          {r.characters.map((x, i) => (
            <button key={x.name} role="tab" aria-selected={who === i} className={who === i ? 'tab on' : 'tab'} onClick={() => setWho(i)}>{x.name}</button>
          ))}
        </div>
        <article className="dossier">
          <header>
            <h3>{ch.name}</h3>
            <span className="tag">{ch.tag}</span>
          </header>
          <div className="toggle" role="group" aria-label="View">
            <button aria-pressed={mode === 'first'} className={mode === 'first' ? 'on' : ''} onClick={() => setMode('first')}>{r.toggleFirst}</button>
            <button aria-pressed={mode === 'closer'} className={mode === 'closer' ? 'on' : ''} onClick={() => setMode('closer')}>{r.toggleCloser}</button>
          </div>
          <div className="dbody">
          <Figure img={ch.image} className="portrait" />
          <div key={who + mode} className="fade">
            {mode === 'first' && (
              <>
                <Field label={L.first} text={ch.first} />
                <Field label={L.public} text={ch.public} />
              </>
            )}
            {mode === 'closer' && (unlocked ? (
              <>
                <Field label={L.behind} text={ch.behind} />
                <Field label={L.significance} text={ch.significance} />
                <Field label={L.counter} text={ch.counter} />
                <Field label={L.evidence} text={ch.evidence} />
              </>
            ) : <Locked onOpen={onOpenGate} />)}
          </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export function Rooms({ unlocked, onOpenGate }) {
  const r = c.rooms
  const [open, setOpen] = useState(null)
  useEffect(() => {
    if (open === null) return
    const f = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', f)
    return () => window.removeEventListener('keydown', f)
  }, [open])
  const room = open !== null ? r.items[open] : null
  return (
    <section className="dark" id="rooms">
      <div className="wrap">
        <p className="label">{r.number}</p>
        <h2>{r.heading}</h2>
        <p className="lede">{r.intro}</p>
        {unlocked ? (
          <div className="doors">
            {r.items.map((it, i) => (
              <Reveal key={it.number} delay={i * 120}><button className="door" onClick={() => setOpen(i)} aria-haspopup="dialog">
                <Figure as="span" img={it.image} />
                <span className="plaque">{it.number}</span>
                <span className="door-title">{it.title}</span>
                <span className="door-prev">{it.preview}</span>
              </button></Reveal>
            ))}
          </div>
        ) : <Locked onOpen={onOpenGate} />}
      </div>
      {room && (
        <div className="overlay" role="dialog" aria-modal="true" aria-labelledby="room-title" onClick={() => setOpen(null)}>
          <div className="panel light-panel tall" onClick={(e) => e.stopPropagation()}>
            <p className="label dark-label">ROOM {room.number}</p>
            <h2 id="room-title">{room.title}</h2>
            <Figure img={room.image} className="wide" />
            <p className="label dark-label">{r.labels.question}</p>
            <p className="big-q">{room.question}</p>
            {room.analysis.map((t, i) => <p key={i}>{t}</p>)}
            <Field label={r.labels.evidence} text={room.evidence} />
            <Field label={r.labels.alternative} text={room.alternative} />
            <p className="takeaway">{room.takeaway}</p>
            <button className="btn brass" autoFocus onClick={() => setOpen(null)}>{r.closeButton}</button>
          </div>
        </div>
      )}
    </section>
  )
}

export function Test({ unlocked, single = false }) {
  const t = c.test
  const qs = t.questions.filter((q) => (single ? q.spoilerFree : unlocked || q.spoilerFree))
  const [i, setI] = useState(0)
  const [pick, setPick] = useState(null)
  const [done, setDone] = useState(false)
  const q = qs[i]
  const last = i === qs.length - 1
  const restart = () => { setI(0); setPick(null); setDone(false) }
  if (done) {
    return (
      <div className="quiz">
        <h3>{t.finalHeading}</h3>
        <p>{t.finalText}</p>
        <button className="btn brass" onClick={restart}>{t.restartButton}</button>
      </div>
    )
  }
  return (
    <div className="quiz">
      {!single && (
        <div className="progress" aria-label={fill(t.progress, { n: i + 1, total: qs.length })}>
          <p className="label">{fill(t.progress, { n: i + 1, total: qs.length })}</p>
          <div className="bar"><span style={{ width: ((i + 1) / qs.length) * 100 + '%' }} /></div>
        </div>
      )}
      <h3 className="q">{q.prompt}</h3>
      <div className="opts">
        {q.options.map((o, k) => (
          <button key={o.label} className={pick === k ? 'opt on' : 'opt'} aria-pressed={pick === k} onClick={() => setPick(k)}>
            <span className="tag">{o.label}</span>
            <span>{o.text}</span>
          </button>
        ))}
      </div>
      {pick !== null && (
        <div className="feedback fade" role="status">
          <p>{q.options[pick].feedback}</p>
          {q.evidence && <p className="ev">{q.evidence}</p>}
          {!single && (
            <button className="btn brass" onClick={() => (last ? setDone(true) : (setI(i + 1), setPick(null)))}>
              {last ? t.finishButton : t.nextButton}
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export function TestSection({ unlocked }) {
  const t = c.test
  return (
    <section className="dark deep" id="test">
      <div className="wrap narrow">
        <p className="label">{t.number}</p>
        <h2>{t.heading}</h2>
        <p className="lede">{t.intro}</p>
        <Test unlocked={unlocked} />
      </div>
    </section>
  )
}

export function Staff({ unlocked, onOpenGate }) {
  const s = c.staff
  return (
    <section className="light" id="staff">
      <div className="wrap narrow">
        <p className="label dark-label">{s.kicker} · {s.number}</p>
        <h2 className="feature">{s.heading}</h2>
        <p className="byline">{s.byline}</p>
        <Reveal><Figure img={c.images.staff} className="wide" /></Reveal>
        {unlocked ? (
          <>
            {s.paragraphs.map((t, i) => <p key={i} className={i === 0 ? 'dropcap' : ''}>{t}</p>)}
            <blockquote className="pull">{s.pullQuote}</blockquote>
          </>
        ) : <Locked onOpen={onOpenGate} />}
      </div>
    </section>
  )
}

export function Checkout() {
  const k = c.checkout
  const [out, setOut] = useState(false)
  return (
    <section className="dark" id="checkout">
      <div className="wrap narrow center">
        <p className="label">{k.number}</p>
        <h2>{k.heading}</h2>
        {k.paragraphs.map((t, i) => <p key={i}>{t}</p>)}
        <p className="final-q">{k.question}</p>
        <Reveal><Figure img={c.images.checkout} className="wide" /></Reveal>
        {out ? <p className="returned"><KeyIcon /> {k.returnedText}</p> : (
          <button className="btn brass" onClick={() => setOut(true)}><KeyIcon size={20} /> {k.returnKey}</button>
        )}
      </div>
    </section>
  )
}

export function Sources() {
  const s = c.sources
  const List = ({ label, items }) => (
    <div className="field"><p className="label dark-label">{label}</p>{items.map((x, i) => <p key={i}>{x}</p>)}</div>
  )
  return (
    <section className="light alt" id="sources">
      <div className="wrap narrow">
        <h2>{s.heading}</h2>
        <List label={s.novelLabel} items={[s.novel]} />
        <List label={s.researchLabel} items={s.research} />
        <List label={s.imageLabel} items={s.images} />
        <List label={s.fontLabel} items={s.fonts} />
        <p className="disclaimer">{c.site.disclaimer}</p>
      </div>
    </section>
  )
}
