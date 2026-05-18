'use client'

import { allAlerts, alertPriorityConfig } from '@/app/lib/Data'

export default function AlertsPage() {
  const unresolved = allAlerts.filter(a => !a.resolved)
  const resolved   = allAlerts.filter(a => a.resolved)

  return (
    <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between p-4 lg:px-8 lg:py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Alerts</h1>
            <p className="text-xs lg:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {unresolved.length} active alerts requiring attention
            </p>
          </div>
          <button
            className="px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
          >
            Mark all as read
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:px-8 lg:py-6">

          {/* ── Active Alerts ── */}
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Active
          </h2>

          <div className="flex flex-col gap-3 mb-8">
            {unresolved.map(alert => {
              const Icon = alert.icon
              const pc   = alertPriorityConfig[alert.priority]
              return (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 lg:gap-4 p-4 rounded-2xl transition-all cursor-pointer"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--card-bg)')}
                >
                  {/* Icon */}
                  <div
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: alert.iconBg }}
                  >
                    <Icon size={17} style={{ color: alert.iconColor }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Title + priority badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-semibold text-sm lg:text-base" style={{ color: 'var(--text-primary)' }}>
                        {alert.title}
                      </p>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-semibold"
                        style={{ backgroundColor: pc.bg, color: pc.text }}
                      >
                        {alert.priority}
                      </span>
                    </div>

                    <p className="text-xs lg:text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {alert.description}
                    </p>

                    {/* Time + Resolve button on mobile (inline) */}
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{alert.time}</p>

                      {/* Resolve button — inline on mobile, hidden (shown on right) on lg */}
                      <button
                        className="lg:hidden px-3 py-1 rounded-lg text-xs font-semibold"
                        style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
                      >
                        Resolve
                      </button>
                    </div>
                  </div>

                  {/* Resolve button — right side on desktop only */}
                  <button
                    className="hidden lg:block shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
                  >
                    Resolve
                  </button>
                </div>
              )
            })}
          </div>

          {/* ── Resolved Alerts ── */}
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--text-muted)' }}
          >
            Resolved
          </h2>

          <div className="flex flex-col gap-3 opacity-60">
            {resolved.map(alert => {
              const Icon = alert.icon
              return (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 lg:gap-4 p-4 rounded-2xl"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  {/* Icon */}
                  <div
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: alert.iconBg }}
                  >
                    <Icon size={17} style={{ color: alert.iconColor }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm lg:text-base" style={{ color: 'var(--text-primary)' }}>
                      {alert.title}
                    </p>
                    <p className="text-xs lg:text-sm mt-1 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                      {alert.description}
                    </p>
                    <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>{alert.time}</p>
                  </div>

                  {/* Resolved badge */}
                  <span
                    className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(45,212,160,0.12)', color: '#2dd4a0' }}
                  >
                    Resolved
                  </span>
                </div>
              )
            })}
          </div>

        </div>
      </main>
    </div>
  )
}