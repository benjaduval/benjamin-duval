import { motion } from 'framer-motion'
import { Layers, Sparkles, Blocks } from 'lucide-react'
import { services } from '../data/content'

const icons = { layers: Layers, sparkles: Sparkles, blocks: Blocks }

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-label">Comment je vous aide</p>
          <h2 className="section-title mt-4">Trois leviers d'exécution. Un seul objectif : livrer.</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
                className="group surface-dark-hover relative overflow-hidden p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-zinc-600">({service.number})</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl text-white md:text-2xl">{service.title}</h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                    <span className="font-medium text-zinc-400">Pour qui : </span>
                    {service.audience}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{service.impact}</p>

                  <div className="mt-6 rounded-xl border border-brand-accent/20 bg-brand-accent/5 px-4 py-3">
                    <p className="text-xs leading-relaxed text-brand-glow">{service.metric}</p>
                  </div>
                </div>

                {/* Magic UI corner accents on hover */}
                <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                  <div className="absolute -left-px -top-px h-3 w-3 bg-brand-accent" />
                  <div className="absolute -right-px -top-px h-3 w-3 bg-brand-accent" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
