import { cn } from '../../lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]',
        variant === 'default' && 'bg-brand-accent/15 text-brand',
        variant === 'outline' && 'border border-ink/10 bg-white/70 text-ink-soft',
        variant === 'dark' && 'bg-ink text-white',
        className
      )}
      {...props}
    />
  )
}
