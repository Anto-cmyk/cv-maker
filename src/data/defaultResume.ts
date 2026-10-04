import type { ResumeData } from '../types/resume'

export const defaultResume: ResumeData = {
  personal: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
    github: '',
    photo: '',
  },

  summary: '',

  experience: [],

  education: [],

  skills: [],

  projects: [],

  certifications: [],

  languages: [],

  references: [],
}