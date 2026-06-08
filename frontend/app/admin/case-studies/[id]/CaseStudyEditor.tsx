'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { createCaseStudy, updateCaseStudy } from '@/lib/queries/caseStudies';
import { supabase, CaseStudyRow } from '@/lib/supabase';
import TagInput from '@/components/admin/TagInput';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

const EMPTY: Omit<CaseStudyRow, 'id' | 'created_at' | 'updated_at'> = {
  slug: '',
  title: '',
  description: '',
  client: '',
  role: '',
  duration: '',
  tags: [],
  cover_image: '',
  date: null,
  content: '',
  product: '',
  users: '',
  problem: '',
  constraints: '',
  my_role: '',
  outcome: '',
};

export default function CaseStudyEditor() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === 'new';

  const [form, setForm] = useState(EMPTY);
  const [existingId, setExistingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [tab, setTab] = useState<'meta' | 'content' | 'summary'>('meta');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    if (isNew) return;
    supabase.from('case_studies').select('*').eq('id', params.id as string).single().then(({ data }) => {
      if (data) {
        setExistingId(data.id);
        setForm({
          slug: data.slug, title: data.title, description: data.description ?? '',
          client: data.client ?? '', role: data.role ?? '', duration: data.duration ?? '',
          tags: data.tags ?? [], cover_image: data.cover_image ?? '',
          date: data.date, content: data.content ?? '',
          product: data.product ?? '', users: data.users ?? '',
          problem: data.problem ?? '', constraints: data.constraints ?? '',
          my_role: data.my_role ?? '', outcome: data.outcome ?? '',
        });
      }
      setLoading(false);
    });
  }, [isNew, params.id]);

  function set(key: keyof typeof form, value: unknown) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      if (isNew) {
        await createCaseStudy(form);
        setToast({ message: 'Case study created.', type: 'success' });
        router.replace('/admin/case-studies');
      } else {
        await updateCaseStudy(existingId!, form);
        setToast({ message: 'Saved.', type: 'success' });
      }
    } catch (err: unknown) {
      setToast({ message: (err as Error).message ?? 'Error.', type: 'error' });
    }
    setSaving(false);
  }

  if (loading) return <div className={styles.loading}>Loading…</div>;

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>{isNew ? 'New Case Study' : 'Edit Case Study'}</h1>
        <Link href="/admin/case-studies" className={`${styles.btn} ${styles.btnSecondary}`}>← Back</Link>
      </div>

      <div className={styles.pageContent}>
        <div className={styles.tabs}>
          <button className={`${styles.tab} ${tab === 'meta' ? styles.tabActive : ''}`} onClick={() => setTab('meta')}>Meta</button>
          <button className={`${styles.tab} ${tab === 'content' ? styles.tabActive : ''}`} onClick={() => setTab('content')}>Content</button>
          <button className={`${styles.tab} ${tab === 'summary' ? styles.tabActive : ''}`} onClick={() => setTab('summary')}>Executive Summary</button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {tab === 'meta' && (
            <>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Title *</label>
                  <input className={styles.input} value={form.title} onChange={(e) => set('title', e.target.value)} required />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Slug *</label>
                  <input className={styles.input} value={form.slug} onChange={(e) => set('slug', e.target.value)} required />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Description</label>
                <textarea className={styles.textarea} value={form.description ?? ''} onChange={(e) => set('description', e.target.value)} />
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Client</label>
                  <input className={styles.input} value={form.client ?? ''} onChange={(e) => set('client', e.target.value)} />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Role</label>
                  <input className={styles.input} value={form.role ?? ''} onChange={(e) => set('role', e.target.value)} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label className={styles.label}>Duration</label>
                  <input className={styles.input} value={form.duration ?? ''} onChange={(e) => set('duration', e.target.value)} placeholder="3 months" />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Date</label>
                  <input type="date" className={styles.input} value={form.date ?? ''} onChange={(e) => set('date', e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Tags</label>
                <TagInput value={form.tags} onChange={(tags) => set('tags', tags)} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Cover Image URL</label>
                <input className={styles.input} value={form.cover_image ?? ''} onChange={(e) => set('cover_image', e.target.value)} />
              </div>
            </>
          )}

          {tab === 'content' && (
            <div className={styles.field}>
              <label className={styles.label}>Markdown / MDX Content</label>
              <textarea
                className={`${styles.textarea} ${styles.textareaCode}`}
                value={form.content}
                onChange={(e) => set('content', e.target.value)}
                placeholder="## Overview&#10;&#10;Write your case study here using Markdown..."
                style={{ minHeight: 480 }}
              />
            </div>
          )}

          {tab === 'summary' && (
            <>
              {(['product', 'users', 'problem', 'constraints', 'my_role', 'outcome'] as const).map((key) => (
                <div key={key} className={styles.field}>
                  <label className={styles.label}>{key.replace('_', ' ')}</label>
                  <textarea
                    className={styles.textarea}
                    value={(form[key] as string) ?? ''}
                    onChange={(e) => set(key, e.target.value)}
                    style={{ minHeight: 80 }}
                  />
                </div>
              ))}
            </>
          )}

          <div>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={saving}>
              {saving ? 'Saving…' : 'Save Case Study'}
            </button>
          </div>
        </form>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
