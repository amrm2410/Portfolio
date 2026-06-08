'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
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

    supabase.auth.getSession()
      .then(({ data }) => {
        if (!data.session) {
          router.replace('/admin/login');
        } else {
          setChecking(false);
        }
      })
      .catch(() => {
        router.replace('/admin/login');
      });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && !isLoginPage) {
        router.replace('/admin/login');
      }
    });

    return () => listener.subscription.unsubscribe();
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
