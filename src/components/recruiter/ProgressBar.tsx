interface ProgressBarProps {
  sectionName: string
  step: number
  totalSteps: number
}

export default function ProgressBar({ sectionName, step, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full mb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-2">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-foreground">
          {sectionName}
        </h1>
        <span className="font-label text-[0.75rem] uppercase tracking-widest font-bold text-on-surface-variant mt-1">
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
