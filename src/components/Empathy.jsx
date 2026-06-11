import { motion } from 'framer-motion'
import { empathy } from '../data/content'

export default function Empathy() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-balance"
        >
          {empathy.title}
        </motion.h2>

        <div className="mt-10 space-y-6">
          {empathy.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-base leading-relaxed text-zinc-400 md:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
