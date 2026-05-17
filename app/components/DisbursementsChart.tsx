'use client'

import { useState, useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import { monthlyData } from '../lib/Data'

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="px-3 py-2 rounded-xl text-xs"
        style={{
          backgroundColor: '#1e2d40',
          border: '1px solid var(--card-border)',
          color: 'var(--text-primary)',
        }}
      >
        <p className="font-semibold mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.name} style={{ color: p.fill }}>
            {p.name === 'disbursed' ? 'Disbursed' : 'Collected'}: ₱{p.value}K
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function DisbursementsChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <div
      className="rounded-2xl p-5 flex flex-col gap-4"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
          Monthly Disbursements
        </h2>
        <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#2dd4a0' }} />
            Disbursed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#253e58' }} />
            Collected
          </span>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: 160 }}>
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} barGap={3} barCategoryGap="35%">
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'var(--text-muted)', fontSize: 11 }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
              <Bar dataKey="collected" fill="#253e58" radius={[4, 4, 0, 0]} />
              <Bar dataKey="disbursed" fill="#2dd4a0" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between pt-2"
        style={{ borderTop: '1px solid var(--card-border)' }}
      >
        <div>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Total this month</p>
          <p className="text-xl font-bold mt-0.5" style={{ color: 'var(--text-primary)' }}>₱1.08M</p>
        </div>
        <div className="text-right">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Collection rate</p>
          <p className="text-xl font-bold mt-0.5" style={{ color: 'var(--accent-green)' }}>94.2%</p>
        </div>
      </div>
    </div>
  )
}