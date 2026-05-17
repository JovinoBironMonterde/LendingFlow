'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  LayoutDashboard,
  FileText,
  Users,
  CreditCard,
  BarChart2,
  Shield,
  Bell,
  Settings,
  HelpCircle,
  Menu,
  X,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/', badge: null },
  { label: 'Applications', icon: FileText, href: '/pages/Applications', badge: 7 },
  { label: 'Borrowers', icon: Users, href: '/pages/borrowers', badge: null },
  { label: 'Repayments', icon: CreditCard, href: '/pages/repayments', badge: null },
]

const toolItems = [
  { label: 'Analytics', icon: BarChart2, href: '/pages/analytics', badge: null },
  { label: 'Risk Engine', icon: Shield, href: '/pages/risk', badge: null },
  { label: 'Alerts', icon: Bell, href: '/pages/alerts', badge: 3 },
]

const systemItems = [
  { label: 'Settings', icon: Settings, href: '/pages/settings', badge: null },
  { label: 'Support', icon: HelpCircle, href: '/pages/support', badge: null },
]

// ─── BREAKPOINT HOOK ─────────────────────────────────────────────────
function useBreakpoint() {
  const [width, setWidth] = useState<number | null>(null)

  useEffect(() => {
    const update = () => setWidth(window.innerWidth)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  if (width === null) return 'desktop' // SSR fallback
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

// ─── SHARED COMPONENTS ───────────────────────────────────────────────
interface NavItemProps {
  label: string
  icon: React.ElementType
  badge?: number | null
  active?: boolean
  href: string
  collapsed?: boolean
  onClick?: () => void
}

function NavItem({ label, icon: Icon, badge, active, href, collapsed, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 relative"
      style={{
        backgroundColor: active ? 'rgba(45, 212, 160, 0.12)' : 'transparent',
        color: active ? 'var(--accent-green)' : 'var(--text-secondary)',
        justifyContent: collapsed ? 'center' : undefined,
      }}
      onMouseEnter={e => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
          e.currentTarget.style.color = 'var(--text-primary)'
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = 'var(--text-secondary)'
        }
      }}
      title={collapsed ? label : undefined}
    >
      {active && !collapsed && (
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
          style={{ backgroundColor: 'var(--accent-green)' }}
        />
      )}
      <div className="relative shrink-0">
        <Icon size={16} strokeWidth={active ? 2.5 : 1.8} />
        {badge && collapsed && (
          <span
            className="absolute -top-1 -right-1 w-2 h-2 rounded-full"
            style={{ backgroundColor: 'rgba(245,96,74,0.9)' }}
          />
        )}
      </div>
      {!collapsed && (
        <>
          <span className="font-medium flex-1">{label}</span>
          {badge && (
            <span
              className="text-xs font-semibold px-1.5 py-0.5 rounded-md min-w-[20px] text-center"
              style={{
                backgroundColor: active ? 'rgba(45,212,160,0.2)' : 'rgba(245,96,74,0.85)',
                color: active ? 'var(--accent-green)' : '#fff',
              }}
            >
              {badge}
            </span>
          )}
        </>
      )}
    </Link>
  )
}

function SectionLabel({ label, collapsed }: { label?: string; collapsed?: boolean }) {
  if (collapsed) {
    return <div className="border-t mx-2 my-2" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />
  }
  return (
    <p className="text-xs font-semibold tracking-widest uppercase px-3 pt-5 pb-1" style={{ color: 'var(--text-muted)' }}>
      {label}
    </p>
  )
}

function Logo() {
  return (
    <div className="px-3 mb-7">
      <div className="flex items-baseline gap-0.5">
        <span className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Lend</span>
        <span className="text-xl font-bold" style={{ color: 'var(--accent-green)' }}>Flow</span>
      </div>
      <p className="text-xs font-semibold tracking-widest uppercase mt-0.5" style={{ color: 'var(--text-muted)' }}>
        Loan Management
      </p>
    </div>
  )
}

function UserProfile() {
  return (
    <div
      className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all"
      style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)')}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
        style={{ backgroundColor: 'rgba(45,212,160,0.2)', color: 'var(--accent-green)' }}
      >
        MR
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>Jovino Monterde</p>
        <p className="text-xs truncate" style={{ color: 'var(--text-muted)' }}>Loan Officer</p>
      </div>
    </div>
  )
}

// ─── DESKTOP FULL SIDEBAR ────────────────────────────────────────────
function DesktopSidebar({ pathname }: { pathname: string }) {
  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '224px',
        height: '100vh',
        flexShrink: 0,
        padding: '20px 12px',
        backgroundColor: 'var(--sidebar)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Logo />
      <SectionLabel label="Main" />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {navItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} />)}
      </nav>
      <SectionLabel label="Tools" />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {toolItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} />)}
      </nav>
      <SectionLabel label="System" />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {systemItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} />)}
      </nav>
      <div style={{ flex: 1 }} />
      <UserProfile />
    </aside>
  )
}

// ─── TABLET ICON RAIL ────────────────────────────────────────────────
function TabletRail({ pathname }: { pathname: string }) {
  return (
    <aside
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '64px',
        height: '100vh',
        flexShrink: 0,
        padding: '20px 8px',
        backgroundColor: 'var(--sidebar)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--accent-green)' }}>L</span>
      </div>
      <SectionLabel collapsed />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
        {navItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} collapsed />)}
      </nav>
      <SectionLabel collapsed />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
        {toolItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} collapsed />)}
      </nav>
      <SectionLabel collapsed />
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px', width: '100%' }}>
        {systemItems.map(item => <NavItem key={item.label} {...item} active={pathname === item.href} collapsed />)}
      </nav>
      <div style={{ flex: 1 }} />
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '12px',
          fontWeight: 700,
          cursor: 'pointer',
          backgroundColor: 'rgba(45,212,160,0.2)',
          color: 'var(--accent-green)',
        }}
        title="Jovino Monterde"
      >
        MR
      </div>
    </aside>
  )
}

// ─── MOBILE BOTTOM BAR + DRAWER ──────────────────────────────────────
function MobileNav({ pathname }: { pathname: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      {/* Bottom tab bar */}
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '8px',
          paddingBottom: 'calc(8px + env(safe-area-inset-bottom))',
          backgroundColor: 'var(--sidebar)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {navItems.map(item => {
          const active = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 12px',
                borderRadius: '12px',
                color: active ? 'var(--accent-green)' : 'var(--text-muted)',
                position: 'relative',
                textDecoration: 'none',
              }}
            >
              {active && (
                <span style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '24px',
                  height: '2px',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-green)',
                }} />
              )}
              <div style={{ position: 'relative' }}>
                <item.icon size={20} strokeWidth={active ? 2.5 : 1.8} />
                {item.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '-4px',
                    right: '-6px',
                    fontSize: '9px',
                    fontWeight: 700,
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(245,96,74,0.9)',
                    color: '#fff',
                  }}>
                    {item.badge}
                  </span>
                )}
              </div>
              <span style={{ fontSize: '10px', fontWeight: 500 }}>{item.label}</span>
            </Link>
          )
        })}

        <button
          onClick={() => setDrawerOpen(true)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 12px',
            borderRadius: '12px',
            color: drawerOpen ? 'var(--accent-green)' : 'var(--text-muted)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Menu size={20} strokeWidth={1.8} />
          <span style={{ fontSize: '10px', fontWeight: 500 }}>More</span>
        </button>
      </nav>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Drawer */}
      {drawerOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            borderRadius: '16px 16px 0 0',
            padding: '16px',
            paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
            backgroundColor: 'var(--sidebar)',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '4px', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.15)', margin: '0 auto' }} />
            <button
              onClick={() => setDrawerOpen(false)}
              style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={18} />
            </button>
          </div>

          <SectionLabel label="Tools" />
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {toolItems.map(item => (
              <NavItem key={item.label} {...item} active={pathname === item.href} onClick={() => setDrawerOpen(false)} />
            ))}
          </nav>

          <SectionLabel label="System" />
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {systemItems.map(item => (
              <NavItem key={item.label} {...item} active={pathname === item.href} onClick={() => setDrawerOpen(false)} />
            ))}
          </nav>

          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <UserProfile />
          </div>
        </div>
      )}
    </>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────
export default function Sidebar() {
  const pathname = usePathname()
  const breakpoint = useBreakpoint()

  if (breakpoint === 'mobile') return <MobileNav pathname={pathname} />
  if (breakpoint === 'tablet') return <TabletRail pathname={pathname} />
  return <DesktopSidebar pathname={pathname} />
}