import { motion } from 'framer-motion'
import { HiCommandLine, HiBriefcase, HiLanguage } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer, slideInLeft, slideInRight } from '../hooks/useScrollReveal'
import { skills } from '../data/content'
import SectionTitle from './SectionTitle'

function SkillPill({ label, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05, borderColor: 'rgba(108, 99, 255, 0.3)' }}
      className="px-4 py-2.5 text-sm text-white/80 bg-dark-700/50 border border-white/[0.05] rounded-lg transition-colors hover:text-white"
    >
      {label}
    </motion.div>
  )
}

function LanguageBar({ name, level }) {
  const widths = {
    Native: '100%',
    Fluent: '90%',
    Professional: '70%',
    Conversational: '50%',
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80 font-medium">{name}</span>
        <span className="text-muted text-xs">{level}</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: widths[level] }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="h-full bg-gradient-accent rounded-full"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Expertise"
          title="Skills & Languages"
          subtitle="A diverse skill set spanning technical development, business strategy, and international communication."
        />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center">
                <HiCommandLine className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.technical.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan/[0.08] flex items-center justify-center">
                <HiBriefcase className="w-5 h-5 text-cyan" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white">Business</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.business.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="p-6 md:p-8 rounded-xl bg-dark-800/30 border border-white/[0.04]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/[0.08] flex items-center justify-center">
                <HiLanguage className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-5">
              {skills.languages.map((lang) => (
                <LanguageBar key={lang.name} name={lang.name} level={lang.level} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="line-gradient mt-24" />
    </section>
  )
}
