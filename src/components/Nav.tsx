'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PageContainer from '@/components/PageContainer'

export default function Nav() {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
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

  const linkClass = (active: boolean) =>
    active
      ? 'text-on-tertiary-container font-bold border-b-2 border-on-tertiary-container pb-1 transition-colors'
      : 'text-secondary hover:text-foreground border-b-2 border-transparent pb-1 transition-colors active:scale-95 duration-150 ease-in-out'

  return (
    <nav className="fixed top-0 w-full z-50 bg-nav backdrop-blur-xl shadow-[0_20px_40px_rgba(19,27,46,0.06)]">
      <PageContainer className="flex justify-between items-center w-full py-4">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tighter text-foreground font-headline"
        >
          Kevin Funk
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
          <Link href="/" className={linkClass(isResume)}>Resume</Link>
          <Link href="/recruiter" className={linkClass(isRecruiter)}>Recruiters</Link>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="w-10 h-10 flex items-center justify-center text-foreground nav-btn-hover rounded-lg transition-all active:scale-95 duration-150 ease-in-out"
          >
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground nav-btn-hover rounded-lg transition-all active:scale-95 duration-150 ease-in-out"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </PageContainer>

      {/* Mobile menu */}
      {menuOpen && (
        <>
          {/* Backdrop — portalled to body to escape backdrop-blur containing block */}
          {createPortal(
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />,
            document.body
          )}
          {/* Drawer */}
          <div className="md:hidden relative z-50 border-t border-surface-container-low bg-nav backdrop-blur-xl">
            <PageContainer className="flex flex-col gap-1 py-4 font-headline font-bold tracking-tight">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${linkClass(isResume)}`}
              >
                Resume
              </Link>
              <Link
                href="/recruiter"
                onClick={() => setMenuOpen(false)}
                className={`py-3 ${linkClass(isRecruiter)}`}
              >
                Recruiters
              </Link>
              <div className="pt-2 border-t border-surface-container-low mt-2">
                <button
                  onClick={toggleDark}
                  aria-label="Toggle dark mode"
                  className="flex items-center gap-3 py-3 text-secondary hover:text-foreground transition-colors"
                >
                  <span className="material-symbols-outlined">dark_mode</span>
                  <span>{dark ? 'Light mode' : 'Dark mode'}</span>
                </button>
              </div>
            </PageContainer>
          </div>
        </>
      )}

      <div className="bg-surface-container-low h-px w-full" />
    </nav>
  )
}
