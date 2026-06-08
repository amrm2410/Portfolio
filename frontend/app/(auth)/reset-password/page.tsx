'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'

function ResetPasswordForm() {
  const router = useRouter()
  const token  = useSearchParams().get('token')
  const [pw, setPw] = useState({ next: '', confirm: '' })
  const [error, setError] = useState('')

  const mutation = useMutation({
    mutationFn: () => api.post('/auth/reset-password', { token, newPassword: pw.next }),
    onSuccess:  () => setTimeout(() => router.push('/login'), 1500),
  })

  if (!token) {
    return (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Invalid or missing reset link.</p>
          <Link href="/forgot-password" style={{ ...link, display: 'inline-block', marginTop: '1rem' }}>Request a new one</Link>
        </div>
      </div>
    )
  }

  if (mutation.isSuccess) {
    return (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #bbf7d0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={heading}>Password reset</h1>
          <p style={{ ...sub, marginTop: '0.5rem' }}>Redirecting you to login…</p>
        </div>
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pw.next !== pw.confirm) { setError('Passwords do not match.'); return }
    if (pw.next.length < 8)    { setError('Must be at least 8 characters.'); return }
    setError('')
    mutation.mutate()
  }

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={logoMark}>AA</div>
          <h1 style={heading}>Reset password</h1>
          <p style={sub}>Choose a new password for your account</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={label}>New password</label>
            <input type="password" value={pw.next} onChange={e => setPw(p => ({ ...p, next: e.target.value }))} style={input} placeholder="At least 8 characters" required autoFocus />
          </div>
          <div>
            <label style={label}>Confirm password</label>
            <input type="password" value={pw.confirm} onChange={e => setPw(p => ({ ...p, confirm: e.target.value }))} style={input} placeholder="Repeat your password" required />
          </div>

          {error && <p style={{ fontSize: '0.8125rem', color: '#ef4444' }}>{error}</p>}
          {mutation.isError && !error && (
            <p style={errBox}>
              Link expired.{' '}
              <Link href="/forgot-password" style={link}>Request a new one.</Link>
            </p>
          )}

          <button type="submit" disabled={mutation.isPending} style={btn}>
            {mutation.isPending ? 'Resetting…' : 'Reset password'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Loading…</div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff', borderRadius: 24, padding: '2.5rem',
  boxShadow: '0 8px 30px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)',
}
const logoMark: React.CSSProperties = {
  width: 48, height: 48, borderRadius: 14,
  background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)',
  color: '#fff', fontWeight: 700, fontSize: '1rem',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
}
const heading: React.CSSProperties = { fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e', margin: '0 0 0.25rem' }
const sub: React.CSSProperties = { fontSize: '0.875rem', color: '#64748b', margin: 0 }
const label: React.CSSProperties = { display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#1a1a2e', marginBottom: '0.375rem' }
const input: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: '1px solid #e5e7eb',
  borderRadius: 12, padding: '0.625rem 0.875rem', fontSize: '0.875rem',
  color: '#1a1a2e', background: '#fafafa', outline: 'none',
}
const btn: React.CSSProperties = {
  width: '100%', padding: '0.75rem', borderRadius: 12, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', fontWeight: 600, fontSize: '0.9375rem', transition: 'opacity 0.2s',
}
const link: React.CSSProperties = { color: '#6366f1', fontWeight: 500, textDecoration: 'none' }
const errBox: React.CSSProperties = {
  background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10,
  padding: '0.625rem 0.875rem', fontSize: '0.875rem', color: '#dc2626',
}
