import Link from 'next/link'
import { EMAIL } from '@/lib/contact'

export default function ThankYou() {
  return (
    <div className="flex-grow flex items-center justify-center px-6 py-8">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full cta-gradient flex items-center justify-center mx-auto mb-8 ambient-shadow">
          <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed">
            check_circle
          </span>
        </div>
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
          You&apos;re all set!
        </h1>
        <p className="text-lg text-secondary leading-relaxed mb-8">
          Thank you for taking the time to share your opportunity. I&apos;ll review your submission
          and follow up if there&apos;s a strong match. Looking forward to connecting!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-filled px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-all inline-block"
          >
            View Resume
          </Link>
          <a
            href={`mailto:${EMAIL}`}
            className="cta-gradient text-tertiary px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg active:scale-95 transition-all inline-block"
          >
            Email Directly
          </a>
        </div>
      </div>
    </div>
  )
}
