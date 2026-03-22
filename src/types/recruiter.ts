export interface RecruiterFormData {
  organization: string
  industry: string
  employmentType: 'FT' | 'PT' | ''
  orgSize: string
  hierarchyLevels: string
  presence: 'remote' | 'hybrid' | 'onsite' | ''
  fundingStage: string
  firstSixMonths: string
  techStack: string
  verificationAnswer: string
  additionalNotes: string
}
