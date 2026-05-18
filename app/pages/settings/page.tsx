'use client'

import { useState } from 'react'
import { User, Bell, Shield, Building, Camera } from 'lucide-react'

export default function SettingsPage() {
  const [toggles, setToggles] = useState({
    paymentAlerts: true,
    reviewReminders: true,
    regulatoryAlerts: true,
    weeklyReport: false,
    twoFactor: false,
  })
  const [activeSection, setActiveSection] = useState('profile')

  const toggle = (key: keyof typeof toggles) =>
    setToggles(prev => ({ ...prev, [key]: !prev[key] }))

  const nav = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'organization', label: 'Organization', icon: Building },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: 'var(--main-bg)' }}>

      {/* Header */}
      <header className="px-8 pt-5 shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Settings</h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Manage your account and preferences</p>
          </div>
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-semibold active:scale-95 transition-all"
            style={{ backgroundColor: 'var(--accent-green)', color: '#0f1923' }}
          >
            Save Changes
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1">
          {nav.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all relative"
              style={{ color: activeSection === id ? 'var(--accent-green)' : 'var(--text-muted)' }}
            >
              <Icon size={14} />
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t-full"
                  style={{ backgroundColor: 'var(--accent-green)' }} />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="space-y-3 mb-10">

          {/* Profile */}
          {activeSection === 'profile' && (
            <>
              <div className="rounded-2xl p-5 flex items-center gap-5 mb-10" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold"
                    style={{ backgroundColor: 'rgba(45,212,160,0.15)', color: 'var(--accent-green)' }}>
                    MR
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <Camera size={11} style={{ color: 'var(--text-primary)' }} />
                  </button>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Maria Reyes</p>
                  <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>Loan Officer · Quezon City Branch</p>
                  <span className="mt-2 inline-block text-xs px-2.5 py-0.5 rounded-full font-semibold"
                    style={{ backgroundColor: 'rgba(45,212,160,0.12)', color: 'var(--accent-green)' }}>
                    Active
                  </span>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="px-6 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Personal Info</p>
                </div>
                {[
                  { label: 'Full Name', desc: 'Your display name across the platform', value: 'Maria Reyes', type: 'text' },
                  { label: 'Email Address', desc: 'Used for login and notifications', value: 'maria.reyes@lendflow.ph', type: 'email' },
                  { label: 'Branch', desc: 'Your assigned branch', value: 'Quezon City — Main', type: 'text' },
                ].map(({ label, desc, value, type }, i, arr) => (
                  <div key={label} className="flex items-center justify-between px-6 py-4"
                    style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{label}</p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                    </div>
                    <input type={type} defaultValue={value}
                      className="px-3 py-1.5 rounded-lg text-sm outline-none w-52 transition-all"
                      style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }} />
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Role</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Your assigned role in the system</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{ backgroundColor: 'rgba(75,156,245,0.12)', color: '#4b9cf5' }}>
                    Loan Officer
                  </span>
                </div>
              </div>
            </>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="px-6 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Alert Preferences</p>
              </div>
              {[
                { key: 'paymentAlerts', label: 'Payment Overdue Alerts', desc: 'Notify when a borrower misses a payment due date', badge: 'Critical', badgeColor: 'rgba(245,96,74,0.12)', badgeText: '#f5604a' },
                { key: 'reviewReminders', label: 'Application Review Reminders', desc: 'Daily digest of pending applications in your queue', badge: null, badgeColor: '', badgeText: '' },
                { key: 'regulatoryAlerts', label: 'Regulatory Deadline Alerts', desc: 'BSP and compliance deadline notifications', badge: 'Compliance', badgeColor: 'rgba(245,197,66,0.12)', badgeText: '#f5c542' },
                { key: 'weeklyReport', label: 'Weekly Performance Report', desc: 'Summary report emailed every Monday morning', badge: null, badgeColor: '', badgeText: '' },
              ].map(({ key, label, desc, badge, badgeColor, badgeText }, i, arr) => (
                <div key={key} className="flex items-center justify-between px-6 py-4"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <div className="flex-1 mr-4">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{label}</p>
                      {badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ backgroundColor: badgeColor, color: badgeText }}>
                          {badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{desc}</p>
                  </div>
                  <button
                    onClick={() => toggle(key as keyof typeof toggles)}
                    className="w-10 h-6 rounded-full relative shrink-0 cursor-pointer transition-all"
                    style={{ backgroundColor: toggles[key as keyof typeof toggles] ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="absolute top-1 w-4 h-4 rounded-full transition-all"
                      style={{
                        left: toggles[key as keyof typeof toggles] ? '22px' : '2px',
                        backgroundColor: toggles[key as keyof typeof toggles] ? '#0f1923' : '#8a9bb0',
                      }} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Security */}
          {activeSection === 'security' && (
            <>
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: 'rgba(245,197,66,0.12)' }}>
                  <Shield size={20} style={{ color: '#f5c542' }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Security Score</p>
                    <span className="text-sm font-bold" style={{ color: '#f5c542' }}>60%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-full rounded-full" style={{ width: '60%', backgroundColor: '#f5c542' }} />
                  </div>
                  <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>Enable 2FA and update your password to improve your score</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
                <div className="px-6 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Security Settings</p>
                </div>

                <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Two-Factor Authentication</p>
                      {!toggles.twoFactor && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ backgroundColor: 'rgba(245,96,74,0.12)', color: '#f5604a' }}>
                          Disabled
                        </span>
                      )}
                    </div>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Add an extra layer of security to your account</p>
                  </div>
                  <button
                    onClick={() => toggle('twoFactor')}
                    className="w-10 h-6 rounded-full relative shrink-0 cursor-pointer transition-all"
                    style={{ backgroundColor: toggles.twoFactor ? 'var(--accent-green)' : 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="absolute top-1 w-4 h-4 rounded-full transition-all"
                      style={{
                        left: toggles.twoFactor ? '22px' : '2px',
                        backgroundColor: toggles.twoFactor ? '#0f1923' : '#8a9bb0',
                      }} />
                  </button>
                </div>

                <div className="flex items-center justify-between px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Session Timeout</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Auto-logout after inactivity period</p>
                  </div>
                  <select className="px-3 py-1.5 rounded-lg text-sm outline-none transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }}>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                    <option>8 hours</option>
                  </select>
                </div>

                <div className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Password</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Last changed 45 days ago</p>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-secondary)', border: '1px solid var(--card-border)' }}>
                    Update Password
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Organization */}
          {activeSection === 'organization' && (
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}>
              <div className="px-6 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Company Details</p>
              </div>
              {[
                { label: 'Company Name', value: 'LendFlow Inc.' },
                { label: 'BSP License Number', value: 'BSP-FL-2023-0087' },
              ].map(({ label, value }, i, arr) => (
                <div key={label} className="flex items-center justify-between px-6 py-4"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{label}</p>
                  <input defaultValue={value}
                    className="px-3 py-1.5 rounded-lg text-sm outline-none w-52 transition-all"
                    style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid var(--card-border)', color: 'var(--text-primary)' }} />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}