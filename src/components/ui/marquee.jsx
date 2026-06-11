import { cn } from '../../lib/utils'

export function Marquee({ className, reverse = false, pauseOnHover = true, children, ...props }) {
  return (
    <div
      className={cn('relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}
      {...props}
    >
      <div
        className={cn(
          'flex min-w-full shrink-0 items-center gap-12 py-4',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
          pauseOnHover && '[animation-play-state:running] hover:[animation-play-state:paused]'
        )}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
