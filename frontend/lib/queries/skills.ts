import { supabase, SkillRow } from '../supabase';

export type SkillCategory = {
  id: string;
  title: string;
  icon: string | null;
  skills: SkillRow[];
};

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) throw error;
  const rows: SkillRow[] = data ?? [];

  const categoryMap = new Map<string, SkillCategory>();
  for (const row of rows) {
    if (!categoryMap.has(row.category_id)) {
      categoryMap.set(row.category_id, {
        id: row.category_id,
        title: row.category_title,
        icon: row.category_icon,
        skills: [],
      });
    }
    categoryMap.get(row.category_id)!.skills.push(row);
  }

  return Array.from(categoryMap.values());
}

export async function getAllSkills(): Promise<SkillRow[]> {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category_id')
    .order('display_order');

  if (error) throw error;
  return data ?? [];
}

export async function createSkill(skill: Omit<SkillRow, 'id'>): Promise<SkillRow> {
  const { data, error } = await supabase
    .from('skills')
    .insert(skill)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateSkill(id: string, updates: Partial<SkillRow>): Promise<SkillRow> {
  const { data, error } = await supabase
    .from('skills')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteSkill(id: string): Promise<void> {
  const { error } = await supabase.from('skills').delete().eq('id', id);
  if (error) throw error;
}
