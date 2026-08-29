import { describe, it, expect } from 'vitest'
import {
  activities,
  companies,
  contacts,
  initialDeals,
  openPipelineValue,
  owners,
  stages,
  winRate,
} from './data.js'

describe('Northlane CRM fictional data', () => {
  it('has a complete consulting workspace', () => {
    expect(owners.length).toBeGreaterThanOrEqual(3)
    expect(companies.length).toBeGreaterThanOrEqual(8)
    expect(contacts.length).toBeGreaterThanOrEqual(10)
    expect(initialDeals.length).toBeGreaterThanOrEqual(8)
    expect(activities.length).toBeGreaterThanOrEqual(8)
    expect(stages.map((s) => s.id)).toEqual(['lead', 'qualified', 'proposal', 'negotiation', 'won', 'lost'])
  })

  it('keeps referential integrity and fictional emails', () => {
    const companyIds = new Set(companies.map((c) => c.id))
    const contactIds = new Set(contacts.map((c) => c.id))
    const ownerIds = new Set(owners.map((o) => o.id))
    const stageIds = new Set(stages.map((s) => s.id))

    for (const contact of contacts) {
      expect(companyIds.has(contact.companyId)).toBe(true)
      expect(ownerIds.has(contact.ownerId)).toBe(true)
      expect(contact.email).toMatch(/@[\w.-]+\.example$/)
    }

    for (const deal of initialDeals) {
      expect(companyIds.has(deal.companyId)).toBe(true)
      expect(contactIds.has(deal.contactId)).toBe(true)
      expect(ownerIds.has(deal.ownerId)).toBe(true)
      expect(stageIds.has(deal.stage)).toBe(true)
      expect(deal.value).toBeGreaterThan(0)
    }
  })

  it('has no login or password fields', () => {
    const blob = JSON.stringify({ owners, companies, contacts, initialDeals, activities })
    expect(blob.toLowerCase()).not.toMatch(/password|signin|sign-in|login token/)
  })

  it('computes pipeline metrics from open deals', () => {
    expect(openPipelineValue(initialDeals)).toBeGreaterThan(0)
    expect(winRate(initialDeals)).toBeGreaterThan(0)
    expect(winRate(initialDeals)).toBeLessThanOrEqual(100)
  })
})
