import { cn } from '../../lib/utils'

export function BentoGrid({ className, children, ...props }) {
  return (
    <div
      className={cn('grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function BentoCard({ className, title, eyebrow, description, children, footer, span = 'col-span-12 md:col-span-6' }) {
  return (
    <article className={cn('surface-card-hover group relative overflow-hidden p-6 md:p-8', span, className)}>
      <div className="relative z-10 flex h-full flex-col">
        {eyebrow && <p className="section-label mb-3">{eyebrow}</p>}
        {title && <h3 className="font-display text-2xl text-ink md:text-3xl">{title}</h3>}
        {description && <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted md:text-base">{description}</p>}
        {children && <div className="mt-auto pt-6">{children}</div>}
        {footer}
      </div>
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-accent/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
    </article>
  )
}
