'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import api from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import type { User } from '@/store/auth'

type ProfileForm = { username: string; bio: string }
type SocialForm  = { twitter: string; linkedin: string; website: string }
type PasswordForm = { current: string; next: string; confirm: string }

export default function SettingsPage() {
  const { user, setUser } = useAuthStore()
  const queryClient = useQueryClient()

  // Prefill from fresh /auth/me on mount
  const { data: freshUser } = useQuery({
    queryKey: ['me'],
    queryFn:  () => api.get<User>('/auth/me').then(r => r.data),
    staleTime: 60_000,
  })

  const [profile, setProfile] = useState<ProfileForm>({
    username: '',
    bio: '',
  })
  const [social, setSocial] = useState<SocialForm>({
    twitter:  '',
    linkedin: '',
    website:  '',
  })

  useEffect(() => {
    const u = freshUser ?? user
    if (!u) return
    setProfile({ username: u.username, bio: u.bio ?? '' })
    const sl = u.socialLinks ?? {}
    setSocial({ twitter: sl['twitter'] ?? '', linkedin: sl['linkedin'] ?? '', website: sl['website'] ?? '' })
  }, [freshUser, user])

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [avatarFile,    setAvatarFile]    = useState<File | null>(null)
  const [dragging,      setDragging]      = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const [pw, setPw]       = useState<PasswordForm>({ current: '', next: '', confirm: '' })
  const [pwError, setPwError] = useState('')

  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null)
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(t)
  }, [toast])

  const saveProfile = useMutation({
    mutationFn: () => {
      const socialLinks: Record<string, string> = {}
      if (social.twitter)  socialLinks['twitter']  = social.twitter
      if (social.linkedin) socialLinks['linkedin'] = social.linkedin
      if (social.website)  socialLinks['website']  = social.website
      return api.patch<User>('/users/me', {
        username: profile.username,
        bio: profile.bio,
        socialLinks,
      }).then(r => r.data)
    },
    onSuccess: (u) => {
      setUser(u)
      queryClient.invalidateQueries({ queryKey: ['me'] })
      setToast({ msg: 'Saved', ok: true })
    },
    onError: () => setToast({ msg: 'Failed to save.', ok: false }),
  })

  const uploadAvatar = useMutation({
    mutationFn: () => {
      const fd = new FormData()
      fd.append('avatar', avatarFile!)
      return api.post<{ avatarUrl: string }>('/users/me/avatar', fd).then(r => r.data)
    },
    onSuccess: ({ avatarUrl }) => {
      if (user) setUser({ ...user, avatarUrl })
      queryClient.invalidateQueries({ queryKey: ['me'] })
      setAvatarFile(null); setAvatarPreview(null)
      setToast({ msg: 'Avatar updated.', ok: true })
    },
    onError: () => setToast({ msg: 'Upload failed.', ok: false }),
  })

  const changePw = useMutation({
    mutationFn: () => api.post('/users/me/password', { currentPassword: pw.current, newPassword: pw.next }),
    onSuccess: () => {
      setPw({ current: '', next: '', confirm: '' })
      setToast({ msg: 'Password updated', ok: true })
    },
    onError: () => setToast({ msg: 'Incorrect current password.', ok: false }),
  })

  function pickFile(file: File) {
    if (file.size > 5 * 1024 * 1024) { setToast({ msg: 'Max file size is 5 MB.', ok: false }); return }
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
  function submitPw(e: React.FormEvent) {
    e.preventDefault()
    if (pw.next !== pw.confirm) { setPwError('Passwords do not match.'); return }
    if (pw.next.length < 8)    { setPwError('Must be at least 8 characters.'); return }
    setPwError(''); changePw.mutate()
  }

  const avatarSrc = avatarPreview ?? (freshUser ?? user)?.avatarUrl

  return (
    <div style={{ maxWidth: 672, margin: '0 auto', padding: '2rem 1.5rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1.75rem' }}>Settings</h1>

      {/* Profile card */}
      <section style={card}>
        <h2 style={cardTitle}>Profile</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Field label="Username">
            <input
              style={inp} value={profile.username}
              onChange={e => setProfile(p => ({ ...p, username: e.target.value }))}
              placeholder="amr_ahmed"
            />
          </Field>
          <Field label="Bio">
            <textarea
              style={{ ...inp, resize: 'none' }} rows={3}
              placeholder="Tell people about yourself…"
              value={profile.bio}
              onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
            />
          </Field>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            <span style={labelStyle}>Social links</span>
            <SocialField
              icon={<TwitterIcon />} placeholder="https://twitter.com/username"
              value={social.twitter} onChange={v => setSocial(s => ({ ...s, twitter: v }))}
            />
            <SocialField
              icon={<LinkedinIcon />} placeholder="https://linkedin.com/in/username"
              value={social.linkedin} onChange={v => setSocial(s => ({ ...s, linkedin: v }))}
            />
            <SocialField
              icon={<GlobeIcon />} placeholder="https://yoursite.com"
              value={social.website} onChange={v => setSocial(s => ({ ...s, website: v }))}
            />
          </div>

          <button
            onClick={() => saveProfile.mutate()}
            disabled={saveProfile.isPending}
            style={{ ...btn, opacity: saveProfile.isPending ? 0.7 : 1 }}
          >
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
              <Image
                src={avatarSrc} alt="Avatar" width={80} height={80}
                style={{ borderRadius: '50%', objectFit: 'cover', width: 80, height: 80 }}
              />
            ) : (
              <div style={avatarFallback}>
                {(freshUser ?? user)?.username?.charAt(0)?.toUpperCase() ?? '?'}
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
            <input
              ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) pickFile(f) }}
            />
            {avatarFile && (
              <button
                onClick={() => uploadAvatar.mutate()}
                disabled={uploadAvatar.isPending}
                style={{ ...btn, marginTop: '0.75rem', width: 'auto', padding: '0.5rem 1rem', opacity: uploadAvatar.isPending ? 0.7 : 1 }}
              >
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
          <Field label="Current password">
            <input type="password" style={inp} value={pw.current} onChange={e => setPw(p => ({ ...p, current: e.target.value }))} required autoComplete="current-password" />
          </Field>
          <Field label="New password">
            <input type="password" style={inp} value={pw.next} onChange={e => setPw(p => ({ ...p, next: e.target.value }))} required autoComplete="new-password" />
          </Field>
          <Field label="Confirm new password">
            <input type="password" style={inp} value={pw.confirm} onChange={e => setPw(p => ({ ...p, confirm: e.target.value }))} required autoComplete="new-password" />
          </Field>
          {pwError && <p style={{ fontSize: '0.8125rem', color: '#ef4444', marginTop: '-0.25rem' }}>{pwError}</p>}
          {changePw.isError && !pwError && (
            <p style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '0.625rem 0.875rem', fontSize: '0.875rem', color: '#dc2626' }}>
              Incorrect current password.
            </p>
          )}
          <button type="submit" disabled={changePw.isPending} style={{ ...btn, opacity: changePw.isPending ? 0.7 : 1 }}>
            {changePw.isPending ? 'Changing…' : 'Change password'}
          </button>
        </form>
      </section>

      {toast && (
        <div style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50,
          borderRadius: 12, padding: '0.75rem 1.25rem', fontSize: '0.875rem', fontWeight: 500,
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          background: toast.ok ? '#16a34a' : '#dc2626', color: '#fff',
          animation: 'fadeIn 0.2s ease',
        }}>
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

function SocialField({ icon, placeholder, value, onChange }: {
  icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span style={{ width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', borderRadius: 8, flexShrink: 0, color: '#64748b' }}>
        {icon}
      </span>
      <input style={{ ...inp, margin: 0 }} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

const card: React.CSSProperties = {
  background: '#ffffff', borderRadius: 20,
  border: '1px solid rgba(0,0,0,0.06)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  padding: '1.5rem',
}
const cardTitle: React.CSSProperties    = { fontSize: '0.9375rem', fontWeight: 600, color: '#1a1a2e', margin: '0 0 1.25rem' }
const labelStyle: React.CSSProperties   = { display: 'block', fontSize: '0.8125rem', fontWeight: 500, color: '#1a1a2e', marginBottom: '0.375rem' }
const inp: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: '1px solid #e5e7eb',
  borderRadius: 10, padding: '0.625rem 0.875rem', fontSize: '0.875rem',
  color: '#1a1a2e', background: '#fafafa', outline: 'none',
}
const btn: React.CSSProperties = {
  width: '100%', padding: '0.6875rem', borderRadius: 10, border: 'none', cursor: 'pointer',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff', fontWeight: 600, fontSize: '0.875rem', transition: 'opacity 0.2s',
}
const dropZone: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  borderRadius: 12, border: '2px dashed #e5e7eb',
  padding: '1.5rem', textAlign: 'center', cursor: 'pointer',
  transition: 'border-color 0.15s, background 0.15s',
}
const avatarFallback: React.CSSProperties = {
  width: 80, height: 80, borderRadius: '50%',
  background: 'rgba(99,102,241,0.12)', color: '#6366f1',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase',
}
