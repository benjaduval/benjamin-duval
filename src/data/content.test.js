import { describe, it, expect } from 'vitest'
import { profile, projects, stats } from './content.js'

describe('portfolio content', () => {
  it('exports required profile fields', () => {
    expect(profile.name).toBe('Benjamin Duval')
    expect(profile.email).toContain('@')
    expect(profile.portrait).toMatch(/^\/assets\//)
  })

  it('includes featured projects with media', () => {
    const featured = projects.filter((p) => p.featured)
    expect(featured.length).toBeGreaterThanOrEqual(4)
    expect(projects.find((p) => p.id === 'contrast')).toBeTruthy()
    expect(projects.find((p) => p.id === 'flowo')?.video).toContain('youtube')
    expect(projects.find((p) => p.id === 'upbots')?.video).toContain('youtube')
  })

  it('has impact stats', () => {
    expect(stats).toHaveLength(4)
    stats.forEach((stat) => {
      expect(stat.label).toBeTruthy()
      expect(typeof stat.value).toBe('number')
    })
  })
})
