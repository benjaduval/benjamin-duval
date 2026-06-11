import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/button'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 88
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'mx-auto mt-4 max-w-7xl px-4 transition-all duration-500 md:px-8',
          scrolled && 'mt-2'
        )}
      >
        <nav
          className={cn(
            'flex items-center justify-between rounded-full border px-5 py-3 backdrop-blur-xl transition-all duration-500',
            scrolled
              ? 'border-black/[0.08] bg-white/85 shadow-soft'
              : 'border-transparent bg-white/50'
          )}
        >
          <button onClick={() => scrollTo('#hero')} className="font-display text-xl text-ink">
            Benjamin <span className="text-brand-accent">Duval</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" onClick={() => scrollTo('#contact')}>
              Let's talk
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
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
            className="mx-4 mt-2 rounded-3xl border border-black/[0.08] bg-white/95 p-4 shadow-float backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-2xl px-4 py-3 text-left text-sm text-ink-soft hover:bg-canvas-muted hover:text-ink"
                >
                  {link.label}
                </button>
              ))}
              <Button className="mt-2 w-full" onClick={() => scrollTo('#contact')}>
                Let's talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
