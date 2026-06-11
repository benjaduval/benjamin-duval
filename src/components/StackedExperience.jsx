import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { otherExperiences } from '../data/content'
import { Badge } from './ui/badge'

function StackCard({ exp, index, total, progress }) {
  const targetScale = 1 - (total - index - 1) * 0.04
  const rangeStart = index / total
  const rangeEnd = (index + 1) / total

  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale])
  const y = useTransform(progress, [rangeStart, Math.min(rangeEnd + 0.15, 1)], [index * 28, index * 28 - 40])
  const imageScale = useTransform(progress, [rangeStart, rangeEnd], [1.1, 1])

  return (
    <div className="sticky top-28 flex h-[70vh] items-start justify-center pb-8">
      <motion.article
        style={{ scale, y, top: index * 28, zIndex: index + 1 }}
        className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-black/[0.06] bg-surface shadow-float"
      >
        {/* Image header with gradient overlay */}
        <div className="relative h-48 overflow-hidden md:h-56">
          <motion.img
            src={exp.image}
            alt={exp.company}
            className="h-full w-full object-cover"
            style={{ scale: imageScale }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} mix-blend-multiply opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2">
                {exp.logo ? (
                  <img src={exp.logo} alt="" className="h-6 w-auto max-w-[80px] object-contain brightness-0 invert" />
                ) : (
                  <span className="font-display text-lg text-white">{exp.wordmark}</span>
                )}
              </div>
              <h3 className="font-display text-2xl text-white md:text-3xl">{exp.company}</h3>
              <p className="text-sm text-white/80">{exp.role}</p>
            </div>
            <Badge variant="dark">{exp.period}</Badge>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <Badge variant="outline" className="mb-4">{exp.category}</Badge>
          <p className="text-sm leading-relaxed text-ink-muted md:text-base">{exp.about}</p>
          <ul className="mt-5 space-y-2">
            {exp.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-ink-soft">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                {h}
              </li>
            ))}
          </ul>
          {exp.url && (
            <a
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-light"
            >
              Website <ExternalLink className="h-3.5 w-3.5" />
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

  const cards = otherExperiences

  return (
    <section id="journey" className="relative bg-canvas-warm py-24 md:py-32">
      <div className="section-shell mb-12">
        <p className="section-label">Earlier chapters</p>
        <h2 className="section-title mt-4 max-w-2xl">More ventures & experiences.</h2>
        <p className="section-subtitle mt-6">
          Scroll to explore — each card rises and stacks as you move through the timeline.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto max-w-4xl px-6 md:px-10"
        style={{ height: `${cards.length * 100 + 40}vh` }}
      >
        {cards.map((exp, index) => (
          <StackCard
            key={exp.id}
            exp={exp}
            index={index}
            total={cards.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
