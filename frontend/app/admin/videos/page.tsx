'use client';

import styles from '@/components/admin/Admin.module.css';

export default function VideosPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Videos</h1>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.comingSoon}>
          <div className={styles.comingSoonIcon}>▶</div>
          <p className={styles.comingSoonTitle}>Videos — Coming Soon</p>
          <p className={styles.comingSoonText}>
            Supports both YouTube/Vimeo embeds and direct file uploads to Supabase Storage. The database table is ready.
          </p>
        </div>
      </div>
    </>
  );
}
