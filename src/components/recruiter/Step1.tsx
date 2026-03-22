import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'
import QuestionContent from '@/components/recruiter/QuestionContent'

interface Step1Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

export default function Step1({ formData, onChange }: Step1Props) {
  return (
    <>
      <QuestionRow>
        <QuestionHeader
          topic="Your Name"
          question={<>First, what&apos;s your <span className="text-on-tertiary-container">name</span>?</>}
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Full name"
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Email"
          question={<>And the best <span className="text-on-tertiary-container">email</span> to reach you?</>}
        />
        <QuestionContent>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="you@company.com"
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Organization"
          question={<>What <span className="text-on-tertiary-container">org</span> are you representing today?</>}
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => onChange({ organization: e.target.value })}
            placeholder="Company name"
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Company URL"
          question={<>Got a <span className="text-on-tertiary-container">link</span> to their website?</>}
          description="Optional"
        />
        <QuestionContent>
          <input
            type="url"
            value={formData.organizationUrl ?? ''}
            onChange={(e) => onChange({ organizationUrl: e.target.value })}
            placeholder="https://company.com"
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Industry"
          question={<>And what <span className="text-on-tertiary-container">field</span> are they making waves in?</>}
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => onChange({ industry: e.target.value })}
            placeholder="Industry or sector"
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Employment Type"
          question={<>What <span className="text-on-tertiary-container">type of employment</span> is this?</>}
        />
        <QuestionContent>
          <div className="grid grid-cols-2 gap-4">
            {(['FT', 'PT'] as const).map((type) => {
              const selected = formData.employmentType === type
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onChange({ employmentType: type })}
                  className={`relative flex flex-col items-center justify-center p-8 rounded-xl bg-surface-container-low border-2 transition-all ${
                    selected
                      ? 'border-on-tertiary-container'
                      : 'border-transparent hover:border-on-tertiary-container'
                  }`}
                >
                  <span className="font-headline text-3xl font-extrabold text-foreground mb-2">
                    {type}
                  </span>
                  <span className="font-label text-[10px] font-bold uppercase tracking-tighter text-on-secondary-container">
                    {type === 'FT' ? 'Full Time' : 'Part Time'}
                  </span>
                </button>
              )
            })}
          </div>
        </QuestionContent>
      </QuestionRow>
    </>
  )
}
