'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Admin.module.css';

const NAV = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '⬡' },
];

const CONTENT_NAV = [
  { href: '/admin/blogs', label: 'Blogs', icon: '▣' },
  { href: '/admin/videos', label: 'Videos', icon: '▶' },
  { href: '/admin/articles', label: 'Articles', icon: '▤' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  function handleLogout() {
    localStorage.removeItem('admin_token');
    window.location.href = '/admin/login';
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <span className={styles.logoMark}>A</span>
        <span className={styles.logoText}>Portfolio Admin</span>
      </div>

      <nav className={styles.sidebarNav}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${pathname.startsWith(item.href) ? styles.navItemActive : ''}`}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {item.label}
          </Link>
        ))}

        <div className={styles.navDivider} />
        <span className={styles.navSection}>Content</span>

        {CONTENT_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${pathname.startsWith(item.href) ? styles.navItemActive : ''}`}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <button onClick={handleLogout} className={styles.logoutBtn}>
        Sign Out
      </button>
    </aside>
  );
}
