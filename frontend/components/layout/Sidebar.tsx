'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import { cn } from '@/lib/utils'
import {
  BookOpen, LayoutDashboard, Users, Calendar,
  Trophy, Settings, LogOut, Flame
} from 'lucide-react'

const navItems = [
  { href: '/dashboard',    label: 'Dashboard',   icon: LayoutDashboard },
  { href: '/courses',      label: 'Courses',     icon: BookOpen },
  { href: '/community',    label: 'Community',   icon: Users },
  { href: '/leaderboard',  label: 'Leaderboard', icon: Trophy },
  { href: '/calendar',     label: 'Calendar',    icon: Calendar },
  { href: '/settings',     label: 'Settings',    icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuthStore()

  return (
    <aside className="flex h-full w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white font-bold text-sm">
          AA
        </div>
        <span className="font-semibold text-gray-900 text-sm">Design Academy</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                active
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-gray-100 p-4">
        <div className="mb-3 flex items-center justify-between text-xs text-gray-500">
          <span className="font-medium text-gray-700">
            {user?.totalXp?.toLocaleString() ?? 0} XP
          </span>
          <span className="flex items-center gap-1">
            <Flame size={12} className={user?.streakDays ? 'text-orange-500' : 'text-gray-300'} />
            {user?.streakDays ?? 0}d streak
          </span>
        </div>
        <div className="flex items-center gap-3">
          {user?.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt={user.name}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-semibold uppercase">
              {user?.name?.charAt(0) ?? '?'}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-gray-900">{user?.name ?? 'Loading...'}</p>
            <p className="text-xs text-gray-500">Level {user?.level ?? 1}</p>
          </div>
          <button
            onClick={logout}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            title="Log out"
          >
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  )
}
