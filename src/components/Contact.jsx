import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer, slideInLeft, slideInRight } from '../hooks/useScrollReveal'
import { profile } from '../data/content'
import SectionTitle from './SectionTitle'

const contactInfo = [
  {
    icon: HiEnvelope,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: HiMapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
]

export default function Contact() {
  const { ref, inView } = useScrollReveal()
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formState.subject || 'Contact from portfolio')}&body=${encodeURIComponent(`From: ${formState.name} (${formState.email})\n\n${formState.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Contact"
          title="Let's Connect"
          subtitle="Interested in working together or discussing a project? Feel free to reach out."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="lg:col-span-2 space-y-6"
          >
            <motion.p variants={fadeUp} className="text-muted leading-relaxed">
              Whether you have a project in mind, want to explore a partnership, or
              just want to say hello — I'm always open to new conversations and opportunities.
            </motion.p>

            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                const content = (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/[0.04] card-hover group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-accent/[0.06] flex items-center justify-center group-hover:bg-accent/[0.12] transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                )

                return item.href ? (
                  <a key={i} href={item.href} className="block">{content}</a>
                ) : (
                  <div key={i}>{content}</div>
                )
              })}
            </div>

            <motion.div variants={fadeUp} className="flex gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white/70 bg-dark-700/50 border border-white/[0.05] rounded-lg hover:text-white hover:border-accent/20 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={slideInRight}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04] space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/[0.06] rounded-lg text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/[0.06] rounded-lg text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-white/[0.06] rounded-lg text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-xs text-muted uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-700/50 border border-white/[0.06] rounded-lg text-sm text-white placeholder-muted/50 focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 text-sm font-medium text-white bg-gradient-accent rounded-lg hover:shadow-lg hover:shadow-accent/20 transition-shadow"
              >
                {submitted ? 'Opening email client...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
