import { education, skills } from '../data/content'

export default function Credentials() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <p className="section-label">Education</p>
          <h2 className="section-title mt-4">Global business foundation.</h2>
          <div className="mt-10 space-y-4">
            {education.map((item) => (
              <article key={`${item.school}-${item.period}`} className="surface-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-ink">{item.degree}</h3>
                    <p className="mt-1 text-sm text-brand">{item.school}</p>
                    <p className="text-xs text-ink-muted">{item.location}</p>
                  </div>
                  <span className="rounded-full bg-canvas-warm px-3 py-1 text-xs text-ink-muted">{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title mt-4">Technical & leadership stack.</h2>

          <div className="mt-10 space-y-6">
            <div className="surface-card p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-ink-muted">Technical</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.technical.map((s) => (
                  <span key={s} className="rounded-full bg-canvas-warm px-3 py-1.5 text-sm text-ink-soft">{s}</span>
                ))}
              </div>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-ink-muted">Business</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.business.map((s) => (
                  <span key={s} className="rounded-full bg-canvas-warm px-3 py-1.5 text-sm text-ink-soft">{s}</span>
                ))}
              </div>
            </div>
            <div className="surface-card p-6">
              <h3 className="text-sm uppercase tracking-[0.18em] text-ink-muted">Languages</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {skills.languages.map((lang) => (
                  <div key={lang.name} className="rounded-2xl bg-canvas-warm px-4 py-3">
                    <p className="font-medium text-ink">{lang.name}</p>
                    <p className="text-xs text-ink-muted">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
