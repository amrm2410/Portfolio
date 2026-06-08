'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import styles from '@/components/admin/Admin.module.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [checking, setChecking] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login' || pathname.startsWith('/admin/login');

  useEffect(() => {
    if (isLoginPage) {
      setChecking(false);
      return;
    }
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.replace('/admin/login');
    } else {
      setChecking(false);
    }
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (checking) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#334155', fontFamily: 'sans-serif', fontSize: 14 }}>
        Loading…
      </div>
    );
  }

  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
