import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Instagram, Download, ArrowDown, Mail, Sparkles } from 'lucide-react'
import { personal, socials, roles } from '../data/portfolio'
import Scene3D from './three/Scene3D'

const CV_PATH = personal.cv ?? '/Bhabin Dulal CV.pdf'

const typeSequence = roles.flatMap((r) => [r, 2000])

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#03030a] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/25 text-sm text-violet-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {personal.availability}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text block">{personal.name}</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-mono mb-6 h-8"
          >
            <TypeAnimation
              sequence={typeSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: '#a78bfa' }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons — primary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-shine px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-cyan-500 text-white glow-violet flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowDown size={15} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-slate-500 text-xs tracking-widest uppercase">Find me on</span>
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, href: socials.github, label: 'GitHub' },
                { icon: <Linkedin size={18} />, href: socials.linkedin, label: 'LinkedIn' },
                { icon: <Instagram size={18} />, href: socials.instagram, label: 'Instagram' },
              ].map(({ icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Bottom row: Download CV · Let's Talk · Hire Me ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={CV_PATH}
              download="Bhabin Dulal CV.pdf"
              className="btn-shine px-6 py-3 rounded-xl font-semibold text-sm glass border border-violet-500/30 text-violet-300 flex items-center gap-2 hover:border-violet-400/60 hover:text-white hover:bg-violet-500/10 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} />
              Download CV
            </motion.a>
            <motion.a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-sm glass border border-white/10 text-slate-200 flex items-center gap-2 hover:border-cyan-500/40 hover:text-white transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={15} />
              Let's Talk
            </motion.a>
            <HireMeButton email={personal.email} />
          </motion.div>
        </div>

        {/* Right: 3D scene placeholder (actual 3D is in background) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center relative h-[480px]"
        >
          {/* Info cards orbiting the 3D scene */}
          <FloatingCard
            className="absolute top-8 left-8"
            delay={0}
            content="React & Node.js"
            sub="Full Stack"
            color="violet"
          />
          <FloatingCard
            className="absolute bottom-16 left-4"
            delay={0.3}
            content="MongoDB"
            sub="Database"
            color="cyan"
          />
          <FloatingCard
            className="absolute top-20 right-0"
            delay={0.6}
            content="10+ Projects"
            sub="Built & shipped"
            color="violet"
          />
          <FloatingCard
            className="absolute bottom-8 right-8"
            delay={0.9}
            content="Nepal 🇳🇵"
            sub="Damak, Jhapa"
            color="cyan"
          />
          {/* Center ring */}
          <div className="w-48 h-48 rounded-full border border-violet-500/10 absolute" />
          <div className="w-64 h-64 rounded-full border border-cyan-500/8 absolute" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-violet-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  )
}

/* ── Animated Hire Me button ── */
function HireMeButton({ email }) {
  return (
    <a
      href={`mailto:${email}?subject=Hiring Inquiry — Let's Work Together`}
      className="hire-me-btn group"
    >
      {/* rotating gradient border ring */}
      <span className="hire-me-ring" aria-hidden="true" />
      {/* pulsing outer glow */}
      <span className="hire-me-glow" aria-hidden="true" />
      {/* button face */}
      <span className="hire-me-face">
        <Sparkles size={16} className="hire-me-icon" />
        <span className="hire-me-text">Hire Me</span>
        <span className="hire-me-arrow">→</span>
      </span>
    </a>
  )
}

function FloatingCard({ className, delay, content, sub, color }) {
  const colors = {
    violet: 'border-violet-500/25 bg-violet-500/8',
    cyan: 'border-cyan-500/25 bg-cyan-500/8',
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 3 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`${className} glass border ${colors[color]} rounded-xl px-3 py-2 pointer-events-none`}
    >
      <p className="text-white text-xs font-semibold">{content}</p>
      <p className="text-slate-400 text-xs">{sub}</p>
    </motion.div>
  )
}
