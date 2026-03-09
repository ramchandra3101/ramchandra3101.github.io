'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToHash() {
  const pathname = usePathname()
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const isHome = pathname === basePath || pathname === '/'

  useEffect(() => {
    if (!isHome) return
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [isHome])

  return null
}
