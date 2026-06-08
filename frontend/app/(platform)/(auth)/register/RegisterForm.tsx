'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import api, { setAccessToken } from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import StatusBanner from '../components/StatusBanner'
import GoogleButton from '../components/GoogleButton'
import { makeAuthError } from '../utils/authErrors'
import { card, logoMark, heading, sub, label, input, btn, link, fieldErr } from '../styles/authCard'
import type { AuthResponse, RegisterRequest } from '@/types'

const schema = z.object({
  username: z.string().min(3, 'At least 3 characters').max(50),
  email:    z.string().email('Invalid email'),
  password: z.string().min(8, 'At least 8 characters'),
})
type FormValues = z.infer<typeof schema>

const authError = makeAuthError({ 409: 'Email or username already taken.' })

export default function RegisterForm() {
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
          <h1 style={heading}>Create your account</h1>
          <p style={sub}>Start learning today</p>
        </div>

        <GoogleButton action="sign up" />
        <div style={divider}><div style={dividerLine} /><span style={dividerText}>or</span><div style={dividerLine} /></div>

        <form onSubmit={handleSubmit(d => mutation.mutate(d))} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={label}>Username</label>
            <input {...register('username')} style={input} placeholder="amr_ahmed" autoComplete="username" />
            {errors.username && <p style={fieldErr}>{errors.username.message}</p>}
          </div>
          <div>
            <label style={label}>Email</label>
            <input type="email" {...register('email')} style={input} placeholder="you@example.com" autoComplete="email" />
            {errors.email && <p style={fieldErr}>{errors.email.message}</p>}
          </div>
          <div>
            <label style={label}>Password</label>
            <input type="password" {...register('password')} style={input} placeholder="At least 8 characters" autoComplete="new-password" />
            {errors.password && <p style={fieldErr}>{errors.password.message}</p>}
          </div>

          {mutation.isError   && <StatusBanner ok={false} msg={authError(mutation.error)} />}
          {mutation.isSuccess && <StatusBanner ok={true}  msg="Account created! Taking you in…" />}

          <button type="submit" disabled={mutation.isPending || mutation.isSuccess} style={{ ...btn, opacity: mutation.isPending || mutation.isSuccess ? 0.7 : 1 }}>
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

const divider: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.5rem 0' }
const dividerLine: React.CSSProperties = { flex: 1, height: 1, background: '#e5e7eb' }
const dividerText: React.CSSProperties = { fontSize: '0.8125rem', color: '#94a3b8', whiteSpace: 'nowrap' }
