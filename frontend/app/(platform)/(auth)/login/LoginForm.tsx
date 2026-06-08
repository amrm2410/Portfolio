'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import api, { setAccessToken } from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import StatusBanner from '../components/StatusBanner'
import GoogleButton from '../components/GoogleButton'
import { makeAuthError } from '../utils/authErrors'
import { card, logoMark, heading, sub, label, input, btn, link, fieldErr } from '../styles/authCard'
import type { AuthResponse, LoginRequest } from '@/types'

const schema = z.object({
  email:    z.string().email('Invalid email'),
  password: z.string().min(6, 'At least 6 characters'),
})
type FormValues = z.infer<typeof schema>

const authError = makeAuthError({ 401: 'Wrong email or password.', 400: 'Please check your inputs.' })

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
          <h1 style={heading}>Welcome back</h1>
          <p style={sub}>Sign in to your account</p>
        </div>

        <GoogleButton action="sign in" />
        <div style={divider}><div style={dividerLine} /><span style={dividerText}>or</span><div style={dividerLine} /></div>

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

          {mutation.isError   && <StatusBanner ok={false} msg={authError(mutation.error)} />}
          {mutation.isSuccess && <StatusBanner ok={true}  msg="Signed in! Redirecting…" />}

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

const divider: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '0.75rem',
  margin: '0.5rem 0', color: '#e5e7eb',
}
const dividerLine: React.CSSProperties = { flex: 1, height: 1, background: '#e5e7eb' }
const dividerText: React.CSSProperties = { fontSize: '0.8125rem', color: '#94a3b8', whiteSpace: 'nowrap' }
