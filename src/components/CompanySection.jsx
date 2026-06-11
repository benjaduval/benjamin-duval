import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import ParallaxImage from './ParallaxImage'
import { VideoModal, VideoTrigger } from './VideoModal'

export default function CompanySection({ company, index }) {
  const [videoOpen, setVideoOpen] = useState(false)
  const reversed = index % 2 === 1

  return (
    <section
      id={company.id}
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Gradient backdrop */}
      <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-[0.04]`} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="section-shell">
        <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${reversed ? 'lg:[direction:ltr]' : ''}`}
          >
            <div className="group relative overflow-hidden rounded-[2rem] shadow-float ring-1 ring-black/[0.06]">
              <ParallaxImage
                src={company.image}
                alt={company.name}
                className="aspect-[4/3] md:aspect-[16/11]"
              />

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:max-w-xs"
              >
                <div className="flex flex-wrap gap-2">
                  {company.metrics.map((m) => (
                    <span key={m} className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white">
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>

              {company.video && (
                <div className="absolute right-5 top-5 md:right-6 md:top-6">
                  <VideoTrigger label={company.videoLabel || 'Watch demo'} onClick={() => setVideoOpen(true)} />
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={reversed ? 'lg:[direction:ltr]' : ''}
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <Badge variant="outline">{company.category}</Badge>
              <span className="text-xs text-ink-muted">{company.period}</span>
            </div>

            <div className="mb-4 flex items-center gap-3">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt=""
                  className="h-8 w-auto max-w-[100px] object-contain"
                />
              ) : null}
              <div>
                <h2 className="font-display text-3xl text-ink md:text-4xl lg:text-[2.75rem]">{company.name}</h2>
                <p className="mt-0.5 text-sm font-medium text-brand">{company.role}</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-ink-soft md:text-lg">{company.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{company.about}</p>

            <ul className="mt-8 space-y-3">
              {company.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft md:text-[15px]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: company.accent || '#C4A962' }}
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {company.tags?.map((tag) => (
                <span key={tag} className="rounded-full bg-canvas-warm px-3 py-1 text-xs text-ink-muted">
                  {tag}
                </span>
              ))}
              {company.url && (
                <Button variant="outline" size="sm" asChild className="ml-auto">
                  <a href={company.url} target="_blank" rel="noopener noreferrer">
                    Visit website
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {company.video && (
        <VideoModal
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={company.video}
          title={`${company.name} — Demo`}
        />
      )}
    </section>
  )
}
