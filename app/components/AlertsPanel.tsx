'use client'

import { AlertTriangle, FileCheck, ClipboardList } from 'lucide-react'

const alerts = [
  {
    id: 1,
    icon: AlertTriangle,
    iconColor: '#f5604a',
    iconBg: 'rgba(245,96,74,0.12)',
    title: 'Payment 45 days overdue',
    description: 'Ramon Torres — ₱380,000 housing loan. Legal action threshold.',
    urgent: true,
    checked: false,
  },
  {
    id: 2,
    icon: ClipboardList,
    iconColor: '#f5c542',
    iconBg: 'rgba(245,197,66,0.12)',
    title: '7 applications need review',
    description: 'Awaiting credit assessment — oldest submitted 3 days ago.',
    urgent: false,
    checked: false,
  },
  {
    id: 3,
    icon: FileCheck,
    iconColor: '#4b9cf5',
    iconBg: 'rgba(75,156,245,0.12)',
    title: 'Regulatory report due',
    description: 'BSP quarterly submission deadline is May 31, 2026.',
    urgent: false,
    checked: false,
  },
]

export default function AlertsPanel() {
  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
          Alerts & Notifications
        </h2>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-lg"
          style={{ backgroundColor: 'rgba(245,96,74,0.15)', color: 'var(--accent-red)' }}
        >
          3 urgent
        </span>
      </div>

      {/* Alerts */}
      <div className="flex flex-col gap-3">
        {alerts.map(alert => {
          const Icon = alert.icon
          return (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer"
              style={{
                backgroundColor: alert.urgent ? 'rgba(245,96,74,0.06)' : 'rgba(255,255,255,0.03)',
                border: alert.urgent ? '1px solid rgba(245,96,74,0.2)' : '1px solid transparent',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
              onMouseLeave={e =>
                (e.currentTarget.style.backgroundColor = alert.urgent
                  ? 'rgba(245,96,74,0.06)'
                  : 'rgba(255,255,255,0.03)')
              }
            >
              {/* Checkbox */}
              <div
                className="w-4 h-4 rounded border shrink-0 mt-0.5"
                style={{ borderColor: 'var(--text-muted)' }}
              />

              {/* Icon */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: alert.iconBg }}
              >
                <Icon size={15} style={{ color: alert.iconColor }} />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {alert.title}
                </p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {alert.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <button
        className="text-xs font-semibold text-center py-2 rounded-xl transition-all"
        style={{
          color: 'var(--accent-blue)',
          backgroundColor: 'rgba(75,156,245,0.08)',
          border: '1px solid rgba(75,156,245,0.2)',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(75,156,245,0.15)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(75,156,245,0.08)')}
      >
        View all notifications →
      </button>
    </div>
  )
}
