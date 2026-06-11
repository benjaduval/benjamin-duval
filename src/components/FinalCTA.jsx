import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { finalCta, site, labels } from '../data/content'
import { Glow } from './ui/glow'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-surface relative overflow-hidden py-24 md:py-32">
      <Glow />
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-brand-accent/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-10 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,169,98,0.08)_0%,transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-display text-3xl text-white md:text-4xl lg:text-5xl">{finalCta.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">{finalCta.text}</p>

            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-flex"
            >
              {finalCta.button}
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <p className="mt-6 text-sm text-zinc-600">
              {labels.orEmail}{' '}
              <a href={`mailto:${site.email}`} className="text-brand-accent hover:underline">
                {site.email}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
