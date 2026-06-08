'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { getProjects, deleteProject } from '@/lib/queries/projects';
import { ProjectRow } from '@/lib/supabase';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<ProjectRow | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const load = useCallback(async () => {
    try {
      setProjects(await getProjects());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function confirmDelete() {
    if (!deleting) return;
    try {
      await deleteProject(deleting.id);
      setToast({ message: 'Project deleted.', type: 'success' });
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
        <h1 className={styles.pageTitle}>Projects</h1>
        <Link href="/admin/projects/new" className={`${styles.btn} ${styles.btnPrimary}`}>
          + Add Project
        </Link>
      </div>

      <div className={styles.pageContent}>
        {projects.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No projects yet</p>
            <p className={styles.emptyText}>Add your first project to get started.</p>
          </div>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Featured</th>
                <th>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id}>
                  <td className={styles.tableTitle}>{p.title}</td>
                  <td><span className={`${styles.tag} ${styles.tagCategory}`}>{p.category}</span></td>
                  <td><span className={styles.tag}>{p.tags.length} tags</span></td>
                  <td>
                    <span className={`${styles.badge} ${p.is_featured ? '' : styles.badgeOff}`} />
                  </td>
                  <td>
                    <span className={`${styles.badge} ${p.has_details ? '' : styles.badgeOff}`} />
                  </td>
                  <td>
                    <div className={styles.tableActions}>
                      {p.has_details && !p.coming_soon && (
                        <a href={`/projects/${p.slug}`} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ fontSize: 11 }}>
                          Preview ↗
                        </a>
                      )}
                      <Link href={`/admin/projects/${p.id}`} className={`${styles.btn} ${styles.btnSecondary}`}>
                        Edit
                      </Link>
                      <button
                        className={`${styles.btn} ${styles.btnDanger}`}
                        onClick={() => setDeleting(p)}
                      >
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
          title="Delete project?"
          text={`"${deleting.title}" will be permanently removed.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleting(null)}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
