import { motion } from 'framer-motion'
import { about, profile } from '../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-accent/20 via-transparent to-violet-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 pt-20">
                <p className="font-display text-2xl text-white">{profile.name}</p>
                <p className="text-sm text-zinc-400">Serial Builder · Brussels</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">À propos</p>
            <h2 className="section-title mt-4">{about.title}</h2>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-base leading-relaxed text-zinc-400"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
