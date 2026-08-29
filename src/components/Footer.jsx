import { Link } from 'react-router-dom'
import { site, profile, labels } from '../data/content'

export default function Footer() {
  return (
    <footer className="section-band py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-lg text-white">{profile.name}</p>
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <span>{site.location}</span>
          <Link to="/demos" className="transition hover:text-brand-accent">
            {labels.demos}
          </Link>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-brand-accent">
            LinkedIn
          </a>
        </div>
        <p className="text-xs text-zinc-700">© {new Date().getFullYear()} · {labels.footerTagline}</p>
      </div>
    </footer>
  )
}
