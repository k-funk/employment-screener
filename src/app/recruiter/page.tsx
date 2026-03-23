'use client'

import { useState } from 'react'
import PageContainer from '@/components/PageContainer'
import ProgressBar from '@/components/recruiter/ProgressBar'
import Step1 from '@/components/recruiter/Step1'
import Step2 from '@/components/recruiter/Step2'
import Step3 from '@/components/recruiter/Step3'
import Step4, { VERIFICATION_ANSWER } from '@/components/recruiter/Step4'
import ThankYou from '@/components/recruiter/ThankYou'
import SubmissionError from '@/components/recruiter/SubmissionError'
import { RecruiterFormData } from '@/types/recruiter'
import { submitForm } from '@/lib/submitForm'

type Step = 1 | 2 | 3 | 4 | 'done' | 'submissionError'
type ActiveStep = Exclude<Step, 'done' | 'submissionError'>

const initialData: RecruiterFormData = {
  name: '',
  email: '',
  organization: '',
  industry: '',
  employmentType: '',
  orgSize: '',
  hierarchyLevels: '',
  presence: '',
  capitalStructure: '',
  firstSixMonths: '',
  techStack: '',
  additionalNotes: '',
  verificationAnswer: '',
}

const SECTIONS = [
  'Recruiter Intake',
  'Team & Structure',
  'Growth & Mission',
  'Finalizing Your Interest',
]

function validate(step: ActiveStep, data: RecruiterFormData): string | undefined {
  switch (step) {
    case 1: {
      if (!data.name.trim()) return 'Please enter your name.'
      if (!data.email.trim()) return 'Please enter your email.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Please enter a valid email address.'
      if (!data.organization.trim()) return 'Please enter your organization.'
      if (!data.industry.trim()) return 'Please enter an industry.'
      if (!data.employmentType) return 'Please select Full Time or Part Time.'
      return
    }
    case 2: {
      if (!data.orgSize.trim()) return 'Please enter the engineering team size.'
      if (!data.hierarchyLevels) return 'Please select the number of hierarchy levels.'
      if (!data.presence) return 'Please select a presence option.'
      return
    }
    case 3: {
      if (!data.capitalStructure) return 'Please select a funding stage.'
      if (!data.firstSixMonths.trim()) return 'Please describe the first 6 months impact.'
      return
    }
    case 4: {
      if (data.verificationAnswer.trim() !== VERIFICATION_ANSWER) return "Incorrect human check. Hint: it's a simple math problem."
      return
    }
    default:
      return step satisfies never
  }
}

export default function RecruiterPage() {
  const [step, setStep] = useState<Step>(1)
  const [formData, setFormData] = useState<RecruiterFormData>(initialData)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onChange = (updates: Partial<RecruiterFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    setError('')
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      await submitForm(formData)
      setStep('done')
    } catch {
      setStep('submissionError')
    } finally {
      setSubmitting(false)
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'instant' })

  const handleNext = async () => {
    if (step === 'done' || step === 'submissionError') return

    const err = validate(step as ActiveStep, formData)
    if (err) {
      setError(err)
      return
    }

    if (step === 4) {
      await handleSubmit()
    } else {
      setStep(((step as number) + 1) as Step)
    }
    scrollToTop()
  }

  const handleBack = () => {
    if (step === 1 || step === 'done' || step === 'submissionError') return
    setStep(((step as number) - 1) as Step)
    setError('')
    scrollToTop()
  }

  if (step === 'done') return <ThankYou />
  if (step === 'submissionError') return <SubmissionError onRetry={handleSubmit} formData={formData} submitting={submitting} />

  const stepNum = step as number
  const section = SECTIONS[stepNum - 1]

  return (
    <section className="w-full">
      <PageContainer className="py-8 md:py-16 flex flex-col items-center">
        <ProgressBar
          sectionName={section}
          step={stepNum}
          totalSteps={4}
        />

        <StepContent step={step as ActiveStep} formData={formData} onChange={onChange} />

        <NavigationFooter step={step as ActiveStep} onBack={handleBack} onNext={handleNext} submitting={submitting} />

        {error && <p className="w-full text-right text-sm font-medium text-error mt-3">{error}</p>}
      </PageContainer>
    </section>
  )
}

function StepContent({ step, formData, onChange }: {
  step: ActiveStep
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}) {
  return (
    <>
      {step === 1 && (
        <header className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          <div className="md:col-span-8">
            <h1 className="text-5xl font-extrabold font-headline tracking-tight text-foreground leading-[1.1] mb-6">
              Let&apos;s see if we&apos;re a great fit.
            </h1>
            <p className="text-lg text-secondary leading-relaxed">
              Tailoring this experience starts with understanding your goals. Providing these details
              helps curate the most relevant case studies and metrics for your review.
            </p>
          </div>
        </header>
      )}

      <div className="space-y-8 md:space-y-16 w-full">
        {(() => {
          switch (step) {
            case 1: return <Step1 formData={formData} onChange={onChange} />
            case 2: return <Step2 formData={formData} onChange={onChange} />
            case 3: return <Step3 formData={formData} onChange={onChange} />
            case 4: return <Step4 formData={formData} onChange={onChange} />
            default: return step satisfies never
          }
        })()}
      </div>
    </>
  )
}

function NavigationFooter({ step, onBack, onNext, submitting }: {
  step: ActiveStep
  onBack: () => void
  onNext: () => void
  submitting: boolean
}) {
  return (
    <div className="w-full mt-16 pt-8 flex justify-between items-center border-t border-outline-variant/20">
      <button
        type="button"
        onClick={onBack}
        disabled={step === 1 || submitting}
        className={`flex items-center gap-2 font-bold py-2 px-4 transition-colors ${
          step === 1 || submitting
            ? 'text-outline cursor-not-allowed'
            : 'text-foreground hover:text-on-tertiary-container'
        }`}
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={submitting}
        className="group flex items-center gap-3 bg-gradient-to-br from-[#4edea3] to-[#00ad78] text-on-tertiary font-headline font-extrabold px-10 py-4 rounded-xl ambient-shadow hover:scale-105 active:scale-95 transition-all disabled:opacity-75 disabled:cursor-not-allowed disabled:scale-100"
      >
        {step === 4 ? 'Submit' : 'Next Step'}
        <span className={`material-symbols-outlined transition-transform ${submitting ? 'animate-spin' : 'group-hover:translate-x-1'}`}>
          {(() => {
            if (submitting) return 'progress_activity'
            return step === 4 ? 'send' : 'arrow_forward'
          })()}
        </span>
      </button>
    </div>
  )
}
