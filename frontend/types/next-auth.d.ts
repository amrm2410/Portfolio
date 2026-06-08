import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface User {
    accessToken?: string
    platformUser?: any
  }
  interface Session {
    accessToken?: string
    platformUser?: any
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    platformUser?: any
  }
}
