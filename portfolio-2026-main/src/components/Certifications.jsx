import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { certifications } from '../data/portfolio'

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-xl border border-white/8 overflow-hidden group"
      style={{ transition: 'box-shadow 0.3s ease' }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 28px ${cert.color}28` }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Top accent bar */}
      <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

      <div className="p-5">
        {/* Icon + issuer */}
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
          >
            {cert.icon}
          </div>
          <span
            className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full"
            style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}25` }}
          >
            <Award size={9} />
            Certified
          </span>
        </div>

        <h3 className="font-display text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h3>
        <p className="font-mono text-xs mb-2" style={{ color: cert.color }}>{cert.issuer}</p>
        <p className="text-slate-400 text-xs leading-relaxed mb-3">{cert.description}</p>

        <div className="flex items-center gap-1 text-slate-500 text-xs font-mono">
          <Calendar size={10} />
          {cert.date}
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications &amp; <span className="gradient-text-static">Awards</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-4" />
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            Continuous learning through structured programs and hands-on training.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
