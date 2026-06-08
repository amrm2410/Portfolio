'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import api from '@/lib/axios';
import type { CaseStudyRow } from '@/types';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

export default function CaseStudiesPage() {
  const [items, setItems] = useState<CaseStudyRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<CaseStudyRow | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const load = useCallback(async () => {
    try {
      const { data } = await api.get<CaseStudyRow[]>('/admin/case-studies');
      setItems(data);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function confirmDelete() {
    if (!deleting) return;
    try {
      await api.delete(`/admin/case-studies/${deleting.id}`);
      setToast({ message: 'Case study deleted.', type: 'success' });
      load();
    } catch {
      setToast({ message: 'Failed to delete.', type: 'error' });
    }
    setDeleting(null);
  }

  if (loading) return <div className={styles.loading}>Loading…</div>;

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Case Studies</h1>
        <Link href="/admin/case-studies/new" className={`${styles.btn} ${styles.btnPrimary}`}>
          + Add Case Study
        </Link>
      </div>

      <div className={styles.pageContent}>
        {items.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No case studies yet</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Slug</th>
                <th>Client</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((cs) => (
                <tr key={cs.id}>
                  <td className={styles.tableTitle}>{cs.title}</td>
                  <td><span className={styles.tag} style={{ fontFamily: 'monospace' }}>{cs.slug}</span></td>
                  <td>{cs.client ?? '—'}</td>
                  <td>{cs.date ? new Date(cs.date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '—'}</td>
                  <td>
                    <div className={styles.tableActions}>
                      <a href={`/projects/${cs.slug}`} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ fontSize: 11 }}>
                        Preview
                      </a>
                      <Link href={`/admin/case-studies/${cs.id}`} className={`${styles.btn} ${styles.btnSecondary}`}>
                        Edit
                      </Link>
                      <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => setDeleting(cs)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {deleting && (
        <ConfirmDialog
          title="Delete case study?"
          text={`"${deleting.title}" will be permanently removed.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleting(null)}
        />
      )}
      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
