import { motion } from 'framer-motion'
import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile, stats } from '../data/content'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { AnimatedGradientText } from './ui/animated-gradient-text'
import AnimatedCounter from './AnimatedCounter'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-20 md:pt-32">
      <div className="absolute inset-0 bg-mesh-light" />
      <div className="noise-overlay absolute inset-0" />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="mb-6">Product Leader · Brussels</Badge>

          <h1 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] text-ink">
            Building products
            <br />
            that <AnimatedGradientText>move markets.</AnimatedGradientText>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            {profile.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
            <MapPin className="h-4 w-4 text-brand-accent" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollTo('#work')}>
              View selected work
              <ArrowDownRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => scrollTo('#contact')}>
              Start a conversation
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card p-4 md:p-5">
                <div className="font-display text-2xl text-ink md:text-3xl">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-ink-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-brand-accent/20 blur-3xl" />
          <div className="absolute -right-4 bottom-8 h-32 w-32 rounded-full bg-brand-light/15 blur-3xl" />

          <div className="surface-card relative overflow-hidden p-3 shadow-float">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />
            <img
              src={profile.portrait}
              alt={profile.name}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-top"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/80 p-4 backdrop-blur-md">
              <p className="font-display text-2xl text-ink">{profile.name}</p>
              <p className="text-sm text-ink-soft">{profile.title}</p>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 top-10 hidden rounded-2xl border border-black/[0.06] bg-white px-4 py-3 shadow-card md:block"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">Currently</p>
            <p className="font-medium text-ink">COO @ Monetum</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
