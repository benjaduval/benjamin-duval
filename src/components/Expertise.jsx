import { motion } from 'framer-motion'
import { expertise } from '../data/content'

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Expertise</p>
          <h2 className="section-title mt-4">Where I create the most leverage.</h2>
          <p className="section-subtitle mt-6">
            Four domains where strategy, product, and execution intersect — from zero to institutional scale.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {expertise.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="surface-card-hover group p-8"
            >
              <div className="mb-6 h-1 w-12 rounded-full bg-brand-accent transition-all duration-500 group-hover:w-20" />
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">{item.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/[0.06] bg-canvas px-3 py-1 text-xs text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
