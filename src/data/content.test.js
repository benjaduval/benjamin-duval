import { describe, it, expect } from 'vitest'
import { site, hero, services, caseStudies, socialProof, otherExperiences, education, achievements } from './content.js'

describe('freelance site content', () => {
  it('has calendly and contact info', () => {
    expect(site.email).toContain('@')
    expect(site.calendlyUrl).toContain('calendly')
  })

  it('has client-first hero copy', () => {
    expect(hero.title).toContain('vision')
  })

  it('has three service offerings', () => {
    expect(services).toHaveLength(3)
  })

  it('has case studies including Cortex', () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(4)
    expect(caseStudies.find((c) => c.id === 'cortex')).toBeTruthy()
  })

  it('has stacked venture cards for other companies', () => {
    expect(otherExperiences.length).toBeGreaterThanOrEqual(5)
    const ids = otherExperiences.map((e) => e.id)
    expect(ids).toContain('contrast')
    expect(ids).toContain('4c-trading')
    expect(ids).toContain('myadiction')
    expect(ids).toContain('proximus')
    expect(ids).toContain('kinepolis')
  })

  it('has education and achievements sections', () => {
    expect(education.length).toBeGreaterThanOrEqual(5)
    expect(achievements.length).toBeGreaterThanOrEqual(6)
  })

  it('has social proof stats', () => {
    expect(socialProof).toHaveLength(4)
  })
})
