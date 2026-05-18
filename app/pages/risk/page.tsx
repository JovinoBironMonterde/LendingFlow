'use client'

import { Shield, AlertTriangle, TrendingDown, TrendingUp } from 'lucide-react'
import { riskProfiles, riskLevelConfig, riskSummary } from '@/app/lib/Data'

const summaryIcons = [AlertTriangle, TrendingDown, Shield, TrendingUp]

function RiskScore({ score, level }: { score: number; level: string }) {
  const cfg = riskLevelConfig[level as keyof typeof riskLevelConfig]
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
        style={{ backgroundColor: cfg.bg, color: cfg.text }}
      >
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
    <div className="h-screen overflow-y-auto" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between p-4 lg:px-8 lg:py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Risk Engine</h1>
            <p className="text-xs lg:text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Portfolio risk monitoring & alerts</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:px-8 lg:py-6">

          {/* Risk Summary — 2 cols mobile, 4 cols desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-6">
            {riskSummary.map((c, i) => {
              const Icon = summaryIcons[i]
              return (
                <div
                  key={c.label}
                  className="rounded-2xl p-4 lg:p-5 flex items-center gap-3 lg:gap-4"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  <div
                    className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${c.color}20` }}
                  >
                    <Icon size={17} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold" style={{ color: c.color }}>{c.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Risk List */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <div className="px-4 lg:px-6 py-4" style={{ borderBottom: '1px solid var(--card-border)' }}>
              <h2 className="font-semibold text-sm lg:text-base" style={{ color: 'var(--text-primary)' }}>
                High-Risk Borrowers
              </h2>
            </div>

            <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
              {riskProfiles.map(profile => {
                const cfg = riskLevelConfig[profile.level]
                return (
                  <div
                    key={profile.borrower}
                    className="p-4 lg:px-6 lg:py-4 transition-colors cursor-pointer"
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {/* Top row — name + exposure */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="min-w-0">
                        {/* Name + badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                            {profile.borrower}
                          </p>
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: cfg.bg, color: cfg.text }}
                          >
                            {profile.level}
                          </span>
                          {profile.daysOverdue > 0 && (
                            <span className="text-xs font-semibold" style={{ color: 'var(--accent-red)' }}>
                              {profile.daysOverdue}d overdue
                            </span>
                          )}
                        </div>
                        {/* Loan ID */}
                        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                          {profile.loanId}
                        </span>
                      </div>

                      {/* Exposure — always visible */}
                      <div className="shrink-0 text-right">
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Exposure</p>
                        <p className="text-sm lg:text-base font-bold font-mono mt-0.5" style={{ color: 'var(--text-primary)' }}>
                          {profile.exposure}
                        </p>
                      </div>
                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                    {/* Risk score bar */}
                    <div className="mb-3">
                      <RiskScore score={profile.score} level={profile.level} />
                    </div>

                    {/* Factor tags */}
                    <div className="flex gap-2 flex-wrap">
                      {profile.factors.map(f => (
                        <span
                          key={f}
                          className="text-xs px-2 py-0.5 rounded-lg"
                          style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)' }}
                        >
                          {f}
                        </span>
                      ))}
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