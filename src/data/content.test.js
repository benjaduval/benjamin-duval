import { describe, it, expect } from 'vitest'
import { profile, featuredCompanies, otherExperiences, stats } from './content.js'

describe('portfolio content', () => {
  it('exports required profile fields', () => {
    expect(profile.name).toBe('Benjamin Duval')
    expect(profile.email).toContain('@')
    expect(profile.portrait).toMatch(/^\/assets\//)
  })

  it('has five featured company sections', () => {
    expect(featuredCompanies).toHaveLength(5)
    const ids = featuredCompanies.map((c) => c.id)
    expect(ids).toContain('monetum')
    expect(ids).toContain('flowo')
    expect(ids).toContain('upbots')
    expect(ids).toContain('superbots')
    expect(ids).toContain('cortex')
  })

  it('uses video buttons not autoplay for demos', () => {
    const flowo = featuredCompanies.find((c) => c.id === 'flowo')
    const upbots = featuredCompanies.find((c) => c.id === 'upbots')
    expect(flowo.video).toContain('youtube')
    expect(upbots.video).toContain('youtube')
    expect(flowo.videoLabel).toBeTruthy()
  })

  it('has stacked experience cards', () => {
    expect(otherExperiences.length).toBeGreaterThanOrEqual(4)
    expect(otherExperiences.find((e) => e.id === 'contrast')).toBeTruthy()
  })

  it('has impact stats', () => {
    expect(stats).toHaveLength(4)
  })
})
