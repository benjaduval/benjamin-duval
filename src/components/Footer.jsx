import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-heading font-bold gradient-text">BD</span>
            <span className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-muted hover:text-white transition-colors"
            >
              Email
            </a>
            <span className="text-xs text-muted/50">{profile.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
