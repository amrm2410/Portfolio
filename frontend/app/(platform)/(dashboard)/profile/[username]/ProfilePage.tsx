'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import api from '@/lib/axios'

interface PublicProfile {
  id: string
  username: string
  bio: string | null
  avatarUrl: string | null
  role: 'USER' | 'ADMIN'
  socialLinks: Record<string, string> | null
  createdAt: string
}

export default function ProfilePage() {
  const { username } = useParams<{ username: string }>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['profile', username],
    queryFn:  () => api.get<PublicProfile>(`/users/${username}`).then(r => r.data),
    enabled:  !!username,
  })

  if (isLoading) {
    return (
      <div style={{ display: 'flex', height: 256, alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
        Loading…
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div style={{ display: 'flex', height: 256, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1a1a2e' }}>User not found</p>
        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>The profile @{username} does not exist.</p>
      </div>
    )
  }

  const sl = data.socialLinks ?? {}
  const socialEntries: { key: string; url: string; icon: React.ReactNode; label: string }[] = [
    sl['twitter']  ? { key: 'twitter',  url: sl['twitter'],  icon: <TwitterIcon />,  label: 'Twitter'  } : null,
    sl['linkedin'] ? { key: 'linkedin', url: sl['linkedin'], icon: <LinkedinIcon />, label: 'LinkedIn' } : null,
    sl['website']  ? { key: 'website',  url: sl['website'],  icon: <GlobeIcon />,    label: 'Website'  } : null,
    ...Object.entries(sl)
      .filter(([k]) => !['twitter', 'linkedin', 'website'].includes(k))
      .map(([k, v]) => ({ key: k, url: v, icon: <GlobeIcon />, label: k })),
  ].filter(Boolean) as { key: string; url: string; icon: React.ReactNode; label: string }[]

  return (
    <div style={{ maxWidth: 672, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <div style={card}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
          {data.avatarUrl ? (
            <Image
              src={data.avatarUrl} alt={data.username}
              width={96} height={96}
              style={{ borderRadius: '50%', objectFit: 'cover', width: 96, height: 96, flexShrink: 0 }}
            />
          ) : (
            <div style={avatarFallback}>{data.username.charAt(0).toUpperCase()}</div>
          )}

          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: '1.375rem', fontWeight: 700, color: '#1a1a2e', margin: '0 0 0.125rem', lineHeight: 1.2 }}>
              @{data.username}
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.625rem' }}>
              Member since {new Date(data.createdAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </p>
            {data.role === 'ADMIN' && (
              <span style={adminBadge}>Admin</span>
            )}
          </div>
        </div>

        {/* Bio */}
        {data.bio && (
          <p style={{ marginTop: '1.25rem', fontSize: '0.9375rem', color: '#475569', lineHeight: 1.65 }}>
            {data.bio}
          </p>
        )}

        {/* Social links */}
        {socialEntries.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1.25rem', paddingTop: '1.125rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {socialEntries.map(({ key, url, icon, label }) => (
              <a
                key={key}
                href={url.startsWith('http') ? url : `https://${url}`}
                target="_blank"
                rel="noopener noreferrer"
                style={socialLink}
              >
                <span style={{ display: 'flex', alignItems: 'center', color: '#6366f1' }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff', borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  padding: '1.75rem',
}
const avatarFallback: React.CSSProperties = {
  width: 96, height: 96, borderRadius: '50%', flexShrink: 0,
  background: 'rgba(99,102,241,0.12)', color: '#6366f1',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '2rem', fontWeight: 700, textTransform: 'uppercase',
}
const adminBadge: React.CSSProperties = {
  borderRadius: 20, padding: '0.125rem 0.625rem',
  fontSize: '0.75rem', fontWeight: 500,
  background: 'rgba(168,85,247,0.1)', color: '#9333ea',
}
const socialLink: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
  fontSize: '0.8125rem', fontWeight: 500, color: '#6366f1',
  textDecoration: 'none', background: 'rgba(99,102,241,0.08)',
  borderRadius: 8, padding: '0.3125rem 0.75rem',
}
