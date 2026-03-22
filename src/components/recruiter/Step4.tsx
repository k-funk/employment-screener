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
