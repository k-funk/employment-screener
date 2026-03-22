// NOTE: See note in submitForm.ts about updating the APPS_SCRIPT_URL when changing the data sent.
export interface RecruiterFormData {
  name: string
  email: string
  organization: string
  organizationUrl?: string
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
