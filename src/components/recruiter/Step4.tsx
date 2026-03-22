import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'
import QuestionContent from '@/components/recruiter/QuestionContent'

export const VERIFICATION_ANSWER = '11'

interface Step4Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

export default function Step4({ formData, onChange }: Step4Props) {
  return (
    <>
      <QuestionRow>
        <QuestionHeader
          topic="Anything Else"
          question={<>Is there <span className="text-on-tertiary-container">anything else</span> you&apos;d like me to know?</>}
          description="Optional — Share context, constraints, or anything that didn't fit above."
        />
        <QuestionContent>
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => onChange({ additionalNotes: e.target.value })}
            placeholder="Feel free to share anything on your mind..."
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container outline-none px-5 py-4 text-xl font-medium text-foreground placeholder:text-outline-variant resize-none min-h-[160px] transition-all"
          />
        </QuestionContent>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Human Check"
          question={<>What is <span className="text-on-tertiary-container">6 + 5</span>?</>}
        />
        <QuestionContent>
          <input
            type="text"
            value={formData.verificationAnswer}
            onChange={(e) => onChange({ verificationAnswer: e.target.value })}
            placeholder="Type answer..."
            className="w-full bg-surface-container-low rounded-xl border-2 border-transparent focus:border-on-tertiary-container px-5 py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </QuestionContent>
      </QuestionRow>
    </>
  )
}
