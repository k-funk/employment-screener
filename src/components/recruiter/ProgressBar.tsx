interface ProgressBarProps {
  sectionName: string
  step: number
  totalSteps: number
}

export default function ProgressBar({ sectionName, step, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-end mb-4">
        <div>
          <span className="font-label text-[0.75rem] uppercase tracking-widest font-bold text-on-secondary-container">
            Section {String(step).padStart(2, '0')}
          </span>
          <h1 className="font-headline text-3xl font-extrabold tracking-tight mt-1 text-foreground">
            {sectionName}
          </h1>
        </div>
        <span className="font-label text-sm font-bold text-foreground">
          Step {step} of {totalSteps}
        </span>
      </div>
      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-on-tertiary-container rounded-full transition-all duration-500"
          style={{ width: `${Math.round((step / totalSteps) * 100)}%` }}
        />
      </div>
    </div>
  )
}
