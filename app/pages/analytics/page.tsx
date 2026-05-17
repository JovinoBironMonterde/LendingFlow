'use client'

import { useState, useEffect } from 'react'
import {
  BarChart, Bar,
  LineChart, Line,
  XAxis, YAxis,
  CartesianGrid, Tooltip,
  ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import { monthlyData, loanTypeData, kpiData } from '../../lib/Data'

const tooltipStyle = {
  backgroundColor: '#1e2d40',
  border: '1px solid #253044',
  borderRadius: '12px',
  color: '#e8edf3',
  fontSize: '12px',
}

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="h-screen overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>
      <main className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header
          className="flex items-center justify-between px-8 py-5 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Analytics</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Q2 2026 — Performance overview</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-8 py-6">

          {/* KPI Row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {kpiData.map(k => (
              <div
                key={k.label}
                className="rounded-2xl p-5"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                  {k.label}
                </p>
                <p className="text-2xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>{k.value}</p>
                <p
                  className="text-xs mt-1 font-semibold"
                  style={{ color: k.up ? 'var(--accent-green)' : 'var(--accent-red)' }}
                >
                  {k.change} vs last quarter
                </p>
              </div>
            ))}
          </div>

          {/* Line Chart + Pie Chart */}
          <div className="grid grid-cols-3 gap-4 mb-4">

            {/* Disbursement vs Collection Line Chart */}
            <div
              className="col-span-2 rounded-2xl p-5"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Disbursement vs Collection Trend
              </h3>
              <div style={{ width: '100%', height: 200 }}>
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyData}>
                      <CartesianGrid stroke="rgba(255,255,255,0.05)" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#4d6078', fontSize: 11 }}
                      />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#4d6078', fontSize: 11 }} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Line type="monotone" dataKey="disbursed" stroke="#2dd4a0" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="collected" stroke="#4b9cf5" strokeWidth={2} dot={false} strokeDasharray="4 2" />
                    </LineChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>

            {/* Portfolio by Type Pie Chart */}
            <div
              className="rounded-2xl p-5"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Portfolio by Type</h3>
              <div style={{ width: '100%', height: 160 }}>
                {mounted && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={loanTypeData}
                        cx="50%"
                        cy="50%"
                        innerRadius={45}
                        outerRadius={70}
                        dataKey="value"
                        paddingAngle={3}
                      >
                        {loanTypeData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                {loanTypeData.map(d => (
                  <div key={d.name} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                      {d.name}
                    </span>
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Application Volume Bar Chart */}
          <div
            className="rounded-2xl p-5"
            style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
          >
            <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Monthly Application Volume
            </h3>
            <div style={{ width: '100%', height: 160 }}>
              {mounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData} barCategoryGap="40%">
                    <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#4d6078', fontSize: 11 }}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#4d6078', fontSize: 11 }} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Bar dataKey="applications" fill="#4b9cf5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}