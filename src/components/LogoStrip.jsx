import { Marquee } from './ui/marquee'
import { clientLogos, techPartners } from '../data/content'

export default function LogoStrip() {
  return (
    <section className="py-10">
      <div className="section-shell mb-6">
        <p className="text-center text-[10px] uppercase tracking-[0.24em] text-zinc-600">
          Technologies maîtrisées & entreprises accompagnées
        </p>
      </div>

      <Marquee className="mb-6">
        {clientLogos.map((logo) => (
          <div key={logo.name} className="flex shrink-0 items-center px-8">
            <img
              src={logo.src}
              alt={logo.name}
              className={`w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-80 hover:grayscale-0 ${
                logo.small ? 'h-5 max-w-[72px]' : 'h-6 max-w-[90px]'
              }`}
            />
          </div>
        ))}
      </Marquee>

      <Marquee reverse className="opacity-60">
        {techPartners.map((t) => (
          <span key={t.name} className="shrink-0 px-6 font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
            {t.label}
          </span>
        ))}
      </Marquee>
    </section>
  )
}
