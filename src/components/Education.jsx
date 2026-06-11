import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { education } from '../data/content'
import SectionTitle from './SectionTitle'

export default function Education() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Education"
          title="Academic Background"
          subtitle="International education across Belgium, USA, and Spain — bridging business, engineering, and entrepreneurship."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="space-y-4"
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04] card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/[0.06] border border-accent/10 flex items-center justify-center group-hover:bg-accent/[0.12] transition-colors">
                    <HiAcademicCap className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-base md:text-lg font-heading font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-accent">{edu.school}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-muted tracking-wider">{edu.period}</span>
                      <p className="text-xs text-muted/60">{edu.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{edu.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="line-gradient mt-24" />
    </section>
  )
}
