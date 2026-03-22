'use client'

import { EMAIL } from '@/lib/contact'
import { RecruiterFormData, toSubmissionData } from '@/types/recruiter'

interface SubmissionErrorProps {
  onRetry: () => void
  formData: RecruiterFormData
  submitting: boolean
}

export default function SubmissionError({ onRetry, formData, submitting }: SubmissionErrorProps) {
  const payload = toSubmissionData(formData)
  const subject = `Recruiter Referral: ${formData.organization}`
  const body = Object.entries(payload)
    .map(([k, v]) => `${k}: ${v || '(not provided)'}`)
    .join('\n')
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
    <div className="flex-grow flex items-center justify-center px-6 py-8">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-error flex items-center justify-center mx-auto mb-8 ambient-shadow">
          <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed">error</span>
        </div>
        <h1 className="font-headline font-extrabold text-4xl md:text-5xl text-on-error-container tracking-tight mb-4">
          Submission failed
        </h1>
        <p className="text-lg text-on-error-container/70 leading-relaxed mb-8">
          Something went wrong sending your form. You can try again, or send your answers directly via email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onRetry}
            disabled={submitting}
            className="cta-gradient text-tertiary px-8 py-4 rounded-xl font-extrabold text-lg shadow-lg active:scale-95 transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {submitting
              ? <><span className="material-symbols-outlined animate-spin">progress_activity</span> Retrying...</>
              : 'Try Again'
            }
          </button>
          <a
            href={mailtoHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-filled px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-all inline-block"
          >
            Send via Email
          </a>
        </div>
      </div>
    </div>
  )
}
