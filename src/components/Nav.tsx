'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [dark, setDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const isResume = pathname === '/'
  const isRecruiter = pathname === '/recruiter'

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f9fb]/80 dark:bg-[#131b2e]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-[#131b2e] dark:text-[#f7f9fb] font-headline"
        >
          Kevin Funk
        </Link>

        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <Link
            href="/"
            className={
              isResume
                ? 'text-[#00ad78] dark:text-[#4edea3] font-bold border-b-2 border-[#00ad78] pb-1 transition-colors'
                : 'text-[#57657b] dark:text-[#c6c5d4] hover:text-[#131b2e] dark:hover:text-[#f7f9fb] transition-colors active:scale-95 duration-150 ease-in-out'
            }
          >
            Resume
          </Link>
          <Link
            href="/recruiter"
            className={
              isRecruiter
                ? 'text-[#00ad78] dark:text-[#4edea3] font-bold border-b-2 border-[#00ad78] pb-1 transition-colors'
                : 'text-[#57657b] dark:text-[#c6c5d4] hover:text-[#131b2e] dark:hover:text-[#f7f9fb] transition-colors active:scale-95 duration-150 ease-in-out'
            }
          >
            Recruiters
          </Link>
        </div>

        <button
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="p-2 text-[#131b2e] dark:text-[#f7f9fb] hover:bg-[#f2f4f6]/50 dark:hover:bg-[#1a233d]/50 rounded-lg transition-all active:scale-95 duration-150 ease-in-out"
        >
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </div>
      <div className="bg-surface-container-low dark:bg-[#1a233d] h-px w-full" />
    </nav>
  )
}
