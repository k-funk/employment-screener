import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '@/lib/contact'

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-[#131b2e] border-t border-[#c6c5d4]/20 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 max-w-7xl mx-auto gap-6">
        <div className="font-headline font-bold text-xs tracking-wide uppercase text-secondary dark:text-[#c6c5d4]">
          © {new Date().getFullYear()} Kevin Funk
        </div>
        <div className="flex gap-8 font-headline font-bold text-xs tracking-wide uppercase">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary dark:text-[#c6c5d4] hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary dark:text-[#c6c5d4] hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            GitHub
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-secondary dark:text-[#c6c5d4] hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
