import type { ResumeData } from '../types/resume'

const RESUME_STORAGE_KEY = 'resume-builder-data'
const TEMPLATE_STORAGE_KEY = 'resume-builder-template'

export function saveResume(resume: ResumeData) {
  try {
    localStorage.setItem(
      RESUME_STORAGE_KEY,
      JSON.stringify(resume),
    )
  } catch (error) {
    console.error('Failed to save resume:', error)
  }
}

export function loadResume(): ResumeData | null {
  try {
    const savedResume =
      localStorage.getItem(RESUME_STORAGE_KEY)

    if (!savedResume) {
      return null
    }

    return JSON.parse(savedResume) as ResumeData
  } catch (error) {
    console.error('Failed to load resume:', error)
    return null
  }
}

export function saveTemplate(template: string) {
  try {
    localStorage.setItem(
      TEMPLATE_STORAGE_KEY,
      template,
    )
  } catch (error) {
    console.error('Failed to save template:', error)
  }
}

export function loadTemplate(): string | null {
  try {
    return localStorage.getItem(TEMPLATE_STORAGE_KEY)
  } catch (error) {
    console.error('Failed to load template:', error)
    return null
  }
}

export function clearResumeStorage() {
  try {
    localStorage.removeItem(RESUME_STORAGE_KEY)
    localStorage.removeItem(TEMPLATE_STORAGE_KEY)
  } catch (error) {
    console.error(
      'Failed to clear resume storage:',
      error,
    )
  }
}