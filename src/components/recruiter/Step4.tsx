import { RecruiterFormData } from '@/types/recruiter'
import QuestionHeader from '@/components/recruiter/QuestionHeader'
import QuestionRow from '@/components/recruiter/QuestionRow'

export const VERIFICATION_ANSWER = '15'

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
          question="Is there anything else you'd like me to know?"
          description="Optional — share context, constraints, or anything that didn't fit above."
        />
        <div className="md:col-span-7">
          <textarea
            value={formData.additionalNotes}
            onChange={(e) => onChange({ additionalNotes: e.target.value })}
            placeholder="Feel free to share anything on your mind..."
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container outline-none py-4 text-xl font-medium text-foreground placeholder:text-outline-variant resize-none min-h-[160px] transition-all"
          />
        </div>
      </QuestionRow>

      <QuestionRow>
        <QuestionHeader
          topic="Human Check"
          question="What is 10 + 5?"
        />
        <div className="md:col-span-7">
          <input
            type="text"
            value={formData.verificationAnswer}
            onChange={(e) => onChange({ verificationAnswer: e.target.value })}
            placeholder="Type answer..."
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant outline-none"
          />
        </div>
      </QuestionRow>
    </>
  )
}
