'use client'

import { Shield, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react'


const riskProfiles = [
  { borrower: 'Ramon Torres', loanId: '#LN-0734', score: 38, level: 'Critical', exposure: '₱380,000', daysOverdue: 45, factors: ['45 days overdue', 'Score dropped 120pts', 'Missed 3 payments'] },
  { borrower: 'Ben Soriano', loanId: '#APP-2237', score: 52, level: 'High', exposure: '₱50,000', daysOverdue: 8, factors: ['8 days overdue', 'High DTI ratio', 'New borrower'] },
  { borrower: 'Grace Tan', loanId: '#APP-2238', score: 61, level: 'High', exposure: '₱180,000', daysOverdue: 0, factors: ['High debt load', 'Multiple applications', 'Employment gap'] },
  { borrower: 'Ana Cruz', loanId: '#LN-0792', score: 68, level: 'Medium', exposure: '₱45,000', daysOverdue: 0, factors: ['Slow payer history', 'DTI at 42%'] },
  { borrower: 'Karl Reyes', loanId: '#LN-0803', score: 72, level: 'Medium', exposure: '₱620,000', daysOverdue: 0, factors: ['High total exposure', 'Multiple active loans'] },
]

const levelConfig: Record<string, { bg: string; text: string; bar: string }> = {
  Critical: { bg: 'rgba(245,96,74,0.12)', text: '#f5604a', bar: '#f5604a' },
  High: { bg: 'rgba(245,146,74,0.12)', text: '#f5924a', bar: '#f5924a' },
  Medium: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542', bar: '#f5c542' },
  Low: { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0', bar: '#2dd4a0' },
}

function RiskScore({ score, level }: { score: number; level: string }) {
  const cfg = levelConfig[level]
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: cfg.bg, color: cfg.text }}>
        {score}
      </div>
      <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
        <div className="h-full rounded-full" style={{ width: `${score}%`, backgroundColor: cfg.bar }} />
      </div>
    </div>
  )
}

export default function RiskEnginePage() {
  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Risk Engine</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Portfolio risk monitoring & alerts</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          {/* Risk summary */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Critical Risk', value: '1', icon: AlertTriangle, color: 'var(--accent-red)' },
              { label: 'High Risk', value: '2', icon: TrendingDown, color: 'var(--accent-orange)' },
              { label: 'Medium Risk', value: '2', icon: Shield, color: 'var(--accent-yellow)' },
              { label: 'Avg Risk Score', value: '58.2', icon: TrendingUp, color: 'var(--accent-blue)' },
            ].map(c => {
              const Icon = c.icon
              return (
                <div key={c.label} className="rounded-2xl p-5 flex items-center gap-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${c.color}20` }}>
                    <Icon size={18} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: c.color }}>{c.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Risk table */}
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <div className="px-6 py-4" style={{ borderBottom: '1px solid var(--card-border)' }}>
              <h2 className="font-semibold" style={{ color: 'var(--text-primary)' }}>High-Risk Borrowers</h2>
            </div>
            <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              {riskProfiles.map(profile => {
                const cfg = levelConfig[profile.level]
                return (
                  <div key={profile.borrower} className="px-6 py-4 transition-colors cursor-pointer"
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    <div className="flex items-start gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{profile.borrower}</p>
                          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{profile.loanId}</span>
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: cfg.bg, color: cfg.text }}>{profile.level}</span>
                          {profile.daysOverdue > 0 && (
                            <span className="text-xs font-semibold" style={{ color: 'var(--accent-red)' }}>{profile.daysOverdue}d overdue</span>
                          )}
                        </div>
                        <RiskScore score={profile.score} level={profile.level} />
                        <div className="flex gap-2 mt-2 flex-wrap">
                          {profile.factors.map(f => (
                            <span key={f} className="text-xs px-2 py-0.5 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)' }}>{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Exposure</p>
                        <p className="text-base font-bold font-mono mt-0.5" style={{ color: 'var(--text-primary)' }}>{profile.exposure}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
