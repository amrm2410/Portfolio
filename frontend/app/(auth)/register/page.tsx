'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import api, { setAccessToken } from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import type { AuthResponse, RegisterRequest } from '@/types'

const schema = z.object({
  username: z.string().min(3, 'At least 3 characters').max(50),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'At least 8 characters'),
})
type FormValues = z.infer<typeof schema>

export default function RegisterPage() {
  const router = useRouter()
  const { setUser } = useAuthStore()

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: (data: RegisterRequest) =>
      api.post<AuthResponse>('/auth/register', data).then(r => r.data),
    onSuccess: ({ accessToken, user }) => {
      setAccessToken(accessToken)
      setUser(user)
      router.push('/dashboard')
    },
  })

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <div style={card}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={logoMark}>AA</div>
          <h1 style={heading}>Create your account</h1>
          <p style={sub}>Start learning today</p>
        </div>

        <form onSubmit={handleSubmit(d => mutation.mutate(d))} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={label}>Username</label>
            <input {...register('username')} style={input} placeholder="nour_ahmed" />
            {errors.username && <p style={err}>{errors.username.message}</p>}
          </div>

          <div>
            <label style={label}>Email</label>
            <input type="email" {...register('email')} style={input} placeholder="you@example.com" />
            {errors.email && <p style={err}>{errors.email.message}</p>}
          </div>

          <div>
            <label style={label}>Password</label>
            <input type="password" {...register('password')} style={input} placeholder="At least 8 characters" />
            {errors.password && <p style={err}>{errors.password.message}</p>}
          </div>

          {mutation.isError && <p style={errBox}>Something went wrong. Please try again.</p>}

          <button type="submit" disabled={mutation.isPending} style={btn}>
            {mutation.isPending ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
          Already have an account?{' '}
          <Link href="/login" style={link}>Sign in</Link>
        </p>
      </div>
    </div>
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
const err: React.CSSProperties = { fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem' }
const errBox: React.CSSProperties = {
  background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10,
  padding: '0.625rem 0.875rem', fontSize: '0.875rem', color: '#dc2626',
}
