'use client'

const loans = [
  {
    initials: 'JL',
    color: '#4b9cf5',
    name: 'Jose Lim',
    id: '#LN-0841',
    type: 'Business',
    amount: '₱120,000',
    status: 'Active',
    repayment: 68,
    due: 'Jun 15, 2026',
  },
  {
    initials: 'AC',
    color: '#f5c542',
    name: 'Ana Cruz',
    id: '#LN-0792',
    type: 'Personal',
    amount: '₱45,000',
    status: 'Pending',
    repayment: 20,
    due: 'May 30, 2026',
  },
  {
    initials: 'RT',
    color: '#f5604a',
    name: 'Ramon Torres',
    id: '#LN-0734',
    type: 'Housing',
    amount: '₱380,000',
    status: 'Overdue',
    repayment: 41,
    due: 'Apr 30, 2026',
  },
  {
    initials: 'SM',
    color: '#2dd4a0',
    name: 'Sofia Mendez',
    id: '#LN-0811',
    type: 'Auto',
    amount: '₱95,000',
    status: 'Active',
    repayment: 85,
    due: 'Jul 01, 2026',
  },
]

const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
  Active: { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0', dot: '#2dd4a0' },
  Pending: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542', dot: '#f5c542' },
  Overdue: { bg: 'rgba(245,96,74,0.12)', text: '#f5604a', dot: '#f5604a' },
}

const repaymentBarColor: Record<string, string> = {
  Active: '#2dd4a0',
  Pending: '#f5c542',
  Overdue: '#f5604a',
}

function RepaymentBar({ pct, status }: { pct: number; status: string }) {
  return (
    <div className="flex items-center gap-2 min-w-[120px]">
      <div
        className="flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${pct}%`,
            backgroundColor: repaymentBarColor[status],
          }}
        />
      </div>
      <span className="text-xs font-medium shrink-0" style={{ color: 'var(--text-muted)' }}>
        {pct}% paid
      </span>
    </div>
  )
}

export default function LoanTable() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid var(--card-border)' }}>
        <h2 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
          Active Loan Portfolio
        </h2>
        <button
          className="text-xs font-semibold transition-colors"
          style={{ color: 'var(--accent-blue)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#7ab8f8')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--accent-blue)')}
        >
          View all loans →
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
              {['Borrower', 'Type', 'Amount', 'Status', 'Repayment', 'Due Date'].map(h => (
                <th
                  key={h}
                  className="text-left px-6 py-3 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, i) => {
              const sc = statusConfig[loan.status]
              return (
                <tr
                  key={loan.id}
                  className="transition-colors cursor-pointer"
                  style={{ borderBottom: i < loans.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  {/* Borrower */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ backgroundColor: `${loan.color}22`, color: loan.color }}
                      >
                        {loan.initials}
                      </div>
                      <div>
                        <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{loan.name}</p>
                        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{loan.id}</p>
                      </div>
                    </div>
                  </td>
                  {/* Type */}
                  <td className="px-6 py-4" style={{ color: 'var(--text-secondary)' }}>{loan.type}</td>
                  {/* Amount */}
                  <td className="px-6 py-4 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>
                    {loan.amount}
                  </td>
                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: sc.bg, color: sc.text }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: sc.dot }} />
                      {loan.status}
                    </span>
                  </td>
                  {/* Repayment */}
                  <td className="px-6 py-4">
                    <RepaymentBar pct={loan.repayment} status={loan.status} />
                  </td>
                  {/* Due Date */}
                  <td
                    className="px-6 py-4 text-xs font-medium"
                    style={{ color: loan.status === 'Overdue' ? 'var(--accent-red)' : 'var(--text-secondary)' }}
                  >
                    {loan.due}
                    {loan.status === 'Overdue' && (
                      <span className="block text-xs mt-0.5" style={{ color: 'var(--accent-red)' }}>⚠ Overdue</span>
                    )}
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
