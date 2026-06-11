import { motion } from 'framer-motion'
import { useScrollReveal, fadeUp } from '../hooks/useScrollReveal'

export default function SectionTitle({ label, title, subtitle }) {
  const { ref, inView } = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className="text-center mb-16 md:mb-20"
    >
      {label && (
        <span className="inline-block text-xs font-mono font-medium tracking-[0.2em] uppercase text-accent mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-20 h-[2px] bg-gradient-accent rounded-full" />
    </motion.div>
  )
}
