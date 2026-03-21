import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-surface dark:bg-[#131b2e] text-on-surface dark:text-[#f7f9fb] font-body min-h-screen flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
