'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const mutation = useMutation({
    mutationFn: () => api.post('/auth/forgot-password', { email }),
  })

  if (mutation.isSuccess) {
    return (
      <div className="w-full max-w-sm text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-900">Check your inbox</h1>
        <p className="mt-2 text-sm text-gray-500">
          We sent a reset link to <strong>{email}</strong>
        </p>
        <Link href="/login" className="mt-6 inline-block text-sm font-medium text-brand hover:underline">
          Back to login
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-sm">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white font-bold">
          AA
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">Forgot password</h1>
        <p className="mt-1 text-sm text-gray-500">Enter your email to receive a reset link</p>
      </div>

      <form onSubmit={e => { e.preventDefault(); mutation.mutate() }} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="you@example.com"
            required
            autoFocus
          />
        </div>

        {mutation.isError && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full rounded-lg bg-brand py-2 text-sm font-medium text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {mutation.isPending ? 'Sending…' : 'Send reset link'}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Remember it?{' '}
        <Link href="/login" className="font-medium text-brand hover:underline">Sign in</Link>
      </p>
    </div>
  )
}
