'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import StatusBanner from '../components/StatusBanner'
import { makeAuthError } from '../utils/authErrors'
import { card, logoMark, heading, sub, label, input, btn, link } from '../styles/authCard'

const authError = makeAuthError({ 404: 'No account found with that email.' })

const successCircle: React.CSSProperties = {
  width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #bbf7d0',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem',
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
            Didn&apos;t get it? Check spam or{' '}
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
