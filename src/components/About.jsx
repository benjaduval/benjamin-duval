import { motion } from 'framer-motion'
import { HiCube, HiCpuChip, HiArrowsPointingOut, HiRocketLaunch } from 'react-icons/hi2'
import { useScrollReveal, fadeUp, staggerContainer } from '../hooks/useScrollReveal'
import { profile, expertise } from '../data/content'
import SectionTitle from './SectionTitle'

const iconMap = {
  blockchain: HiCube,
  ai: HiCpuChip,
  operations: HiArrowsPointingOut,
  leadership: HiRocketLaunch,
}

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <SectionTitle
          label="About"
          title="Building the Future"
          subtitle="Entrepreneur and technical product leader with a passion for turning complex ideas into market-ready products."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <div className="space-y-5 text-muted leading-relaxed">
              <p className="text-white/90 text-lg font-medium leading-relaxed">
                {profile.tagline}
              </p>
              <p>
                {profile.description}
              </p>
              <p>
                From founding crypto trading platforms that managed over $150M in assets, to co-founding
                AI-driven healthcare startups, to building SaaS products entirely with AI agents — I thrive
                at the intersection of technology, product, and business strategy.
              </p>
              <p>
                My track record includes raising $12M+ in capital, achieving $50M market cap,
                building communities of 20,000+ members, and managing teams across 8+ countries.
                I bring both the strategic vision of a C-level executive and the hands-on execution
                of a product builder.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Web3', 'DeFi', 'AI/ML', 'SaaS', 'Fintech', 'Product Strategy', 'Tokenomics'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono tracking-wider text-accent/80 bg-accent/[0.06] border border-accent/10 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4"
          >
            {expertise.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-5 rounded-xl bg-dark-800/50 border border-white/[0.04] card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/[0.08] flex items-center justify-center mb-4 group-hover:bg-accent/[0.15] transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>

      <div className="line-gradient" />
    </section>
  )
}
