import { useState } from 'react'
import { motion } from 'framer-motion'
import { caseStudies } from '../data/content'
import { VideoModal, VideoTrigger } from './VideoModal'

function CaseStudyCard({ study, index }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:[direction:rtl]' : ''}`}
    >
      {/* Visual mockup — image integrated, logo small */}
      <div className={`relative ${reversed ? 'lg:[direction:ltr]' : ''}`}>
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-900 shadow-glow">
          <div className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative aspect-[16/10] overflow-hidden">
            <motion.img
              src={study.image}
              alt=""
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{ background: `linear-gradient(135deg, ${study.accent}33 0%, transparent 60%)` }}
            />
          </div>

          {/* Small logo badge — not full banner */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1.5 backdrop-blur-md">
            {study.logos ? (
              study.logos.map((src) => (
                <img key={src} src={src} alt="" className="h-4 w-auto max-w-[60px] object-contain brightness-0 invert opacity-80" />
              ))
            ) : study.logo ? (
              <img src={study.logo} alt="" className="h-4 w-auto max-w-[60px] object-contain brightness-0 invert opacity-80" />
            ) : (
              <span className="text-xs font-medium text-white/80">{study.wordmark}</span>
            )}
          </div>

          {study.video && (
            <div className="absolute bottom-4 right-4">
              <VideoTrigger label="Voir la démo" onClick={() => setVideoOpen(true)} />
            </div>
          )}
        </div>
      </div>

      {/* Copy — problem / solution / result */}
      <div className={reversed ? 'lg:[direction:ltr]' : ''}>
        <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: study.accent }}>
          {study.tag}
        </span>
        <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">{study.company}</h3>

        <div className="mt-8 space-y-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">Le défi</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">{study.challenge}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">Mon intervention</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400 md:text-base">{study.intervention}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">Le résultat</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">{study.result}</p>
          </div>
        </div>

        <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <p className="text-xs font-medium text-brand-glow">{study.stat}</p>
        </div>
      </div>

      {study.video && (
        <VideoModal
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={study.video}
          title={`${study.company} — Demo`}
        />
      )}
    </motion.article>
  )
}

export default function CaseStudies() {
  return (
    <section id="results" className="border-t border-white/[0.06] bg-zinc-950/30 py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="section-label">Track record</p>
          <h2 className="section-title mt-4">Des résultats concrets, pas des promesses.</h2>
          <p className="section-subtitle mt-6">
            Chaque mission part d'un problème business réel — et se termine par un produit live, des métriques, et de la traction.
          </p>
        </div>

        <div className="mt-20 space-y-28 md:space-y-36">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
