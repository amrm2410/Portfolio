'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import StatusBanner from '../_components/StatusBanner'

function authError(err: unknown): string {
  const status = (err as { response?: { status?: number } })?.response?.status
  if (!status)     return 'Cannot connect to server. Is the backend running?'
  if (status === 404) return 'No account found with that email.'
  if (status >= 500) return 'Server error. Please try again in a moment.'
  return 'Could not send reset link. Try again.'
}

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')

  const mutation = useMutation({
    mutationFn: () => api.post('/auth/forgot-password', { email }),
  })

  if (mutation.isSuccess) {
    return (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={successCircle}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={heading}>Check your inbox</h1>
          <p style={{ ...sub, marginTop: '0.5rem' }}>
            Reset link sent to <strong style={{ color: '#1a1a2e' }}>{email}</strong>
          </p>
          <p style={{ ...sub, marginTop: '0.375rem', fontSize: '0.75rem' }}>
            Didn't get it? Check spam or{' '}
            <button onClick={() => mutation.reset()} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6366f1', fontWeight: 500, fontSize: '0.75rem', padding: 0 }}>
              try again
            </button>
          </p>
          <Link href="/login" style={{ ...link, display: 'inline-block', marginTop: '1.5rem' }}>← Back to login</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={logoMark}>AA</div>
          <h1 style={heading}>Forgot password</h1>
          <p style={sub}>Enter your email to receive a reset link</p>
        </div>

        <form onSubmit={e => { e.preventDefault(); mutation.mutate() }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={label}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={input} placeholder="you@example.com" required autoFocus autoComplete="email" />
          </div>

          {mutation.isError && <StatusBanner ok={false} msg={authError(mutation.error)} />}

          <button type="submit" disabled={mutation.isPending} style={{ ...btn, opacity: mutation.isPending ? 0.7 : 1 }}>
            {mutation.isPending ? 'Sending…' : 'Send reset link'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          Remember it?{' '}<Link href="/login" style={link}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
  borderRadius: 24, padding: '2.5rem',
  boxShadow: '0 8px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.6)',
}
const logoMark: React.CSSProperties = {
  width: 48, height: 48, borderRadius: 14,
  background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)',
  color: '#fff', fontWeight: 700, fontSize: '1rem',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
}
const successCircle: React.CSSProperties = {
  width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #bbf7d0',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem',
}
const heading: React.CSSProperties  = { fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e', margin: '0 0 0.25rem' }
const sub: React.CSSProperties      = { fontSize: '0.875rem', color: '#64748b', margin: 0 }
const label: React.CSSProperties    = { display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#1a1a2e', marginBottom: '0.375rem' }
const input: React.CSSProperties    = { width: '100%', boxSizing: 'border-box', border: '1px solid #e5e7eb', borderRadius: 12, padding: '0.625rem 0.875rem', fontSize: '0.875rem', color: '#1a1a2e', background: 'rgba(255,255,255,0.8)', outline: 'none' }
const btn: React.CSSProperties      = { width: '100%', padding: '0.75rem', borderRadius: 12, border: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', fontWeight: 600, fontSize: '0.9375rem', transition: 'opacity 0.2s' }
const link: React.CSSProperties     = { color: '#6366f1', fontWeight: 500, textDecoration: 'none' }
