'use client'

import { useState } from 'react'
import PageContainer from '@/components/PageContainer'
import ProgressBar from '@/components/recruiter/ProgressBar'
import Step1 from '@/components/recruiter/Step1'
import Step2 from '@/components/recruiter/Step2'
import Step3 from '@/components/recruiter/Step3'
import Step4, { VERIFICATION_ANSWER } from '@/components/recruiter/Step4'
import ThankYou from '@/components/recruiter/ThankYou'
import { RecruiterFormData } from '@/types/recruiter'

type Step = 1 | 2 | 3 | 4 | 'done'

const initialData: RecruiterFormData = {
  companyName: '',
  industry: '',
  employmentType: '',
  orgSize: '',
  hierarchyLevels: '',
  presence: '',
  fundingStage: '',
  firstSixMonths: '',
  techStack: '',
  verificationAnswer: '',
}

const SECTIONS = [
  'Recruiter Intake',
  'Team & Structure',
  'Growth & Mission',
  'Finalizing Your Interest',
]

function validate(step: number, data: RecruiterFormData): string | null {
  if (step === 1) {
    if (!data.companyName.trim()) return 'Please enter your company name.'
    if (!data.industry) return 'Please select an industry.'
    if (!data.employmentType) return 'Please select Full Time or Part Time.'
  }
  if (step === 2) {
    if (!data.orgSize.trim()) return 'Please enter the engineering team size.'
    if (!data.hierarchyLevels) return 'Please select the number of hierarchy levels.'
    if (!data.presence) return 'Please select a presence option.'
  }
  if (step === 3) {
    if (!data.fundingStage) return 'Please select a funding stage.'
    if (!data.firstSixMonths.trim()) return 'Please describe the first 6 months impact.'
  }
  return null
}

export default function RecruiterPage() {
  const [step, setStep] = useState<Step>(1)
  const [formData, setFormData] = useState<RecruiterFormData>(initialData)
  const [error, setError] = useState('')

  const onChange = (updates: Partial<RecruiterFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
    setError('')
  }

  const handleNext = () => {
    if (step === 'done') return

    if (step === 4) {
      if (formData.verificationAnswer.trim() !== VERIFICATION_ANSWER) {
        setError("Incorrect. Hint: it's a simple math problem.")
        return
      }
      setStep('done')
      return
    }

    const err = validate(step as number, formData)
    if (err) {
      setError(err)
      return
    }

    setStep(((step as number) + 1) as Step)
  }

  const handleBack = () => {
    if (step === 1 || step === 'done') return
    setStep(((step as number) - 1) as Step)
    setError('')
  }

  if (step === 'done') return <ThankYou />

  const stepNum = step as number
  const section = SECTIONS[stepNum - 1]
  const isStep1 = step === 1

  return (
    <section className="w-full">
      <PageContainer className="py-12 md:py-20 flex flex-col items-center">
        <ProgressBar
          sectionName={section}
          step={stepNum}
          totalSteps={4}
        />

        {/* Step 1 Hero Header */}
        {isStep1 && (
          <header className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl">
            <div className="md:col-span-8">
              <h1 className="text-5xl md:text-6xl font-extrabold font-headline tracking-tight text-foreground leading-[1.1] mb-6">
                Let&apos;s see if we&apos;re a great fit.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                Tailoring this experience starts with understanding your goals. Providing these details
                helps curate the most relevant case studies and metrics for your review.
              </p>
            </div>
          </header>
        )}

        {/* Step Content */}
        <div className="space-y-16 w-full max-w-7xl">
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

        {/* Validation error */}
        {error && (
          <p className="w-full max-w-3xl mt-4 text-sm font-medium text-error">{error}</p>
        )}

        {/* Navigation */}
        <div className="w-full mt-16 pt-8 flex justify-between items-center border-t border-outline-variant/20">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 1}
            className={`flex items-center gap-2 font-bold py-2 px-4 transition-colors ${
              step === 1
                ? 'text-outline cursor-not-allowed'
                : 'text-foreground hover:text-on-tertiary-container'
            }`}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="group flex items-center gap-3 bg-gradient-to-br from-[#4edea3] to-[#00ad78] text-on-tertiary font-headline font-extrabold px-10 py-4 rounded-xl ambient-shadow hover:scale-105 active:scale-95 transition-all"
          >
            {step === 4 ? 'Complete Submission' : 'Next Step'}
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>
      </PageContainer>
    </section>
  )
}
