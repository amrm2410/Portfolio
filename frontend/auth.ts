import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === 'google') {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              googleToken: account.id_token,
              email: profile?.email,
              name: profile?.name,
              avatarUrl: (profile as any)?.picture,
            }),
          })
          if (!res.ok) throw new Error('Backend auth failed')
          const data = await res.json()
          token.accessToken = data.accessToken
          token.platformUser = data.user
        } catch {
          token.error = 'GoogleAuthError'
        }
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.platformUser = token.platformUser
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
})
