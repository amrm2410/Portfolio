'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useAuthStore } from '@/store/auth'
import type { CourseListItem, CourseLevel } from '@/types'

interface Props {
  course: CourseListItem
  priority?: boolean
}

const LEVEL_STYLES: Record<CourseLevel, { bg: string; color: string; label: string }> = {
  BEGINNER:     { bg: 'rgba(99,102,241,0.1)',  color: '#6366f1', label: 'Beginner'     },
  INTERMEDIATE: { bg: 'rgba(245,158,11,0.1)',  color: '#d97706', label: 'Intermediate' },
  ADVANCED:     { bg: 'rgba(168,85,247,0.1)',  color: '#9333ea', label: 'Advanced'     },
}

function formatDuration(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  return h > 0 ? (m > 0 ? `${h}h ${m}m` : `${h}h`) : `${m}m`
}

export default function CourseCard({ course, priority }: Props) {
  const router = useRouter()
  const user   = useAuthStore(s => s.user)
  const lvl    = LEVEL_STYLES[course.level]

  function handleEnroll() {
    if (user) router.push(`/courses/${course.slug}`)
    else router.push(`/register?next=/courses/${course.slug}`)
  }

  return (
    <div style={card}>
      {/* Thumbnail */}
      <div style={thumb}>
        {course.thumbnailUrl ? (
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={priority}
          />
        ) : (
          <div style={thumbPlaceholder}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        )}
      </div>

      {/* Body */}
      <div style={body}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.625rem' }}>
          <span style={{ ...badge, background: lvl.bg, color: lvl.color }}>{lvl.label}</span>
          <span style={price}>${(course.priceCents / 100).toFixed(0)}</span>
        </div>

        <h3 style={title}>{course.title}</h3>
        <p style={tagline}>{course.tagline}</p>

        <div style={meta}>
          <span>{course.lessonCount} lessons</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>{formatDuration(course.durationMin)}</span>
        </div>

        <button onClick={handleEnroll} style={enrollBtn}>
          Enroll Now
        </button>
      </div>
    </div>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s, box-shadow 0.2s',
}

const thumb: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 160,
  background: 'rgba(99,102,241,0.05)',
  flexShrink: 0,
}

const thumbPlaceholder: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const body: React.CSSProperties = {
  padding: '1.25rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
}

const badge: React.CSSProperties = {
  borderRadius: 20,
  padding: '0.125rem 0.625rem',
  fontSize: '0.6875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}

const price: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: '#1a1a2e',
}

const title: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 700,
  color: '#1a1a2e',
  margin: '0 0 0.375rem',
  lineHeight: 1.3,
}

const tagline: React.CSSProperties = {
  fontSize: '0.8125rem',
  color: '#64748b',
  margin: '0 0 0.875rem',
  lineHeight: 1.5,
  flex: 1,
}

const meta: React.CSSProperties = {
  display: 'flex',
  gap: '0.5rem',
  fontSize: '0.75rem',
  color: '#94a3b8',
  marginBottom: '1rem',
}

const enrollBtn: React.CSSProperties = {
  width: '100%',
  padding: '0.625rem',
  borderRadius: 12,
  border: 'none',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '0.875rem',
  transition: 'opacity 0.2s',
}
