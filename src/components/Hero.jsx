import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi2'
import { profile, stats } from '../data/content'
import AnimatedCounter from './AnimatedCounter'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #6C63FF 0%, transparent 60%)',
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        >
          <div className="absolute inset-0 rounded-full border border-accent/[0.06]" />
          <div className="absolute inset-8 rounded-full border border-cyan/[0.04]" />
          <div className="absolute inset-16 rounded-full border border-accent/[0.03]" />
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase glass border border-accent/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
        >
          <span className="text-white">{profile.name.split(' ')[0]}</span>
          <br />
          <span className="gradient-text">{profile.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto mb-4 font-medium"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base text-muted/70 max-w-xl mx-auto mb-10"
        >
          {profile.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => handleScroll('#experience')}
            className="px-7 py-3 text-sm font-medium text-white bg-gradient-accent rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Experience
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-7 py-3 text-sm font-medium text-white glass rounded-lg border border-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs text-muted uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <button
          onClick={() => handleScroll('#about')}
          className="text-muted/50 hover:text-accent transition-colors"
          aria-label="Scroll down"
        >
          <HiArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  )
}
