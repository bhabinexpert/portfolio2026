import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Code2, Heart, ArrowUp } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

const socLinks = [
  { icon: <Github size={16} />, href: socials.github, label: 'GitHub' },
  { icon: <Linkedin size={16} />, href: socials.linkedin, label: 'LinkedIn' },
  { icon: <Instagram size={16} />, href: socials.instagram, label: 'Instagram' },
  { icon: <MessageCircle size={16} />, href: socials.whatsapp, label: 'WhatsApp' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/6 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <Code2 size={15} className="text-white" />
            </div>
            <div>
              <p className="text-white font-display font-semibold text-sm">{personal.name}</p>
              <p className="text-slate-500 text-xs">
                Built with <Heart size={10} className="inline text-red-400" /> by vabin.
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Scroll top */}
          <motion.button
            onClick={scrollTop}
            className="w-9 h-9 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500/30 transition-all"
            whileHover={{ scale: 1.12, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>

        <div className="section-divider my-6" />

        <p className="text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} {personal.name}
        </p>
      </div>
    </footer>
  )
}
