'use client'

import Link from 'next/link'
import { COURSES } from '@/constants/courses'
import CourseCard from '@/components/platform/CourseCard'

const MAX_HOME_COURSES = 6

export default function Courses() {
  const visible = COURSES.filter(c => c.isPublished).slice(0, MAX_HOME_COURSES)

  return (
    <section id="courses" style={section}>
      <div className="container">
        {/* Header */}
        <div style={header}>
          <div style={badge}>Design Academy</div>
          <h2 className="section-title" style={{ margin: '0.75rem 0 0.5rem' }}>
            Learn <span>Design</span> &amp; Ship
          </h2>
          <p style={sub}>
            Practical courses built on real product work — no theory, just skills you can use tomorrow.
          </p>
        </div>

        {/* Grid */}
        <div style={grid}>
          {visible.map((course, i) => (
            <CourseCard key={course.id} course={course} priority={i < 3} />
          ))}
        </div>

        {/* Footer CTA */}
        {COURSES.length > MAX_HOME_COURSES && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/courses" style={browseLink}>Browse all courses →</Link>
          </div>
        )}
      </div>
    </section>
  )
}

const section: React.CSSProperties = {
  padding: '5rem 0',
}

const header: React.CSSProperties = {
  textAlign: 'center',
  marginBottom: '3rem',
}

const badge: React.CSSProperties = {
  display: 'inline-block',
  background: 'rgba(99,102,241,0.1)',
  color: '#6366f1',
  borderRadius: 20,
  padding: '0.25rem 0.875rem',
  fontSize: '0.8125rem',
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
}

const sub: React.CSSProperties = {
  maxWidth: 520,
  margin: '0 auto',
  color: '#64748b',
  fontSize: '1rem',
  lineHeight: 1.6,
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '1.5rem',
}

const browseLink: React.CSSProperties = {
  color: '#6366f1',
  fontWeight: 600,
  fontSize: '0.9375rem',
  textDecoration: 'none',
}
