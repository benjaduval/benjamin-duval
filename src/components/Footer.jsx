import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.05] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-display text-lg text-ink">{profile.name}</p>
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} · Product Leader · Brussels
        </p>
      </div>
    </footer>
  )
}
