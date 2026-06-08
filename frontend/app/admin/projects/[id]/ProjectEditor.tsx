'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { createProject, updateProject } from '@/lib/queries/projects';
import { supabase, ProjectRow, CaseStudyRow } from '@/lib/supabase';
import TagInput from '@/components/admin/TagInput';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

const CATEGORIES = ['Enterprise', 'UX Case Study', 'Landing Page', 'E-commerce', 'Mobile Apps', 'Websites'];

const EMPTY_PROJECT: Omit<ProjectRow, 'id' | 'created_at' | 'updated_at'> = {
  slug: '', title: '', description: '', category: 'Enterprise',
  tags: [], cover_image: '', icon: '', link: '', project_link: '',
  has_details: false, is_featured: false, coming_soon: false, display_order: 0,
};

const EMPTY_CS: Omit<CaseStudyRow, 'id' | 'created_at' | 'updated_at'> = {
  slug: '', title: '', description: '', client: '', role: '', duration: '',
  tags: [], cover_image: '', date: null, content: '',
  product: '', users: '', problem: '', constraints: '', my_role: '', outcome: '',
};

type Tab = 'project' | 'cs-meta' | 'cs-content' | 'cs-summary';

export default function ProjectEditor() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === 'new';

  const [tab, setTab] = useState<Tab>('project');
  const [form, setForm] = useState(EMPTY_PROJECT);
  const [cs, setCs] = useState(EMPTY_CS);
  const [existingId, setExistingId] = useState<string | null>(null);
  const [csId, setCsId] = useState<string | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (isNew) return;
    async function load() {
      const { data: p } = await supabase.from('projects').select('*').eq('id', params.id as string).single();
      if (p) {
        setExistingId(p.id);
        setForm({
          slug: p.slug, title: p.title, description: p.description ?? '',
          category: p.category, tags: p.tags ?? [], cover_image: p.cover_image ?? '',
          icon: p.icon ?? '', link: p.link ?? '', project_link: p.project_link ?? '',
          has_details: p.has_details, is_featured: p.is_featured,
          coming_soon: p.coming_soon, display_order: p.display_order,
        });

        if (p.has_details) {
          const { data: csd } = await supabase.from('case_studies').select('*').eq('slug', p.slug).single();
          if (csd) {
            setCsId(csd.id);
            setCs({
              slug: csd.slug, title: csd.title, description: csd.description ?? '',
              client: csd.client ?? '', role: csd.role ?? '', duration: csd.duration ?? '',
              tags: csd.tags ?? [], cover_image: csd.cover_image ?? '',
              date: csd.date, content: csd.content ?? '',
              product: csd.product ?? '', users: csd.users ?? '',
              problem: csd.problem ?? '', constraints: csd.constraints ?? '',
              my_role: csd.my_role ?? '', outcome: csd.outcome ?? '',
            });
          }
        }
      }
      setLoading(false);
    }
    load();
  }, [isNew, params.id]);

  function setP(key: keyof typeof form, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function setC(key: keyof typeof cs, value: unknown) {
    setCs((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      let savedSlug = form.slug;

      if (isNew) {
        const created = await createProject(form);
        savedSlug = created.slug;
        if (form.has_details) {
          await supabase.from('case_studies').upsert({ ...cs, slug: savedSlug }, { onConflict: 'slug' });
        }
        setToast({ message: 'Project created.', type: 'success' });
        router.replace('/admin/projects');
      } else {
        await updateProject(existingId!, form);
        if (form.has_details) {
          const csData = { ...cs, slug: savedSlug };
          if (csId) {
            await supabase.from('case_studies').update(csData).eq('id', csId);
          } else {
            const { data } = await supabase.from('case_studies').insert(csData).select().single();
            if (data) setCsId(data.id);
          }
        }
        setToast({ message: 'Saved.', type: 'success' });
      }
    } catch (err: unknown) {
      setToast({ message: (err as Error).message ?? 'Error saving.', type: 'error' });
    }
    setSaving(false);
  }

  if (loading) return <div className={styles.loading}>Loading…</div>;

  const showCsTabs = form.has_details || !isNew;

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{isNew ? 'New Project' : 'Edit Project'}</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          {!isNew && form.has_details && (
            <a href={`/projects/${form.slug}`} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`}>
              Preview ↗
            </a>
          )}
          <Link href="/admin/projects" className={`${styles.btn} ${styles.btnSecondary}`}>← Back</Link>
        </div>
      </div>

      <div className={styles.pageContent}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab === 'project' ? styles.tabActive : ''}`} onClick={() => setTab('project')}>
            Project Info
          </button>
          {form.has_details && (
            <>
              <button className={`${styles.tab} ${tab === 'cs-meta' ? styles.tabActive : ''}`} onClick={() => setTab('cs-meta')}>
                Case Study — Meta
              </button>
              <button className={`${styles.tab} ${tab === 'cs-content' ? styles.tabActive : ''}`} onClick={() => setTab('cs-content')}>
                Case Study — Content
              </button>
              <button className={`${styles.tab} ${tab === 'cs-summary' ? styles.tabActive : ''}`} onClick={() => setTab('cs-summary')}>
                Case Study — Summary
              </button>
            </>
          )}
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>

          {/* ── PROJECT INFO ── */}
          {tab === 'project' && (
            <>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Title *</label>
                  <input className={styles.input} value={form.title} onChange={(e) => setP('title', e.target.value)} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Slug *</label>
                  <input className={styles.input} value={form.slug} onChange={(e) => setP('slug', e.target.value)} required />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} value={form.description ?? ''} onChange={(e) => setP('description', e.target.value)} />
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Category</label>
                  <select className={styles.select} value={form.category} onChange={(e) => setP('category', e.target.value)}>
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Icon (FontAwesome class)</label>
                  <input className={styles.input} value={form.icon ?? ''} onChange={(e) => setP('icon', e.target.value)} placeholder="fas fa-chart-line" />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Tags</label>
                <TagInput value={form.tags} onChange={(tags) => setP('tags', tags)} />
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Cover Image URL</label>
                  <input className={styles.input} value={form.cover_image ?? ''} onChange={(e) => setP('cover_image', e.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Display Order</label>
                  <input type="number" className={styles.input} value={form.display_order} onChange={(e) => setP('display_order', Number(e.target.value))} />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>External Link</label>
                  <input className={styles.input} value={form.link ?? ''} onChange={(e) => setP('link', e.target.value)} placeholder="https://..." />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Project Link (Behance etc.)</label>
                  <input className={styles.input} value={form.project_link ?? ''} onChange={(e) => setP('project_link', e.target.value)} />
                </div>
              </div>

              <div className={styles.card} style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <label className={styles.checkboxRow}>
                  <input type="checkbox" className={styles.checkbox} checked={form.has_details} onChange={(e) => { setP('has_details', e.target.checked); if (e.target.checked) setTab('cs-meta'); }} />
                  <span className={styles.label} style={{ margin: 0 }}>Has case study page</span>
                </label>
                <label className={styles.checkboxRow}>
                  <input type="checkbox" className={styles.checkbox} checked={form.is_featured} onChange={(e) => setP('is_featured', e.target.checked)} />
                  <span className={styles.label} style={{ margin: 0 }}>Featured on home</span>
                </label>
                <label className={styles.checkboxRow}>
                  <input type="checkbox" className={styles.checkbox} checked={form.coming_soon} onChange={(e) => setP('coming_soon', e.target.checked)} />
                  <span className={styles.label} style={{ margin: 0 }}>Coming Soon</span>
                </label>
              </div>
            </>
          )}

          {/* ── CASE STUDY META ── */}
          {tab === 'cs-meta' && (
            <>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Case Study Title *</label>
                  <input className={styles.input} value={cs.title} onChange={(e) => setC('title', e.target.value)} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Client</label>
                  <input className={styles.input} value={cs.client ?? ''} onChange={(e) => setC('client', e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} value={cs.description ?? ''} onChange={(e) => setC('description', e.target.value)} />
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Role</label>
                  <input className={styles.input} value={cs.role ?? ''} onChange={(e) => setC('role', e.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Duration</label>
                  <input className={styles.input} value={cs.duration ?? ''} onChange={(e) => setC('duration', e.target.value)} placeholder="3 months" />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Date</label>
                  <input type="date" className={styles.input} value={cs.date ?? ''} onChange={(e) => setC('date', e.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Cover Image URL</label>
                  <input className={styles.input} value={cs.cover_image ?? ''} onChange={(e) => setC('cover_image', e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Tags</label>
                <TagInput value={cs.tags} onChange={(tags) => setC('tags', tags)} />
              </div>
            </>
          )}

          {/* ── CASE STUDY CONTENT ── */}
          {tab === 'cs-content' && (
            <div className={styles.field}>
              <label className={styles.label}>Markdown / MDX Content</label>
              <textarea
                className={`${styles.textarea} ${styles.textareaCode}`}
                value={cs.content}
                onChange={(e) => setC('content', e.target.value)}
                placeholder="## Overview&#10;&#10;Write your case study content here..."
                style={{ minHeight: 520 }}
              />
            </div>
          )}

          {/* ── CASE STUDY EXECUTIVE SUMMARY ── */}
          {tab === 'cs-summary' && (
            <>
              {(['product', 'users', 'problem', 'constraints', 'my_role', 'outcome'] as const).map((key) => (
                <div key={key} className={styles.field}>
                  <label className={styles.label}>{key.replace('_', ' ')}</label>
                  <textarea
                    className={styles.textarea}
                    value={(cs[key] as string) ?? ''}
                    onChange={(e) => setC(key, e.target.value)}
                    style={{ minHeight: 80 }}
                  />
                </div>
              ))}
            </>
          )}

          <div>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={saving}>
              {saving ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
