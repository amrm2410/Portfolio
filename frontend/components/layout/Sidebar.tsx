'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/store/auth'
import {
  BookOpen, LayoutDashboard, Users, Calendar,
  Trophy, Settings, LogOut
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
    <aside style={sidebar}>
      {/* Brand */}
      <div style={brandRow}>
        <div style={logoMark}>AA</div>
        <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: '0.875rem' }}>Design Academy</span>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '0.75rem 0.75rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link key={href} href={href} style={active ? navActive : navIdle}>
              <Icon size={16} />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* User footer */}
      <div style={footer}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {user?.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt={user.name}
              width={32}
              height={32}
              style={{ borderRadius: '50%', objectFit: 'cover', width: 32, height: 32 }}
            />
          ) : (
            <div style={initials}>{user?.username?.charAt(0)?.toUpperCase() ?? '?'}</div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#1a1a2e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', margin: 0 }}>
              {user?.username ?? 'Loading…'}
            </p>
            <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>{user?.role ?? 'USER'}</p>
          </div>
          <button onClick={logout} title="Log out" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', alignItems: 'center', padding: 4 }}>
            <LogOut size={15} />
          </button>
        </div>
      </div>
    </aside>
  )
}

const sidebar: React.CSSProperties = {
  display: 'flex', flexDirection: 'column',
  height: '100%', width: 256,
  background: '#ffffff',
  borderRight: '1px solid rgba(0,0,0,0.07)',
}
const brandRow: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '0.625rem',
  padding: '1.25rem 1.5rem',
  borderBottom: '1px solid rgba(0,0,0,0.06)',
}
const logoMark: React.CSSProperties = {
  width: 32, height: 32, borderRadius: 10,
  background: 'linear-gradient(145deg, #1a1a2e, #16213e, #0f3460)',
  color: '#fff', fontWeight: 700, fontSize: '0.75rem',
  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
}
const navBase: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: '0.625rem',
  borderRadius: 10, padding: '0.5rem 0.75rem',
  fontSize: '0.8125rem', fontWeight: 500,
  textDecoration: 'none', transition: 'background 0.15s',
}
const navActive: React.CSSProperties = {
  ...navBase,
  background: 'rgba(99,102,241,0.1)',
  color: '#6366f1',
}
const navIdle: React.CSSProperties = {
  ...navBase,
  color: '#64748b',
}
const footer: React.CSSProperties = {
  borderTop: '1px solid rgba(0,0,0,0.06)',
  padding: '1rem',
}
const initials: React.CSSProperties = {
  width: 32, height: 32, borderRadius: '50%',
  background: 'rgba(99,102,241,0.12)',
  color: '#6366f1', fontSize: '0.75rem', fontWeight: 700,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  flexShrink: 0, textTransform: 'uppercase',
}
