import { PropsWithChildren } from 'react'

type WorkExperienceProps = PropsWithChildren<{
  title: string
  company: string
  startYear: number
  endYear: number
  location: string
}>

export default function WorkExperience({
  title,
  company,
  startYear,
  endYear,
  location,
  children,
}: WorkExperienceProps) {
  const duration = Math.max(1, endYear - startYear)
  const yearRange = startYear === endYear ? `${startYear}` : `${startYear} — ${endYear}`

  return (
    <div className="bg-surface-container-low p-8 md:p-10 rounded-3xl border border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-headline font-bold text-2xl text-foreground mb-1">{title}</h3>
          <p className="text-on-tertiary-container font-bold text-lg">{company}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm font-bold text-on-secondary-container bg-secondary-container px-4 py-1.5 rounded-full mb-2">
            {yearRange}
            <span className="ms-2 font-normal">
              ({duration} {duration === 1 ? 'Year' : 'Years'})
            </span>
          </span>
          <span className="text-xs text-secondary font-medium uppercase tracking-widest">
            {location}
          </span>
        </div>
      </div>
      {children && <div className="mt-8">{children}</div>}
    </div>
  )
}
