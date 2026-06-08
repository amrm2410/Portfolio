'use client';

import { FormEvent, useEffect, useState, useCallback } from 'react';
import api from '@/lib/axios';
import type { SkillRow } from '@/types';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

const CATEGORY_IDS = ['design', 'analytics', 'development', 'delivery'];
const CATEGORY_TITLES: Record<string, string> = {
  design: 'Design & Prototyping',
  analytics: 'Analytics & Data',
  development: 'Working Knowledge',
  delivery: 'Delivery & Collaboration',
};
const CATEGORY_ICONS: Record<string, string> = {
  design: 'https://cdn.simpleicons.org/figma',
  analytics: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  development: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  delivery: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
};

export default function SkillsPage() {
  const [skills, setSkills] = useState<SkillRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<SkillRow | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [newSkill, setNewSkill] = useState({ category_id: 'design', name: '', icon_url: '' });

  const load = useCallback(async () => {
    const { data } = await api.get<SkillRow[]>('/admin/skills');
    setSkills(data);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function handleAdd(e: FormEvent) {
    e.preventDefault();
    const existing = skills.filter((s) => s.category_id === newSkill.category_id);
    try {
      await api.post('/admin/skills', {
        category_id: newSkill.category_id,
        category_title: CATEGORY_TITLES[newSkill.category_id],
        category_icon: CATEGORY_ICONS[newSkill.category_id],
        name: newSkill.name,
        icon_url: newSkill.icon_url || null,
        display_order: existing.length + 1,
      });
      setNewSkill({ ...newSkill, name: '', icon_url: '' });
      setToast({ message: 'Skill added.', type: 'success' });
      load();
    } catch {
      setToast({ message: 'Failed to add skill.', type: 'error' });
    }
  }

  async function confirmDelete() {
    if (!deleting) return;
    try {
      await api.delete(`/admin/skills/${deleting.id}`);
      setToast({ message: 'Skill removed.', type: 'success' });
      load();
    } catch {
      setToast({ message: 'Failed to delete.', type: 'error' });
    }
    setDeleting(null);
  }

  if (loading) return <div className={styles.loading}>Loading…</div>;

  const byCategory = CATEGORY_IDS.map((id) => ({
    id,
    title: CATEGORY_TITLES[id],
    skills: skills.filter((s) => s.category_id === id),
  }));

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Skills</h1>
      </div>

      <div className={styles.pageContent}>
        <div className={styles.card} style={{ marginBottom: 28 }}>
          <p className={styles.label} style={{ marginBottom: 12 }}>Add Skill</p>
          <form onSubmit={handleAdd} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <select
              className={styles.select}
              style={{ flex: '0 0 160px' }}
              value={newSkill.category_id}
              onChange={(e) => setNewSkill({ ...newSkill, category_id: e.target.value })}
            >
              {CATEGORY_IDS.map((id) => <option key={id} value={id}>{CATEGORY_TITLES[id]}</option>)}
            </select>
            <input
              className={styles.input}
              style={{ flex: 1, minWidth: 140 }}
              placeholder="Skill name"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              required
            />
            <input
              className={styles.input}
              style={{ flex: 2, minWidth: 200 }}
              placeholder="Icon URL (optional)"
              value={newSkill.icon_url}
              onChange={(e) => setNewSkill({ ...newSkill, icon_url: e.target.value })}
            />
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Add</button>
          </form>
        </div>

        {byCategory.map(({ id, title, skills: catSkills }) => (
          <div key={id} className={styles.card} style={{ marginBottom: 16 }}>
            <p className={styles.label} style={{ marginBottom: 12 }}>{title}</p>
            {catSkills.length === 0 ? (
              <p style={{ color: '#334155', fontSize: 13 }}>No skills in this category.</p>
            ) : (
              <table className={styles.table}>
                <tbody>
                  {catSkills.map((s) => (
                    <tr key={s.id}>
                      <td style={{ width: 40 }}>
                        {s.icon_url && <img src={s.icon_url} alt={s.name} style={{ width: 24, height: 24, objectFit: 'contain' }} />}
                      </td>
                      <td className={styles.tableTitle}>{s.name}</td>
                      <td style={{ color: '#475569', fontSize: 12 }}>{s.icon_url ?? 'No icon'}</td>
                      <td>
                        <div className={styles.tableActions}>
                          <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => setDeleting(s)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>

      {deleting && (
        <ConfirmDialog
          title="Remove skill?"
          text={`"${deleting.name}" will be removed.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleting(null)}
        />
      )}
      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
