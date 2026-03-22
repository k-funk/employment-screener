import { PropsWithChildren } from 'react'

export default function QuestionRow({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-start">{children}</div>
  )
}
