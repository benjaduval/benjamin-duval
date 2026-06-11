import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { experiences } from '../data/content'

export default function Journey() {
  return (
    <section id="journey" className="bg-canvas-warm py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Journey</p>
          <h2 className="section-title mt-4">A career built company by company.</h2>
          <p className="section-subtitle mt-6">
            From bootstrapped trading startups to institutional crypto-banking — each chapter added a
            new layer of product and operational depth.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-black/10 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="hidden md:block" />
                <div className="relative md:col-span-1">
                  <span className="absolute -left-[3px] top-6 h-[22px] w-[22px] rounded-full border-4 border-canvas-warm bg-brand-accent md:left-1/2 md:-translate-x-1/2" />
                  <article className="surface-card ml-8 p-6 md:ml-0 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-brand">{exp.role}</p>
                        <h3 className="mt-1 font-display text-2xl text-ink">{exp.company}</h3>
                      </div>
                      <span className="rounded-full bg-canvas px-3 py-1 text-xs text-ink-muted">{exp.period}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-ink-muted">{exp.about}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-ink-soft">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-black/[0.06] px-2.5 py-1 text-[11px] text-ink-muted">
                          {tag}
                        </span>
                      ))}
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-brand hover:text-brand-light"
                        >
                          Website <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
