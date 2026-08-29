import { describe, it, expect } from 'vitest'
import { demos } from './demos.js'

describe('demos catalog', () => {
  it('includes Northlane CRM without auth', () => {
    expect(demos.length).toBeGreaterThanOrEqual(1)
    const northlane = demos.find((d) => d.id === 'northlane-crm')
    expect(northlane?.path).toBe('/demos/northlane-crm')
    expect(northlane?.status).toBe('live')
  })
})
