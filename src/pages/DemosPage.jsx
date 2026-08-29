import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { demos } from '../data/demos'

export default function DemosPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      <div className="noise-overlay pointer-events-none fixed inset-0" />
      <Navbar />
      <main className="relative pt-28 pb-20">
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="section-label">Demos</p>
            <h1 className="section-title mt-3">
              Interactive product demos.
            </h1>
            <p className="section-subtitle mt-4">
              Click through real product surfaces built for clients and ventures — no accounts, no staging passwords. Fictional data only.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {demos.map((demo, i) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
              >
                <Link
                  to={demo.path}
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-6 transition duration-500 hover:border-brand-accent/40 md:p-8"
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition group-hover:opacity-50"
                    style={{ background: demo.accent }}
                  />
                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                        style={{ color: demo.accent }}
                      >
                        <Layers className="h-5 w-5" />
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                        {demo.status}
                      </span>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">{demo.tag}</p>
                    <h2 className="mt-2 font-display text-2xl text-white md:text-3xl">{demo.name}</h2>
                    <p className="mt-2 text-sm text-zinc-400">{demo.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-500">{demo.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition group-hover:gap-3">
                      Open demo
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-zinc-600">
            Looking for something custom?{' '}
            <a
              href="https://calendly.com/benjaduval/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 transition hover:text-brand-accent"
            >
              Book a strategy call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
