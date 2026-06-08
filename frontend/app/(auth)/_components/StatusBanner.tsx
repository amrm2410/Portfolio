interface Props {
  ok: boolean
  msg: string
}

export default function StatusBanner({ ok, msg }: Props) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
      borderRadius: 10, padding: '0.625rem 0.875rem',
      background: ok ? '#f0fdf4' : '#fef2f2',
      border: `1px solid ${ok ? '#bbf7d0' : '#fecaca'}`,
      fontSize: '0.8125rem', color: ok ? '#16a34a' : '#dc2626',
    }}>
      <span style={{ flexShrink: 0, marginTop: 1 }}>{ok ? '✓' : '✕'}</span>
      <span>{msg}</span>
    </div>
  )
}
