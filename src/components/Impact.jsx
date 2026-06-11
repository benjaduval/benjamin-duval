import { motion } from 'framer-motion'
import { stats } from '../data/content'
import { BentoGrid, BentoCard } from './ui/bento-grid'
import AnimatedCounter from './AnimatedCounter'

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <div className="absolute inset-0 bg-mesh-dark opacity-60" />
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label text-brand-glow">Impact at a glance</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Numbers backed by execution, not slides.
          </h2>
        </div>

        <BentoGrid className="mt-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i === 0 ? 'lg:col-span-7' : i === 1 ? 'lg:col-span-5' : i === 2 ? 'lg:col-span-5' : 'lg:col-span-7'}
            >
              <BentoCard
                eyebrow={stat.label}
                title={
                  <span className="text-white">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </span>
                }
                description={stat.detail}
                className="border-white/10 bg-white/[0.04] text-white backdrop-blur-sm hover:border-brand-accent/30"
              />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
