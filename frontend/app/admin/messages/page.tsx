'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import ConfirmDialog from '@/components/admin/ConfirmDialog';
import Toast from '@/components/admin/Toast';
import styles from '@/components/admin/Admin.module.css';

type Message = {
  id: string;
  name: string;
  phone: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<Message | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const load = useCallback(async () => {
    const { data } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    setMessages(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function markRead(msg: Message) {
    await supabase.from('contact_messages').update({ is_read: true }).eq('id', msg.id);
    setMessages((prev) => prev.map((m) => m.id === msg.id ? { ...m, is_read: true } : m));
  }

  async function confirmDelete() {
    if (!deleting) return;
    const { error } = await supabase.from('contact_messages').delete().eq('id', deleting.id);
    if (error) {
      setToast({ message: 'Failed to delete.', type: 'error' });
    } else {
      setToast({ message: 'Message deleted.', type: 'success' });
      setMessages((prev) => prev.filter((m) => m.id !== deleting.id));
    }
    setDeleting(null);
  }

  const unread = messages.filter((m) => !m.is_read).length;

  if (loading) return <div className={styles.loading}>Loading…</div>;

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>
          Messages
          {unread > 0 && (
            <span style={{ marginLeft: 10, fontSize: 12, background: '#ede9fe', color: '#4f46e5', padding: '2px 10px', borderRadius: 20, fontWeight: 500 }}>
              {unread} new
            </span>
          )}
        </h1>
      </div>

      <div className={styles.pageContent}>
        {messages.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyTitle}>No messages yet</p>
            <p className={styles.emptyText}>Messages submitted via the contact form will appear here.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={styles.card}
                style={{ borderLeft: msg.is_read ? '3px solid #e5e7eb' : '3px solid #4f46e5' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontWeight: 600, color: '#1a1a2e', fontSize: 14 }}>{msg.name}</span>
                      {msg.phone && (
                        <span style={{ color: '#64748b', fontSize: 12 }}>{msg.phone}</span>
                      )}
                      {!msg.is_read && (
                        <span style={{ fontSize: 10, background: '#ede9fe', color: '#6366f1', padding: '1px 6px', borderRadius: 4 }}>
                          NEW
                        </span>
                      )}
                    </div>
                    {msg.message && (
                      <p style={{ color: '#64748b', fontSize: 13, margin: 0, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                        {msg.message}
                      </p>
                    )}
                    <p style={{ color: '#94a3b8', fontSize: 11, marginTop: 8 }}>
                      {new Date(msg.created_at).toLocaleString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric',
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    {!msg.is_read && (
                      <button
                        className={`${styles.btn} ${styles.btnSecondary}`}
                        style={{ fontSize: 12, padding: '4px 10px' }}
                        onClick={() => markRead(msg)}
                      >
                        Mark read
                      </button>
                    )}
                    <button
                      className={`${styles.btn} ${styles.btnDanger}`}
                      onClick={() => setDeleting(msg)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {deleting && (
        <ConfirmDialog
          title="Delete message?"
          text={`Message from "${deleting.name}" will be permanently removed.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleting(null)}
        />
      )}
      {toast && <Toast message={toast.message} type={toast.type} onDone={() => setToast(null)} />}
    </>
  );
}
