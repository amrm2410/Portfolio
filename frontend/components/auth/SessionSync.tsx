'use client'
import { useSession } from 'next-auth/react'
import { useAuthStore } from '@/store/auth'
import { useEffect } from 'react'
import { setAccessToken } from '@/lib/axios'

export function SessionSync() {
  const { data: session } = useSession()
  const { setUser } = useAuthStore()

  useEffect(() => {
    if (session?.accessToken && session?.platformUser) {
      localStorage.setItem('access_token', session.accessToken)
      setAccessToken(session.accessToken)
      setUser(session.platformUser)
    }
  }, [session])

  return null
}
