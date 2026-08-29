import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { labels, site } from '../data/content'

const sectionLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Ventures', href: '#ventures' },
  { label: labels.demos, to: '/demos' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onDemos = location.pathname.startsWith('/demos')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goHome = () => {
    setOpen(false)
    if (location.pathname === '/') {
      document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    navigate('/')
  }

  const goSection = (href) => {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate(`/${href}`)
      return
    }
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
          <button onClick={goHome} className="font-display text-lg text-white">
            Benjamin <span className="text-brand-accent">Duval</span>
          </button>

          <div className="hidden items-center gap-5 lg:flex">
            {sectionLinks.map((l) =>
              l.to ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'text-sm transition hover:text-white',
                    onDemos ? 'text-white' : 'text-zinc-400'
                  )}
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.href}
                  onClick={() => goSection(l.href)}
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  {l.label}
                </button>
              )
            )}
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
            {sectionLinks.map((l) =>
              l.to ? (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5"
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.href}
                  onClick={() => goSection(l.href)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5"
                >
                  {l.label}
                </button>
              )
            )}
            <a href={site.calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 block w-full text-center">
              Strategy call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
