// C:\xampp\htdocs\lending_app\app\pages\borrowers\page.tsx

'use client'

import { Search, Plus, Phone, Mail } from 'lucide-react'

const borrowers = [
  { initials: 'JL', color: '#4b9cf5', name: 'Jose Lim', id: 'B-0234', email: 'jose.lim@email.com', phone: '+63 917 123 4567', loans: 2, totalExposure: '₱240,000', creditScore: 742, status: 'Good Standing' },
  { initials: 'AC', color: '#f5c542', name: 'Ana Cruz', id: 'B-0189', email: 'ana.cruz@email.com', phone: '+63 918 234 5678', loans: 1, totalExposure: '₱45,000', creditScore: 680, status: 'Watch' },
  { initials: 'RT', color: '#f5604a', name: 'Ramon Torres', id: 'B-0156', email: 'ramon.t@email.com', phone: '+63 919 345 6789', loans: 1, totalExposure: '₱380,000', creditScore: 510, status: 'Delinquent' },
  { initials: 'SM', color: '#2dd4a0', name: 'Sofia Mendez', id: 'B-0312', email: 'sofia.m@email.com', phone: '+63 920 456 7890', loans: 1, totalExposure: '₱95,000', creditScore: 801, status: 'Excellent' },
  { initials: 'KR', color: '#f5924a', name: 'Karl Reyes', id: 'B-0278', email: 'karl.r@email.com', phone: '+63 921 567 8901', loans: 3, totalExposure: '₱620,000', creditScore: 720, status: 'Good Standing' },
  { initials: 'MG', color: '#3dd6c8', name: 'Maria Garcia', id: 'B-0345', email: 'maria.g@email.com', phone: '+63 922 678 9012', loans: 1, totalExposure: '₱80,000', creditScore: 765, status: 'Good Standing' },
]

const statusConfig: Record<string, { bg: string; text: string }> = {
  'Excellent': { bg: 'rgba(45,212,160,0.15)', text: '#2dd4a0' },
  'Good Standing': { bg: 'rgba(75,156,245,0.12)', text: '#4b9cf5' },
  'Watch': { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  'Delinquent': { bg: 'rgba(245,96,74,0.12)', text: '#f5604a' },
}

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
    <div className=" h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Borrowers</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>346 registered borrowers</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
              <Search size={14} />
              <input placeholder="Search borrowers..." className="bg-transparent outline-none w-48" style={{ color: 'var(--text-primary)' }} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'var(--accent-green)', color: '#0f1923' }}>
              <Plus size={14} strokeWidth={2.5} /> Add Borrower
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                  {['Borrower', 'Contact', 'Active Loans', 'Total Exposure', 'Credit Score', 'Standing'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {borrowers.map((b, i) => {
                  const sc = statusConfig[b.status]
                  return (
                    <tr key={b.id} style={{ borderBottom: i < borrowers.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                      className="cursor-pointer transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: `${b.color}22`, color: b.color }}>{b.initials}</div>
                          <div>
                            <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{b.name}</p>
                            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{b.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-1">
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}><Mail size={11} />{b.email}</span>
                          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}><Phone size={11} />{b.phone}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-semibold text-center" style={{ color: 'var(--text-primary)' }}>{b.loans}</td>
                      <td className="px-5 py-4 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{b.totalExposure}</td>
                      <td className="px-5 py-4"><CreditBar score={b.creditScore} /></td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: sc.bg, color: sc.text }}>{b.status}</span>
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
