import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowLeft,
  Building2,
  Kanban,
  LayoutDashboard,
  Menu,
  PieChart,
  Search,
  Users,
  X,
} from 'lucide-react'
import { cn } from '../../lib/utils'
import {
  activities as seedActivities,
  companies,
  contactById,
  contactName,
  contacts,
  companyById,
  formatCompactEUR,
  formatDate,
  formatEUR,
  initialDeals,
  matchesQuery,
  openPipelineValue,
  ownerById,
  stageById,
  stages,
  winRate,
  wonValue,
} from './data'

const NAV = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
  { id: 'pipeline', label: 'Pipeline', icon: Kanban },
  { id: 'companies', label: 'Companies', icon: Building2 },
  { id: 'contacts', label: 'People', icon: Users },
  { id: 'activities', label: 'Activity', icon: Activity },
  { id: 'reports', label: 'Reports', icon: PieChart },
]

export default function NorthlaneCRM() {
  const [view, setView] = useState('dashboard')
  const [query, setQuery] = useState('')
  const [deals, setDeals] = useState(initialDeals)
  const [selected, setSelected] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const openRecord = (record) => {
    setSelected(record)
    setSidebarOpen(false)
  }

  const moveDeal = (dealId, stage) => {
    setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, stage } : d)))
    setSelected((prev) => (prev?.type === 'deal' && prev.id === dealId ? { ...prev, stage } : prev))
  }

  return (
    <div className="min-h-screen bg-[#F3F0E8] text-[#14241C]">
      <div className="border-b border-[#D9D2C3] bg-[#12261F] px-4 py-2 text-center text-[12px] text-[#E8D5A3] md:px-6">
        Interactive demo · fictional companies and people · no sign-in required
      </div>

      <div className="flex min-h-[calc(100vh-36px)]">
        <aside
          className={cn(
            'fixed inset-y-0 left-0 z-40 w-64 border-r border-[#D9D2C3] bg-[#14241C] pt-9 text-[#F3F0E8] transition-transform md:static md:translate-x-0 md:pt-0',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          )}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <div>
              <p className="font-display text-xl tracking-tight">Northlane</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#C4A962]">CRM</p>
            </div>
            <button className="md:hidden" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="space-y-1 px-3 py-4">
            {NAV.map((item) => {
              const Icon = item.icon
              const active = view === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setView(item.id)
                    setSelected(null)
                    setSidebarOpen(false)
                  }}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition',
                    active ? 'bg-white/10 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-4">
            <Link to="/demos" className="flex items-center gap-2 text-xs text-white/55 transition hover:text-[#C4A962]">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to demos
            </Link>
          </div>
        </aside>

        {sidebarOpen && (
          <button
            className="fixed inset-0 z-30 bg-black/40 md:hidden"
            aria-label="Close sidebar"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 items-center gap-3 border-b border-[#D9D2C3] bg-[#FFFdf8]/80 px-4 backdrop-blur md:px-6">
            <button className="md:hidden" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#14241C]/35" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search companies, people, or deals"
                className="h-10 w-full rounded-full border border-[#D9D2C3] bg-white pl-10 pr-4 text-sm outline-none ring-[#3D7A5F]/20 placeholder:text-[#14241C]/35 focus:ring-2"
              />
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <span className="rounded-full bg-[#14241C] px-3 py-1 text-[11px] font-medium text-[#E8D5A3]">Amelie Vos</span>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 md:p-6">
            {view === 'dashboard' && (
              <DashboardView deals={deals} query={query} onOpen={openRecord} />
            )}
            {view === 'pipeline' && (
              <PipelineView deals={deals} query={query} onOpen={openRecord} onMove={moveDeal} />
            )}
            {view === 'companies' && <CompaniesView query={query} deals={deals} onOpen={openRecord} />}
            {view === 'contacts' && <ContactsView query={query} onOpen={openRecord} />}
            {view === 'activities' && <ActivitiesView query={query} deals={deals} onOpen={openRecord} />}
            {view === 'reports' && <ReportsView deals={deals} />}
          </main>
        </div>

        {selected && (
          <DetailDrawer
            selected={selected}
            deals={deals}
            onClose={() => setSelected(null)}
            onOpen={openRecord}
            onMove={moveDeal}
          />
        )}
      </div>
    </div>
  )
}

function SectionTitle({ kicker, title, aside }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#3D7A5F]">{kicker}</p>
        <h1 className="mt-1 font-display text-3xl tracking-tight">{title}</h1>
      </div>
      {aside}
    </div>
  )
}

function Kpi({ label, value, hint }) {
  return (
    <div className="rounded-2xl border border-[#D9D2C3] bg-white p-5 shadow-[0_10px_30px_-18px_rgba(20,36,28,0.35)]">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#14241C]/45">{label}</p>
      <p className="mt-2 font-display text-3xl">{value}</p>
      {hint && <p className="mt-1 text-xs text-[#14241C]/50">{hint}</p>}
    </div>
  )
}

function DashboardView({ deals, query, onOpen }) {
  const open = deals.filter((d) => d.stage !== 'won' && d.stage !== 'lost')
  const closingSoon = open.filter((d) => d.closeDate <= '2026-09-30').sort((a, b) => a.closeDate.localeCompare(b.closeDate))
  const recent = seedActivities
    .filter((a) =>
      matchesQuery(`${a.title} ${a.note} ${companyById(a.companyId)?.name || ''}`, query)
    )
    .slice(0, 5)

  return (
    <div>
      <SectionTitle kicker="This week" title="Overview" aside={<p className="text-sm text-[#14241C]/50">Demo workspace · 29 Aug 2026</p>} />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi label="Open pipeline" value={formatCompactEUR(openPipelineValue(deals))} hint={`${open.length} active engagements`} />
        <Kpi label="Won this year" value={formatCompactEUR(wonValue(deals))} hint="Closed-won fees" />
        <Kpi label="Win rate" value={`${winRate(deals)}%`} hint="On closed deals" />
        <Kpi label="Closing in Sept" value={String(closingSoon.length)} hint="Needs a next step" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-[#D9D2C3] bg-white p-5">
          <h2 className="text-sm font-semibold">Closing soon</h2>
          <ul className="mt-4 divide-y divide-[#EFE8DA]">
            {closingSoon.slice(0, 5).map((deal) => {
              const company = companyById(deal.companyId)
              return (
                <li key={deal.id}>
                  <button
                    onClick={() => onOpen({ type: 'deal', ...deal })}
                    className="flex w-full items-center justify-between gap-3 py-3 text-left hover:bg-[#F7F3EA]"
                  >
                    <div>
                      <p className="text-sm font-medium">{deal.name}</p>
                      <p className="text-xs text-[#14241C]/50">{company?.name} · {formatDate(deal.closeDate)}</p>
                    </div>
                    <span className="text-sm font-semibold">{formatEUR(deal.value)}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#D9D2C3] bg-white p-5">
          <h2 className="text-sm font-semibold">Recent activity</h2>
          <ul className="mt-4 space-y-4">
            {recent.map((item) => (
              <li key={item.id}>
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-0.5 text-xs text-[#14241C]/50">
                  {formatDate(item.date)} · {ownerById(item.ownerId)?.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function PipelineView({ deals, query, onOpen, onMove }) {
  const filtered = deals.filter((deal) => {
    const company = companyById(deal.companyId)
    return matchesQuery(`${deal.name} ${company?.name || ''} ${deal.nextStep}`, query)
  })

  return (
    <div>
      <SectionTitle
        kicker="Engagements"
        title="Pipeline"
        aside={<p className="text-sm text-[#14241C]/50">{formatEUR(openPipelineValue(filtered))} open</p>}
      />
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const column = filtered.filter((d) => d.stage === stage.id)
          const total = column.reduce((sum, d) => sum + d.value, 0)
          return (
            <section key={stage.id} className="w-72 shrink-0 rounded-2xl bg-[#EAE4D6] p-3">
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-sm font-semibold">{stage.label}</h2>
                <span className="text-[11px] text-[#14241C]/45">{column.length} · {formatCompactEUR(total)}</span>
              </div>
              <div className="space-y-2">
                {column.map((deal) => {
                  const company = companyById(deal.companyId)
                  return (
                    <article key={deal.id} className="rounded-xl border border-[#D9D2C3] bg-white p-3 shadow-sm">
                      <button onClick={() => onOpen({ type: 'deal', ...deal })} className="w-full text-left">
                        <p className="text-sm font-semibold">{company?.name}</p>
                        <p className="mt-0.5 text-xs text-[#14241C]/55">{deal.name}</p>
                        <p className="mt-2 text-sm font-medium">{formatEUR(deal.value)}</p>
                      </button>
                      <select
                        aria-label={`Move ${company?.name} deal`}
                        value={deal.stage}
                        onChange={(e) => onMove(deal.id, e.target.value)}
                        className="mt-3 w-full rounded-lg border border-[#D9D2C3] bg-[#F7F3EA] px-2 py-1.5 text-[11px]"
                      >
                        {stages.map((s) => (
                          <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                      </select>
                    </article>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}

function CompaniesView({ query, deals, onOpen }) {
  const rows = companies.filter((c) => matchesQuery(`${c.name} ${c.segment} ${c.hq} ${c.domain}`, query))

  return (
    <div>
      <SectionTitle kicker="Accounts" title="Companies" />
      <div className="overflow-hidden rounded-2xl border border-[#D9D2C3] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F7F3EA] text-[11px] uppercase tracking-[0.14em] text-[#14241C]/50">
            <tr>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Segment</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">HQ</th>
              <th className="px-4 py-3 font-medium">ARR</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Open deals</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFE8DA]">
            {rows.map((company) => {
              const open = deals.filter((d) => d.companyId === company.id && d.stage !== 'won' && d.stage !== 'lost')
              return (
                <tr key={company.id} className="cursor-pointer hover:bg-[#F7F3EA]" onClick={() => onOpen({ type: 'company', ...company })}>
                  <td className="px-4 py-3">
                    <p className="font-medium">{company.name}</p>
                    <p className="text-xs text-[#14241C]/45">{company.domain}</p>
                  </td>
                  <td className="hidden px-4 py-3 md:table-cell">{company.segment}</td>
                  <td className="hidden px-4 py-3 lg:table-cell">{company.hq}</td>
                  <td className="px-4 py-3">{formatCompactEUR(company.arr)}</td>
                  <td className="hidden px-4 py-3 sm:table-cell">{open.length}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ContactsView({ query, onOpen }) {
  const rows = contacts.filter((c) =>
    matchesQuery(`${contactName(c)} ${c.title} ${c.email} ${companyById(c.companyId)?.name || ''}`, query)
  )

  return (
    <div>
      <SectionTitle kicker="Relationships" title="People" />
      <div className="overflow-hidden rounded-2xl border border-[#D9D2C3] bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#F7F3EA] text-[11px] uppercase tracking-[0.14em] text-[#14241C]/50">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Title</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">Last touch</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFE8DA]">
            {rows.map((contact) => (
              <tr key={contact.id} className="cursor-pointer hover:bg-[#F7F3EA]" onClick={() => onOpen({ type: 'contact', ...contact })}>
                <td className="px-4 py-3 font-medium">{contactName(contact)}</td>
                <td className="hidden px-4 py-3 md:table-cell">{contact.title}</td>
                <td className="px-4 py-3">{companyById(contact.companyId)?.name}</td>
                <td className="hidden px-4 py-3 lg:table-cell">{formatDate(contact.lastTouch)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ActivitiesView({ query, deals, onOpen }) {
  const rows = seedActivities.filter((a) =>
    matchesQuery(`${a.title} ${a.note} ${companyById(a.companyId)?.name || ''}`, query)
  )

  return (
    <div>
      <SectionTitle kicker="Timeline" title="Activity" />
      <ol className="space-y-3">
        {rows.map((item) => (
          <li key={item.id} className="rounded-2xl border border-[#D9D2C3] bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold">{item.title}</p>
              <span className="rounded-full bg-[#F7F3EA] px-2 py-0.5 text-[11px] uppercase tracking-wide">{item.type}</span>
            </div>
            <p className="mt-1 text-sm text-[#14241C]/65">{item.note}</p>
            <p className="mt-2 text-xs text-[#14241C]/45">
              {formatDate(item.date)} · {ownerById(item.ownerId)?.name}
              {item.companyId ? ` · ${companyById(item.companyId)?.name}` : ''}
            </p>
            {item.dealId && (
              <button
                className="mt-3 text-xs font-medium text-[#3D7A5F] hover:underline"
                onClick={() => {
                  const deal = deals.find((d) => d.id === item.dealId)
                  if (deal) onOpen({ type: 'deal', ...deal })
                }}
              >
                Open related deal
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function ReportsView({ deals }) {
  const max = Math.max(...stages.map((s) => deals.filter((d) => d.stage === s.id).reduce((sum, d) => sum + d.value, 0)), 1)

  return (
    <div>
      <SectionTitle kicker="Snapshot" title="Reports" />
      <div className="rounded-2xl border border-[#D9D2C3] bg-white p-6">
        <h2 className="text-sm font-semibold">Pipeline value by stage</h2>
        <div className="mt-6 space-y-3">
          {stages.map((stage) => {
            const value = deals.filter((d) => d.stage === stage.id).reduce((sum, d) => sum + d.value, 0)
            return (
              <div key={stage.id}>
                <div className="mb-1 flex justify-between text-xs">
                  <span>{stage.label}</span>
                  <span>{formatEUR(value)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#EAE4D6]">
                  <div className="h-full rounded-full bg-[#3D7A5F]" style={{ width: `${(value / max) * 100}%` }} />
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-6 text-xs text-[#14241C]/45">
          Fictional snapshot for a pricing consultancy: packaging sprints, monetization redesigns, and list-price programs.
        </p>
      </div>
    </div>
  )
}

function DetailDrawer({ selected, deals, onClose, onOpen, onMove }) {
  return (
    <aside className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-[#D9D2C3] bg-white shadow-2xl md:top-[36px]">
      <div className="flex items-center justify-between border-b border-[#EFE8DA] px-5 py-4">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#3D7A5F]">{selected.type}</p>
        <button onClick={onClose} aria-label="Close details" className="rounded-full p-1 hover:bg-[#F7F3EA]">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-auto px-5 py-5">
        {selected.type === 'deal' && <DealDetail deal={selected} onMove={onMove} onOpen={onOpen} />}
        {selected.type === 'company' && <CompanyDetail company={selected} deals={deals} onOpen={onOpen} />}
        {selected.type === 'contact' && <ContactDetail contact={selected} deals={deals} onOpen={onOpen} />}
      </div>
    </aside>
  )
}

function DealDetail({ deal, onMove, onOpen }) {
  const company = companyById(deal.companyId)
  const contact = contactById(deal.contactId)
  const owner = ownerById(deal.ownerId)
  const stage = stageById(deal.stage)

  return (
    <div>
      <h2 className="font-display text-2xl">{deal.name}</h2>
      <button className="mt-1 text-sm text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'company', ...company })}>
        {company?.name}
      </button>
      <p className="mt-4 font-display text-3xl">{formatEUR(deal.value)}</p>
      <dl className="mt-6 space-y-3 text-sm">
        <Row label="Stage" value={<span className={cn('rounded-full px-2 py-0.5 text-xs', stage?.tint)}>{stage?.label}</span>} />
        <Row label="Close date" value={formatDate(deal.closeDate)} />
        <Row label="Owner" value={owner?.name} />
        <Row
          label="Contact"
          value={
            <button className="text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'contact', ...contact })}>
              {contact ? contactName(contact) : '—'}
            </button>
          }
        />
        <Row label="Next step" value={deal.nextStep} />
      </dl>
      <label className="mt-6 block text-xs font-medium uppercase tracking-[0.14em] text-[#14241C]/45">
        Move stage
        <select
          value={deal.stage}
          onChange={(e) => onMove(deal.id, e.target.value)}
          className="mt-2 w-full rounded-xl border border-[#D9D2C3] bg-[#F7F3EA] px-3 py-2 text-sm"
        >
          {stages.map((s) => (
            <option key={s.id} value={s.id}>{s.label}</option>
          ))}
        </select>
      </label>
    </div>
  )
}

function CompanyDetail({ company, deals, onOpen }) {
  const owner = ownerById(company.ownerId)
  const people = contacts.filter((c) => c.companyId === company.id)
  const related = deals.filter((d) => d.companyId === company.id)

  return (
    <div>
      <h2 className="font-display text-2xl">{company.name}</h2>
      <p className="mt-1 text-sm text-[#14241C]/55">{company.segment} · {company.stage} · {company.hq}</p>
      <dl className="mt-6 space-y-3 text-sm">
        <Row label="ARR" value={formatEUR(company.arr)} />
        <Row label="Team" value={`${company.employees} people`} />
        <Row label="Owner" value={owner?.name} />
        <Row label="Health" value={company.health} />
      </dl>
      <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-[#14241C]/45">People</h3>
      <ul className="mt-2 space-y-2">
        {people.map((person) => (
          <li key={person.id}>
            <button className="text-sm text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'contact', ...person })}>
              {contactName(person)} · {person.title}
            </button>
          </li>
        ))}
      </ul>
      <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-[#14241C]/45">Deals</h3>
      <ul className="mt-2 space-y-2">
        {related.map((deal) => (
          <li key={deal.id}>
            <button className="text-left text-sm text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'deal', ...deal })}>
              {deal.name} · {formatEUR(deal.value)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactDetail({ contact, deals, onOpen }) {
  const company = companyById(contact.companyId)
  const related = deals.filter((d) => d.contactId === contact.id || d.companyId === contact.companyId)

  return (
    <div>
      <h2 className="font-display text-2xl">{contactName(contact)}</h2>
      <p className="mt-1 text-sm text-[#14241C]/55">{contact.title}</p>
      <dl className="mt-6 space-y-3 text-sm">
        <Row
          label="Company"
          value={
            <button className="text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'company', ...company })}>
              {company?.name}
            </button>
          }
        />
        <Row label="Email" value={contact.email} />
        <Row label="Last touch" value={formatDate(contact.lastTouch)} />
        <Row label="Owner" value={ownerById(contact.ownerId)?.name} />
      </dl>
      <h3 className="mt-8 text-xs font-medium uppercase tracking-[0.14em] text-[#14241C]/45">Related deals</h3>
      <ul className="mt-2 space-y-2">
        {related.map((deal) => (
          <li key={deal.id}>
            <button className="text-left text-sm text-[#3D7A5F] hover:underline" onClick={() => onOpen({ type: 'deal', ...deal })}>
              {deal.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-[#14241C]/45">{label}</dt>
      <dd className="text-right">{value}</dd>
    </div>
  )
}
