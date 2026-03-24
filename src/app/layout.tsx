import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BASE_PATH } from '../../next.config'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'Kevin Funk — Staff Software Engineer',
  description:
    'Portfolio and recruiter intake for Kevin Funk, Staff Software Engineer with 13 years of experience.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <head>
        {/*
          * Inline script to apply dark mode before first paint (prevents FOUC).
          * We previously read the `theme` cookie server-side via next/headers, but
          * that API is incompatible with `output: 'export'` (static export for GitHub
          * Pages). This synchronous inline script reads the same cookie client-side
          * and adds the `dark` class to <html> before the browser paints — same effect,
          * no server required. Nav.tsx still writes `document.cookie = 'theme=...'`.
          */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var m=document.cookie.match(/(?:^|;\\s*)theme=([^;]*)/);if(m&&m[1]==='dark')document.documentElement.classList.add('dark')})()` }} />
        <link rel="icon" href={`${BASE_PATH}/favicon.ico`} sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href={`${BASE_PATH}/favicon-16x16.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${BASE_PATH}/favicon-32x32.png`} />
        <link rel="apple-touch-icon" href={`${BASE_PATH}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${BASE_PATH}/site.webmanifest`} />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-surface text-on-surface font-body min-h-screen flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <Nav />
        <main className="flex-grow flex flex-col pt-20 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
