'use client';

import styles from '@/components/admin/Admin.module.css';

export default function ArticlesPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Articles</h1>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.comingSoon}>
          <div className={styles.comingSoonIcon}>▤</div>
          <p className={styles.comingSoonTitle}>Articles — Coming Soon</p>
          <p className={styles.comingSoonText}>
            Write long-form articles and essays here. The database table is ready and waiting.
          </p>
        </div>
      </div>
    </>
  );
}
