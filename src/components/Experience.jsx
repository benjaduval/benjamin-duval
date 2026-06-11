import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowTopRightOnSquare, HiChevronDown } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { experiences } from '../data/content'
import SectionTitle from './SectionTitle'

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useScrollReveal(0.1)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className="relative"
    >
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px">
        <div className="absolute top-8 left-0 w-px h-full bg-gradient-to-b from-accent/20 to-transparent" />
        <div className="absolute top-7 -left-[5px] w-[11px] h-[11px] rounded-full border-2 border-accent bg-dark-900" />
      </div>

      <div className="md:ml-10">
        <div
          className="p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04] card-hover cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg md:text-xl font-heading font-bold text-white">
                  {exp.role}
                </h3>
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    <HiArrowTopRightOnSquare className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-accent font-medium text-sm">{exp.company}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted tracking-wider">{exp.period}</span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiChevronDown className="w-4 h-4 text-muted" />
              </motion.div>
            </div>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-4">{exp.about}</p>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map(tag => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-cyan/70 bg-cyan/[0.06] border border-cyan/10 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/[0.04]">
                  <ul className="space-y-3">
                    {exp.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted/90"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Career"
          title="Work Experience"
          subtitle="12+ years of building companies from zero to market leadership across fintech, Web3, and AI."
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <div className="line-gradient mt-24" />
    </section>
  )
}
