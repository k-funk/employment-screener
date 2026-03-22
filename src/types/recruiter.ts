export interface RecruiterFormData {
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
