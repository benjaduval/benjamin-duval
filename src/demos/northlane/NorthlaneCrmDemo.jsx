import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  Kanban,
  Users,
  Building2,
  Sparkles,
  Activity,
  ArrowLeft,
  Search,
  Bell,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Bot,
  StickyNote,
  TrendingUp,
  AlertTriangle,
  Zap,
  X,
} from 'lucide-react'
import {
  activities,
  aiInsights,
  companies,
  companyById,
  contactById,
  contacts,
  currentUser,
  deals,
  formatMoney,
  kpis,
  stages,
} from './mockData'

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pipeline', label: 'Pipeline', icon: Kanban },
  { id: 'contacts', label: 'Contacts', icon: Users },
  { id: 'companies', label: 'Companies', icon: Building2 },
  { id: 'insights', label: 'AI Insights', icon: Sparkles },
]

const activityIcon = {
  call: Phone,
  email: Mail,
  meeting: Calendar,
  ai: Bot,
  note: StickyNote,
}

function DemoBanner() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-500/20 bg-teal-950/80 px-4 py-2 text-xs text-teal-100/90 backdrop-blur md:px-6">
      <p>
        <span className="font-semibold text-teal-200">Northlane CRM demo</span>
        <span className="mx-2 text-teal-500/60">·</span>
        Fictional data · no login · explore freely
      </p>
      <Link to="/demos" className="inline-flex items-center gap-1.5 text-teal-200/80 transition hover:text-white">
        <ArrowLeft className="h-3.5 w-3.5" />
        All demos
      </Link>
    </div>
  )
}

function Sidebar({ view, setView }) {
  return (
    <aside className="flex w-[220px] shrink-0 flex-col border-r border-slate-800/80 bg-slate-950/90">
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-cyan-600 text-sm font-bold text-slate-950">
          N
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-white">Northlane</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">CRM</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-0.5 px-3">
        {NAV.map((item) => {
          const Icon = item.icon
          const active = view === item.id
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                active
                  ? 'bg-teal-500/15 text-teal-200'
                  : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </button>
          )
        })}
      </nav>
      <div className="border-t border-slate-800/80 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-slate-800 text-xs font-semibold text-white">
            {currentUser.initials}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-slate-200">{currentUser.name}</p>
            <p className="truncate text-xs text-slate-500">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function TopBar({ title, subtitle }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 px-5 py-4 md:px-8">
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-white md:text-xl">{title}</h1>
        {subtitle && <p className="mt-0.5 text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-500" />
          <input
            readOnly
            placeholder="Search contacts, deals…"
            className="w-56 rounded-full border border-slate-700/80 bg-slate-900/80 py-2 pl-9 pr-4 text-xs text-slate-300 placeholder:text-slate-600"
          />
        </div>
        <button
          type="button"
          className="relative rounded-full border border-slate-700/80 bg-slate-900/80 p-2 text-slate-400"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-teal-400" />
        </button>
      </div>
    </header>
  )
}

function KpiCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((k, i) => (
        <motion.div
          key={k.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4"
        >
          <p className="text-xs text-slate-500">{k.label}</p>
          <p className="mt-2 font-mono text-2xl font-semibold tracking-tight text-white">{k.value}</p>
          <p className={`mt-1 text-xs ${k.up ? 'text-emerald-400' : 'text-rose-400'}`}>{k.delta}</p>
        </motion.div>
      ))}
    </div>
  )
}

function ActivityFeed({ onSelectDeal }) {
  return (
    <div className="rounded-xl border border-slate-800/80 bg-slate-900/40">
      <div className="flex items-center justify-between border-b border-slate-800/60 px-4 py-3">
        <h2 className="text-sm font-medium text-slate-200">Recent activity</h2>
        <Activity className="h-4 w-4 text-slate-500" />
      </div>
      <ul className="divide-y divide-slate-800/50">
        {activities.map((a) => {
          const Icon = activityIcon[a.type] || StickyNote
          return (
            <li key={a.id}>
              <button
                type="button"
                onClick={() => a.dealId && onSelectDeal(a.dealId)}
                className="flex w-full gap-3 px-4 py-3 text-left transition hover:bg-white/[0.03]"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-300">
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-slate-200">{a.title}</p>
                  <p className="mt-0.5 truncate text-xs text-slate-500">{a.detail}</p>
                </div>
                <span className="shrink-0 text-[11px] text-slate-600">{a.time}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function InsightsPanel({ onSelectDeal }) {
  const toneStyle = {
    opportunity: { icon: TrendingUp, chip: 'bg-emerald-500/15 text-emerald-300' },
    risk: { icon: AlertTriangle, chip: 'bg-amber-500/15 text-amber-300' },
    action: { icon: Zap, chip: 'bg-sky-500/15 text-sky-300' },
  }
  return (
    <div className="rounded-xl border border-slate-800/80 bg-gradient-to-b from-teal-950/30 to-slate-900/40">
      <div className="flex items-center gap-2 border-b border-slate-800/60 px-4 py-3">
        <Sparkles className="h-4 w-4 text-teal-400" />
        <h2 className="text-sm font-medium text-slate-200">AI insights</h2>
      </div>
      <ul className="space-y-3 p-4">
        {aiInsights.map((insight) => {
          const t = toneStyle[insight.tone]
          const Icon = t.icon
          return (
            <li key={insight.id}>
              <button
                type="button"
                onClick={() => insight.dealId && onSelectDeal(insight.dealId)}
                className="w-full rounded-lg border border-slate-800/70 bg-slate-950/40 p-3 text-left transition hover:border-teal-500/30"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${t.chip}`}>
                    <Icon className="h-3 w-3" />
                    {insight.tone}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-100">{insight.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{insight.body}</p>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function DashboardView({ onSelectDeal }) {
  return (
    <div className="space-y-5">
      <KpiCards />
      <div className="grid gap-5 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ActivityFeed onSelectDeal={onSelectDeal} />
        </div>
        <div className="lg:col-span-2">
          <InsightsPanel onSelectDeal={onSelectDeal} />
        </div>
      </div>
    </div>
  )
}

function PipelineView({ onSelectDeal }) {
  const byStage = useMemo(() => {
    const map = Object.fromEntries(stages.map((s) => [s.id, []]))
    deals.forEach((d) => {
      if (map[d.stage]) map[d.stage].push(d)
    })
    return map
  }, [])

  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {stages.map((stage) => {
        const column = byStage[stage.id] || []
        const total = column.reduce((sum, d) => sum + d.value, 0)
        return (
          <div key={stage.id} className="w-[260px] shrink-0">
            <div className="mb-3 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: stage.color }} />
                <h3 className="text-sm font-medium text-slate-200">{stage.label}</h3>
                <span className="rounded-md bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400">{column.length}</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500">{formatMoney(total)}</span>
            </div>
            <div className="space-y-2">
              {column.map((deal, i) => {
                const company = companyById(deal.companyId)
                return (
                  <motion.button
                    key={deal.id}
                    type="button"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => onSelectDeal(deal.id)}
                    className="w-full rounded-xl border border-slate-800/80 bg-slate-900/60 p-3 text-left transition hover:border-teal-500/40 hover:bg-slate-900"
                  >
                    <p className="text-sm font-medium text-slate-100">{deal.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{company?.name}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-sm text-teal-300">{formatMoney(deal.value)}</span>
                      <span className="text-[11px] text-slate-600">{deal.probability}%</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ContactsView({ onSelectContact }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/40">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-800/80 text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3 font-medium">Contact</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Owner</th>
              <th className="px-4 py-3 font-medium">Last touch</th>
              <th className="px-4 py-3 font-medium">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {contacts.map((c) => {
              const company = companyById(c.companyId)
              return (
                <tr
                  key={c.id}
                  onClick={() => onSelectContact(c.id)}
                  className="cursor-pointer transition hover:bg-white/[0.03]"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-slate-100">{c.name}</p>
                    <p className="text-xs text-slate-500">{c.title}</p>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{company?.name}</td>
                  <td className="px-4 py-3 text-slate-400">{c.owner}</td>
                  <td className="px-4 py-3 text-slate-500">{c.lastTouch}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-md px-2 py-0.5 font-mono text-xs ${
                        c.score >= 85
                          ? 'bg-emerald-500/15 text-emerald-300'
                          : c.score >= 70
                            ? 'bg-sky-500/15 text-sky-300'
                            : 'bg-slate-700/50 text-slate-400'
                      }`}
                    >
                      {c.score}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CompaniesView() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {companies.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-sm font-semibold text-teal-300">
            {c.name.slice(0, 2)}
          </div>
          <h3 className="font-medium text-white">{c.name}</h3>
          <p className="mt-1 text-xs text-slate-500">
            {c.industry} · {c.location}
          </p>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-slate-500">{c.size} people</span>
            <span className="font-mono text-teal-300">{c.arr} ARR</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function InsightsView({ onSelectDeal }) {
  return (
    <div className="mx-auto max-w-2xl">
      <InsightsPanel onSelectDeal={onSelectDeal} />
      <p className="mt-4 text-center text-xs text-slate-600">
        Insights are generated from fictional engagement signals for this demo.
      </p>
    </div>
  )
}

function DealDrawer({ dealId, onClose }) {
  const deal = deals.find((d) => d.id === dealId)
  if (!deal) return null
  const company = companyById(deal.companyId)
  const contact = contactById(deal.contactId)
  const stage = stages.find((s) => s.id === deal.stage)
  const related = activities.filter((a) => a.dealId === deal.id)

  return (
    <motion.aside
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 40, opacity: 0 }}
      className="absolute inset-y-0 right-0 z-20 flex w-full max-w-md flex-col border-l border-slate-800 bg-slate-950 shadow-2xl"
    >
      <div className="flex items-start justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">Deal</p>
          <h2 className="mt-1 text-lg font-semibold text-white">{deal.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{company?.name}</p>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <p className="text-[11px] text-slate-500">Value</p>
            <p className="mt-1 font-mono text-lg text-teal-300">{formatMoney(deal.value)}</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <p className="text-[11px] text-slate-500">Probability</p>
            <p className="mt-1 font-mono text-lg text-white">{deal.probability}%</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <p className="text-[11px] text-slate-500">Stage</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full" style={{ background: stage?.color }} />
              {stage?.label}
            </p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-3">
            <p className="text-[11px] text-slate-500">Close date</p>
            <p className="mt-1 text-sm text-slate-200">{deal.closeDate}</p>
          </div>
        </div>

        {contact && (
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Primary contact</h3>
            <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-3">
              <p className="font-medium text-slate-100">{contact.name}</p>
              <p className="text-xs text-slate-500">{contact.title}</p>
              <p className="mt-2 text-xs text-slate-400">{contact.email}</p>
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div>
            <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Timeline</h3>
            <ul className="space-y-2">
              {related.map((a) => (
                <li key={a.id} className="rounded-lg border border-slate-800/80 px-3 py-2">
                  <p className="text-sm text-slate-200">{a.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.aside>
  )
}

function ContactDrawer({ contactId, onClose, onSelectDeal }) {
  const contact = contactById(contactId)
  if (!contact) return null
  const company = companyById(contact.companyId)
  const relatedDeals = deals.filter((d) => d.contactId === contact.id)

  return (
    <motion.aside
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 40, opacity: 0 }}
      className="absolute inset-y-0 right-0 z-20 flex w-full max-w-md flex-col border-l border-slate-800 bg-slate-950 shadow-2xl"
    >
      <div className="flex items-start justify-between border-b border-slate-800 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">Contact</p>
          <h2 className="mt-1 text-lg font-semibold text-white">{contact.name}</h2>
          <p className="mt-1 text-sm text-slate-400">
            {contact.title} · {company?.name}
          </p>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-white/5 hover:text-white" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto p-5">
        <div className="space-y-2 text-sm">
          <p className="text-slate-300">{contact.email}</p>
          <p className="text-slate-400">{contact.phone}</p>
          <p className="text-xs text-slate-500">Owner · {contact.owner}</p>
        </div>
        <div>
          <h3 className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">Related deals</h3>
          <ul className="space-y-2">
            {relatedDeals.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  onClick={() => onSelectDeal(d.id)}
                  className="flex w-full items-center justify-between rounded-lg border border-slate-800 bg-slate-900/40 px-3 py-2.5 text-left transition hover:border-teal-500/30"
                >
                  <span className="text-sm text-slate-200">{d.name}</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-teal-300">
                    {formatMoney(d.value)}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.aside>
  )
}

const titles = {
  dashboard: { title: 'Dashboard', subtitle: 'Your pipeline at a glance' },
  pipeline: { title: 'Pipeline', subtitle: 'Drag-ready board · click a deal to inspect' },
  contacts: { title: 'Contacts', subtitle: 'People across active opportunities' },
  companies: { title: 'Companies', subtitle: 'Account-level context' },
  insights: { title: 'AI Insights', subtitle: 'Prioritized next actions from engagement signals' },
}

export default function NorthlaneCrmDemo() {
  const [view, setView] = useState('dashboard')
  const [selectedDeal, setSelectedDeal] = useState(null)
  const [selectedContact, setSelectedContact] = useState(null)

  const openDeal = (id) => {
    setSelectedContact(null)
    setSelectedDeal(id)
  }
  const openContact = (id) => {
    setSelectedDeal(null)
    setSelectedContact(id)
  }
  const closeDrawers = () => {
    setSelectedDeal(null)
    setSelectedContact(null)
  }

  const meta = titles[view]

  return (
    <div className="flex h-[100dvh] flex-col bg-slate-950 text-slate-100">
      <DemoBanner />
      <div className="flex min-h-0 flex-1">
        <div className="hidden md:flex">
          <Sidebar view={view} setView={(id) => { setView(id); closeDrawers() }} />
        </div>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-1 overflow-x-auto border-b border-slate-800 px-3 py-2 md:hidden">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => { setView(item.id); closeDrawers() }}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs ${
                  view === item.id ? 'bg-teal-500/20 text-teal-200' : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <TopBar title={meta.title} subtitle={meta.subtitle} />

          <main className="relative min-h-0 flex-1 overflow-auto p-4 md:p-6 lg:p-8">
            {view === 'dashboard' && <DashboardView onSelectDeal={openDeal} />}
            {view === 'pipeline' && <PipelineView onSelectDeal={openDeal} />}
            {view === 'contacts' && <ContactsView onSelectContact={openContact} />}
            {view === 'companies' && <CompaniesView />}
            {view === 'insights' && <InsightsView onSelectDeal={openDeal} />}
          </main>

          <AnimatePresence>
            {selectedDeal && <DealDrawer dealId={selectedDeal} onClose={closeDrawers} />}
            {selectedContact && (
              <ContactDrawer
                contactId={selectedContact}
                onClose={closeDrawers}
                onSelectDeal={openDeal}
              />
            )}
          </AnimatePresence>

          {(selectedDeal || selectedContact) && (
            <button
              type="button"
              className="absolute inset-0 z-10 bg-black/40 md:bg-black/30"
              aria-label="Close panel"
              onClick={closeDrawers}
            />
          )}
        </div>
      </div>
    </div>
  )
}
