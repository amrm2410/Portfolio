import { create } from 'zustand'
import { setAccessToken } from '@/lib/axios'
import api from '@/lib/axios'

export interface User {
  id: string
  email: string
  username: string
  avatarUrl: string | null
  bio: string | null
  role: 'USER' | 'ADMIN'
  socialLinks: Record<string, string> | null
  createdAt: string
}

interface AuthState {
  user: User | null
  setUser: (user: User) => void
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  setToken: (token) => setAccessToken(token),
  logout: () => {
    api.post('/auth/logout').catch(() => {})
    setAccessToken(null)
    set({ user: null })
  },
}))
