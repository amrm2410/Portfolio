'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import StatusBanner from '../components/StatusBanner'
import { makeAuthError } from '../utils/authErrors'
import { card, logoMark, heading, sub, label, input, btn, link } from '../styles/authCard'

const authError = makeAuthError({ 400: 'Invalid or expired reset link.', 401: 'Invalid or expired reset link.' })

const successCircle: React.CSSProperties = {
  width: 56, height: 56, borderRadius: '50%', background: '#f0fdf4', border: '1px solid #bbf7d0',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem',
}
const failCircle: React.CSSProperties = {
  width: 56, height: 56, borderRadius: '50%', background: '#fef2f2', border: '1px solid #fecaca',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem',
}

export default function ResetPasswordForm() {
  const router = useRouter()
  const token  = useSearchParams().get('token')
  const [pw, setPw] = useState({ next: '', confirm: '' })
  const [localErr, setLocalErr] = useState('')

  const mutation = useMutation({
    mutationFn: () => api.post('/auth/reset-password', { token, newPassword: pw.next }),
    onSuccess:  () => setTimeout(() => router.push('/login'), 2000),
  })

  if (!token) {
    return (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={failCircle}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h1 style={heading}>Invalid link</h1>
          <p style={{ ...sub, marginTop: '0.5rem' }}>This reset link is missing or malformed.</p>
          <Link href="/forgot-password" style={{ ...link, display: 'inline-block', marginTop: '1.25rem' }}>
            Request a new link
          </Link>
        </div>
      </div>
    )
  }

  if (mutation.isSuccess) {
    return (
      <div style={{ width: '100%', maxWidth: 400 }}>
        <div style={{ ...card, textAlign: 'center' }}>
          <div style={successCircle}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#16a34a" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 style={heading}>Password reset!</h1>
          <p style={{ ...sub, marginTop: '0.5rem' }}>Redirecting you to login…</p>
        </div>
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (pw.next.length < 8)     { setLocalErr('Must be at least 8 characters.'); return }
    if (pw.next !== pw.confirm) { setLocalErr('Passwords do not match.'); return }
    setLocalErr('')
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
            <input type="password" value={pw.next} onChange={e => setPw(p => ({ ...p, next: e.target.value }))} style={input} placeholder="At least 8 characters" required autoFocus autoComplete="new-password" />
          </div>
          <div>
            <label style={label}>Confirm password</label>
            <input type="password" value={pw.confirm} onChange={e => setPw(p => ({ ...p, confirm: e.target.value }))} style={input} placeholder="Repeat your password" required autoComplete="new-password" />
          </div>

          {localErr                  && <StatusBanner ok={false} msg={localErr} />}
          {mutation.isError && !localErr && <StatusBanner ok={false} msg={authError(mutation.error)} />}

          <button type="submit" disabled={mutation.isPending} style={{ ...btn, opacity: mutation.isPending ? 0.7 : 1 }}>
            {mutation.isPending ? 'Resetting…' : 'Reset password'}
          </button>
        </form>

        <p style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.8125rem', color: '#94a3b8' }}>
          Remembered it?{' '}<Link href="/login" style={link}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
