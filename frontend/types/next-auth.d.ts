import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    accessToken?: string
    platformUser?: any
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken?: string
    platformUser?: any
    error?: string
  }
}
