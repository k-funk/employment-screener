import { ReactNode } from 'react'


export default function QuestionHeader({
  topic,
  question,
  description,
}: {
  topic: string
  question: ReactNode
  description?: string
}) {
  return (
    <div className="md:col-span-5">
      <label className="font-label text-[0.75rem] uppercase tracking-wider font-bold text-on-surface-variant mb-2 block">
        {topic}
      </label>
      <p className="font-headline text-xl font-bold leading-tight text-foreground">{question}</p>
      {description && (
        <p className="text-on-surface-variant text-sm mt-2">{description}</p>
      )}
    </div>
  )
}
