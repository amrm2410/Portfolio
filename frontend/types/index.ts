// ─── Auth ───────────────────────────────────────────────
export interface LoginRequest { email: string; password: string }
export interface RegisterRequest { name: string; email: string; password: string }
export interface AuthResponse { accessToken: string; user: import('@/store/auth').User }

// ─── Courses ────────────────────────────────────────────
export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'
export type LessonType = 'VIDEO' | 'READING' | 'EXERCISE' | 'QUIZ' | 'FILE'

export interface CourseListItem {
  id: string
  title: string
  slug: string
  tagline: string
  level: CourseLevel
  priceCents: number
  thumbnailUrl: string | null
  lessonCount: number
  durationMin: number
  isPublished: boolean
}

export interface Module {
  id: string
  title: string
  description: string
  sortOrder: number
  isPublished: boolean
  lessons: LessonMeta[]
}

export interface LessonMeta {
  id: string
  title: string
  slug: string
  type: LessonType
  durationMin: number
  isFreePreview: boolean
  isPublished: boolean
}

export interface Enrollment {
  id: string
  courseId: string
  courseTitle: string
  courseSlug: string
  courseThumbnailUrl: string | null
  progressPct: number
  lastCompletedLessonSlug: string | null
  enrolledAt: string
  completedAt: string | null
}

// ─── API wrapper ────────────────────────────────────────
export interface ApiResponse<T> { data: T }
export interface PaginatedResponse<T> { data: T[]; total: number; page: number; size: number }
