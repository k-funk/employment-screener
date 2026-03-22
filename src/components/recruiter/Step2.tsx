import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'
import QuestionContent from '@/components/recruiter/QuestionContent'

interface Step2Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

const HIERARCHY = ['1', '2', '3', '4', '5', '6+']

const PRESENCE_OPTIONS: { value: 'remote' | 'hybrid' | 'onsite'; label: string; sub: string; icon: string }[] = [
  { value: 'remote', label: 'Fully Remote', sub: 'Global talent, zero mandatory travel', icon: 'public' },
  { value: 'hybrid', label: 'Hybrid', sub: 'Occasional office presence required', icon: 'domain' },
  { value: 'onsite', label: 'On-site Mandatory', sub: 'Daily collaboration from the main hub', icon: 'groups' },
]


export default function Step2({ formData, onChange }: Step2Props) {
  return (
    <>
      <QuestionRow>
        <QuestionHeader
          topic="Org Size"
          question={<>How large is the <span className="text-on-tertiary-container">engineering</span> team?</>}
          description="Quantify the current department size to help us understand the scope of the role."
        />
        <QuestionContent>
          <div className="relative group">
            <input
              type="text"
              value={formData.orgSize}
              onChange={(e) => onChange({ orgSize: e.target.value })}
              placeholder="0"
              inputMode="numeric"
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container text-2xl font-headline font-bold py-4 px-0 transition-colors placeholder:text-outline-variant"
            />
            <div className="absolute right-0 bottom-4 text-on-secondary-container font-label font-bold text-xs uppercase tracking-widest">
              Engineers
            </div>
          </div>
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Hierarchy"
          question={<>Management <span className="text-on-tertiary-container">layers</span> between the average IC and the CTO?</>}
          description="This gauges the flatness of your organization and decision-making speed."
        />
        <QuestionContent>
          <div className="grid grid-cols-6 gap-3">
            {HIERARCHY.map((val) => {
              const selected = formData.hierarchyLevels === val
              return (
                <button
                  key={val}
                  type="button"
                  onClick={() => onChange({ hierarchyLevels: val })}
                  className={`aspect-square flex items-center justify-center rounded-xl font-headline font-bold text-lg ambient-shadow transition-all ${
                    selected
                      ? 'bg-tertiary-fixed-dim border-2 border-on-tertiary-container text-on-tertiary-container'
                      : 'bg-surface-container-lowest border border-transparent hover:border-on-tertiary-container text-foreground'
                  }`}
                >
                  {val}
                </button>
              )
            })}
          </div>
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Presence"
          question={<>What&apos;s the <span className="text-on-tertiary-container">face-time</span> situation?</>}
          description="Define the balance between remote flexibility and in-person collaboration."
        />
        <QuestionContent className="space-y-4">
          <div className="flex flex-col gap-3">
            {PRESENCE_OPTIONS.map((opt) => {
              const selected = formData.presence === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ presence: opt.value })}
                  className={`p-5 rounded-xl bg-surface-container-low border-2 transition-all flex items-center justify-between text-left ${
                    selected
                      ? 'border-on-tertiary-container bg-surface-selected'
                      : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-secondary-container">
                        {opt.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-headline font-bold text-foreground">
                        {opt.label}
                      </div>
                      <div className="text-xs text-on-secondary-container font-medium">
                        {opt.sub}
                      </div>
                    </div>
                  </div>
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
        </QuestionContent>
      </QuestionRow>
    </>
  )
}
