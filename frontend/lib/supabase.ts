import { createBrowserClient } from '@supabase/ssr';

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
);

export type Database = {
  projects: ProjectRow;
  case_studies: CaseStudyRow;
  skills: SkillRow;
  settings: SettingRow;
  social_links: SocialLinkRow;
  blogs: BlogRow;
  videos: VideoRow;
  articles: ArticleRow;
};

export type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  category: string;
  tags: string[];
  cover_image: string | null;
  icon: string | null;
  link: string | null;
  project_link: string | null;
  has_details: boolean;
  is_featured: boolean;
  coming_soon: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type CaseStudyRow = {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  client: string | null;
  role: string | null;
  duration: string | null;
  tags: string[];
  cover_image: string | null;
  date: string | null;
  content: string;
  product: string | null;
  users: string | null;
  problem: string | null;
  constraints: string | null;
  my_role: string | null;
  outcome: string | null;
  created_at: string;
  updated_at: string;
};

export type SkillRow = {
  id: string;
  category_id: string;
  category_title: string;
  category_icon: string | null;
  name: string;
  icon_url: string | null;
  display_order: number;
};

export type SettingRow = {
  key: string;
  value: string;
  updated_at: string;
};

export type SocialLinkRow = {
  id: string;
  platform: string;
  url: string;
  icon: string | null;
  display_order: number;
};

export type BlogRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export type VideoRow = {
  id: string;
  title: string;
  description: string | null;
  type: 'embed' | 'upload';
  url: string | null;
  file_path: string | null;
  thumbnail: string | null;
  tags: string[];
  category: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ArticleRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};
