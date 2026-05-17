'use client'

interface StatCardProps {
  title: string
  value: string
  subtext: string
  subtextColor?: string
  accentColor: string
  icon?: React.ReactNode
}

export default function StatCard({
  title,
  value,
  subtext,
  subtextColor = 'var(--accent-green)',
  accentColor,
  icon,
}: StatCardProps) {
  return (
    <div
      className="rounded-2xl w-full p-5 flex flex-col gap-3 relative overflow-hidden transition-all duration-200 hover:scale-[1.01]"
      style={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderTop: `2.5px solid ${accentColor}`,
      }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: 'var(--text-muted)' }}>
          {title}
        </p>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          {icon && <span style={{ color: accentColor }}>{icon}</span>}
        </div>
      </div>

      {/* Value */}
      <p className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {value}
      </p>

      {/* Subtext */}
      <p className="text-xs font-medium" style={{ color: subtextColor }}>
        {subtext}
      </p>
    </div>
  )
}
