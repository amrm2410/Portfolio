'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import type { User } from '@/store/auth'


type ProfileForm = { username: string; bio: string; socialLinks: { platform: string; url: string }[] }
type PasswordForm = { current: string; next: string; confirm: string }

export default function SettingsPage() {
  const { user, setUser } = useAuthStore()

  const [profile, setProfile] = useState<ProfileForm>({
    username: user?.username ?? '',
    bio: user?.bio ?? '',
    socialLinks: [],
  })
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [avatarFile, setAvatarFile]   = useState<File | null>(null)
  const [dragging, setDragging]       = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const [pw, setPw] = useState<PasswordForm>({ current: '', next: '', confirm: '' })
  const [pwError, setPwError] = useState('')

  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(t)
  }, [toast])

  const saveProfile = useMutation({
    mutationFn: () => api.patch<User>('/users/me', {
      username: profile.username, bio: profile.bio, socialLinks: profile.socialLinks,
    }).then(r => r.data),
    onSuccess: (u) => { setUser(u); setToast({ msg: 'Profile saved.', ok: true }) },
    onError:   ()  => setToast({ msg: 'Failed to save.', ok: false }),
  })

  const uploadAvatar = useMutation({
    mutationFn: () => {
      const fd = new FormData()
      fd.append('avatar', avatarFile!)
      return api.post<{ avatarUrl: string }>('/users/me/avatar', fd).then(r => r.data)
    },
    onSuccess: ({ avatarUrl }) => {
      if (user) setUser({ ...user, avatarUrl })
      setAvatarFile(null); setAvatarPreview(null)
      setToast({ msg: 'Avatar updated.', ok: true })
    },
    onError: () => setToast({ msg: 'Upload failed.', ok: false }),
  })

  const changePw = useMutation({
    mutationFn: () => api.post('/users/me/password', { currentPassword: pw.current, newPassword: pw.next }),
    onSuccess: () => { setPw({ current: '', next: '', confirm: '' }); setToast({ msg: 'Password changed.', ok: true }) },
    onError:   ()  => setToast({ msg: 'Incorrect current password.', ok: false }),
  })

  function pickFile(file: File) {
    setAvatarFile(file)
    const r = new FileReader()
    r.onload = e => setAvatarPreview(e.target?.result as string)
    r.readAsDataURL(file)
  }
  function handleDrop(e: React.DragEvent) {
    e.preventDefault(); setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f?.type.startsWith('image/')) pickFile(f)
  }
  function addLink() { setProfile(p => ({ ...p, socialLinks: [...p.socialLinks, { platform: '', url: '' }] })) }
  function removeLink(i: number) { setProfile(p => ({ ...p, socialLinks: p.socialLinks.filter((_, x) => x !== i) })) }
  function setLink(i: number, k: 'platform' | 'url', v: string) {
    setProfile(p => ({ ...p, socialLinks: p.socialLinks.map((l, x) => x === i ? { ...l, [k]: v } : l) }))
  }
  function submitPw(e: React.FormEvent) {
    e.preventDefault()
    if (pw.next !== pw.confirm) { setPwError('Passwords do not match.'); return }
    if (pw.next.length < 8)    { setPwError('Must be at least 8 characters.'); return }
    setPwError(''); changePw.mutate()
  }

  const avatarSrc = avatarPreview ?? user?.avatarUrl

  return (
    <div style={{ maxWidth: 672, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1.75rem' }}>Settings</h1>

      {/* Profile card */}
      <section style={card}>
        <h2 style={cardTitle}>Profile</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Field label="Username">
            <input style={inp} value={profile.username} onChange={e => setProfile(p => ({ ...p, username: e.target.value }))} />
          </Field>
          <Field label="Bio">
            <textarea
              style={{ ...inp, resize: 'none' }} rows={3}
              placeholder="Tell people about yourself…"
              value={profile.bio}
              onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
            />
          </Field>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={labelStyle}>Social links</span>
              <button type="button" onClick={addLink} style={{ fontSize: '0.75rem', fontWeight: 500, color: '#6366f1', background: 'none', border: 'none', cursor: 'pointer' }}>+ Add</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {profile.socialLinks.map((link, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem' }}>
                  <input style={{ ...inp, width: 128, flexShrink: 0 }} placeholder="Platform" value={link.platform} onChange={e => setLink(i, 'platform', e.target.value)} />
                  <input style={{ ...inp, flex: 1 }} placeholder="https://…" value={link.url} onChange={e => setLink(i, 'url', e.target.value)} />
                  <button type="button" onClick={() => removeLink(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontSize: '0.875rem', padding: '0 0.5rem' }}>✕</button>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => saveProfile.mutate()} disabled={saveProfile.isPending} style={btn}>
            {saveProfile.isPending ? 'Saving…' : 'Save profile'}
          </button>
        </div>
      </section>

      {/* Avatar card */}
      <section style={{ ...card, marginTop: '1.25rem' }}>
        <h2 style={cardTitle}>Profile photo</h2>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
          <div style={{ flexShrink: 0 }}>
            {avatarSrc ? (
              <Image src={avatarSrc} alt="Avatar" width={80} height={80} style={{ borderRadius: '50%', objectFit: 'cover', width: 80, height: 80 }} />
            ) : (
              <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(99,102,241,0.12)', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase' }}>
                {user?.username?.charAt(0)?.toUpperCase() ?? '?'}
              </div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div
              role="button" tabIndex={0}
              style={{ ...dropZone, ...(dragging ? { borderColor: '#6366f1', background: 'rgba(99,102,241,0.05)' } : {}) }}
              onClick={() => fileRef.current?.click()}
              onKeyDown={e => e.key === 'Enter' && fileRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
                <span style={{ color: '#6366f1', fontWeight: 500 }}>Click to upload</span> or drag and drop
              </p>
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.25rem' }}>PNG, JPG — up to 5 MB</p>
            </div>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => { const f = e.target.files?.[0]; if (f) pickFile(f) }} />
            {avatarFile && (
              <button onClick={() => uploadAvatar.mutate()} disabled={uploadAvatar.isPending} style={{ ...btn, marginTop: '0.75rem', width: 'auto', padding: '0.5rem 1rem' }}>
                {uploadAvatar.isPending ? 'Uploading…' : 'Upload photo'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Password card */}
      <section style={{ ...card, marginTop: '1.25rem' }}>
        <h2 style={cardTitle}>Change password</h2>
        <form onSubmit={submitPw} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(['current', 'next', 'confirm'] as const).map((k) => (
            <Field key={k} label={k === 'current' ? 'Current password' : k === 'next' ? 'New password' : 'Confirm new password'}>
              <input type="password" style={inp} value={pw[k]} onChange={e => setPw(p => ({ ...p, [k]: e.target.value }))} required />
            </Field>
          ))}
          {pwError && <p style={{ fontSize: '0.8125rem', color: '#ef4444' }}>{pwError}</p>}
          {changePw.isError && !pwError && (
            <p style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '0.625rem 0.875rem', fontSize: '0.875rem', color: '#dc2626' }}>
              Incorrect current password.
            </p>
          )}
          <button type="submit" disabled={changePw.isPending} style={btn}>
            {changePw.isPending ? 'Changing…' : 'Change password'}
          </button>
        </form>
      </section>

      {toast && (
        <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50, borderRadius: 12, padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: 500, boxShadow: '0 8px 24px rgba(0,0,0,0.15)', background: toast.ok ? '#16a34a' : '#dc2626', color: '#fff' }}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff', borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  padding: '1.5rem',
}
const cardTitle: React.CSSProperties = { fontSize: '0.9375rem', fontWeight: 600, color: '#1a1a2e', margin: '0 0 1.25rem' }
const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#1a1a2e', marginBottom: '0.375rem' }
const inp: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: '1px solid #e5e7eb',
  borderRadius: 10, padding: '0.625rem 0.875rem', fontSize: '0.875rem',
  color: '#1a1a2e', background: '#fafafa', outline: 'none',
}
const btn: React.CSSProperties = {
  width: '100%', padding: '0.6875rem', borderRadius: 10, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', fontWeight: 600, fontSize: '0.875rem',
}
const dropZone: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  borderRadius: 12, border: '2px dashed #e5e7eb',
  padding: '1.5rem', textAlign: 'center', cursor: 'pointer',
  transition: 'border-color 0.15s, background 0.15s',
}
