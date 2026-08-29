/** Fictional Northlane CRM dataset — demo only */

export const currentUser = {
  name: 'Alex Rivera',
  role: 'Account Executive',
  email: 'alex@northlane.demo',
  initials: 'AR',
}

export const kpis = [
  { id: 'pipeline', label: 'Pipeline value', value: '$1.84M', delta: '+12.4%', up: true },
  { id: 'won', label: 'Won this quarter', value: '$426K', delta: '+8.1%', up: true },
  { id: 'winrate', label: 'Win rate', value: '34%', delta: '+2.3 pts', up: true },
  { id: 'cycle', label: 'Avg. sales cycle', value: '28 days', delta: '−4 days', up: true },
]

export const stages = [
  { id: 'qualify', label: 'Qualify', color: '#64748b' },
  { id: 'discovery', label: 'Discovery', color: '#0ea5e9' },
  { id: 'proposal', label: 'Proposal', color: '#8b5cf6' },
  { id: 'negotiation', label: 'Negotiation', color: '#f59e0b' },
  { id: 'closed-won', label: 'Closed won', color: '#10b981' },
]

export const companies = [
  { id: 'c1', name: 'Helios Grid', industry: 'Clean Energy', size: '120–200', location: 'Amsterdam', arr: '$2.4M' },
  { id: 'c2', name: 'Parcelo', industry: 'Logistics SaaS', size: '50–80', location: 'Berlin', arr: '$890K' },
  { id: 'c3', name: 'NovaClinic', industry: 'HealthTech', size: '200–350', location: 'Paris', arr: '$5.1M' },
  { id: 'c4', name: 'Stackmint', industry: 'FinTech', size: '80–120', location: 'London', arr: '$3.2M' },
  { id: 'c5', name: 'Orbit Labs', industry: 'AI Infrastructure', size: '30–50', location: 'Lisbon', arr: '$1.1M' },
  { id: 'c6', name: 'Brightfield', industry: 'PropTech', size: '150–250', location: 'Brussels', arr: '$4.0M' },
]

export const contacts = [
  { id: 'p1', name: 'Maya Chen', title: 'VP Revenue', companyId: 'c1', email: 'maya@heliosgrid.demo', phone: '+31 20 555 0142', owner: 'Alex Rivera', lastTouch: '2h ago', score: 92 },
  { id: 'p2', name: 'Jonas Weber', title: 'Head of Ops', companyId: 'c2', email: 'jonas@parcelo.demo', phone: '+49 30 555 0198', owner: 'Alex Rivera', lastTouch: 'Yesterday', score: 78 },
  { id: 'p3', name: 'Inès Moreau', title: 'COO', companyId: 'c3', email: 'ines@novaclinic.demo', phone: '+33 1 55 01 22', owner: 'Sam Okonkwo', lastTouch: '3 days ago', score: 85 },
  { id: 'p4', name: 'Priya Shah', title: 'CFO', companyId: 'c4', email: 'priya@stackmint.demo', phone: '+44 20 7946 0110', owner: 'Alex Rivera', lastTouch: '5h ago', score: 88 },
  { id: 'p5', name: 'Tiago Alves', title: 'Founder & CEO', companyId: 'c5', email: 'tiago@orbitlabs.demo', phone: '+351 21 555 033', owner: 'Sam Okonkwo', lastTouch: '1 week ago', score: 71 },
  { id: 'p6', name: 'Léa Dubois', title: 'Head of Growth', companyId: 'c6', email: 'lea@brightfield.demo', phone: '+32 2 555 078', owner: 'Alex Rivera', lastTouch: 'Today', score: 95 },
  { id: 'p7', name: 'Erik Lindqvist', title: 'Procurement Lead', companyId: 'c1', email: 'erik@heliosgrid.demo', phone: '+31 20 555 0188', owner: 'Alex Rivera', lastTouch: '4 days ago', score: 64 },
  { id: 'p8', name: 'Amelia Brooks', title: 'VP Product', companyId: 'c4', email: 'amelia@stackmint.demo', phone: '+44 20 7946 0221', owner: 'Sam Okonkwo', lastTouch: '2 days ago', score: 81 },
]

export const deals = [
  { id: 'd1', name: 'Helios — Enterprise seats', companyId: 'c1', contactId: 'p1', stage: 'negotiation', value: 184000, probability: 72, closeDate: '2026-09-12', owner: 'Alex Rivera' },
  { id: 'd2', name: 'Parcelo — Ops rollout', companyId: 'c2', contactId: 'p2', stage: 'proposal', value: 62000, probability: 55, closeDate: '2026-09-28', owner: 'Alex Rivera' },
  { id: 'd3', name: 'NovaClinic — Multi-site', companyId: 'c3', contactId: 'p3', stage: 'discovery', value: 240000, probability: 40, closeDate: '2026-10-15', owner: 'Sam Okonkwo' },
  { id: 'd4', name: 'Stackmint — Compliance pack', companyId: 'c4', contactId: 'p4', stage: 'negotiation', value: 128000, probability: 68, closeDate: '2026-09-05', owner: 'Alex Rivera' },
  { id: 'd5', name: 'Orbit — Starter + AI', companyId: 'c5', contactId: 'p5', stage: 'qualify', value: 36000, probability: 25, closeDate: '2026-10-30', owner: 'Sam Okonkwo' },
  { id: 'd6', name: 'Brightfield — Platform license', companyId: 'c6', contactId: 'p6', stage: 'proposal', value: 210000, probability: 58, closeDate: '2026-09-20', owner: 'Alex Rivera' },
  { id: 'd7', name: 'Helios — Add-on analytics', companyId: 'c1', contactId: 'p7', stage: 'discovery', value: 45000, probability: 35, closeDate: '2026-11-01', owner: 'Alex Rivera' },
  { id: 'd8', name: 'Stackmint — Expansion Q4', companyId: 'c4', contactId: 'p8', stage: 'qualify', value: 96000, probability: 22, closeDate: '2026-11-18', owner: 'Sam Okonkwo' },
  { id: 'd9', name: 'Brightfield — Pilot won', companyId: 'c6', contactId: 'p6', stage: 'closed-won', value: 48000, probability: 100, closeDate: '2026-08-18', owner: 'Alex Rivera' },
  { id: 'd10', name: 'Parcelo — Pilot won', companyId: 'c2', contactId: 'p2', stage: 'closed-won', value: 18000, probability: 100, closeDate: '2026-08-02', owner: 'Alex Rivera' },
]

export const activities = [
  { id: 'a1', type: 'call', title: 'Discovery call with Maya Chen', detail: 'Budget confirmed for Q3 · next: security review', time: '2 hours ago', dealId: 'd1' },
  { id: 'a2', type: 'email', title: 'Sent proposal to Léa Dubois', detail: 'Platform license + onboarding package', time: '5 hours ago', dealId: 'd6' },
  { id: 'a3', type: 'meeting', title: 'Stackmint commercial workshop', detail: 'CFO + VP Product aligned on compliance scope', time: 'Yesterday', dealId: 'd4' },
  { id: 'a4', type: 'ai', title: 'AI risk flag · Helios deal', detail: 'Procurement cycle typically +14 days — suggest stakeholder map', time: 'Yesterday', dealId: 'd1' },
  { id: 'a5', type: 'note', title: 'Parcelo ops constraints', detail: 'Need SSO before rollout · IT ticket opened', time: '2 days ago', dealId: 'd2' },
  { id: 'a6', type: 'email', title: 'Follow-up to Inès Moreau', detail: 'Shared multi-site ROI model', time: '3 days ago', dealId: 'd3' },
]

export const aiInsights = [
  {
    id: 'i1',
    tone: 'opportunity',
    title: 'Helios is ready to close',
    body: 'Engagement score 92 · last 3 touches positive · suggest locking commercial terms this week.',
    dealId: 'd1',
  },
  {
    id: 'i2',
    tone: 'risk',
    title: 'NovaClinic going quiet',
    body: 'No reply in 3 days after ROI share. Recommend a COO-level nudge with a 15-min slot.',
    dealId: 'd3',
  },
  {
    id: 'i3',
    tone: 'action',
    title: 'Brightfield proposal follow-up',
    body: 'Best reply window historically Tue–Thu 10–11 CET for this account.',
    dealId: 'd6',
  },
]

export function companyById(id) {
  return companies.find((c) => c.id === id)
}

export function contactById(id) {
  return contacts.find((c) => c.id === id)
}

export function formatMoney(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`
  if (n >= 1000) return `$${Math.round(n / 1000)}K`
  return `$${n}`
}
