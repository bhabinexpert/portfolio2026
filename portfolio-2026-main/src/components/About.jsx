import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Phone, GraduationCap, Briefcase, Zap } from 'lucide-react'
import { personal, stats, education, softSkills } from '../data/portfolio'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text-static">Me</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left: Bio */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <Zap size={18} className="text-violet-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                {personal.bio}
              </p>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/6 space-y-4">
              <h3 className="font-display text-lg font-semibold text-white mb-2">Contact Details</h3>
              {[
                { icon: <MapPin size={15} />, label: personal.location, color: 'text-violet-400' },
                { icon: <Mail size={15} />, label: personal.email, color: 'text-cyan-400', href: `mailto:${personal.email}` },
                { icon: <Phone size={15} />, label: personal.phone, color: 'text-emerald-400', href: `tel:${personal.phone}` },
              ].map(({ icon, label, color, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className={color}>{icon}</span>
                  {href ? (
                    <a href={href} className="text-slate-300 hover:text-white text-sm transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm">{label}</span>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 flex items-center justify-center">
                  <GraduationCap size={18} className="text-cyan-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={edu.degree} className="relative pl-4 border-l border-violet-500/30">
                    <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[5px] ${edu.current ? 'bg-violet-500' : 'bg-slate-600'}`} />
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-white font-semibold text-sm">{edu.degree}</p>
                      {edu.current && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-mono">Current</span>
                      )}
                    </div>
                    <p className="text-violet-400 text-xs font-semibold mt-0.5">{edu.institution}</p>
                    {edu.affiliation && <p className="text-slate-500 text-xs">{edu.affiliation}</p>}
                    <p className="text-cyan-400 text-xs font-mono mt-0.5">{edu.year}</p>
                    <p className="text-slate-400 text-xs mt-1 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats + interests */}
          <div className="space-y-6">
            {/* Stats grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 border border-white/6 text-center group hover:border-violet-500/25 transition-all duration-300"
                >
                  <div className="font-display text-3xl font-bold gradient-text-static mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Interests / what I do */}
            <motion.div variants={itemVariants} className="space-y-3">
              {[
                {
                  icon: <span className="text-lg">🌐</span>,
                  title: 'Web Development',
                  desc: 'Building responsive, user-friendly apps with React and modern CSS frameworks.',
                  color: 'from-violet-600/20 to-violet-600/5',
                  border: 'border-violet-500/20',
                },
                {
                  icon: <span className="text-lg">🔧</span>,
                  title: 'Backend Engineering',
                  desc: 'Designing secure, scalable APIs with Node.js, Express, and MongoDB.',
                  color: 'from-cyan-600/20 to-cyan-600/5',
                  border: 'border-cyan-500/20',
                },
                {
                  icon: <span className="text-lg">🤖</span>,
                  title: 'AI & Machine Learning',
                  desc: 'Exploring ML concepts, combining intelligence with development.',
                  color: 'from-emerald-600/20 to-emerald-600/5',
                  border: 'border-emerald-500/20',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`glass rounded-xl p-4 border ${item.border} bg-gradient-to-r ${item.color} flex items-start gap-4 group hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="w-9 h-9 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Currently learning */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-5 border border-white/6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Currently learning</p>
              <div className="flex flex-wrap gap-2">
                {['Java Full-Stack', 'Machine Learning', 'AWS Cloud', 'System Design', 'TypeScript'].map((tag) => (
                  <span key={tag} className="tech-badge">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Soft skills */}
            <motion.div variants={itemVariants} className="glass rounded-2xl p-5 border border-white/6">
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-3">Soft Skills</p>
              <div className="grid grid-cols-2 gap-2">
                {softSkills.map((s) => (
                  <div key={s.label} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-sm">{s.icon}</span>
                    <span className="leading-tight">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
