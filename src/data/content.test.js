import { describe, it, expect } from 'vitest'
import { site, hero, services, caseStudies, socialProof } from './content.js'

describe('freelance site content', () => {
  it('has calendly and contact info', () => {
    expect(site.email).toContain('@')
    expect(site.calendlyUrl).toContain('calendly')
  })

  it('has client-first hero copy', () => {
    expect(hero.title).toContain('vision')
    expect(hero.ctaPrimary).toBeTruthy()
  })

  it('has three service offerings', () => {
    expect(services).toHaveLength(3)
    services.forEach((s) => {
      expect(s.audience).toBeTruthy()
      expect(s.impact).toBeTruthy()
    })
  })

  it('has case studies with problem/solution format', () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(3)
    caseStudies.forEach((c) => {
      expect(c.challenge).toBeTruthy()
      expect(c.intervention).toBeTruthy()
      expect(c.result).toBeTruthy()
    })
  })

  it('has social proof stats', () => {
    expect(socialProof).toHaveLength(4)
  })
})
