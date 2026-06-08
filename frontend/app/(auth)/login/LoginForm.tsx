'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import api, { setAccessToken } from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import type { AuthResponse, LoginRequest } from '@/types'

const schema = z.object({
  email:    z.string().email('Invalid email'),
  password: z.string().min(6, 'At least 6 characters'),
})
type FormValues = z.infer<typeof schema>

function authError(err: unknown): string {
  const status = (err as { response?: { status?: number; data?: { message?: string } } })?.response?.status
  const msg    = (err as { response?: { data?: { message?: string } } })?.response?.data?.message
  if (!status) return 'Cannot connect to server. Is the backend running?'
  if (status === 401) return 'Wrong email or password.'
  if (status === 400) return msg ?? 'Please check your inputs.'
  if (status >= 500) return 'Server error. Please try again in a moment.'
  return msg ?? 'Something went wrong.'
}

export default function LoginForm() {
  const router  = useRouter()
  const params  = useSearchParams()
  const { setUser } = useAuthStore()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: (data: LoginRequest) =>
      api.post<AuthResponse>('/auth/login', data).then(r => r.data),
    onSuccess: ({ accessToken, user }) => {
      setAccessToken(accessToken)
      setUser(user)
      router.push(params.get('next') ?? '/dashboard')
    },
  })

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={logoMark}>AA</div>
          <h1 style={heading}>Welcome back</h1>
          <p style={sub}>Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(d => mutation.mutate(d))} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={label}>Email</label>
            <input type="email" {...register('email')} style={input} placeholder="you@example.com" autoComplete="email" />
            {errors.email && <p style={fieldErr}>{errors.email.message}</p>}
          </div>

          <div>
            <label style={label}>Password</label>
            <input type="password" {...register('password')} style={input} placeholder="••••••••" autoComplete="current-password" />
            {errors.password && <p style={fieldErr}>{errors.password.message}</p>}
          </div>

          {mutation.isError && <StatusBanner ok={false} msg={authError(mutation.error)} />}
          {mutation.isSuccess && <StatusBanner ok={true} msg={`Signed in! Redirecting…`} />}

          <button type="submit" disabled={mutation.isPending || mutation.isSuccess} style={{ ...btn, opacity: mutation.isPending || mutation.isSuccess ? 0.7 : 1 }}>
            {mutation.isPending ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          No account?{' '}<Link href="/register" style={link}>Create one</Link>
        </p>
        <p style={{ marginTop: '0.75rem', textAlign: 'center', fontSize: '0.875rem' }}>
          <Link href="/forgot-password" style={{ ...link, color: '#94a3b8' }}>Forgot password?</Link>
        </p>
      </div>
    </div>
  )
}

function StatusBanner({ ok, msg }: { ok: boolean; msg: string }) {
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

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.92)',
  backdropFilter: 'blur(12px)',
  borderRadius: 24, padding: '2.5rem',
  boxShadow: '0 8px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.6)',
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
  color: '#1a1a2e', background: 'rgba(255,255,255,0.8)', outline: 'none',
}
const btn: React.CSSProperties = {
  width: '100%', padding: '0.75rem', borderRadius: 12, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', fontWeight: 600, fontSize: '0.9375rem', transition: 'opacity 0.2s',
}
const link: React.CSSProperties = { color: '#6366f1', fontWeight: 500, textDecoration: 'none' }
const fieldErr: React.CSSProperties = { fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }
