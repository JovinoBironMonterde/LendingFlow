'use client'

import { Search, Download, CheckCircle2, XCircle, Clock } from 'lucide-react'


const repayments = [
  { id: '#PAY-5521', loanId: '#LN-0841', borrower: 'Jose Lim', amount: '₱8,500', due: 'May 15, 2026', paid: 'May 14, 2026', status: 'Paid', method: 'GCash' },
  { id: '#PAY-5520', loanId: '#LN-0811', borrower: 'Sofia Mendez', amount: '₱12,300', due: 'May 15, 2026', paid: 'May 15, 2026', status: 'Paid', method: 'Bank Transfer' },
  { id: '#PAY-5519', loanId: '#LN-0792', borrower: 'Ana Cruz', amount: '₱3,200', due: 'May 15, 2026', paid: '—', status: 'Pending', method: '—' },
  { id: '#PAY-5518', loanId: '#LN-0734', borrower: 'Ramon Torres', amount: '₱25,000', due: 'Apr 30, 2026', paid: '—', status: 'Overdue', method: '—' },
  { id: '#PAY-5517', loanId: '#LN-0803', borrower: 'Karl Reyes', amount: '₱18,700', due: 'May 10, 2026', paid: 'May 9, 2026', status: 'Paid', method: 'Maya' },
  { id: '#PAY-5516', loanId: '#LN-0799', borrower: 'Maria Garcia', amount: '₱6,400', due: 'May 10, 2026', paid: 'May 10, 2026', status: 'Paid', method: 'GCash' },
  { id: '#PAY-5515', loanId: '#LN-0788', borrower: 'Ben Soriano', amount: '₱4,100', due: 'May 8, 2026', paid: '—', status: 'Overdue', method: '—' },
]

const statusConfig: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  Paid: { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0', icon: CheckCircle2 },
  Pending: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542', icon: Clock },
  Overdue: { bg: 'rgba(245,96,74,0.12)', text: '#f5604a', icon: XCircle },
}

export default function RepaymentsPage() {
  const totalCollected = '₱1.08M'
  const collectionRate = '94.2%'

  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Repayments</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>May 2026 — Collection tracking</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
              <Search size={14} />
              <input placeholder="Search payments..." className="bg-transparent outline-none w-48" style={{ color: 'var(--text-primary)' }} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
              <Download size={14} /> Export
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Summary cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Collected This Month', value: totalCollected, color: 'var(--accent-green)' },
              { label: 'Collection Rate', value: collectionRate, color: 'var(--accent-green)' },
              { label: 'Overdue Amount', value: '₱29,100', color: 'var(--accent-red)' },
              { label: 'Pending Payments', value: '₱3,200', color: 'var(--accent-yellow)' },
            ].map(c => (
              <div key={c.label} className="rounded-2xl p-5" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                <p className="text-2xl font-bold mt-2 font-mono" style={{ color: c.color }}>{c.value}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                  {['Payment ID', 'Loan ID', 'Borrower', 'Amount', 'Due Date', 'Paid Date', 'Method', 'Status'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {repayments.map((r, i) => {
                  const sc = statusConfig[r.status]
                  const Icon = sc.icon
                  return (
                    <tr key={r.id} style={{ borderBottom: i < repayments.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                      className="cursor-pointer transition-colors">
                      <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>{r.id}</td>
                      <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{r.loanId}</td>
                      <td className="px-5 py-4 font-semibold" style={{ color: 'var(--text-primary)' }}>{r.borrower}</td>
                      <td className="px-5 py-4 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{r.amount}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: r.status === 'Overdue' ? 'var(--accent-red)' : 'var(--text-muted)' }}>{r.due}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: 'var(--text-muted)' }}>{r.paid}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: 'var(--text-secondary)' }}>{r.method}</td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: sc.bg, color: sc.text }}>
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
      </main>
    </div>
  )
}
