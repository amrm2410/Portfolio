import { supabase, SettingRow, SocialLinkRow } from '../supabase';

export async function getSettings(): Promise<Record<string, string>> {
  const { data, error } = await supabase.from('settings').select('*');
  if (error) throw error;
  return Object.fromEntries((data ?? []).map((r: SettingRow) => [r.key, r.value]));
}

export async function getSetting(key: string): Promise<string | null> {
  const { data, error } = await supabase
    .from('settings')
    .select('value')
    .eq('key', key)
    .single();

  if (error) return null;
  return data?.value ?? null;
}

export async function upsertSetting(key: string, value: string): Promise<void> {
  const { error } = await supabase
    .from('settings')
    .upsert({ key, value }, { onConflict: 'key' });

  if (error) throw error;
}

export async function upsertSettings(settings: Record<string, string>): Promise<void> {
  const rows = Object.entries(settings).map(([key, value]) => ({ key, value }));
  const { error } = await supabase
    .from('settings')
    .upsert(rows, { onConflict: 'key' });

  if (error) throw error;
}

export async function getSocialLinks(): Promise<SocialLinkRow[]> {
  const { data, error } = await supabase
    .from('social_links')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) throw error;
  return data ?? [];
}

export async function upsertSocialLink(link: Omit<SocialLinkRow, 'id'> & { id?: string }): Promise<SocialLinkRow> {
  const { data, error } = await supabase
    .from('social_links')
    .upsert(link)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteSocialLink(id: string): Promise<void> {
  const { error } = await supabase.from('social_links').delete().eq('id', id);
  if (error) throw error;
}
