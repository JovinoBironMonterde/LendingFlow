'use client'

import { Download, Plus, TrendingUp, Activity, Clock, AlertCircle } from 'lucide-react'
import StatCard from './components/StatCard'
import LoanTable from './components/LoanTable'
import DisbursementsChart from './components/DisbursementsChart'
import AlertsPanel from './components/AlertsPanel'

export default function Dashboard() {
  return (
    <div className=" h-screen overflow-y-auto mb-40" style={{ backgroundColor: 'var(--main-bg)' }}>
      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Dashboard
            </h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Saturday, May 16, 2026 — Q2 Performance
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Export button */}
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--card-border)',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)')}
            >
              <Download size={15} />
              Export
            </button>

            {/* New Loan button */}
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                backgroundColor: 'var(--accent-green)',
                color: '#0f1923',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#25c090')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent-green)')}
            >
              <Plus size={15} strokeWidth={2.5} />
              New Loan
            </button>
          </div>
        </header>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Disbursed"
              value="₱4.2M"
              subtext="↑ +12.4% vs last month"
              subtextColor="var(--accent-green)"
              accentColor="var(--accent-green)"
              icon={<TrendingUp size={16} />}
            />
            <StatCard
              title="Active Loans"
              value="284"
              subtext="↑ +8 this week"
              subtextColor="var(--accent-blue)"
              accentColor="var(--accent-blue)"
              icon={<Activity size={16} />}
            />
            <StatCard
              title="Pending Review"
              value="37"
              subtext="⚠ 5 urgent today"
              subtextColor="var(--accent-yellow)"
              accentColor="var(--accent-yellow)"
              icon={<Clock size={16} />}
            />
            <StatCard
              title="Overdue Loans"
              value="14"
              subtext="↑ +2 vs last week"
              subtextColor="var(--accent-red)"
              accentColor="var(--accent-red)"
              icon={<AlertCircle size={16} />}
            />
          </div>

          {/* Loan Table */}
          <div className="mb-6">
            <LoanTable />
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-2 gap-4 pb-4">
            <DisbursementsChart />
            <AlertsPanel />
          </div>
        </div>
      </main>
    </div>
  )
}
