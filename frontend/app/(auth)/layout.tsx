import ParticlesBackground from '@/components/common/ParticlesBackground'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-page, #f2f0ed)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}
