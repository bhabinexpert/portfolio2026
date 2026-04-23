/**
 * Fixed-position meteor + falling-star layer that covers the entire viewport
 * regardless of scroll position.
 */

// Meteors — long bright streaks, distributed across full viewport
const METEORS = [
  { top: '6%',  left: '12%', delay: '0s',    dur: '6s',   len: 120 },
  { top: '18%', left: '58%', delay: '2.2s',  dur: '5.5s', len: 100 },
  { top: '38%', left: '28%', delay: '4.5s',  dur: '7s',   len: 130 },
  { top: '52%', left: '74%', delay: '1.1s',  dur: '5s',   len: 90  },
  { top: '72%', left: '45%', delay: '3.8s',  dur: '6.5s', len: 110 },
  { top: '85%', left: '82%', delay: '0.6s',  dur: '5.8s', len: 80  },
  { top: '10%', left: '88%', delay: '5.2s',  dur: '4.8s', len: 95  },
  { top: '62%', left: '8%',  delay: '2.9s',  dur: '6.2s', len: 85  },
]

// Falling stars — tiny short streaks, faster, more numerous
const STARS = [
  { top: '5%',  left: '32%', delay: '1s',    dur: '3.5s', len: 30 },
  { top: '22%', left: '67%', delay: '3.2s',  dur: '4s',   len: 25 },
  { top: '45%', left: '15%', delay: '0.5s',  dur: '3s',   len: 35 },
  { top: '58%', left: '90%', delay: '4.8s',  dur: '3.8s', len: 28 },
  { top: '78%', left: '52%', delay: '2s',    dur: '4.2s', len: 22 },
  { top: '90%', left: '22%', delay: '5.5s',  dur: '3.5s', len: 32 },
  { top: '33%', left: '40%', delay: '1.7s',  dur: '3s',   len: 26 },
  { top: '67%', left: '62%', delay: '6.1s',  dur: '4s',   len: 30 },
  { top: '14%', left: '78%', delay: '0.3s',  dur: '3.2s', len: 24 },
  { top: '48%', left: '5%',  delay: '3.5s',  dur: '4.5s', len: 20 },
]

export default function MeteorShower() {
  return (
    <div
      className="pointer-events-none"
      style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}
    >
      {METEORS.map((m, i) => (
        <span
          key={`m${i}`}
          className="meteor-streak"
          style={{
            top:               m.top,
            left:              m.left,
            '--meteor-len':    `${m.len}px`,
            animationDelay:    m.delay,
            animationDuration: m.dur,
          }}
        />
      ))}
      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="falling-star"
          style={{
            top:               s.top,
            left:              s.left,
            '--meteor-len':    `${s.len}px`,
            animationDelay:    s.delay,
            animationDuration: s.dur,
          }}
        />
      ))}
    </div>
  )
}
