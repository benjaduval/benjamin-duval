import { describe, it, expect } from 'vitest'
import { site, hero, services, caseStudies, socialProof, otherExperiences, education, achievements, labels } from './content.js'

describe('freelance site content', () => {
  it('has calendly and contact info', () => {
    expect(site.email).toContain('@')
    expect(site.calendlyUrl).toContain('calendly')
  })

  it('has English hero copy and background', () => {
    expect(hero.title.toLowerCase()).toContain('vision')
    expect(hero.background).toContain('/assets/hero/')
  })

  it('has three service offerings', () => {
    expect(services).toHaveLength(3)
  })

  it('has case studies with product focus and URLs', () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(4)
    const flowo = caseStudies.find((c) => c.id === 'flowo')
    expect(flowo?.url).toContain('getflowo')
    expect(flowo?.gallery?.length).toBeGreaterThanOrEqual(3)
    expect(flowo?.product).toBeTruthy()
    expect(caseStudies.find((c) => c.id === 'cortex')?.url).toContain('cortex-machina')
  })

  it('has stacked venture cards with local 4C image', () => {
    expect(otherExperiences.length).toBeGreaterThanOrEqual(5)
    const fourC = otherExperiences.find((e) => e.id === '4c-trading')
    expect(fourC?.image).toContain('/assets/projects/4c-trading-cover.jpg')
    expect(fourC?.url).toContain('4c-trading')
  })

  it('has education and achievements sections', () => {
    expect(education.length).toBeGreaterThanOrEqual(5)
    expect(achievements.length).toBeGreaterThanOrEqual(6)
  })

  it('has English UI labels', () => {
    expect(labels.watchDemo).toBe('Watch the demo')
    expect(labels.product).toBe('The product')
    expect(labels.demos).toBe('Demos')
  })

  it('has social proof stats', () => {
    expect(socialProof).toHaveLength(4)
  })
})
