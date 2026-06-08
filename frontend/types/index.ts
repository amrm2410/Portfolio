// ─── Admin entity types ─────────────────────────────────
export interface ProjectRow {
  id: string
  slug: string
  title: string
  description: string | null
  category: string
  tags: string[]
  cover_image: string | null
  icon: string | null
  link: string | null
  project_link: string | null
  has_details: boolean
  is_featured: boolean
  coming_soon: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface CaseStudyRow {
  id: string
  slug: string
  title: string
  description: string | null
  client: string | null
  role: string | null
  duration: string | null
  tags: string[]
  cover_image: string | null
  date: string | null
  content: string
  product: string | null
  users: string | null
  problem: string | null
  constraints: string | null
  my_role: string | null
  outcome: string | null
  created_at: string
  updated_at: string
}

export interface SkillRow {
  id: string
  category_id: string
  category_title: string
  category_icon: string
  name: string
  icon_url: string | null
  display_order: number
}

export interface SocialLinkRow {
  id: string
  platform: string
  url: string
  icon: string
  display_order: number
}

// ─── Auth ───────────────────────────────────────────────
export interface LoginRequest { email: string; password: string }
export interface RegisterRequest { username: string; email: string; password: string }
export interface AuthResponse { accessToken: string; expiresIn: number; user: import('@/store/auth').User }

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
