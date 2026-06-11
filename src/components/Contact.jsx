import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa6'
import { profile } from '../data/content'
import { Button } from './ui/button'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-14 text-white md:px-14 md:py-20"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/20 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-brand-light/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="section-label text-brand-glow">Contact</p>
              <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
                Let's build something
                <br />
                with real momentum.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Open to executive roles, advisory mandates, and high-conviction product partnerships
                across fintech, Web3, and AI.
              </p>
            </div>

            <div className="space-y-3">
              <Button variant="gold" size="lg" className="w-full" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="w-full border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
