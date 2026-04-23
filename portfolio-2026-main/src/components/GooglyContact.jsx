import { useRef, useEffect, useState, useCallback } from 'react'
import { personal } from '../data/portfolio'

const EMAIL = personal.email

export default function GooglyContact() {
  const sectionRef  = useRef(null)
  const leftEyeRef  = useRef(null)
  const rightEyeRef = useRef(null)
  const leftPupRef  = useRef(null)
  const rightPupRef = useRef(null)
  const trackRafRef = useRef(null)
  const mouseRef    = useRef({ x: 0, y: 0 })
  const letterRefs  = useRef([])
  const animatingRef = useRef(false)
  const timerIds    = useRef([])

  const [copied, setCopied]     = useState(false)
  const [hovering, setHovering] = useState(false)

  /* ── Pupil tracking via rAF ── */
  const trackPupil = useCallback((eyeEl, pupilEl) => {
    if (!eyeEl || !pupilEl) return
    const rect  = eyeEl.getBoundingClientRect()
    const cx    = rect.left + rect.width  / 2
    const cy    = rect.top  + rect.height / 2
    const dx    = mouseRef.current.x - cx
    const dy    = mouseRef.current.y - cy
    const angle = Math.atan2(dy, dx)
    const maxX  = rect.width  * 0.24
    const maxY  = rect.height * 0.20
    const tx    = Math.cos(angle) * Math.min(Math.abs(dx), maxX)
    const ty    = Math.sin(angle) * Math.min(Math.abs(dy), maxY)
    pupilEl.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`
  }, [])

  useEffect(() => {
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const loop = () => {
      trackPupil(leftEyeRef.current, leftPupRef.current)
      trackPupil(rightEyeRef.current, rightPupRef.current)
      trackRafRef.current = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    trackRafRef.current = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(trackRafRef.current)
      timerIds.current.forEach(clearTimeout)
    }
  }, [trackPupil])

  /* ── Tumbling gravity-drop, then spring-back ── */
  const launchFall = useCallback(() => {
    if (animatingRef.current) return
    animatingRef.current = true

    timerIds.current.forEach(clearTimeout)
    timerIds.current = []

    const els     = letterRefs.current.filter(Boolean)
    const STAGGER = 40      // ms between each letter — wider spread for slow-motion feel
    const FALL_DUR = 820    // slow-motion fall in ms
    // ease-in but not too aggressive — steady acceleration like real gravity
    const EASE_IN = 'cubic-bezier(0.5, 0, 0.85, 1)'

    // Pre-generate per-letter tumble params
    const tumble = els.map(() => ({
      rot:   (Math.random() > 0.5 ? 1 : -1) * (200 + Math.random() * 220),  // 200–420 deg random dir
      scale: 0.55 + Math.random() * 0.25,  // shrinks to 55–80% while falling
    }))

    // Phase 1 — each letter tumbles and falls, left to right
    els.forEach((el, i) => {
      const { rot, scale } = tumble[i]
      const id = setTimeout(() => {
        el.style.transition = `transform ${FALL_DUR}ms ${EASE_IN}, opacity ${Math.round(FALL_DUR * 0.4)}ms ease ${Math.round(FALL_DUR * 0.55)}ms`
        el.style.transform  = `translateY(380px) rotate(${rot}deg) scale(${scale})`
        el.style.opacity    = '0'
      }, i * STAGGER)
      timerIds.current.push(id)
    })

    // Phase 2 — snap above, spring back with slight bounce
    const returnAt = (els.length - 1) * STAGGER + FALL_DUR + 60
    const resetId = setTimeout(() => {
      els.forEach((el) => {
        el.style.transition = 'none'
        el.style.transform  = 'translateY(-80px) rotate(0deg) scale(1)'
        el.style.opacity    = '0'
      })
      void sectionRef.current?.offsetWidth   // flush reflow

      els.forEach((el, i) => {
        const id = setTimeout(() => {
          // spring overshoot on return so letters feel like they land with weight
          el.style.transition = 'transform 580ms cubic-bezier(0.34, 1.45, 0.64, 1), opacity 220ms ease'
          el.style.transform  = 'translateY(0) rotate(0deg) scale(1)'
          el.style.opacity    = '1'
        }, i * 22)
        timerIds.current.push(id)
      })

      const doneId = setTimeout(() => {
        els.forEach((el) => { el.style.transition = '' })
        setCopied(false)
        animatingRef.current = false
      }, (els.length - 1) * 22 + 700)
      timerIds.current.push(doneId)
    }, returnAt)
    timerIds.current.push(resetId)
  }, [])

  /* ── Click: copy email + launch fall ── */
  const handleClick = useCallback(async () => {
    if (animatingRef.current) return
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    launchFall()
  }, [launchFall])

  return (
    <section
      ref={sectionRef}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="googly-section"
      style={{ cursor: animatingRef.current ? 'default' : 'pointer' }}
    >
      <div className="googly-rule" />

      {/* Labels */}
      <span className="googly-label" style={{ opacity: copied ? 0 : hovering ? 0.75 : 0.38 }}>
        Click to copy
      </span>
      <span
        className="googly-toast"
        style={{
          opacity:   copied ? 1 : 0,
          transform: copied ? 'translateY(0)' : 'translateY(6px)',
        }}
      >
        ✓ Copied to clipboard
      </span>

      {/* Eyes */}
      <div className="googly-eyes-wrap">
        <div ref={leftEyeRef} className="googly-eye" style={{ animationDelay: '0s' }}>
          <div ref={leftPupRef} className="googly-pupil">
            <div className="googly-shine" />
          </div>
        </div>
        <div ref={rightEyeRef} className="googly-eye" style={{ animationDelay: '0.14s' }}>
          <div ref={rightPupRef} className="googly-pupil">
            <div className="googly-shine" />
          </div>
        </div>
      </div>

      {/* Falling-letters email */}
      <p className="googly-email" aria-label={EMAIL}>
        {[...EMAIL].map((ch, i) => (
          <span
            key={i}
            ref={(el) => { letterRefs.current[i] = el }}
            className="googly-letter"
          >
            {ch}
          </span>
        ))}
      </p>

      <div className="googly-rule" />
    </section>
  )
}
