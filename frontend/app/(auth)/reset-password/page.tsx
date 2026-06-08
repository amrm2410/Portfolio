'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'

function ResetPasswordForm() {
  const router = useRouter()
  const token  = useSearchParams().get('token')

  const [pw, setPw]       = useState({ next: '', confirm: '' })
  const [error, setError] = useState('')

  const mutation = useMutation({
    mutationFn: () => api.post('/auth/reset-password', { token, newPassword: pw.next }),
    onSuccess:  () => setTimeout(() => router.push('/login'), 1500),
  })

  if (!token) {
    return (
      <div className="w-full max-w-sm text-center">
        <p className="text-sm text-gray-500">Invalid or missing reset link.</p>
        <Link href="/forgot-password" className="mt-4 inline-block text-sm font-medium text-brand hover:underline">
          Request a new one
        </Link>
      </div>
    )
  }

  if (mutation.isSuccess) {
    return (
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Password reset</h1>
        <p className="mt-2 text-sm text-gray-500">Redirecting you to login…</p>
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
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white font-bold">
          AA
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Reset password</h1>
        <p className="mt-1 text-sm text-gray-500">Choose a new password for your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">New password</label>
          <input
            type="password"
            value={pw.next}
            onChange={e => setPw(p => ({ ...p, next: e.target.value }))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="At least 8 characters"
            required
            autoFocus
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Confirm password</label>
          <input
            type="password"
            value={pw.confirm}
            onChange={e => setPw(p => ({ ...p, confirm: e.target.value }))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="Repeat your password"
            required
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {mutation.isError && !error && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            Link expired.{' '}
            <Link href="/forgot-password" className="font-medium underline">Request a new one.</Link>
          </p>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-lg bg-brand py-2 text-sm font-medium text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {mutation.isPending ? 'Resetting…' : 'Reset password'}
        </button>
      </form>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-sm text-gray-400">Loading…</div>}>
      <ResetPasswordForm />
    </Suspense>
  )
}
