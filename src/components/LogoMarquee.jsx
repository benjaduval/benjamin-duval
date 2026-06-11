import { Marquee } from './ui/marquee'
import { logoStrip } from '../data/content'

export default function LogoMarquee() {
  return (
    <section className="border-y border-black/[0.05] bg-canvas-warm py-8">
      <div className="section-shell mb-4">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-ink-muted">
          Companies & ventures built
        </p>
      </div>
      <Marquee>
        {logoStrip.map((logo) => (
          <div key={logo.name} className="flex shrink-0 items-center gap-3 px-4">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-8 w-auto max-w-[140px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-10"
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
