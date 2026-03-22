import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'

interface Step3Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

const FUNDING_STAGES = [
  'Seed / Early Stage',
  'Series A / B Growth',
  'Series C / D+ Expansion',
  'Public (Nasdaq / NYSE)',
]

export default function Step3({ formData, onChange }: Step3Props) {
  const wordCount = formData.firstSixMonths.trim()
    ? formData.firstSixMonths.trim().split(/\s+/).length
    : 0

  return (
    <>
      <QuestionRow>
        <QuestionHeader
          topic="Capital Structure"
          question="Where is the company in its funding journey?"
          description="Manage risk expectations and trajectory transparency."
        />
        <div className="md:col-span-7 space-y-3">
          {FUNDING_STAGES.map((stage) => {
            const selected = formData.fundingStage === stage
            return (
              <button
                key={stage}
                type="button"
                onClick={() => onChange({ fundingStage: stage })}
                className={`w-full p-5 rounded-xl bg-surface-container-low border-2 transition-all flex items-center justify-between text-left ${
                  selected
                    ? 'border-on-tertiary-container bg-surface-selected'
                    : 'border-transparent'
                }`}
              >
                <span className="font-headline font-bold text-foreground">
                  {stage}
                </span>
                <span
                  className={`material-symbols-outlined text-on-tertiary-container transition-opacity ${
                    selected ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  check_circle
                </span>
              </button>
            )
          })}
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Contribution"
          question="What kind of impact would I make in my first 6 months?"
          description="Help define my legacy and technical ownership."
        />
        <div className="md:col-span-7">
          <textarea
            value={formData.firstSixMonths}
            onChange={(e) => onChange({ firstSixMonths: e.target.value })}
            placeholder="Describe the key initiatives and the specific legacy that I would..."
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container outline-none py-4 text-xl font-medium text-foreground placeholder:text-outline-variant resize-none min-h-[160px] transition-all"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-[0.65rem] font-bold text-on-secondary-container/50 uppercase tracking-widest">
              {wordCount} / 500 Words
            </span>
          </div>
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Tech Stack"
          question="What's your primary tech stack?"
          description="Share the languages, frameworks, and tools the team works with day-to-day."
        />
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.techStack}
            onChange={(e) => onChange({ techStack: e.target.value })}
            placeholder="e.g. TypeScript, React, Node, PostgreSQL..."
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </QuestionRow>
    </>
  )
}
