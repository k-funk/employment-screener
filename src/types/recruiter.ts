export interface RecruiterFormData {
  companyName: string
  industry: string
  employmentType: 'FT' | 'PT' | ''
  orgSize: string
  hierarchyLevels: string
  presence: 'remote' | 'hybrid' | 'onsite' | ''
  fundingStage: string
  firstSixMonths: string
  techStack: string
  verificationAnswer: string
}
