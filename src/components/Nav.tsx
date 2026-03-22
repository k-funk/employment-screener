'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PageContainer from '@/components/PageContainer'

export default function Nav() {
  const [dark, setDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    document.cookie = `theme=${next ? 'dark' : 'light'}; path=/; max-age=31536000; SameSite=Lax`
  }

  const isResume = pathname === '/'
  const isRecruiter = pathname === '/recruiter'

  return (
    <nav className="fixed top-0 w-full z-50 bg-nav backdrop-blur-xl shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
      <PageContainer className="flex justify-between items-center w-full py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-foreground font-headline"
        >
          Kevin Funk
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <Link
            href="/"
            className={
              isResume
                ? 'text-on-tertiary-container font-bold border-b-2 border-on-tertiary-container pb-1 transition-colors'
                : 'text-secondary hover:text-foreground border-b-2 border-transparent pb-1 transition-colors active:scale-95 duration-150 ease-in-out'
            }
          >
            Resume
          </Link>
          <Link
            href="/recruiter"
            className={
              isRecruiter
                ? 'text-on-tertiary-container font-bold border-b-2 border-on-tertiary-container pb-1 transition-colors'
                : 'text-secondary hover:text-foreground border-b-2 border-transparent pb-1 transition-colors active:scale-95 duration-150 ease-in-out'
            }
          >
            Recruiters
          </Link>
        </div>

        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="w-10 h-10 flex items-center justify-center text-foreground nav-btn-hover rounded-lg transition-all active:scale-95 duration-150 ease-in-out"
        >
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </PageContainer>
      <div className="bg-surface-container-low h-px w-full" />
    </nav>
  )
}
