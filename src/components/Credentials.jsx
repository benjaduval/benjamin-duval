import { motion } from 'framer-motion'
import { GraduationCap, Award, Languages } from 'lucide-react'
import { education, achievements, languages, labels } from '../data/content'

export default function Credentials() {
  return (
    <section id="credentials" className="section-band py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-label">{labels.credentialsLabel}</p>
          <h2 className="section-title mt-4">{labels.credentialsTitle}</h2>
          <p className="section-subtitle mt-6">{labels.credentialsSubtitle}</p>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-5 w-5 text-brand-accent" />
            <h3 className="font-display text-2xl text-white">{labels.achievementsTitle}</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
                className="group surface-dark-hover p-6"
              >
                <p className="font-display text-3xl text-brand-glow">{item.metric}</p>
                <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-brand-accent" />
            <h3 className="font-display text-2xl text-white">{labels.educationTitle}</h3>
          </div>

          <div className="relative space-y-0">
            <div className="absolute bottom-0 left-[11px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />

            {education.map((item, i) => (
              <motion.div
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid gap-6 pb-10 md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}
              >
                <div className="hidden md:block" />
                <div className="relative md:col-span-1">
                  <span className="absolute -left-[3px] top-5 h-[18px] w-[18px] rounded-full border-4 border-zinc-950 bg-brand-accent md:left-1/2 md:-translate-x-1/2" />
                  <article className="surface-dark ml-8 p-6 md:ml-0 md:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.16em] text-brand-accent">{item.period}</p>
                        <h4 className="mt-2 font-display text-xl text-white">{item.degree}</h4>
                        <p className="mt-1 text-sm text-zinc-400">{item.school}</p>
                        <p className="text-xs text-zinc-600">{item.location}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">{item.details}</p>
                  </article>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <Languages className="h-5 w-5 text-brand-accent" />
            <h3 className="font-display text-2xl text-white">{labels.languagesTitle}</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="surface-dark rounded-2xl px-5 py-4 text-center"
              >
                <p className="font-medium text-white">{lang.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
