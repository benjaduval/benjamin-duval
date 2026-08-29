import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { demos } from '../data/demos'

export default function DemosPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950">
      <div className="noise-overlay pointer-events-none fixed inset-0" />
      <Navbar />
      <main className="relative px-6 pb-24 pt-36 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Interactive work</p>
          <h1 className="section-title mt-4 max-w-3xl">Click through real products. No account. Sample data only.</h1>
          <p className="section-subtitle mt-6 max-w-2xl">
            These demos show how I ship usable software — not slides. Everything you open is fictional and public on purpose.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {demos.map((demo) => (
              <Link
                key={demo.id}
                to={demo.href}
                className="group surface-dark-hover overflow-hidden p-0"
              >
                <div className="relative h-52 overflow-hidden border-b border-white/[0.06] bg-[#14241C]">
                  <CrmPreview />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14241C] via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-accent">{demo.tag}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h2 className="font-display text-2xl text-white md:text-3xl">{demo.name}</h2>
                    <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition group-hover:border-brand-accent/40 group-hover:text-brand-accent">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{demo.description}</p>
                  <p className="mt-6 text-sm font-medium text-brand-accent">Open demo — no login</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function CrmPreview() {
  return (
    <div className="absolute inset-6 rounded-xl border border-white/10 bg-[#1C3328] p-3 shadow-2xl">
      <div className="mb-3 flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {['€842k', '6 live', '41%'].map((stat) => (
          <div key={stat} className="rounded-lg bg-white/5 px-2 py-2">
            <p className="text-[10px] text-white/40">Pipeline</p>
            <p className="text-xs font-semibold text-[#E8D5A3]">{stat}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        <div className="h-2 w-4/5 rounded bg-white/10" />
        <div className="h-2 w-3/5 rounded bg-white/10" />
        <div className="h-2 w-2/3 rounded bg-emerald-400/30" />
      </div>
    </div>
  )
}
