import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from './ui/button'

export function VideoModal({ open, onClose, videoUrl, title }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-float"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-sm font-medium text-white">{title}</p>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title={title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function VideoTrigger({ label, onClick, prominent = false }) {
  if (prominent) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="btn-primary flex w-full items-center justify-center gap-3 py-4 text-sm md:text-base"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950/20">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-zinc-950">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        {label}
      </button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
    >
      <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-3 w-3 fill-white">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      {label}
    </Button>
  )
}
