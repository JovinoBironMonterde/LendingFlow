// C:\xampp\htdocs\lending_app\app\pages\applications\page.tsx

'use client'

import { Search, Filter, Plus, Eye, CheckCircle, XCircle } from 'lucide-react'
import { applications, riskConfig, statusConfig } from '@/app/lib/Data'

export default function ApplicationsPage() {
  return (
    <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between p-4 lg:px-8 lg:py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Applications</h1>
            <p className="text-xs lg:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {applications.length} applications pending review
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search — hidden on mobile */}
            <div
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
            >
              <Search size={14} />
              <input
                placeholder="Search applications..."
                className="bg-transparent outline-none w-36 lg:w-48"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>

            {/* Search icon only on mobile */}
            <button
              className="flex md:hidden items-center p-2 rounded-xl"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
            >
              <Search size={15} />
            </button>

            {/* Filter */}
            <button
              className="flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
            >
              <Filter size={14} />
              <span className="hidden lg:block">Filter</span>
            </button>

            {/* New Application */}
            <button
              className="flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: 'var(--accent-green)', color: '#0f1923' }}
            >
              <Plus size={14} strokeWidth={2.5} />
              <span className="hidden lg:block">New Application</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:px-8 lg:py-6">
            <div className="flex md:hidden items-center gap-2 px-3 py-2 mb-3 rounded-xl text-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
            >
              <Search size={14} />
              <input
                placeholder="Search applications..."
                className="bg-transparent outline-none w-36 lg:w-48"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>
          {/* ── Desktop Table (md+) ── */}
          <div className="hidden md:block rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                    {['Application', 'Borrower', 'Type', 'Amount', 'Submitted', 'Risk Level', 'Status', 'Actions'].map(h => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 text-xs font-semibold tracking-wider uppercase whitespace-nowrap"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, i) => {
                    const risk = riskConfig[app.risk]
                    const status = statusConfig[app.status]
                    return (
                      <tr
                        key={app.id}
                        style={{ borderBottom: i < applications.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        className="cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>{app.id}</td>
                        <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{app.name}</td>
                        <td className="px-5 py-4" style={{ color: 'var(--text-secondary)' }}>{app.type}</td>
                        <td className="px-5 py-4 font-semibold font-mono whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{app.amount}</td>
                        <td className="px-5 py-4 text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{app.submitted}</td>
                        <td className="px-5 py-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: risk.bg, color: risk.text }}>
                            {app.risk}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap" style={{ backgroundColor: status.bg, color: status.text }}>
                            {app.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1.5 rounded-lg transition-colors" style={{ color: 'var(--accent-blue)' }} title="View"><Eye size={14} /></button>
                            <button className="p-1.5 rounded-lg transition-colors" style={{ color: 'var(--accent-green)' }} title="Approve"><CheckCircle size={14} /></button>
                            <button className="p-1.5 rounded-lg transition-colors" style={{ color: 'var(--accent-red)' }} title="Reject"><XCircle size={14} /></button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Mobile Cards (< md) ── */}
          <div className="flex md:hidden flex-col gap-3">
            {applications.map((app) => {
              const risk = riskConfig[app.risk]
              const status = statusConfig[app.status]
              return (
                <div
                  key={app.id}
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  {/* Card Top Row */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{app.name}</p>
                      <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--accent-blue)' }}>{app.id}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button className="p-1.5 rounded-lg" style={{ color: 'var(--accent-blue)' }} title="View"><Eye size={14} /></button>
                      <button className="p-1.5 rounded-lg" style={{ color: 'var(--accent-green)' }} title="Approve"><CheckCircle size={14} /></button>
                      <button className="p-1.5 rounded-lg" style={{ color: 'var(--accent-red)' }} title="Reject"><XCircle size={14} /></button>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Type</p>
                      <p className="mt-0.5 font-medium" style={{ color: 'var(--text-secondary)' }}>{app.type}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Amount</p>
                      <p className="mt-0.5 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{app.amount}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Submitted</p>
                      <p className="mt-0.5" style={{ color: 'var(--text-secondary)' }}>{app.submitted}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Risk</p>
                      <span className="inline-block mt-0.5 px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: risk.bg, color: risk.text }}>
                        {app.risk}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: status.bg, color: status.text }}>
                      {app.status}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </main>
    </div>
  )
}