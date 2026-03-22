import { PropsWithChildren } from 'react'

export default function PageContainer({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={`max-w-6xl mx-auto px-8${className ? ` ${className}` : ''}`}>{children}</div>
}
