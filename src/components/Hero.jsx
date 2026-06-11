import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { hero, site } from '../data/content'
import { Glow } from './ui/glow'

export default function Hero() {
  const scrollToResults = () => {
    document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <Glow />
      <div className="absolute inset-0 bg-[size:64px_64px] bg-grid-dark opacity-40" />

      <div className="section-shell relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mb-8"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-white"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {hero.ctaPrimary}
          </a>
          <button onClick={scrollToResults} className="btn-outline">
            {hero.ctaSecondary}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex justify-center"
        >
          <button onClick={scrollToResults} className="animate-bounce text-zinc-600 transition hover:text-brand-accent" aria-label="Scroll">
            <ArrowDown className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
