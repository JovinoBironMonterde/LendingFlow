// C:\xampp\htdocs\lending_app\app\lib\Data.tsx

import { AlertTriangle, FileCheck, ClipboardList, Bell, CheckCircle, LucideIcon } from 'lucide-react'

// ── Chart Data ──────────────────────────────────────────
export const monthlyData = [
  { month: 'Dec', disbursed: 720, collected: 580, applications: 42 },
  { month: 'Jan', disbursed: 850, collected: 700, applications: 55 },
  { month: 'Feb', disbursed: 760, collected: 640, applications: 48 },
  { month: 'Mar', disbursed: 920, collected: 810, applications: 62 },
  { month: 'Apr', disbursed: 880, collected: 750, applications: 58 },
  { month: 'May', disbursed: 1080, collected: 960, applications: 71 },
]

export const loanTypeData = [
  { name: 'Business', value: 38, color: '#4b9cf5' },
  { name: 'Housing',  value: 29, color: '#2dd4a0' },
  { name: 'Auto',     value: 19, color: '#f5c542' },
  { name: 'Personal', value: 14, color: '#f5924a' },
]

export const kpiData = [
  { label: 'Total Portfolio', value: '₱38.4M',   change: '+12.4%', up: true  },
  { label: 'Avg Loan Size',   value: '₱135,200', change: '+3.1%',  up: true  },
  { label: 'Default Rate',    value: '1.8%',      change: '-0.3%',  up: false },
  { label: 'Approval Rate',   value: '67.3%',     change: '+5.2%',  up: true  },
]

// ── Applications Data ────────────────────────────────────
export type ApplicationRiskLevel = 'Low' | 'Medium' | 'High'
export type ApplicationStatus = 'In Review' | 'Documents Pending' | 'Credit Check'

export interface Application {
  id: string
  name: string
  type: string
  amount: string
  submitted: string
  risk: ApplicationRiskLevel
  status: ApplicationStatus
}

export const applications: Application[] = [
  { id: '#APP-2241', name: 'Carlo Reyes',    type: 'Business', amount: '₱250,000',   submitted: 'May 13, 2026', risk: 'Low',    status: 'In Review' },
  { id: '#APP-2240', name: 'Liza Santos',    type: 'Personal', amount: '₱35,000',    submitted: 'May 13, 2026', risk: 'Medium', status: 'In Review' },
  { id: '#APP-2239', name: 'Mark dela Cruz', type: 'Housing',  amount: '₱1,200,000', submitted: 'May 12, 2026', risk: 'Low',    status: 'Documents Pending' },
  { id: '#APP-2238', name: 'Grace Tan',      type: 'Auto',     amount: '₱180,000',   submitted: 'May 12, 2026', risk: 'High',   status: 'Credit Check' },
  { id: '#APP-2237', name: 'Ben Soriano',    type: 'Personal', amount: '₱50,000',    submitted: 'May 11, 2026', risk: 'Medium', status: 'In Review' },
  { id: '#APP-2236', name: 'Alma Flores',    type: 'Business', amount: '₱500,000',   submitted: 'May 11, 2026', risk: 'Low',    status: 'In Review' },
  { id: '#APP-2235', name: 'Ryan Ong',       type: 'Auto',     amount: '₱95,000',    submitted: 'May 10, 2026', risk: 'High',   status: 'Credit Check' },
]

export const riskConfig: Record<ApplicationRiskLevel, { bg: string; text: string }> = {
  Low:    { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0' },
  Medium: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  High:   { bg: 'rgba(245,96,74,0.12)',  text: '#f5604a' },
}

export const statusConfig: Record<ApplicationStatus, { bg: string; text: string }> = {
  'In Review':         { bg: 'rgba(75,156,245,0.12)',  text: '#4b9cf5' },
  'Documents Pending': { bg: 'rgba(245,197,66,0.12)',  text: '#f5c542' },
  'Credit Check':      { bg: 'rgba(245,146,74,0.12)',  text: '#f5924a' },
}

// ── Borrowers Data ───────────────────────────────────────
export type BorrowerStatus = 'Excellent' | 'Good Standing' | 'Watch' | 'Delinquent'

export interface Borrower {
  initials: string
  color: string
  name: string
  id: string
  email: string
  phone: string
  loans: number
  totalExposure: string
  creditScore: number
  status: BorrowerStatus
}

export const borrowers: Borrower[] = [
  { initials: 'JL', color: '#4b9cf5', name: 'Jose Lim',    id: 'B-0234', email: 'jose.lim@email.com', phone: '+63 917 123 4567', loans: 2, totalExposure: '₱240,000', creditScore: 742, status: 'Good Standing' },
  { initials: 'AC', color: '#f5c542', name: 'Ana Cruz',     id: 'B-0189', email: 'ana.cruz@email.com', phone: '+63 918 234 5678', loans: 1, totalExposure: '₱45,000',  creditScore: 680, status: 'Watch'        },
  { initials: 'RT', color: '#f5604a', name: 'Ramon Torres', id: 'B-0156', email: 'ramon.t@email.com',  phone: '+63 919 345 6789', loans: 1, totalExposure: '₱380,000', creditScore: 510, status: 'Delinquent'   },
  { initials: 'SM', color: '#2dd4a0', name: 'Sofia Mendez', id: 'B-0312', email: 'sofia.m@email.com',  phone: '+63 920 456 7890', loans: 1, totalExposure: '₱95,000',  creditScore: 801, status: 'Excellent'    },
  { initials: 'KR', color: '#f5924a', name: 'Karl Reyes',   id: 'B-0278', email: 'karl.r@email.com',   phone: '+63 921 567 8901', loans: 3, totalExposure: '₱620,000', creditScore: 720, status: 'Good Standing' },
  { initials: 'MG', color: '#3dd6c8', name: 'Maria Garcia', id: 'B-0345', email: 'maria.g@email.com',  phone: '+63 922 678 9012', loans: 1, totalExposure: '₱80,000',  creditScore: 765, status: 'Good Standing' },
]

export const borrowerStatusConfig: Record<BorrowerStatus, { bg: string; text: string }> = {
  'Excellent':     { bg: 'rgba(45,212,160,0.15)', text: '#2dd4a0' },
  'Good Standing': { bg: 'rgba(75,156,245,0.12)', text: '#4b9cf5' },
  'Watch':         { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  'Delinquent':    { bg: 'rgba(245,96,74,0.12)',  text: '#f5604a' },
}

// ── Repayments Data ──────────────────────────────────────
export type RepaymentStatus = 'Paid' | 'Pending' | 'Overdue'

export interface Repayment {
  id: string
  loanId: string
  borrower: string
  amount: string
  due: string
  paid: string
  status: RepaymentStatus
  method: string
}

export const repayments: Repayment[] = [
  { id: '#PAY-5521', loanId: '#LN-0841', borrower: 'Jose Lim',     amount: '₱8,500',  due: 'May 15, 2026', paid: 'May 14, 2026', status: 'Paid',    method: 'GCash'         },
  { id: '#PAY-5520', loanId: '#LN-0811', borrower: 'Sofia Mendez', amount: '₱12,300', due: 'May 15, 2026', paid: 'May 15, 2026', status: 'Paid',    method: 'Bank Transfer' },
  { id: '#PAY-5519', loanId: '#LN-0792', borrower: 'Ana Cruz',     amount: '₱3,200',  due: 'May 15, 2026', paid: '—',            status: 'Pending', method: '—'             },
  { id: '#PAY-5518', loanId: '#LN-0734', borrower: 'Ramon Torres', amount: '₱25,000', due: 'Apr 30, 2026', paid: '—',            status: 'Overdue', method: '—'             },
  { id: '#PAY-5517', loanId: '#LN-0803', borrower: 'Karl Reyes',   amount: '₱18,700', due: 'May 10, 2026', paid: 'May 9, 2026',  status: 'Paid',    method: 'Maya'          },
  { id: '#PAY-5516', loanId: '#LN-0799', borrower: 'Maria Garcia', amount: '₱6,400',  due: 'May 10, 2026', paid: 'May 10, 2026', status: 'Paid',    method: 'GCash'         },
  { id: '#PAY-5515', loanId: '#LN-0788', borrower: 'Ben Soriano',  amount: '₱4,100',  due: 'May 8, 2026',  paid: '—',            status: 'Overdue', method: '—'             },
]

export const repaymentStatusConfig: Record<RepaymentStatus, { bg: string; text: string }> = {
  Paid:    { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0' },
  Pending: { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  Overdue: { bg: 'rgba(245,96,74,0.12)',  text: '#f5604a' },
}

export const repaymentSummary = [
  { label: 'Collected This Month', value: '₱1.08M',  color: 'var(--accent-green)'  },
  { label: 'Collection Rate',      value: '94.2%',   color: 'var(--accent-green)'  },
  { label: 'Overdue Amount',       value: '₱29,100', color: 'var(--accent-red)'    },
  { label: 'Pending Payments',     value: '₱3,200',  color: 'var(--accent-yellow)' },
]

// ── Risk Engine Data ─────────────────────────────────────
export type RiskProfileLevel = 'Critical' | 'High' | 'Medium' | 'Low'

export interface RiskProfile {
  borrower: string
  loanId: string
  score: number
  level: RiskProfileLevel
  exposure: string
  daysOverdue: number
  factors: string[]
}

export const riskProfiles: RiskProfile[] = [
  { borrower: 'Ramon Torres', loanId: '#LN-0734',  score: 38, level: 'Critical', exposure: '₱380,000', daysOverdue: 45, factors: ['45 days overdue', 'Score dropped 120pts', 'Missed 3 payments']      },
  { borrower: 'Ben Soriano',  loanId: '#APP-2237', score: 52, level: 'High',     exposure: '₱50,000',  daysOverdue: 8,  factors: ['8 days overdue', 'High DTI ratio', 'New borrower']                  },
  { borrower: 'Grace Tan',    loanId: '#APP-2238', score: 61, level: 'High',     exposure: '₱180,000', daysOverdue: 0,  factors: ['High debt load', 'Multiple applications', 'Employment gap']          },
  { borrower: 'Ana Cruz',     loanId: '#LN-0792',  score: 68, level: 'Medium',   exposure: '₱45,000',  daysOverdue: 0,  factors: ['Slow payer history', 'DTI at 42%']                                  },
  { borrower: 'Karl Reyes',   loanId: '#LN-0803',  score: 72, level: 'Medium',   exposure: '₱620,000', daysOverdue: 0,  factors: ['High total exposure', 'Multiple active loans']                      },
]

export const riskLevelConfig: Record<RiskProfileLevel, { bg: string; text: string; bar: string }> = {
  Critical: { bg: 'rgba(245,96,74,0.12)',  text: '#f5604a', bar: '#f5604a' },
  High:     { bg: 'rgba(245,146,74,0.12)', text: '#f5924a', bar: '#f5924a' },
  Medium:   { bg: 'rgba(245,197,66,0.12)', text: '#f5c542', bar: '#f5c542' },
  Low:      { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0', bar: '#2dd4a0' },
}

export const riskSummary = [
  { label: 'Critical Risk',  value: '1',    color: 'var(--accent-red)'    },
  { label: 'High Risk',      value: '2',    color: 'var(--accent-orange)' },
  { label: 'Medium Risk',    value: '2',    color: 'var(--accent-yellow)' },
  { label: 'Avg Risk Score', value: '58.2', color: 'var(--accent-blue)'   },
]

// ── Alerts Data ──────────────────────────────────────────
export type AlertPriority = 'Critical' | 'High' | 'Medium' | 'Info'

export interface Alert {
  id: number
  icon: LucideIcon
  iconColor: string
  iconBg: string
  title: string
  description: string
  time: string
  priority: AlertPriority
  resolved: boolean
}

export const allAlerts: Alert[] = [
  { id: 1, icon: AlertTriangle, iconColor: '#f5604a', iconBg: 'rgba(245,96,74,0.12)',   title: 'Payment 45 days overdue',    description: 'Ramon Torres — ₱380,000 housing loan (LN-0734). Legal action threshold reached. Immediate escalation required.', time: '2 hours ago', priority: 'Critical', resolved: false },
  { id: 2, icon: ClipboardList, iconColor: '#f5c542', iconBg: 'rgba(245,197,66,0.12)', title: '7 applications need review', description: 'Applications awaiting credit assessment. Oldest: APP-2235, submitted 3 days ago. SLA breach risk.',                time: '4 hours ago', priority: 'High',     resolved: false },
  { id: 3, icon: FileCheck,     iconColor: '#4b9cf5', iconBg: 'rgba(75,156,245,0.12)',  title: 'Regulatory report due',      description: 'BSP quarterly submission deadline is May 31, 2026. Report preparation should begin immediately.',                  time: 'Yesterday',   priority: 'Medium',   resolved: false },
  { id: 4, icon: Bell,          iconColor: '#f5924a', iconBg: 'rgba(245,146,74,0.12)', title: 'Credit score drop detected', description: 'Ana Cruz (B-0189) credit score dropped from 720 to 680. Loan LN-0792 under monitoring.',                         time: '2 days ago',  priority: 'High',     resolved: false },
  { id: 5, icon: CheckCircle,   iconColor: '#2dd4a0', iconBg: 'rgba(45,212,160,0.12)', title: 'Disbursement completed',     description: 'Sofia Mendez auto loan (LN-0811) of ₱95,000 successfully disbursed via bank transfer.',                          time: '3 days ago',  priority: 'Info',     resolved: true  },
  { id: 6, icon: CheckCircle,   iconColor: '#2dd4a0', iconBg: 'rgba(45,212,160,0.12)', title: 'Monthly target reached',     description: 'May 2026 disbursement target of ₱1M reached. Current: ₱1.08M (108% achievement).',                             time: '4 days ago',  priority: 'Info',     resolved: true  },
]

export const alertPriorityConfig: Record<AlertPriority, { bg: string; text: string }> = {
  Critical: { bg: 'rgba(245,96,74,0.15)',  text: '#f5604a' },
  High:     { bg: 'rgba(245,146,74,0.12)', text: '#f5924a' },
  Medium:   { bg: 'rgba(245,197,66,0.12)', text: '#f5c542' },
  Info:     { bg: 'rgba(45,212,160,0.12)', text: '#2dd4a0' },
}