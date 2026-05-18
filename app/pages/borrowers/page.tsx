// C:\xampp\htdocs\lending_app\app\pages\borrowers\page.tsx

'use client'

import { Search, Plus, Phone, Mail } from 'lucide-react'
import { borrowers, borrowerStatusConfig } from '@/app/lib/Data'

function CreditBar({ score }: { score: number }) {
  const pct = ((score - 300) / 550) * 100
  const color = score >= 750 ? '#2dd4a0' : score >= 650 ? '#4b9cf5' : score >= 550 ? '#f5c542' : '#f5604a'
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
      <span className="text-xs font-mono font-semibold" style={{ color }}>{score}</span>
    </div>
  )
}

export default function BorrowersPage() {
  return (
    <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between p-4 lg:px-8 lg:py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Borrowers</h1>
            <p className="text-xs lg:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {borrowers.length} registered borrowers
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {/* Search — full on md+, icon only on mobile */}
            <div
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
            >
              <Search size={14} />
              <input
                placeholder="Search borrowers..."
                className="bg-transparent outline-none w-36 lg:w-48"
                style={{ color: 'var(--text-primary)' }}
              />
            </div>

            {/* Add Borrower */}
            <button
              className="flex items-center gap-2 px-3 lg:px-4 py-2.5 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: 'var(--accent-green)', color: '#0f1923' }}
            >
              <Plus size={14} strokeWidth={2.5} />
              <span className="hidden lg:block">Add Borrower</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:px-8 lg:py-6">
          <div className="flex md:hidden items-center gap-2 px-3 py-2 mb-3 rounded-xl text-sm"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}
          >
            <Search size={14} />
            <input
              placeholder="Search borrowers..."
              className="bg-transparent outline-none w-36 lg:w-48"
              style={{ color: 'var(--text-primary)' }}
            />
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
                    {['Borrower', 'Contact', 'Active Loans', 'Total Exposure', 'Credit Score', 'Standing'].map(h => (
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
                  {borrowers.map((b, i) => {
                    const sc = borrowerStatusConfig[b.status]
                    return (
                      <tr
                        key={b.id}
                        style={{ borderBottom: i < borrowers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        className="cursor-pointer transition-colors"
                      >
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                              style={{ backgroundColor: `${b.color}22`, color: b.color }}
                            >
                              {b.initials}
                            </div>
                            <div>
                              <p className="font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{b.name}</p>
                              <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{b.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="flex items-center gap-1.5 text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                              <Mail size={11} />{b.email}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                              <Phone size={11} />{b.phone}
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-4 font-semibold text-center" style={{ color: 'var(--text-primary)' }}>{b.loans}</td>
                        <td className="px-5 py-4 font-semibold font-mono whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>{b.totalExposure}</td>
                        <td className="px-5 py-4"><CreditBar score={b.creditScore} /></td>
                        <td className="px-5 py-4">
                          <span
                            className="px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                            style={{ backgroundColor: sc.bg, color: sc.text }}
                          >
                            {b.status}
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
            {borrowers.map((b) => {
              const sc = borrowerStatusConfig[b.status]
              return (
                <div
                  key={b.id}
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  {/* Top row — avatar + name + status */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                        style={{ backgroundColor: `${b.color}22`, color: b.color }}
                      >
                        {b.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{b.name}</p>
                        <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{b.id}</p>
                      </div>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: sc.bg, color: sc.text }}
                    >
                      {b.status}
                    </span>
                  </div>

                  {/* Details grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Active Loans</p>
                      <p className="mt-0.5 font-semibold" style={{ color: 'var(--text-primary)' }}>{b.loans}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Total Exposure</p>
                      <p className="mt-0.5 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{b.totalExposure}</p>
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }}>Credit Score</p>
                      <div className="mt-1"><CreditBar score={b.creditScore} /></div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div
                    className="flex flex-col gap-1.5 pt-3"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <Mail size={11} />{b.email}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <Phone size={11} />{b.phone}
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