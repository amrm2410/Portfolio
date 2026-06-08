import { supabase, CaseStudyRow } from '../supabase';

export async function getCaseStudies(): Promise<CaseStudyRow[]> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .order('date', { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudyRow | null> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data;
}

export async function getCaseStudySlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from('case_studies')
    .select('slug');

  if (error) throw error;
  return (data ?? []).map((r) => r.slug);
}

export async function createCaseStudy(cs: Omit<CaseStudyRow, 'id' | 'created_at' | 'updated_at'>): Promise<CaseStudyRow> {
  const { data, error } = await supabase
    .from('case_studies')
    .insert(cs)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateCaseStudy(id: string, updates: Partial<CaseStudyRow>): Promise<CaseStudyRow> {
  const { data, error } = await supabase
    .from('case_studies')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteCaseStudy(id: string): Promise<void> {
  const { error } = await supabase.from('case_studies').delete().eq('id', id);
  if (error) throw error;
}
