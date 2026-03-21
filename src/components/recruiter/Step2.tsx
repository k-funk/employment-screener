import { RecruiterFormData } from '@/types/recruiter'

interface Step2Props {
  formData: RecruiterFormData
  onChange: (updates: Partial<RecruiterFormData>) => void
}

const HIERARCHY = ['1', '2', '3', '4', '5', '6+']

const PRESENCE_OPTIONS = [
  {
    value: 'remote' as const,
    label: 'Fully Remote',
    sub: 'Global talent, zero mandatory travel',
    icon: 'public',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
  {
    value: 'hybrid' as const,
    label: 'Hybrid (Default)',
    sub: 'Occasional office presence required',
    icon: 'domain',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-on-tertiary-fixed',
  },
  {
    value: 'onsite' as const,
    label: 'On-site Mandatory',
    sub: 'Daily collaboration from the main hub',
    icon: 'groups',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
]

const FREQ_LABELS = ['Rarely', '2-3 Days/Week', 'Daily']

export default function Step2({ formData, onChange }: Step2Props) {
  return (
    <div className="w-full max-w-3xl space-y-12">
      {/* Org Size */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Scale
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-foreground">
            How large is the engineering team?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            Quantify the current department size to help us understand the scope of the role.
          </p>
        </div>
        <div className="md:col-span-7">
          <div className="relative group">
            <input
              type="number"
              value={formData.orgSize}
              onChange={(e) => onChange({ orgSize: e.target.value })}
              placeholder="0"
              min="1"
              className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-on-tertiary-container text-2xl font-headline font-bold py-4 px-0 transition-colors placeholder:text-outline-variant"
            />
            <div className="absolute right-0 bottom-4 text-on-secondary-container font-label font-bold text-xs uppercase tracking-widest">
              Engineers
            </div>
          </div>
        </div>
      </section>

      {/* Hierarchy */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Hierarchy
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-foreground">
            Management layers between an IC and the CTO?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            This gauges the flatness of your organization and decision-making speed.
          </p>
        </div>
        <div className="md:col-span-7">
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
        </div>
      </section>

      {/* Presence */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-secondary-container mb-2 block">
            Presence
          </label>
          <p className="font-headline text-xl font-bold leading-tight text-foreground">
            What&apos;s the face-time situation?
          </p>
          <p className="text-on-secondary-container text-sm mt-2">
            Define the balance between remote flexibility and in-person collaboration.
          </p>
        </div>
        <div className="md:col-span-7 space-y-4">
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
                    <div
                      className={`w-10 h-10 rounded-full ${opt.iconBg} flex items-center justify-center`}
                    >
                      <span className={`material-symbols-outlined ${opt.iconColor}`}>
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

          {/* Frequency Slider */}
          <div className="mt-6 p-6 rounded-xl bg-surface-container-lowest ambient-shadow">
            <label className="font-label text-[0.65rem] uppercase tracking-widest font-bold text-on-secondary-container block mb-4">
              Frequency of in-person collaboration
            </label>
            <div className="flex justify-between text-xs font-bold text-on-secondary-container mb-2">
              {FREQ_LABELS.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={formData.presenceFrequency}
              onChange={(e) => onChange({ presenceFrequency: parseInt(e.target.value) })}
              className="w-full h-1.5 bg-surface-container rounded-full appearance-none cursor-pointer accent-on-tertiary-container"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
