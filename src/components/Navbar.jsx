import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { site } from '../data/content'
import { demos } from '../data/demos'

const sectionLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [demosOpen, setDemosOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDemosOpen(false)
  }, [location.pathname])

  const scrollTo = (href) => {
    setOpen(false)
    setDemosOpen(false)
    if (!onHome) {
      navigate({ pathname: '/', hash: href.replace('#', '') })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goHome = () => {
    setOpen(false)
    if (onHome) {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
    }
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
          <button type="button" onClick={goHome} className="font-display text-lg text-white">
            Benjamin <span className="text-brand-accent">Duval</span>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {sectionLinks.map((l) => (
              <button
                key={l.href}
                type="button"
                onClick={() => scrollTo(l.href)}
                className="text-sm text-zinc-400 transition hover:text-white"
              >
                {l.label}
              </button>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setDemosOpen(true)}
              onMouseLeave={() => setDemosOpen(false)}
            >
              <Link
                to="/demos"
                className={cn(
                  'inline-flex items-center gap-1 text-sm transition',
                  location.pathname.startsWith('/demos') ? 'text-white' : 'text-zinc-400 hover:text-white'
                )}
              >
                Demos
                <ChevronDown className={cn('h-3.5 w-3.5 transition', demosOpen && 'rotate-180')} />
              </Link>
              <AnimatePresence>
                {demosOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                  >
                    <div className="rounded-2xl border border-white/10 bg-zinc-950/95 p-2 shadow-xl backdrop-blur-xl">
                      <Link
                        to="/demos"
                        className="block rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
                      >
                        All demos
                      </Link>
                      {demos.map((demo) => (
                        <Link
                          key={demo.id}
                          to={demo.path}
                          className="block rounded-xl px-3 py-2.5 transition hover:bg-white/5"
                        >
                          <span className="block text-sm text-white">{demo.name}</span>
                          <span className="mt-0.5 block text-xs text-zinc-500">{demo.tagline}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-5 !text-xs">
              Strategy call
            </a>
          </div>

          <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
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
            className="mx-6 mt-2 rounded-2xl border border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl lg:hidden"
          >
            {sectionLinks.map((l) => (
              <button
                key={l.href}
                type="button"
                onClick={() => scrollTo(l.href)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
            <div className="my-2 border-t border-white/5" />
            <p className="px-4 pb-1 pt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-600">Demos</p>
            <Link
              to="/demos"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
            >
              All demos
            </Link>
            {demos.map((demo) => (
              <Link
                key={demo.id}
                to={demo.path}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-zinc-300 hover:bg-white/5"
              >
                {demo.name}
              </Link>
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
