import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { caseStudies, labels } from '../data/content'
import { VideoModal, VideoTrigger } from './VideoModal'
import { cn } from '../lib/utils'

function CompanyLogo({ study }) {
  if (study.logos) {
    return (
      <div className="flex items-center gap-3">
        {study.logos.map((l) => (
          <img
            key={l.src}
            src={l.src}
            alt=""
            className={cn('h-7 w-auto max-w-[88px] object-contain', l.invert && 'brightness-0 invert')}
          />
        ))}
      </div>
    )
  }
  if (study.logo) {
    return (
      <img
        src={study.logo}
        alt=""
        className={cn('h-7 w-auto max-w-[100px] object-contain', study.logoInvert && 'brightness-0 invert')}
      />
    )
  }
  return null
}

function CaseStudyVisual({ study }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const gallery = study.gallery?.length ? study.gallery : [{ src: study.image, alt: study.company }]
  const [activeIndex, setActiveIndex] = useState(0)
  const active = gallery[activeIndex]

  return (
    <div className="space-y-5">
      <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900/80 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
        <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{ background: `linear-gradient(135deg, ${study.accent}44 0%, transparent 55%)` }}
          />
        </div>
      </div>

      {gallery.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                'relative overflow-hidden rounded-xl border transition-all duration-300',
                i === activeIndex
                  ? 'border-brand-accent/60 ring-1 ring-brand-accent/30'
                  : 'border-white/10 opacity-60 hover:opacity-100'
              )}
            >
              <img src={item.src} alt={item.alt} className="aspect-[4/3] h-full w-full object-cover object-top" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {study.video && (
        <VideoTrigger label={labels.watchDemo} onClick={() => setVideoOpen(true)} prominent />
      )}

      {study.video && (
        <VideoModal
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={study.video}
          title={`${study.company} — Demo`}
        />
      )}
    </div>
  )
}

function CaseStudyCard({ study, index }) {
  const reversed = index % 2 === 1
  const band = index % 2 === 0 ? 'section-band' : 'section-surface'

  return (
    <div className={cn('-mx-6 px-6 py-16 md:-mx-10 md:px-10 md:py-20', band, index > 0 && 'rounded-none')}>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className={`section-shell grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:[direction:rtl]' : ''}`}
      >
        <div className={reversed ? 'lg:[direction:ltr]' : ''}>
          <CaseStudyVisual study={study} />
        </div>

        <div className={reversed ? 'lg:[direction:ltr]' : ''}>
          <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: study.accent }}>
            {study.tag}
          </span>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <CompanyLogo study={study} />
            <h3 className="font-display text-3xl text-white md:text-4xl">{study.company}</h3>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            {study.urls ? (
              study.urls.map((u) => (
                <a
                  key={u.href}
                  href={u.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent transition hover:text-brand-glow"
                >
                  {u.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))
            ) : study.url ? (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent transition hover:text-brand-glow"
              >
                {labels.visitSite} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">{labels.product}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">{study.product}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">{labels.contribution}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">{study.contribution}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">{labels.outcome}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">{study.outcome}</p>
            </div>
          </div>

          <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <p className="text-xs font-medium text-brand-glow">{study.stat}</p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function CaseStudies() {
  return (
    <section id="results" className="border-t border-white/[0.06]">
      <div className="section-shell py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="section-label">{labels.trackRecord}</p>
          <h2 className="section-title mt-4">{labels.resultsTitle}</h2>
          <p className="section-subtitle mt-6">{labels.resultsSubtitle}</p>
        </div>
      </div>

      <div className="space-y-0">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>
    </section>
  )
}
