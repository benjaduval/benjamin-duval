import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { otherExperiences } from '../data/content'

function StackCard({ exp, index, total, progress }) {
  const targetScale = 1 - (total - index - 1) * 0.045
  const rangeStart = index / total
  const rangeEnd = (index + 1) / total

  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])
  const y = useTransform(progress, [rangeStart, Math.min(rangeEnd + 0.12, 1)], [index * 32, index * 32 - 48])
  const imageScale = useTransform(progress, [rangeStart, rangeEnd], [1.12, 1])
  const opacity = useTransform(progress, [rangeStart, rangeStart + 0.05], [0.85, 1])

  return (
    <div className="sticky top-24 flex h-[72vh] items-start justify-center pb-6 md:top-28">
      <motion.article
        style={{ scale, y, zIndex: index + 1, opacity }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-zinc-900 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
      >
        <div className="relative h-44 overflow-hidden md:h-52">
          <motion.img
            src={exp.image}
            alt={exp.company}
            className="h-full w-full object-cover"
            style={{ scale: imageScale }}
          />
          <div
            className="absolute inset-0 mix-blend-multiply opacity-70"
            style={{ background: `linear-gradient(135deg, ${exp.accent}55 0%, transparent 70%)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4 md:bottom-5 md:left-6 md:right-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                {exp.logo ? (
                  <img src={exp.logo} alt="" className="h-5 w-auto max-w-[72px] object-contain brightness-0 invert opacity-90" />
                ) : (
                  <span className="text-sm font-medium text-white/90">{exp.wordmark}</span>
                )}
              </div>
              <h3 className="font-display text-2xl text-white md:text-3xl">{exp.company}</h3>
              <p className="text-sm text-zinc-400">{exp.role}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1 text-[11px] text-zinc-400">
              {exp.period}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
            {exp.category}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">{exp.about}</p>
          <ul className="mt-5 space-y-2.5">
            {exp.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-zinc-300">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: exp.accent }} />
                {h}
              </li>
            ))}
          </ul>
          {exp.url && (
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand-accent hover:text-brand-glow"
            >
              Site web <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </motion.article>
    </div>
  )
}

export default function StackedExperience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="ventures" className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="section-shell mb-14">
        <p className="section-label">Autres missions</p>
        <h2 className="section-title mt-4 max-w-2xl">Chaque carte raconte une autre bataille d'exécution.</h2>
        <p className="section-subtitle mt-6">
          Scrollez — les cartes montent et s'empilent les unes sur les autres, mission par mission.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto max-w-4xl px-6 md:px-10"
        style={{ height: `${otherExperiences.length * 95 + 30}vh` }}
      >
        {otherExperiences.map((exp, index) => (
          <StackCard
            key={exp.id}
            exp={exp}
            index={index}
            total={otherExperiences.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
