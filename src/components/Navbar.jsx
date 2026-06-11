import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { site } from '../data/content'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4 md:px-10">
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500',
            scrolled
              ? 'border-white/10 bg-zinc-950/80 shadow-lg backdrop-blur-xl'
              : 'border-transparent bg-zinc-950/30 backdrop-blur-md'
          )}
        >
          <button onClick={() => scrollTo('#hero')} className="font-display text-lg text-white">
            Benjamin <span className="text-brand-accent">Duval</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-zinc-400 transition hover:text-white">
                {l.label}
              </button>
            ))}
            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 !text-xs">
              Strategy call
            </a>
          </div>

          <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-6 mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5">
                {l.label}
              </button>
            ))}
            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 block w-full text-center">
              Strategy call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
