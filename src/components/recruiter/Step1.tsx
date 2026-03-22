import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'

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
          question="First, what's your name?"
        />
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="Full name"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Email"
          question="And the best email to reach you?"
        />
        <div className="md:col-span-7">
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="you@company.com"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Organization"
          question="Great to meet you! Who are you representing today?"
        />
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => onChange({ organization: e.target.value })}
            placeholder="Company name"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Industry"
          question="And what field are they making waves in?"
        />
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => onChange({ industry: e.target.value })}
            placeholder="Industry or sector"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Engagement Model"
          question="What structure are you looking to explore?"
        />
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            {(['FT', 'PT'] as const).map((type) => {
              const selected = formData.employmentType === type
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => onChange({ employmentType: type })}
                  className={`relative flex flex-col items-center justify-center p-8 rounded-xl bg-surface-container-lowest ambient-shadow transition-all hover:scale-[1.02] border-2 ${
                    selected
                      ? 'border-on-tertiary-container bg-tertiary-fixed/10'
                      : 'border-transparent hover:border-on-tertiary-container/30'
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
        </div>
      </QuestionRow>
    </>
  )
}
