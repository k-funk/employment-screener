import { RecruiterFormData } from '@/types/recruiter'

interface Step4Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
  error: string
}

export default function Step4({ formData, onChange, error }: Step4Props) {
  return (
    <div className="w-full max-w-3xl space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Curation
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-primary dark:text-[#f7f9fb]">
            Securing the connection
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            We maintain a curated environment by ensuring every connection is intentional and human.
            Please complete this brief verification.
          </p>
        </div>
        <div className="md:col-span-7">
          {/* Verification Card */}
          <div className="p-8 rounded-xl bg-surface-container-low dark:bg-[#1a233d] border border-outline-variant/10 ambient-shadow space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">
                  shield_person
                </span>
              </div>
              <div>
                <div className="font-headline font-bold text-primary dark:text-[#f7f9fb]">
                  Human Verification
                </div>
                <div className="text-xs text-on-secondary-container font-medium uppercase tracking-tight">
                  Intentionality check
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-label text-[0.7rem] font-bold text-on-surface-variant uppercase tracking-wider">
                  The Question
                </label>
                <p className="font-headline text-lg text-primary dark:text-[#f7f9fb] font-bold">
                  To keep things human, what&apos;s 10 + 5?
                </p>
              </div>
              <div>
                <input
                  type="text"
                  value={formData.verificationAnswer}
                  onChange={(e) => onChange({ verificationAnswer: e.target.value })}
                  placeholder="Type answer..."
                  className="w-full bg-surface-container-lowest dark:bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-on-tertiary-container text-2xl font-headline font-bold py-4 px-0 transition-colors placeholder:text-surface-dim dark:text-[#f7f9fb] dark:border-outline"
                />
                {error && (
                  <p className="mt-2 text-sm font-medium text-error">{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <div className="flex justify-between items-center px-4 pt-4 border-t border-outline-variant/10">
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary-container flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
            JD
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-background bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold text-on-tertiary-fixed">
            SR
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-background bg-secondary-container flex items-center justify-center text-[8px] font-bold text-on-secondary-container">
            +12
          </div>
        </div>
        <p className="text-[10px] font-label text-outline uppercase tracking-widest font-bold">
          Trusted by 200+ global recruiters
        </p>
      </div>
    </div>
  )
}
