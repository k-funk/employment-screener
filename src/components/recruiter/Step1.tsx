import { RecruiterFormData } from '@/types/recruiter'

interface Step1Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

export default function Step1({ formData, onChange }: Step1Props) {
  return (
    <>
      {/* Company Name */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            ORGANIZATION
          </span>
        </div>
        <div className="md:col-span-9">
          <label className="block text-2xl font-headline font-bold text-foreground mb-4">
            Great to meet you! Who are you representing today?
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => onChange({ companyName: e.target.value })}
            placeholder="Company name"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </div>

      {/* Industry */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            SECTOR
          </span>
        </div>
        <div className="md:col-span-9">
          <label className="block text-2xl font-headline font-bold text-foreground mb-4">
            And what field are they making waves in?
          </label>
          <input
            type="text"
            value={formData.industry}
            onChange={(e) => onChange({ industry: e.target.value })}
            placeholder="Industry or sector"
            className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container py-4 text-xl font-medium transition-all placeholder:text-outline-variant"
          />
        </div>
      </div>

      {/* Employment Type */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div className="md:col-span-3">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-on-secondary-container">
            ENGAGEMENT MODEL
          </span>
        </div>
        <div className="md:col-span-9">
          <label className="block text-2xl font-headline font-bold text-foreground mb-8">
            What structure are you looking to explore?
          </label>
          <div className="grid grid-cols-2 gap-4 max-w-xl">
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
      </div>
    </>
  )
}
