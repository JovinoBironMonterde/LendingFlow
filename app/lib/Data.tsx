// lib/data.ts

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
  { name: 'Housing', value: 29, color: '#2dd4a0' },
  { name: 'Auto', value: 19, color: '#f5c542' },
  { name: 'Personal', value: 14, color: '#f5924a' },
]

export const kpiData = [
  { label: 'Total Portfolio', value: '₱38.4M', change: '+12.4%', up: true },
  { label: 'Avg Loan Size', value: '₱135,200', change: '+3.1%', up: true },
  { label: 'Default Rate', value: '1.8%', change: '-0.3%', up: false },
  { label: 'Approval Rate', value: '67.3%', change: '+5.2%', up: true },
]