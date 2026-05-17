// C:\xampp\htdocs\lending_app\app\pages\applications\page.tsx

'use client'

import { Search, Filter, Plus, Eye, CheckCircle, XCircle } from 'lucide-react'


const applications = [
  { id: '#APP-2241', name: 'Carlo Reyes', type: 'Business', amount: '₱250,000', submitted: 'May 13, 2026', risk: 'Low', status: 'In Review' },
  { id: '#APP-2240', name: 'Liza Santos', type: 'Personal', amount: '₱35,000', submitted: 'May 13, 2026', risk: 'Medium', status: 'In Review' },
  { id: '#APP-2239', name: 'Mark dela Cruz', type: 'Housing', amount: '₱1,200,000', submitted: 'May 12, 2026', risk: 'Low', status: 'Documents Pending' },
  { id: '#APP-2238', name: 'Grace Tan', type: 'Auto', amount: '₱180,000', submitted: 'May 12, 2026', risk: 'High', status: 'Credit Check' },
  { id: '#APP-2237', name: 'Ben Soriano', type: 'Personal', amount: '₱50,000', submitted: 'May 11, 2026', risk: 'Medium', status: 'In Review' },
  { id: '#APP-2236', name: 'Alma Flores', type: 'Business', amount: '₱500,000', submitted: 'May 11, 2026', risk: 'Low', status: 'In Review' },
  { id: '#APP-2235', name: 'Ryan Ong', type: 'Auto', amount: '₱95,000', submitted: 'May 10, 2026', risk: 'High', status: 'Credit Check' },
]

const riskConfig: Record<string, { bg: string; text: string }> = {
  Low: { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0' },
  Medium: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  High: { bg: 'rgba(245,96,74,0.12)', text: '#f5604a' },
}

const statusConfig: Record<string, { bg: string; text: string }> = {
  'In Review': { bg: 'rgba(75,156,245,0.12)', text: '#4b9cf5' },
  'Documents Pending': { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  'Credit Check': { bg: 'rgba(245,146,74,0.12)', text: '#f5924a' },
}

export default function ApplicationsPage() {
  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-8 py-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Applications</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>7 applications pending review</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
              <Search size={14} />
              <input placeholder="Search applications..." className="bg-transparent outline-none w-48" style={{ color: 'var(--text-primary)' }} />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold" style={{ backgroundColor: 'var(--accent-green)', color: '#0f1923' }}>
              <Plus size={14} strokeWidth={2.5} /> New Application
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--card-border)' }}>
                  {['Application', 'Borrower', 'Type', 'Amount', 'Submitted', 'Risk Level', 'Status', 'Actions'].map(h => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--text-muted)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {applications.map((app, i) => {
                  const risk = riskConfig[app.risk]
                  const status = statusConfig[app.status]
                  return (
                    <tr key={app.id} style={{ borderBottom: i < applications.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                      className="cursor-pointer transition-colors">
                      <td className="px-5 py-4 font-mono text-xs" style={{ color: 'var(--accent-blue)' }}>{app.id}</td>
                      <td className="px-5 py-4 font-semibold" style={{ color: 'var(--text-primary)' }}>{app.name}</td>
                      <td className="px-5 py-4" style={{ color: 'var(--text-secondary)' }}>{app.type}</td>
                      <td className="px-5 py-4 font-semibold font-mono" style={{ color: 'var(--text-primary)' }}>{app.amount}</td>
                      <td className="px-5 py-4 text-xs" style={{ color: 'var(--text-muted)' }}>{app.submitted}</td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: risk.bg, color: risk.text }}>{app.risk}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: status.bg, color: status.text }}>{app.status}</span>
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
      </main>
    </div>
  )
}
