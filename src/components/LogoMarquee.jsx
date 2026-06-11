import { Marquee } from './ui/marquee'
import { logoStrip } from '../data/content'

export default function LogoMarquee() {
  return (
    <section className="border-y border-black/[0.05] bg-white/60 py-8 backdrop-blur-sm">
      <div className="section-shell mb-4">
        <p className="text-center text-[10px] uppercase tracking-[0.28em] text-ink-muted">
          Ventures & companies
        </p>
      </div>
      <Marquee>
        {logoStrip.map((logo) => (
          <div key={logo.name} className="flex shrink-0 items-center px-6">
            <img
              src={logo.src}
              alt={logo.name}
              className={`w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${
                logo.small ? 'h-6 max-w-[90px]' : 'h-7 max-w-[110px]'
              }`}
            />
          </div>
        ))}
      </Marquee>
    </section>
  )
}
