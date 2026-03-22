import { ReactNode } from 'react'

interface QuestionContentProps {
  children: ReactNode
  className?: string
}

export default function QuestionContent({ children, className }: QuestionContentProps) {
  return (
    <div className={`md:col-span-7${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
