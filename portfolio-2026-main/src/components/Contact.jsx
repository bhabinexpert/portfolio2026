import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { personal, socials } from '../data/portfolio'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    // Compose mailto link
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1200)
  }

  const socLinks = [
    { icon: <Github size={18} />, href: socials.github, label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
    { icon: <Linkedin size={18} />, href: socials.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
    { icon: <Instagram size={18} />, href: socials.instagram, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-400/30' },
    { icon: <MessageCircle size={18} />, href: socials.whatsapp, label: 'WhatsApp', color: 'hover:text-emerald-400 hover:border-emerald-400/30' },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-3">Let's build together</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text-static">Touch</span>
          </h2>
          <div className="section-divider w-24 mx-auto mb-4" />
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            Whether you have a project idea, a collaboration opportunity, or just want to say hi — I'm always open to a good conversation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          {/* Left: Contact info */}
          <div className="space-y-6">
            {/* Info cards */}
            {[
              {
                icon: <Mail size={20} />,
                label: 'Email',
                value: personal.email,
                href: `mailto:${personal.email}`,
                color: 'text-violet-400',
                bg: 'bg-violet-500/10 border-violet-500/20',
              },
              {
                icon: <Phone size={20} />,
                label: 'Phone / WhatsApp',
                value: personal.phone,
                href: socials.whatsapp,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10 border-emerald-500/20',
              },
              {
                icon: <MapPin size={20} />,
                label: 'Location',
                value: personal.location,
                href: null,
                color: 'text-cyan-400',
                bg: 'bg-cyan-500/10 border-cyan-500/20',
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-5 border border-white/6 flex items-center gap-4 group hover:border-white/12 transition-all"
              >
                <div className={`w-11 h-11 rounded-xl border ${item.bg} flex items-center justify-center ${item.color} flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-white text-sm font-medium hover:text-violet-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="glass rounded-xl p-5 border border-white/6"
            >
              <p className="text-slate-400 text-xs uppercase tracking-widest mb-4">Connect on socials</p>
              <div className="flex gap-3">
                {socLinks.map(({ icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-11 h-11 rounded-xl glass border border-white/8 flex items-center justify-center text-slate-400 ${color} transition-all`}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 border border-white/8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <CheckCircle size={56} className="text-emerald-400 mb-4" />
                </motion.div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Bhabin Dulal' },
                  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-slate-400 text-xs uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Bhabin, I'd love to collaborate on..."
                    required
                    rows={5}
                    className="w-full bg-white/4 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center gap-2 glow-violet btn-shine disabled:opacity-50"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
