import { describe, it, expect } from 'vitest'
import { demos } from './demos.js'

describe('demos catalog', () => {
  it('lists Northlane CRM as an open demo', () => {
    expect(demos.length).toBeGreaterThanOrEqual(1)
    const northlane = demos.find((d) => d.id === 'northlane-crm')
    expect(northlane?.href).toBe('/demos/northlane-crm')
    expect(northlane?.name).toMatch(/Northlane/i)
    expect(northlane?.description.toLowerCase()).toMatch(/no login|fictional/)
  })
})
