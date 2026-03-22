import { RecruiterFormData, toSubmissionData } from '@/types/recruiter'

// Note: Any time we 'deploy' a new version of this Google Apps Script, we need to update this URL to point to the new
// deployment
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw7xbJdouHldSX21SSIEjev24qcljVou5EkphyFgwRh2ACeFhFMiCqAGFh3QdSAR0k2wA/exec'

export async function submitForm(data: RecruiterFormData): Promise<void> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(toSubmissionData(data)),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form.')
  }
}
