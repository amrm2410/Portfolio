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
        <p style={{ fontSize: '0.875rem', color: '#94a3b8' }}>User not found.</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 672, margin: '0 auto', padding: '2rem 1.5rem' }}>
      {/* Profile card */}
      <div style={card}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
          {data.avatarUrl ? (
            <Image
              src={data.avatarUrl} alt={data.username}
              width={72} height={72}
              style={{ borderRadius: '50%', objectFit: 'cover', width: 72, height: 72, flexShrink: 0 }}
            />
          ) : (
            <div style={avatarFallback}>{data.username.charAt(0).toUpperCase()}</div>
          )}

          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a1a2e', margin: '0 0 0.125rem' }}>@{data.username}</h1>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0 0 0.625rem' }}>{data.role}</p>
            {data.role === 'ADMIN' && (
              <span style={{ ...badge, background: 'rgba(168,85,247,0.1)', color: '#9333ea' }}>Admin</span>
            )}
          </div>
        </div>

        {/* Bio */}
        {data.bio && (
          <p style={{ marginTop: '1.25rem', fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{data.bio}</p>
        )}

        {/* Stats row */}
        <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <span style={{ fontSize: '0.8125rem', color: '#94a3b8' }}>
            Joined {new Date(data.createdAt).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
          </span>
        </div>

        {/* Social links */}
        {data.socialLinks && Object.entries(data.socialLinks).length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {Object.entries(data.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8125rem', fontWeight: 500, color: '#6366f1', textDecoration: 'none', background: 'rgba(99,102,241,0.08)', borderRadius: 8, padding: '0.25rem 0.75rem' }}
              >
                {platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff', borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  padding: '1.75rem',
}
const avatarFallback: React.CSSProperties = {
  width: 72, height: 72, borderRadius: '50%', flexShrink: 0,
  background: 'rgba(99,102,241,0.12)', color: '#6366f1',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase',
}
const badge: React.CSSProperties = {
  borderRadius: 20, padding: '0.125rem 0.625rem',
  fontSize: '0.75rem', fontWeight: 500,
  background: 'rgba(99,102,241,0.1)', color: '#6366f1',
}
