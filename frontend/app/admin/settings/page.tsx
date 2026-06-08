'use client';

import { FormEvent, useEffect, useState } from 'react';
import api from '@/lib/axios';
import type { SocialLinkRow } from '@/types';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

export default function SettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [socialLinks, setSocialLinks] = useState<SocialLinkRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<SocialLinkRow | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [newLink, setNewLink] = useState({ platform: '', url: '', icon: '' });

  useEffect(() => {
    Promise.all([
      api.get<Record<string, string>>('/admin/settings'),
      api.get<SocialLinkRow[]>('/admin/social-links'),
    ]).then(([{ data: s }, { data: l }]) => {
      setSettings(s);
      setSocialLinks(l);
      setLoading(false);
    });
  }, []);

  function setSetting(key: string, value: string) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put('/admin/settings', settings);
      setToast({ message: 'Settings saved.', type: 'success' });
    } catch {
      setToast({ message: 'Failed to save.', type: 'error' });
    }
    setSaving(false);
  }

  async function addSocialLink(e: FormEvent) {
    e.preventDefault();
    try {
      const { data } = await api.post<SocialLinkRow>('/admin/social-links', {
        platform: newLink.platform,
        url: newLink.url,
        icon: newLink.icon,
        display_order: socialLinks.length + 1,
      });
      setSocialLinks((prev) => [...prev, data]);
      setNewLink({ platform: '', url: '', icon: '' });
      setToast({ message: 'Link added.', type: 'success' });
    } catch {
      setToast({ message: 'Failed to add link.', type: 'error' });
    }
  }

  async function confirmDeleteLink() {
    if (!deleting) return;
    try {
      await api.delete(`/admin/social-links/${deleting.id}`);
      setSocialLinks((prev) => prev.filter((l) => l.id !== deleting.id));
      setToast({ message: 'Link removed.', type: 'success' });
    } catch {
      setToast({ message: 'Failed.', type: 'error' });
    }
    setDeleting(null);
  }

  if (loading) return <div className={styles.loading}>Loading…</div>;

  const CONTACT_FIELDS = [
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'response_time', label: 'Response Time' },
  ];

  const STAT_FIELDS = [
    { key: 'stat_experience', label: 'Experience (e.g. 4+)' },
    { key: 'stat_projects', label: 'Projects (e.g. 25+)' },
    { key: 'stat_satisfaction', label: 'Satisfaction (e.g. 98%)' },
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Settings</h1>
      </div>

      <div className={styles.pageContent}>
        <form className={styles.form} onSubmit={handleSave}>
          <div className={styles.card}>
            <p className={styles.label} style={{ marginBottom: 16 }}>Contact Information</p>
            <div className={styles.formRow}>
              {CONTACT_FIELDS.map(({ key, label }) => (
                <div key={key} className={styles.field}>
                  <label className={styles.label}>{label}</label>
                  <input className={styles.input} value={settings[key] ?? ''} onChange={(e) => setSetting(key, e.target.value)} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <p className={styles.label} style={{ marginBottom: 16 }}>Hero Stats</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              {STAT_FIELDS.map(({ key, label }) => (
                <div key={key} className={styles.field}>
                  <label className={styles.label}>{label}</label>
                  <input className={styles.input} value={settings[key] ?? ''} onChange={(e) => setSetting(key, e.target.value)} />
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`} disabled={saving}>
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
        </form>

        <div className={styles.card} style={{ marginTop: 28 }}>
          <p className={styles.label} style={{ marginBottom: 16 }}>Social Links</p>
          <table className={styles.table} style={{ marginBottom: 20 }}>
            <tbody>
              {socialLinks.map((link) => (
                <tr key={link.id}>
                  <td className={styles.tableTitle}>{link.platform}</td>
                  <td><a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', fontSize: 13 }}>{link.url}</a></td>
                  <td><code style={{ color: '#64748b', fontSize: 12 }}>{link.icon}</code></td>
                  <td>
                    <button className={`${styles.btn} ${styles.btnDanger}`} onClick={() => setDeleting(link)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <form onSubmit={addSocialLink} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <input className={styles.input} style={{ flex: '0 0 120px' }} placeholder="Platform" value={newLink.platform} onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })} required />
            <input className={styles.input} style={{ flex: 2 }} placeholder="URL" value={newLink.url} onChange={(e) => setNewLink({ ...newLink, url: e.target.value })} required />
            <input className={styles.input} style={{ flex: '0 0 180px' }} placeholder="Icon class (fab fa-github)" value={newLink.icon} onChange={(e) => setNewLink({ ...newLink, icon: e.target.value })} />
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>Add</button>
          </form>
        </div>
      </div>

      {deleting && (
        <ConfirmDialog
          title="Remove social link?"
          text={`Remove ${deleting.platform} link?`}
          onConfirm={confirmDeleteLink}
          onCancel={() => setDeleting(null)}
        />
      )}
      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
