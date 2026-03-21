import { RecruiterFormData } from '@/types/recruiter'

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
    <div className="w-full max-w-3xl space-y-16">
      {/* Funding Stage */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Capital Structure
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-primary dark:text-[#f7f9fb]">
            Where is the company in its funding journey?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            Manage risk expectations and trajectory transparency.
          </p>
        </div>
        <div className="md:col-span-7 space-y-3">
          {FUNDING_STAGES.map((stage) => {
            const selected = formData.fundingStage === stage
            return (
              <button
                key={stage}
                type="button"
                onClick={() => onChange({ fundingStage: stage })}
                className={`w-full p-5 rounded-xl bg-surface-container-low dark:bg-[#1a233d] border-2 transition-all flex items-center justify-between text-left ${
                  selected
                    ? 'border-on-tertiary-container bg-surface-container-lowest dark:bg-[#222d4a]'
                    : 'border-transparent'
                }`}
              >
                <span className="font-headline font-bold text-primary dark:text-[#f7f9fb]">
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
      </section>

      {/* First 6 Months */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Strategic Contribution
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-primary dark:text-[#f7f9fb]">
            What kind of impact would I make in my first 6 months?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            Help candidates define their legacy and technical ownership.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="relative group bg-surface-container-low dark:bg-[#1a233d] p-6 rounded-2xl border-2 border-transparent focus-within:border-on-tertiary-container focus-within:bg-surface-container-lowest transition-all ambient-shadow">
            <textarea
              value={formData.firstSixMonths}
              onChange={(e) => onChange({ firstSixMonths: e.target.value })}
              placeholder="Describe the key initiatives and the specific legacy this individual will begin to build..."
              className="w-full bg-transparent border-none p-0 font-body text-primary dark:text-[#f7f9fb] placeholder:text-outline focus:ring-0 resize-none min-h-[160px]"
            />
            <div className="flex justify-between items-center mt-4">
              <span className="text-[0.65rem] font-bold text-on-secondary-container/50 uppercase tracking-widest">
                {wordCount} / 500 Words
              </span>
            </div>
          </div>
          <p className="text-[0.7rem] text-on-secondary-container italic mt-3 px-1">
            Tip: Be specific about technical challenges or business metrics they will own.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            TECH STACK
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-primary dark:text-[#f7f9fb]">
            What&apos;s your primary tech stack?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            Share the languages, frameworks, and tools the team works with day-to-day.
          </p>
        </div>
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.techStack}
            onChange={(e) => onChange({ techStack: e.target.value })}
            placeholder="e.g. TypeScript, React, Node, PostgreSQL..."
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant dark:text-[#f7f9fb] dark:border-outline dark:placeholder:text-outline"
          />
        </div>
      </section>
    </div>
  )
}
