'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';
import styles from '@/components/admin/Admin.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await api.post<{ accessToken: string }>('/admin/login', { email, password });
      localStorage.setItem('access_token', data.accessToken);
      router.replace('/admin/dashboard');
    } catch {
      setError('Invalid credentials.');
      setLoading(false);
    }
  }

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Portfolio Admin</h1>
        <p className={styles.loginSubtitle}>Sign in to manage your content</p>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className={styles.loginError}>{error}</p>}

          <button type="submit" className={styles.loginBtn} disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
