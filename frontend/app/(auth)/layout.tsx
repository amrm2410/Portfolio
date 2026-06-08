export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f2f0ed', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      {children}
    </div>
  )
}
