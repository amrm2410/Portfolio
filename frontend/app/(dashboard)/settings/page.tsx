'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useMutation } from '@tanstack/react-query'
import api from '@/lib/axios'
import { useAuthStore } from '@/store/auth'
import type { User } from '@/store/auth'

const INPUT = 'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20'
const BTN = 'rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600 disabled:opacity-60'

type ProfileForm = { name: string; bio: string; socialLinks: { platform: string; url: string }[] }
type PasswordForm = { current: string; next: string; confirm: string }

export default function SettingsPage() {
  const { user, setUser } = useAuthStore()

  const [profile, setProfile] = useState<ProfileForm>({
    name: user?.name ?? '',
    bio: (user as User & { bio?: string })?.bio ?? '',
    socialLinks: (user as User & { socialLinks?: { platform: string; url: string }[] })?.socialLinks ?? [],
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
      name: profile.name,
      bio:  profile.bio,
      socialLinks: profile.socialLinks,
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
      setAvatarFile(null)
      setAvatarPreview(null)
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

  function addLink()       { setProfile(p => ({ ...p, socialLinks: [...p.socialLinks, { platform: '', url: '' }] })) }
  function removeLink(i: number) { setProfile(p => ({ ...p, socialLinks: p.socialLinks.filter((_, x) => x !== i) })) }
  function setLink(i: number, k: 'platform' | 'url', v: string) {
    setProfile(p => ({ ...p, socialLinks: p.socialLinks.map((l, x) => x === i ? { ...l, [k]: v } : l) }))
  }

  function submitPw(e: React.FormEvent) {
    e.preventDefault()
    if (pw.next !== pw.confirm) { setPwError('Passwords do not match.'); return }
    if (pw.next.length < 8)    { setPwError('Must be at least 8 characters.'); return }
    setPwError('')
    changePw.mutate()
  }

  const avatarSrc = avatarPreview ?? user?.avatarUrl

  return (
    <div className="mx-auto max-w-2xl px-6 py-8">
      <h1 className="mb-8 text-2xl font-semibold text-gray-900">Settings</h1>

      {/* ── Profile ── */}
      <section className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-5 text-base font-semibold text-gray-900">Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Full name</label>
            <input className={INPUT} value={profile.name} onChange={e => setProfile(p => ({ ...p, name: e.target.value }))} />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              className={`${INPUT} resize-none`}
              rows={3}
              placeholder="Tell people about yourself…"
              value={profile.bio}
              onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))}
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-700">Social links</label>
              <button type="button" onClick={addLink} className="text-xs font-medium text-brand hover:underline">+ Add</button>
            </div>
            <div className="space-y-2">
              {profile.socialLinks.map((link, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    className={`${INPUT} w-32 flex-none`}
                    placeholder="Platform"
                    value={link.platform}
                    onChange={e => setLink(i, 'platform', e.target.value)}
                  />
                  <input
                    className={`${INPUT} flex-1`}
                    placeholder="https://…"
                    value={link.url}
                    onChange={e => setLink(i, 'url', e.target.value)}
                  />
                  <button type="button" onClick={() => removeLink(i)} className="px-2 text-gray-400 hover:text-red-500 transition-colors">✕</button>
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => saveProfile.mutate()} disabled={saveProfile.isPending} className={BTN}>
            {saveProfile.isPending ? 'Saving…' : 'Save profile'}
          </button>
        </div>
      </section>

      {/* ── Avatar ── */}
      <section className="mb-6 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-5 text-base font-semibold text-gray-900">Profile photo</h2>
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            {avatarSrc ? (
              <Image src={avatarSrc} alt="Avatar" width={80} height={80} className="h-20 w-20 rounded-full object-cover" />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-2xl font-semibold uppercase">
                {user?.name?.charAt(0) ?? '?'}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div
              role="button"
              tabIndex={0}
              className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 text-center transition-colors ${dragging ? 'border-brand bg-brand-50' : 'border-gray-300 hover:border-brand hover:bg-gray-50'}`}
              onClick={() => fileRef.current?.click()}
              onKeyDown={e => e.key === 'Enter' && fileRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
            >
              <p className="text-sm text-gray-600">
                <span className="font-medium text-brand">Click to upload</span> or drag and drop
              </p>
              <p className="mt-1 text-xs text-gray-400">PNG, JPG — up to 5 MB</p>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={e => { const f = e.target.files?.[0]; if (f) pickFile(f) }}
            />
            {avatarFile && (
              <button onClick={() => uploadAvatar.mutate()} disabled={uploadAvatar.isPending} className={`mt-3 ${BTN}`}>
                {uploadAvatar.isPending ? 'Uploading…' : 'Upload photo'}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Password ── */}
      <section className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-5 text-base font-semibold text-gray-900">Change password</h2>
        <form onSubmit={submitPw} className="space-y-4">
          {(['current', 'next', 'confirm'] as const).map((k) => (
            <div key={k}>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                {k === 'current' ? 'Current password' : k === 'next' ? 'New password' : 'Confirm new password'}
              </label>
              <input
                type="password"
                className={INPUT}
                value={pw[k]}
                onChange={e => setPw(p => ({ ...p, [k]: e.target.value }))}
                required
              />
            </div>
          ))}
          {pwError && <p className="text-sm text-red-500">{pwError}</p>}
          {changePw.isError && !pwError && (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">Incorrect current password.</p>
          )}
          <button type="submit" disabled={changePw.isPending} className={BTN}>
            {changePw.isPending ? 'Changing…' : 'Change password'}
          </button>
        </form>
      </section>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 rounded-lg px-4 py-3 text-sm font-medium shadow-lg animate-fade-in ${toast.ok ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {toast.msg}
        </div>
      )}
    </div>
  )
}
