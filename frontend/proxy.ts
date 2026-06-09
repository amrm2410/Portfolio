import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATHS = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/courses',
  '/projects',
  '/enterprise-patterns',
]
const ADMIN_PATHS = ['/admin']
const PLATFORM_PATHS = ['/dashboard', '/community', '/leaderboard', '/calendar', '/settings', '/checkout']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('access_token')?.value

  const isPublic = PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))
  const isAdmin  = ADMIN_PATHS.some((p) => pathname.startsWith(p))
  const isPlatform = PLATFORM_PATHS.some((p) => pathname.startsWith(p))

  if ((isPlatform || isAdmin) && !isPublic && !token) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
}
