'use client';

import styles from '@/components/admin/Admin.module.css';

export default function BlogsPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Blogs</h1>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.comingSoon}>
          <div className={styles.comingSoonIcon}>▣</div>
          <p className={styles.comingSoonTitle}>Blogs — Coming Soon</p>
          <p className={styles.comingSoonText}>
            The blogs section is scaffolded and ready. The database table exists. Build the editor here when you're ready to publish blog posts.
          </p>
        </div>
      </div>
    </>
  );
}
