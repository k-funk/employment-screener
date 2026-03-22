import { RecruiterFormData } from '@/types/recruiter'

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbytexRxWvHPIABz-K_y2N9_wpk33e-xUPJPWDvsNBGgr59njHfYb5XrTi3CGM7PhbYBJg/exec'

export async function submitForm({ verificationAnswer: _, ...payload }: RecruiterFormData): Promise<void> {
  const response = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form.')
  }
}
