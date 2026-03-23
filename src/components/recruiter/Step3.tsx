import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'
import QuestionContent from '@/components/recruiter/QuestionContent'

interface Step3Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

const FUNDING_STAGES = [
  'Seed / Early Stage',
  'Series A / B Growth',
  'Series C / D+ Expansion',
  'Public (Nasdaq / NYSE)',
  'Bootstrapped / Profitable Private',
  'Non-Profit / Government / Other',
  'Experimental / Undisclosed',
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
          question={<>Where is the company in its <span className="text-on-tertiary-container">funding</span> journey?</>}
          description="Manage risk expectations and trajectory transparency."
        />
        <QuestionContent className="space-y-3">
          {FUNDING_STAGES.map((stage) => {
            const selected = formData.capitalStructure === stage
            return (
              <button
                key={stage}
                type="button"
                onClick={() => onChange({ capitalStructure: stage })}
                className={`w-full p-5 rounded-xl bg-surface-container-low border-2 transition-all flex items-center justify-between text-left ${
                  selected
                    ? 'border-on-tertiary-container bg-surface-selected text-on-tertiary-container'
                    : 'border-transparent'
                }`}
              >
                <span className={`font-headline font-bold ${selected ? 'text-on-tertiary-container' : 'text-foreground'}`}>
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
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Contribution"
          question={<>What kind of <span className="text-on-tertiary-container">impact would I make</span> in my first 6 months?</>}
          description="Help define my legacy and technical ownership."
        />
        <QuestionContent>
          <textarea
            value={formData.firstSixMonths}
            onChange={(e) => onChange({ firstSixMonths: e.target.value })}
            placeholder="Describe the key initiatives and the specific legacy that I would..."
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container outline-none px-5 py-4 text-xl font-medium text-foreground placeholder:text-outline-variant resize-none min-h-[160px] transition-all"
          />
          <div className="flex justify-between items-center mt-4">
            <span className="text-[0.65rem] font-bold text-on-surface-variant/50 uppercase tracking-widest">
              {wordCount} / 500 Words
            </span>
          </div>
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Tech Stack"
          question={<>What&apos;s your primary <span className="text-on-tertiary-container">tech stack</span>?</>}
          description="Optional — Share the languages, frameworks, and tools the team works with day-to-day."
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.techStack}
            onChange={(e) => onChange({ techStack: e.target.value })}
            placeholder="e.g. TypeScript, React, Node, PostgreSQL..."
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Compensation"
          question={<>What&apos;s the <span className="text-on-tertiary-container">compensation</span> for this role?</>}
          description="Optional — Include salary range and equity (e.g. % of company or option pool)."
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.compensation}
            onChange={(e) => onChange({ compensation: e.target.value })}
            placeholder="e.g. $180–220k base, 0.15% equity..."
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>
    </>
  )
}
