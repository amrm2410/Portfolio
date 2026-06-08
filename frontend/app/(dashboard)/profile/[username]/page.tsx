'use client'

import { useParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import api from '@/lib/axios'

interface PublicProfile {
  id: string
  username: string
  name: string
  bio: string | null
  avatarUrl: string | null
  level: number
  totalXp: number
  role: 'LEARNER' | 'ADMIN'
  socialLinks: { platform: string; url: string }[]
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
      <div className="flex h-64 items-center justify-center text-sm text-gray-400">
        Loading…
      </div>
    )
  }

  if (isError || !data) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-2">
        <p className="text-sm text-gray-500">User not found.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          {data.avatarUrl ? (
            <Image
              src={data.avatarUrl}
              alt={data.name}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover"
            />
          ) : (
            <div className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-2xl font-semibold uppercase">
              {data.name.charAt(0)}
            </div>
          )}

          <div>
            <h1 className="text-xl font-semibold text-gray-900">{data.name}</h1>
            <p className="text-sm text-gray-500">@{data.username}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                Level {data.level}
              </span>
              {data.role === 'ADMIN' && (
                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                  Admin
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        {data.bio && (
          <p className="mt-5 text-sm text-gray-600 leading-relaxed">{data.bio}</p>
        )}

        {/* Stats */}
        <div className="mt-5 flex items-center gap-5 text-xs text-gray-500">
          <span className="font-medium text-gray-700">{data.totalXp.toLocaleString()} XP</span>
          <span>
            Joined{' '}
            {new Date(data.createdAt).toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>

        {/* Social links */}
        {data.socialLinks.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
            {data.socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-brand hover:underline"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
