'use client'

import { Search, Download, CheckCircle2, XCircle, Clock } from 'lucide-react'
import { repayments, repaymentStatusConfig, repaymentSummary } from '@/app/lib/Data'

const statusIcons: Record<string, React.ElementType> = {
  Paid:    CheckCircle2,
  Pending: Clock,
  Overdue: XCircle,
}

export default function RepaymentsPage() {
  return (
    <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between p-4 lg:px-8 lg:py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Repayments</h1>
            <p className="text-xs lg:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>May 2026 — Collection tracking</p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search — full on md+, icon only on mobile */}
            <div
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
            >
              <Search size={14} />
              <input
                placeholder="Search payments..."
                className="bg-transparent outline-none w-36 lg:w-48"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>

            {/* Export */}
            <button
              className="flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}
            >
              <Download size={14} />
              <span className="hidden lg:block">Export</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:px-8 lg:py-6">
          <div
            className="flex md:hidden items-center gap-2 px-3 py-2 mb-3 rounded-xl text-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
          >
            <Search size={14} />
            <input
              placeholder="Search payments..."
              className="bg-transparent outline-none w-36 lg:w-48"
              style={{ color: 'var(--text-primary)' }}
            />
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
            {repaymentSummary.map(c => (
              <div
                key={c.label}
                className="rounded-2xl p-4 lg:p-5"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                <p className="text-xl lg:text-2xl font-bold mt-2 font-mono" style={{ color: c.color }}>{c.value}</p>
              </div>
            ))}
          </div>

          {/* ── Desktop Table (md+) ── */}
          <div
            className="hidden md:block rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                    {['Payment ID', 'Loan ID', 'Borrower', 'Amount', 'Due Date', 'Paid Date', 'Method', 'Status'].map(h => (
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
                  {repayments.map((r, i) => {
                    const sc = repaymentStatusConfig[r.status]
                    const Icon = statusIcons[r.status]
                    return (
                      <tr
                        key={r.id}
                        style={{ borderBottom: i < repayments.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        className="cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>{r.id}</td>
                        <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{r.loanId}</td>
                        <td className="px-5 py-4 font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{r.borrower}</td>
                        <td className="px-5 py-4 font-semibold font-mono whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{r.amount}</td>
                        <td className="px-5 py-4 text-xs whitespace-nowrap" style={{ color: r.status === 'Overdue' ? 'var(--accent-red)' : 'var(--text-muted)' }}>{r.due}</td>
                        <td className="px-5 py-4 text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>{r.paid}</td>
                        <td className="px-5 py-4 text-xs whitespace-nowrap" style={{ color: 'var(--text-secondary)' }}>{r.method}</td>
                        <td className="px-5 py-4">
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                            style={{ backgroundColor: sc.bg, color: sc.text }}
                          >
                            <Icon size={11} />
                            {r.status}
                          </span>
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
            {repayments.map((r) => {
              const sc = repaymentStatusConfig[r.status]
              const Icon = statusIcons[r.status]
              return (
                <div
                  key={r.id}
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  {/* Top row — IDs + status */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{r.borrower}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <p className="font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>{r.id}</p>
                        <span style={{ color: 'var(--text-muted)' }}>·</span>
                        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{r.loanId}</p>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: sc.bg, color: sc.text }}
                    >
                      <Icon size={11} />
                      {r.status}
                    </span>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Amount</p>
                      <p className="mt-0.5 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{r.amount}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Method</p>
                      <p className="mt-0.5 font-medium" style={{ color: 'var(--text-secondary)' }}>{r.method}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Due Date</p>
                      <p
                        className="mt-0.5 font-medium"
                        style={{ color: r.status === 'Overdue' ? 'var(--accent-red)' : 'var(--text-secondary)' }}
                      >
                        {r.due}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Paid Date</p>
                      <p className="mt-0.5 font-medium" style={{ color: 'var(--text-secondary)' }}>{r.paid}</p>
                    </div>
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