'use client'

import { AlertTriangle, FileCheck, ClipboardList, Bell, CheckCircle } from 'lucide-react'

const allAlerts = [
  { id: 1, icon: AlertTriangle, iconColor: '#f5604a', iconBg: 'rgba(245,96,74,0.12)', title: 'Payment 45 days overdue', description: 'Ramon Torres — ₱380,000 housing loan (LN-0734). Legal action threshold reached. Immediate escalation required.', time: '2 hours ago', priority: 'Critical', resolved: false },
  { id: 2, icon: ClipboardList, iconColor: '#f5c542', iconBg: 'rgba(245,197,66,0.12)', title: '7 applications need review', description: 'Applications awaiting credit assessment. Oldest: APP-2235, submitted 3 days ago. SLA breach risk.', time: '4 hours ago', priority: 'High', resolved: false },
  { id: 3, icon: FileCheck, iconColor: '#4b9cf5', iconBg: 'rgba(75,156,245,0.12)', title: 'Regulatory report due', description: 'BSP quarterly submission deadline is May 31, 2026. Report preparation should begin immediately.', time: 'Yesterday', priority: 'Medium', resolved: false },
  { id: 4, icon: Bell, iconColor: '#f5924a', iconBg: 'rgba(245,146,74,0.12)', title: 'Credit score drop detected', description: 'Ana Cruz (B-0189) credit score dropped from 720 to 680. Loan LN-0792 under monitoring.', time: '2 days ago', priority: 'High', resolved: false },
  { id: 5, icon: CheckCircle, iconColor: '#2dd4a0', iconBg: 'rgba(45,212,160,0.12)', title: 'Disbursement completed', description: 'Sofia Mendez auto loan (LN-0811) of ₱95,000 successfully disbursed via bank transfer.', time: '3 days ago', priority: 'Info', resolved: true },
  { id: 6, icon: CheckCircle, iconColor: '#2dd4a0', iconBg: 'rgba(45,212,160,0.12)', title: 'Monthly target reached', description: 'May 2026 disbursement target of ₱1M reached. Current: ₱1.08M (108% achievement).', time: '4 days ago', priority: 'Info', resolved: true },
]

const priorityConfig: Record<string, { bg: string; text: string }> = {
  Critical: { bg: 'rgba(245,96,74,0.15)', text: '#f5604a' },
  High: { bg: 'rgba(245,146,74,0.12)', text: '#f5924a' },
  Medium: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  Info: { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0' },
}

export default function AlertsPage() {
  const unresolved = allAlerts.filter(a => !a.resolved)
  const resolved = allAlerts.filter(a => a.resolved)

  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Alerts</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{unresolved.length} active alerts requiring attention</p>
          </div>
          <button className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
            Mark all as read
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Active alerts */}
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Active</h2>
          <div className="flex flex-col gap-3 mb-8">
            {unresolved.map(alert => {
              const Icon = alert.icon
              const pc = priorityConfig[alert.priority]
              return (
                <div key={alert.id} className="flex items-start gap-4 p-4 rounded-2xl transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--card-bg)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: alert.iconBg }}>
                    <Icon size={18} style={{ color: alert.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{alert.title}</p>
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: pc.bg, color: pc.text }}>{alert.priority}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{alert.description}</p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{alert.time}</p>
                  </div>
                  <button className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
                    Resolve
                  </button>
                </div>
              )
            })}
          </div>

          {/* Resolved */}
          <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>Resolved</h2>
          <div className="flex flex-col gap-3 opacity-60">
            {resolved.map(alert => {
              const Icon = alert.icon
              return (
                <div key={alert.id} className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: alert.iconBg }}>
                    <Icon size={18} style={{ color: alert.iconColor }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{alert.title}</p>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{alert.description}</p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{alert.time}</p>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(45,212,160,0.12)', color: '#2dd4a0' }}>Resolved</span>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
