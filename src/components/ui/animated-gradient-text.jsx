import { cn } from '../../lib/utils'

export function AnimatedGradientText({ children, className }) {
  return (
    <span
      className={cn(
        'inline-block bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer',
        'bg-gradient-to-r from-brand via-brand-accent to-brand-light',
        className
      )}
    >
      {children}
    </span>
  )
}
