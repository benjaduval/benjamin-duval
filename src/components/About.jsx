import { motion } from 'framer-motion'
import { useScrollReveal, fadeUp } from '../hooks/useScrollReveal'
import { narrative, profile } from '../data/content'

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-shell">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp}>
          <p className="section-label">About</p>
          <h2 className="section-title mt-4 max-w-4xl text-balance">
            Not a résumé on a page — a track record of building under real constraints.
          </h2>
          <p className="section-subtitle mt-6">{profile.tagline}</p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {narrative.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="surface-card-hover p-8"
            >
              <span className="font-mono text-xs text-brand-accent">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
