import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
  title: 'Kevin Funk — Senior Software Engineer',
  description:
    'Portfolio and recruiter intake for Kevin Funk, Senior Software Engineer with 13 years of experience.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const isDark = cookieStore.get('theme')?.value === 'dark'

  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable}${isDark ? ' dark' : ''}`}
    >
      <head>
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
