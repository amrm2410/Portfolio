import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface User {
  id: string
  name: string
  email: string
  username: string
  avatarUrl: string | null
  role: 'LEARNER' | 'ADMIN'
  totalXp: number
  level: number
  streakDays: number
}

interface AuthState {
  user: User | null
  accessToken: string | null
  setUser: (user: User) => void
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      setUser: (user) => set({ user }),
      setToken: (token) => set({ accessToken: token }),
      logout: () => {
        localStorage.removeItem('access_token')
        set({ user: null, accessToken: null })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (s) => ({ accessToken: s.accessToken }),
    }
  )
)
