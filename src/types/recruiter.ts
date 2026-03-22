export interface RecruiterFormData {
  name: string
  email: string
  organization: string
  industry: string
  employmentType: 'FT' | 'PT' | ''
  orgSize: string
  hierarchyLevels: string
  presence: 'remote' | 'hybrid' | 'onsite' | ''
  capitalStructure: string
  firstSixMonths: string
  techStack: string
  additionalNotes: string
  verificationAnswer: string
}

export type RecruiterFormDataForSubmission = Omit<RecruiterFormData, 'verificationAnswer'>

export function toSubmissionData({ verificationAnswer: _, ...rest }: RecruiterFormData): RecruiterFormDataForSubmission {
  return rest
}
