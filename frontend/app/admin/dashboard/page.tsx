import styles from '@/components/admin/Admin.module.css';

export default function DashboardPage() {
  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Dashboard</h1>
      </div>
      <div className={styles.pageContent}>
        <div className={styles.card}>
          <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>
            Welcome back. Use the sidebar to manage your content — Blogs, Videos, and Articles.
          </p>
        </div>
      </div>
    </>
  );
}
