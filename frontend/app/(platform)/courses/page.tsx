import { COURSES } from '@/constants/courses'
import CourseCard from '@/components/platform/CourseCard'

export const metadata = {
  title: 'Courses | Amr Abbas',
  description: 'Practical design courses built on real product work.',
}

export default function CoursesPage() {
  const published = COURSES.filter(c => c.isPublished)

  return (
    <main style={page}>
      <header style={headerStyle}>
        <span style={badge}>Design Academy</span>
        <h1 style={title}>All Courses</h1>
        <p style={sub}>Practical courses built on real product work — no theory, just skills you can use tomorrow.</p>
      </header>

      <div style={grid}>
        {published.map((course, i) => (
          <CourseCard key={course.id} course={course} priority={i < 3} />
        ))}
      </div>
    </main>
  )
}

const page: React.CSSProperties = {
  minHeight: '100vh',
  background: 'var(--bg-page, #f2f0ed)',
  padding: '4rem 1.5rem',
  maxWidth: 1100,
  margin: '0 auto',
}

const headerStyle: React.CSSProperties = {
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

const title: React.CSSProperties = {
  fontSize: '2.25rem',
  fontWeight: 700,
  color: '#1a1a2e',
  margin: '0.75rem 0 0.5rem',
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
