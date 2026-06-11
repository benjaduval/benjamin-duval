import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import { projects } from '../data/content'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function ProjectCard({ project, index }) {
  const span =
    project.size === 'lg'
      ? 'md:col-span-2 lg:col-span-7'
      : project.size === 'sm'
        ? 'md:col-span-1 lg:col-span-4'
        : 'md:col-span-1 lg:col-span-6'

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      className={`group surface-card overflow-hidden ${span}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-canvas-muted">
        {project.video ? (
          <iframe
            src={`${project.video}?rel=0&modestbranding=1`}
            title={`${project.name} demo`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
        <div className="absolute left-5 top-5 flex items-center gap-3">
          {project.logo && (
            <img src={project.logo} alt="" className="h-8 max-w-[120px] object-contain drop-shadow-md" />
          )}
          {project.video && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink">
              <Play className="h-3 w-3" /> Demo
            </span>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{project.category}</Badge>
          <span className="text-xs text-ink-muted">{project.period}</span>
        </div>

        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-ink md:text-3xl">{project.name}</h3>
            <p className="mt-1 text-sm text-brand">{project.role}</p>
          </div>
          {project.url && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted md:text-base">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full bg-canvas-warm px-3 py-1 text-xs font-medium text-ink-soft"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function SelectedWork() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="section-label">Selected work</p>
          <h2 className="section-title mt-4">Ventures shaped, scaled, and shipped.</h2>
          <p className="section-subtitle mt-6">
            Case studies across fintech, Web3, AI, and operational leadership — with product visuals,
            demos, and the metrics that matter.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <div className="line-accent my-16" />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
              {others.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + featured.length} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
