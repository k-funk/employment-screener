interface ProgressBarProps {
  sectionLabel: string
  sectionName: string
  step: number
  totalSteps: number
  large?: boolean
}

export default function ProgressBar({
  sectionLabel,
  sectionName,
  step,
  totalSteps,
  large = false,
}: ProgressBarProps) {
  const pct = Math.round((step / totalSteps) * 100)

  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-end mb-4">
        <div>
          <span className="font-label text-[0.75rem] uppercase tracking-widest font-bold text-on-secondary-container">
            {sectionLabel}
          </span>
          {large ? (
            <h1 className="font-headline text-3xl font-extrabold tracking-tight mt-1 text-foreground">
              {sectionName}
            </h1>
          ) : (
            <h2 className="font-headline text-sm font-bold text-foreground mt-1">
              {sectionName}
            </h2>
          )}
        </div>
        <span className="font-label text-sm font-bold text-foreground">
          Step {step} of {totalSteps}
        </span>
      </div>
      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
        <div
          className="h-full bg-on-tertiary-container rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
