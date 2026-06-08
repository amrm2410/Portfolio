import Sidebar from '@/components/layout/Sidebar'
import { SessionSync } from '@/components/auth/SessionSync'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-page, #f2f0ed)' }}>
      <SessionSync />
      <Sidebar />
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}
