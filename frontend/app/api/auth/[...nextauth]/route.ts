import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import api from '@/lib/axios'

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        try {
          const { data } = await api.post('/auth/google', {
            googleToken: account.id_token,
            email: user.email,
            name: user.name,
            avatarUrl: user.image,
          })
          user.accessToken = data.accessToken
          user.platformUser = data.user
          return true
        } catch {
          return false
        }
      }
      return true
    },
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken
        token.platformUser = user.platformUser
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

export { handler as GET, handler as POST }
