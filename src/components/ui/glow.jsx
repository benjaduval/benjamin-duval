import { cn } from '../../lib/utils'

export function Glow({ className }) {
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div className="absolute left-1/2 top-0 h-[400px] w-[70%] -translate-x-1/2 scale-150 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(196,169,98,0.12)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute left-1/2 top-20 h-[200px] w-[40%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] blur-2xl" />
    </div>
  )
}
