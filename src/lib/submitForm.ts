import { RecruiterFormData, toSubmissionData } from '@/types/recruiter'

// Note: Any time we 'deploy' a new version of this Google Apps Script, we need to update this URL to point to the new
// deployment
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwralonp6h_dVJYZb0ESi2_gxrMXbWPLjZoWD6-laOOJvu6EsFzCGKaiOA4Z9BlHsFtwQ/exec'

export async function submitForm(data: RecruiterFormData): Promise<void> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(toSubmissionData(data)),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form.')
  }
}
