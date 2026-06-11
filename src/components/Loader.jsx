import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          className="text-5xl md:text-7xl font-heading font-bold gradient-text"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          BD
        </motion.div>

        <div className="w-48 h-[2px] bg-dark-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
