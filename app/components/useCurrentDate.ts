// C:\xampp\htdocs\lending_app\app\components\useCurrentDate.ts

function getQuarter(month: number) {
  if (month < 3) return 'Q1'
  if (month < 6) return 'Q2'
  if (month < 9) return 'Q3'
  return 'Q4'
}

export function useCurrentDate() {
  const now = new Date()
  const dateLabel = now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const quarter = getQuarter(now.getMonth())
  return { dateLabel, quarter, now }
}