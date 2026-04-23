import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Github, ExternalLink, Star, Terminal, Globe } from 'lucide-react'
import { projects } from '../data/portfolio'

/* ── Mock preview panel at the top of each card ── */
function ProjectPreview({ preview, color }) {
  if (preview.type === 'terminal') {
    return (
      <div
        className="relative w-full overflow-hidden rounded-t-xl"
        style={{ background: '#0d0d14', height: '148px', borderBottom: `1px solid ${color}22` }}
      >
        {/* terminal chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5" style={{ background: '#161620' }}>
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 font-mono text-[10px] text-slate-500">bash — terminal</span>
        </div>
        <div className="p-3 font-mono text-[11px] space-y-1">
          {preview.lines.map((line, i) => (
            <div key={i} className="flex items-start gap-2">
              {i === 0
                ? <span style={{ color }}>{line}</span>
                : <>
                    <span className="text-slate-600 select-none">{i === preview.lines.length - 1 ? '▶' : '·'}</span>
                    <span className="text-slate-300">{line}</span>
                  </>
              }
            </div>
          ))}
          <div className="flex items-center gap-1 mt-1">
            <span className="text-slate-600">$</span>
            <span className="w-1.5 h-3.5 rounded-sm animate-pulse" style={{ background: color }} />
          </div>
        </div>
        {/* scan-line overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
        }} />
      </div>
    )
  }

  if (preview.type === 'dashboard') {
    return (
      <div
        className="relative w-full overflow-hidden rounded-t-xl"
        style={{ height: '148px', borderBottom: `1px solid ${color}22`, background: `linear-gradient(135deg, #0a0a18 0%, ${color}12 100%)` }}
      >
        {/* fake bar chart */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-0 flex items-end gap-2 h-24">
          {[55, 80, 45, 95, 65, 70, 40, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm opacity-70"
              style={{
                height: `${h}%`,
                background: `linear-gradient(180deg, ${color}, ${color}44)`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
        {/* overlay text lines */}
        <div className="absolute top-3 left-3 space-y-1">
          {preview.lines.slice(0, 2).map((line, i) => (
            <div key={i} className={`font-mono text-[10px] ${i === 0 ? 'font-bold' : 'text-slate-400'}`} style={{ color: i === 0 ? color : undefined }}>
              {line}
            </div>
          ))}
        </div>
        <div className="absolute top-2 right-2 text-xl">{preview.emoji}</div>
      </div>
    )
  }

  // default: browser mockup
  return (
    <div
      className="relative w-full overflow-hidden rounded-t-xl"
      style={{ height: '148px', borderBottom: `1px solid ${color}22` }}
    >
      {/* browser chrome bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/5" style={{ background: '#13131f' }}>
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
        <div className="flex-1 mx-2 h-4 rounded bg-white/5 flex items-center px-2">
          <Globe size={8} className="text-slate-500 mr-1" />
          <span className="font-mono text-[9px] text-slate-500 truncate">
            {projects.find(p => p.preview?.lines === preview.lines)?.live?.replace('https://', '') ?? 'localhost:5173'}
          </span>
        </div>
      </div>
      {/* page body */}
      <div
        className="relative flex flex-col justify-between p-4 h-[108px]"
        style={{ background: `linear-gradient(135deg, #0d0d1e 0%, ${color}10 100%)` }}
      >
        <div className="space-y-1.5">
          {preview.lines.slice(0, 2).map((line, i) => (
            <div
              key={i}
              className={`font-mono text-[10px] leading-tight ${i === 0 ? 'font-semibold' : 'text-slate-400'}`}
              style={{ color: i === 0 ? color : undefined }}
            >
              {line}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          {preview.lines.slice(2).map((line, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded text-[9px] font-mono"
              style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}
            >
              {line}
            </span>
          ))}
        </div>
        <div className="absolute top-2 right-3 text-2xl opacity-30">{preview.emoji}</div>
      </div>
    </div>
  )
}

/* ── 3D tilt wrapper ── */
function TiltCard({ children, className }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 30 })
  const sy = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(sy, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(sx, [-0.5, 0.5], ['-8deg', '8deg'])

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect()
        x.set((e.clientX - r.left) / r.width - 0.5)
        y.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ── Individual project card ── */
function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hovered, setHovered] = useState(false)
  const isCLI = project.tech.includes('CLI') || project.tech.includes('Java Swing')

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: 'easeOut' }}
      className="h-full"
    >
      <TiltCard className="h-full">
        <div
          className="h-full glass border border-white/8 overflow-hidden group flex flex-col rounded-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            boxShadow: hovered ? `0 8px 40px ${project.color}25, 0 0 80px ${project.color}10` : 'none',
            transition: 'box-shadow 0.4s ease',
          }}
        >
          {/* Screenshot-style preview */}
          <ProjectPreview preview={project.preview} color={project.color} />

          {/* Card body */}
          <div className="flex flex-col flex-grow p-5 pt-4">
            {/* Header row */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono" style={{ color: project.color }}>{project.subtitle}</span>
              <div className="flex items-center gap-2">
                {project.featured && (
                  <span className="flex items-center gap-1 text-[10px] font-mono text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-1.5 py-0.5 rounded-full">
                    <Star size={8} fill="currentColor" /> Featured
                  </span>
                )}
                <span className="text-[10px] text-slate-500 font-mono">{project.year}</span>
              </div>
            </div>

            <h3 className="font-display text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3 flex-grow">{project.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium"
                  style={{ background: `${project.color}10`, border: `1px solid ${project.color}25`, color: project.color }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg glass border border-white/8 text-slate-300 hover:text-white hover:border-white/18 text-xs font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={12} />
                Code
              </motion.a>
              {project.live ? (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-medium btn-shine"
                  style={{ background: `linear-gradient(135deg, ${project.color}dd, ${project.color}88)` }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink size={12} />
                  Live Demo
                </motion.a>
              ) : (
                <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/4 text-slate-500 text-xs font-medium border border-white/5">
                  <Terminal size={12} />
                  {isCLI ? 'Local App' : 'Coming Soon'}
                </span>
              )}
            </div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others   = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">Things I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text-static">Projects</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-4" />
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            {projects.length} projects — full-stack web apps, civic tech, data dashboards, Java GUIs, and CLI tools.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-yellow-400/70 uppercase tracking-widest mb-4 flex items-center gap-2"
          >
            <Star size={10} fill="currentColor" /> Featured
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>

        {/* Other */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4"
          >
            Other projects
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((p, i) => <ProjectCard key={p.id} project={p} index={featured.length + i} />)}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-400 text-sm mb-4">Want to explore more repositories?</p>
          <motion.a
            href="https://github.com/bhabinexpert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-200 hover:text-white hover:border-violet-500/30 text-sm font-medium transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={16} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
