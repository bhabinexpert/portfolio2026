import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const categories = ['frontend', 'backend', 'data', 'design', 'ai', 'tools']

const categoryColors = {
  frontend: { bg: 'bg-violet-500/15', border: 'border-violet-500/30', text: 'text-violet-400', glow: 'rgba(139,92,246,0.4)', bar: 'linear-gradient(90deg,#7c3aed,#a78bfa)' },
  backend:  { bg: 'bg-cyan-500/15',   border: 'border-cyan-500/30',   text: 'text-cyan-400',   glow: 'rgba(34,211,238,0.4)',  bar: 'linear-gradient(90deg,#0891b2,#22d3ee)' },
  data:     { bg: 'bg-orange-500/15', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'rgba(249,115,22,0.4)',  bar: 'linear-gradient(90deg,#c2410c,#fb923c)' },
  design:   { bg: 'bg-pink-500/15',   border: 'border-pink-500/30',   text: 'text-pink-400',   glow: 'rgba(236,72,153,0.4)', bar: 'linear-gradient(90deg,#be185d,#f472b6)' },
  ai:       { bg: 'bg-yellow-500/15', border: 'border-yellow-500/30', text: 'text-yellow-400', glow: 'rgba(234,179,8,0.4)',  bar: 'linear-gradient(90deg,#a16207,#facc15)' },
  tools:    { bg: 'bg-emerald-500/15',border: 'border-emerald-500/30',text: 'text-emerald-400',glow: 'rgba(16,185,129,0.4)', bar: 'linear-gradient(90deg,#059669,#34d399)' },
}

function SkillCard({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const colors = categoryColors[skill.category]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`glass rounded-xl p-5 border ${colors.border} group cursor-default relative overflow-hidden`}
      style={{
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 24px ${colors.glow}`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

      <div className="relative z-10">
        {/* Icon & name */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{skill.icon}</span>
            <span className="text-white font-semibold text-sm">{skill.name}</span>
          </div>
          <span className={`${colors.text} font-mono text-xs font-bold`}>{skill.level}%</span>
        </div>

        {/* Progress bar */}
        <div className="skill-bar">
          <motion.div
            className="skill-fill"
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.4, delay: index * 0.05 + 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ background: colors.bar }}
          />
        </div>

        {/* Category badge */}
        <div className="mt-3">
          <span className={`text-xs ${colors.text} capitalize font-mono`}>{skill.category}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const filtered = skills.filter((s) => s.category === activeCategory)

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text-static">Skills</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-8" />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const c = categoryColors[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2 rounded-xl text-sm font-semibold capitalize transition-all duration-200 border ${
                    isActive
                      ? 'text-white border-transparent'
                      : 'glass text-slate-400 border-white/6 hover:text-white hover:border-white/14'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-filter"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: c.bar }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <SkillCard skill={skill} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 text-sm">
            Always learning and expanding my toolkit.{' '}
            <span className="text-violet-400">Currently deepening Python data skills & AI agent development.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
