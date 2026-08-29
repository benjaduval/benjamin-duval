/** Fictional Northlane CRM seed data. No auth, no real people or companies. */

export const DEMO_TODAY = '2026-08-29'

export const owners = [
  { id: 'amelie', name: 'Amelie Vos', role: 'Partner', initials: 'AV' },
  { id: 'jonas', name: 'Jonas Berg', role: 'Director', initials: 'JB' },
  { id: 'sofia', name: 'Sofia Klein', role: 'Manager', initials: 'SK' },
  { id: 'luca', name: 'Luca Moretti', role: 'Associate', initials: 'LM' },
]

export const stages = [
  { id: 'lead', label: 'Lead', tint: 'bg-zinc-200 text-zinc-700' },
  { id: 'qualified', label: 'Qualified', tint: 'bg-sky-100 text-sky-800' },
  { id: 'proposal', label: 'Proposal', tint: 'bg-violet-100 text-violet-800' },
  { id: 'negotiation', label: 'Negotiation', tint: 'bg-amber-100 text-amber-900' },
  { id: 'won', label: 'Won', tint: 'bg-emerald-100 text-emerald-800' },
  { id: 'lost', label: 'Lost', tint: 'bg-rose-100 text-rose-800' },
]

export const companies = [
  {
    id: 'helixops',
    name: 'HelixOps',
    domain: 'helixops.example',
    segment: 'Workflow automation',
    stage: 'Series B',
    hq: 'Amsterdam',
    employees: 180,
    arr: 28000000,
    ownerId: 'amelie',
    health: 'on-track',
  },
  {
    id: 'brightline',
    name: 'Brightline AI',
    domain: 'brightline.example',
    segment: 'AI observability',
    stage: 'Series A',
    hq: 'Berlin',
    employees: 64,
    arr: 6200000,
    ownerId: 'jonas',
    health: 'on-track',
  },
  {
    id: 'harborpay',
    name: 'HarborPay',
    domain: 'harborpay.example',
    segment: 'B2B payments',
    stage: 'Growth',
    hq: 'London',
    employees: 240,
    arr: 41000000,
    ownerId: 'amelie',
    health: 'risk',
  },
  {
    id: 'quillnote',
    name: 'Quillnote',
    domain: 'quillnote.example',
    segment: 'AI productivity',
    stage: 'Seed',
    hq: 'Paris',
    employees: 22,
    arr: 1100000,
    ownerId: 'sofia',
    health: 'on-track',
  },
  {
    id: 'vantaform',
    name: 'Vantaform',
    domain: 'vantaform.example',
    segment: 'Compliance',
    stage: 'Established',
    hq: 'New York',
    employees: 410,
    arr: 78000000,
    ownerId: 'jonas',
    health: 'on-track',
  },
  {
    id: 'lumenkit',
    name: 'LumenKit',
    domain: 'lumenkit.example',
    segment: 'Developer platform',
    stage: 'Series B',
    hq: 'Stockholm',
    employees: 155,
    arr: 19000000,
    ownerId: 'sofia',
    health: 'on-track',
  },
  {
    id: 'aperture',
    name: 'Aperture Cloud',
    domain: 'aperture.example',
    segment: 'Infrastructure',
    stage: 'Growth',
    hq: 'Dublin',
    employees: 320,
    arr: 54000000,
    ownerId: 'luca',
    health: 'watch',
  },
  {
    id: 'mossline',
    name: 'Mossline',
    domain: 'mossline.example',
    segment: 'HR tech',
    stage: 'Series A',
    hq: 'Brussels',
    employees: 48,
    arr: 4800000,
    ownerId: 'luca',
    health: 'on-track',
  },
  {
    id: 'northstar',
    name: 'Northstar Data',
    domain: 'northstar.example',
    segment: 'Analytics',
    stage: 'Established',
    hq: 'Munich',
    employees: 290,
    arr: 36000000,
    ownerId: 'amelie',
    health: 'on-track',
  },
  {
    id: 'pulseboard',
    name: 'Pulseboard',
    domain: 'pulseboard.example',
    segment: 'Product analytics',
    stage: 'Series A',
    hq: 'Lisbon',
    employees: 71,
    arr: 7300000,
    ownerId: 'sofia',
    health: 'watch',
  },
]

export const contacts = [
  { id: 'c1', firstName: 'Mira', lastName: 'Dahl', title: 'CEO', email: 'mira.dahl@helixops.example', companyId: 'helixops', ownerId: 'amelie', lastTouch: '2026-08-27' },
  { id: 'c2', firstName: 'Owen', lastName: 'Hart', title: 'CRO', email: 'owen.hart@helixops.example', companyId: 'helixops', ownerId: 'amelie', lastTouch: '2026-08-22' },
  { id: 'c3', firstName: 'Lena', lastName: 'Krüger', title: 'Founder & CEO', email: 'lena@brightline.example', companyId: 'brightline', ownerId: 'jonas', lastTouch: '2026-08-28' },
  { id: 'c4', firstName: 'Priya', lastName: 'Shah', title: 'CFO', email: 'priya.shah@harborpay.example', companyId: 'harborpay', ownerId: 'amelie', lastTouch: '2026-08-19' },
  { id: 'c5', firstName: 'Tom', lastName: 'Ellison', title: 'VP Product', email: 'tom.ellison@harborpay.example', companyId: 'harborpay', ownerId: 'jonas', lastTouch: '2026-08-15' },
  { id: 'c6', firstName: 'Camille', lastName: 'Renard', title: 'CEO', email: 'camille@quillnote.example', companyId: 'quillnote', ownerId: 'sofia', lastTouch: '2026-08-26' },
  { id: 'c7', firstName: 'Noah', lastName: 'Bennett', title: 'Chief Revenue Officer', email: 'noah.bennett@vantaform.example', companyId: 'vantaform', ownerId: 'jonas', lastTouch: '2026-08-21' },
  { id: 'c8', firstName: 'Astrid', lastName: 'Holm', title: 'Head of Product', email: 'astrid.holm@lumenkit.example', companyId: 'lumenkit', ownerId: 'sofia', lastTouch: '2026-08-25' },
  { id: 'c9', firstName: 'Declan', lastName: 'Walsh', title: 'CEO', email: 'declan@aperture.example', companyId: 'aperture', ownerId: 'luca', lastTouch: '2026-08-12' },
  { id: 'c10', firstName: 'Inès', lastName: 'Moreau', title: 'COO', email: 'ines.moreau@mossline.example', companyId: 'mossline', ownerId: 'luca', lastTouch: '2026-08-24' },
  { id: 'c11', firstName: 'Felix', lastName: 'Bauer', title: 'VP Finance', email: 'felix.bauer@northstar.example', companyId: 'northstar', ownerId: 'amelie', lastTouch: '2026-08-20' },
  { id: 'c12', firstName: 'Rita', lastName: 'Costa', title: 'Founder', email: 'rita@pulseboard.example', companyId: 'pulseboard', ownerId: 'sofia', lastTouch: '2026-08-18' },
]

export const initialDeals = [
  { id: 'd1', name: 'Packaging & pricing sprint', companyId: 'helixops', contactId: 'c1', stage: 'negotiation', value: 145000, closeDate: '2026-09-18', ownerId: 'amelie', nextStep: 'Workshop with CRO on Good/Better/Best' },
  { id: 'd2', name: 'Seed monetization model', companyId: 'brightline', contactId: 'c3', stage: 'proposal', value: 62000, closeDate: '2026-09-08', ownerId: 'jonas', nextStep: 'Send proposal v2 with usage-based option' },
  { id: 'd3', name: 'Enterprise price architecture', companyId: 'harborpay', contactId: 'c4', stage: 'qualified', value: 180000, closeDate: '2026-10-02', ownerId: 'amelie', nextStep: 'Align finance + product on discount policy' },
  { id: 'd4', name: 'Pricing for fundraise story', companyId: 'quillnote', contactId: 'c6', stage: 'won', value: 38000, closeDate: '2026-08-08', ownerId: 'sofia', nextStep: 'Kick-off week of 1 Sep' },
  { id: 'd5', name: 'Portfolio packaging redesign', companyId: 'vantaform', contactId: 'c7', stage: 'proposal', value: 210000, closeDate: '2026-09-30', ownerId: 'jonas', nextStep: 'Board read-out draft' },
  { id: 'd6', name: 'Developer SKU simplification', companyId: 'lumenkit', contactId: 'c8', stage: 'negotiation', value: 98000, closeDate: '2026-09-12', ownerId: 'sofia', nextStep: 'Legal review of new order form' },
  { id: 'd7', name: 'List price increase program', companyId: 'aperture', contactId: 'c9', stage: 'lead', value: 125000, closeDate: '2026-10-20', ownerId: 'luca', nextStep: 'Discovery call with CEO' },
  { id: 'd8', name: 'PLG → sales-assist packaging', companyId: 'mossline', contactId: 'c10', stage: 'qualified', value: 54000, closeDate: '2026-09-25', ownerId: 'luca', nextStep: 'Map current self-serve plans' },
  { id: 'd9', name: 'Add-on monetization', companyId: 'northstar', contactId: 'c11', stage: 'won', value: 88000, closeDate: '2026-07-22', ownerId: 'amelie', nextStep: 'Q4 value review' },
  { id: 'd10', name: 'Usage-based pricing design', companyId: 'pulseboard', contactId: 'c12', stage: 'lost', value: 47000, closeDate: '2026-08-04', ownerId: 'sofia', nextStep: 'Revisit after Series B' },
  { id: 'd11', name: 'Expansion playbook', companyId: 'helixops', contactId: 'c2', stage: 'lead', value: 72000, closeDate: '2026-11-05', ownerId: 'amelie', nextStep: 'Internal scoping' },
]

export const activities = [
  { id: 'a1', type: 'meeting', title: 'Pricing workshop — HelixOps', date: '2026-08-27', companyId: 'helixops', contactId: 'c1', dealId: 'd1', ownerId: 'amelie', note: 'Aligned on 3-tier packaging. CRO wants a 90-day migration plan.' },
  { id: 'a2', type: 'email', title: 'Proposal v2 sent to Brightline', date: '2026-08-28', companyId: 'brightline', contactId: 'c3', dealId: 'd2', ownerId: 'jonas', note: 'Included a usage-based alternative next to the seat model.' },
  { id: 'a3', type: 'call', title: 'HarborPay finance alignment', date: '2026-08-19', companyId: 'harborpay', contactId: 'c4', dealId: 'd3', ownerId: 'amelie', note: 'Discount leakage is the main risk. Need deal-desk rules before proposal.' },
  { id: 'a4', type: 'note', title: 'Quillnote kick-off prep', date: '2026-08-26', companyId: 'quillnote', contactId: 'c6', dealId: 'd4', ownerId: 'sofia', note: 'Investor narrative is the priority, not a full packaging overhaul.' },
  { id: 'a5', type: 'meeting', title: 'Vantaform board read-out dry run', date: '2026-08-21', companyId: 'vantaform', contactId: 'c7', dealId: 'd5', ownerId: 'jonas', note: 'Need clearer before/after ACV impact on the Enterprise tier.' },
  { id: 'a6', type: 'email', title: 'LumenKit order form comments', date: '2026-08-25', companyId: 'lumenkit', contactId: 'c8', dealId: 'd6', ownerId: 'sofia', note: 'Legal flagged annual prepay language. Revised draft tomorrow.' },
  { id: 'a7', type: 'call', title: 'Aperture intro with CEO', date: '2026-08-12', companyId: 'aperture', contactId: 'c9', dealId: 'd7', ownerId: 'luca', note: 'Interested in a 8–12% list-price move. Wants case studies.' },
  { id: 'a8', type: 'meeting', title: 'Mossline plan mapping', date: '2026-08-24', companyId: 'mossline', contactId: 'c10', dealId: 'd8', ownerId: 'luca', note: 'Self-serve Free plan is crowding paid conversion.' },
  { id: 'a9', type: 'note', title: 'Northstar Q4 review', date: '2026-08-20', companyId: 'northstar', contactId: 'c11', dealId: 'd9', ownerId: 'amelie', note: 'Add-on attach rate +18% since launch. Ready for a value review.' },
  { id: 'a10', type: 'email', title: 'Pulseboard lost — follow-up', date: '2026-08-18', companyId: 'pulseboard', contactId: 'c12', dealId: 'd10', ownerId: 'sofia', note: 'Paused until after fundraise. Keep warm for Q4.' },
  { id: 'a11', type: 'task', title: 'Prepare HelixOps migration one-pager', date: '2026-08-29', companyId: 'helixops', contactId: 'c2', dealId: 'd1', ownerId: 'luca', note: 'Due before next workshop.' },
  { id: 'a12', type: 'meeting', title: 'Weekly pipeline review', date: '2026-08-26', companyId: null, contactId: null, dealId: null, ownerId: 'amelie', note: '€842k open pipeline. HarborPay is the only red deal.' },
]

export function ownerById(id) {
  return owners.find((o) => o.id === id)
}

export function companyById(id) {
  return companies.find((c) => c.id === id)
}

export function contactById(id) {
  return contacts.find((c) => c.id === id)
}

export function stageById(id) {
  return stages.find((s) => s.id === id)
}

export function formatEUR(value) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatCompactEUR(value) {
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `€${Math.round(value / 1_000)}k`
  return formatEUR(value)
}

export function formatDate(iso) {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${iso}T12:00:00`))
}

export function contactName(contact) {
  return `${contact.firstName} ${contact.lastName}`
}

export function openPipelineValue(deals) {
  return deals.filter((d) => d.stage !== 'won' && d.stage !== 'lost').reduce((sum, d) => sum + d.value, 0)
}

export function wonValue(deals) {
  return deals.filter((d) => d.stage === 'won').reduce((sum, d) => sum + d.value, 0)
}

export function winRate(deals) {
  const closed = deals.filter((d) => d.stage === 'won' || d.stage === 'lost')
  if (!closed.length) return 0
  return Math.round((closed.filter((d) => d.stage === 'won').length / closed.length) * 100)
}

export function matchesQuery(text, query) {
  if (!query.trim()) return true
  return text.toLowerCase().includes(query.trim().toLowerCase())
}
