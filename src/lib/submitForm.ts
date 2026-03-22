import { RecruiterFormData, toSubmissionData } from '@/types/recruiter'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycVu29QThF39Z3OSRuOmT1aaxrr3AbcqG2QzvlmgWwn38ocp09zdNtyPFCccZHvRNJ4g/exec'

export async function submitForm(data: RecruiterFormData): Promise<void> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(toSubmissionData(data)),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form.')
  }
}
