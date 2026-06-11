import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare, HiGlobeAlt } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from '../hooks/useScrollReveal'
import { achievements } from '../data/content'
import SectionTitle from './SectionTitle'

const projects = [
  {
    name: 'Monetum',
    category: 'Crypto Banking',
    description: 'Next-gen crypto-banking platform bridging traditional finance and DeFi ecosystems. Led the complete operational transformation as COO.',
    url: 'https://monetum.com',
    role: 'COO',
    period: '2024–2026',
    gradient: 'from-violet-500/20 to-indigo-500/20',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/10 hover:border-violet-500/30',
  },
  {
    name: 'Flowo',
    category: 'AI SaaS',
    description: 'AI-powered productivity platform combining calendar, tasks, and meetings — built on neuroscience principles. Launched in 3 weeks.',
    url: 'https://getflowo.com',
    role: 'Founder',
    period: '2026',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/10 hover:border-emerald-500/30',
  },
  {
    name: 'UpBots',
    category: 'Crypto Trading',
    description: 'Crypto trading automation platform with algorithmic strategies. $8M+ raised, listed on FTX & KuCoin, team of 25.',
    url: 'https://upbots.com',
    role: 'CEO & Founder',
    period: '2020–2024',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/10 hover:border-blue-500/30',
  },
  {
    name: 'SuperBots.Finance',
    category: 'DeFi',
    description: 'Automated DeFi trading platform with yield farming and arbitrage. Integrated 20+ protocols, $20M+ managed.',
    url: 'https://superbots.finance',
    role: 'CEO & Founder',
    period: '2022–2024',
    gradient: 'from-orange-500/20 to-amber-500/20',
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/10 hover:border-orange-500/30',
  },
  {
    name: 'Cortex Machina',
    category: 'AI Healthcare',
    description: 'AI-driven healthcare startup for predictive medical analytics. Secured partnerships with 3 major hospitals.',
    url: null,
    role: 'CMO & Co-Founder',
    period: '2022–2025',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accentColor: 'text-pink-400',
    borderColor: 'border-pink-500/10 hover:border-pink-500/30',
  },
  {
    name: '4C-Trading',
    category: 'Crypto Trading',
    description: 'Pioneering crypto trading firm built from zero capital. First unique trading service on Telegram, 1,200+ paying users, $2M ARR.',
    url: null,
    role: 'Founder & CEO',
    period: '2017–2021',
    gradient: 'from-cyan-500/20 to-sky-500/20',
    accentColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/10 hover:border-cyan-500/30',
  },
]

export default function Portfolio() {
  const { ref, inView } = useScrollReveal()
  const { ref: achRef, inView: achInView } = useScrollReveal()

  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="Portfolio"
          title="Companies & Projects"
          subtitle="A track record of building, scaling, and leading technology companies across multiple verticals."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`group relative p-6 rounded-xl bg-dark-800/30 border ${project.borderColor} transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
            >
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-[0.15em] ${project.accentColor}`}>
                      {project.category}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-white mt-1">
                      {project.name}
                    </h3>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] transition-colors"
                    >
                      <HiArrowTopRightOnSquare className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
                    </a>
                  )}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                  <span className="text-xs font-medium text-white/60">{project.role}</span>
                  <span className="text-xs font-mono text-muted">{project.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={achRef}
          initial="hidden"
          animate={achInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-5 rounded-xl bg-dark-800/20 border border-white/[0.03]"
            >
              <div className="text-xl md:text-2xl font-heading font-bold gradient-text mb-1">
                {a.metric}
              </div>
              <div className="text-xs font-medium text-white/70 mb-1">{a.label}</div>
              <div className="text-[10px] text-muted leading-relaxed">{a.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="line-gradient mt-24" />
    </section>
  )
}
