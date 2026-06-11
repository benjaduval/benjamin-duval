import { motion } from 'framer-motion'
import { socialProof } from '../data/content'
import AnimatedCounter from './AnimatedCounter'

export default function SocialProof() {
  return (
    <section className="border-y border-white/[0.06] bg-zinc-950/50 py-10">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {socialProof.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <div className="font-display text-3xl text-white md:text-4xl">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-zinc-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
