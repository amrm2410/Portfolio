import type React from 'react'

export const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(12px)',
  borderRadius: 24,
  padding: '2.5rem',
  boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
  border: '1px solid rgba(255,255,255,0.6)',
}

export const logoMark: React.CSSProperties = {
  width: 48, height: 48, borderRadius: 14,
  background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)',
  color: '#fff', fontWeight: 700, fontSize: '1rem',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
}

export const heading: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e', margin: '0 0 0.25rem' }
export const sub: React.CSSProperties     = { fontSize: '0.875rem', color: '#64748b', margin: 0 }
export const label: React.CSSProperties   = { display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#1a1a2e', marginBottom: '0.375rem' }

export const input: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: '1px solid #e5e7eb',
  borderRadius: 12, padding: '0.625rem 0.875rem', fontSize: '0.875rem',
  color: '#1a1a2e', background: 'rgba(255,255,255,0.8)', outline: 'none',
}

export const btn: React.CSSProperties = {
  width: '100%', padding: '0.75rem', borderRadius: 12, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', fontWeight: 600, fontSize: '0.9375rem', transition: 'opacity 0.2s',
}

export const link: React.CSSProperties     = { color: '#6366f1', fontWeight: 500, textDecoration: 'none' }
export const fieldErr: React.CSSProperties = { fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }
