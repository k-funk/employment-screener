import { LINKEDIN_URL, GITHUB_URL, EMAIL } from '@/lib/contact'
import LinkedInIcon from '@/components/icons/LinkedInIcon'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant/20 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 max-w-7xl mx-auto gap-6">
        <div className="font-headline font-bold text-xs tracking-wide uppercase text-secondary">
          © {new Date().getFullYear()} Kevin Funk
        </div>
        <div className="flex gap-8 font-headline font-bold text-xs tracking-wide uppercase">
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-secondary hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            Email
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            <span className="material-symbols-outlined text-base">code</span>
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary hover:text-on-tertiary-container transition-colors duration-200 active:scale-95"
          >
            <LinkedInIcon className="w-4 h-4 shrink-0" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
