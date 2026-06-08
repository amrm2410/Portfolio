export function makeAuthError(codeMap: Record<number, string>) {
  return (err: unknown): string => {
    const status = (err as { response?: { status?: number; data?: { message?: string } } })?.response?.status
    const msg    = (err as { response?: { data?: { message?: string } } })?.response?.data?.message
    if (!status)              return 'Cannot connect to server. Is the backend running?'
    if (status in codeMap)   return codeMap[status]
    if (status >= 500)       return 'Server error. Please try again in a moment.'
    return msg ?? 'Something went wrong.'
  }
}
