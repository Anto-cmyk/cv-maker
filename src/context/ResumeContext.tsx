import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import type { ResumeData } from '../types/resume'
import { defaultResume } from '../data/defaultResume'

import {
  saveResume,
  loadResume,
  saveTemplate,
  loadTemplate,
  clearResumeStorage,
} from '../utils/storage'

interface ResumeContextType {
  resume: ResumeData
  selectedTemplate: string
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>
  setSelectedTemplate: React.Dispatch<
    React.SetStateAction<string>
  >
  resetResume: () => void
}

const ResumeContext = createContext<
  ResumeContextType | undefined
>(undefined)

interface ResumeProviderProps {
  children: ReactNode
}

function ResumeProvider({
  children,
}: ResumeProviderProps) {
  const [resume, setResume] =
    useState<ResumeData>(() => {
      return loadResume() ?? defaultResume
    })

  const [selectedTemplate, setSelectedTemplate] =
    useState<string>(() => {
      return loadTemplate() ?? 'modern'
    })

  /*
   * Save resume whenever it changes.
   */
  useEffect(() => {
    saveResume(resume)
  }, [resume])

  /*
   * Save selected template whenever it changes.
   */
  useEffect(() => {
    saveTemplate(selectedTemplate)
  }, [selectedTemplate])

  /*
   * Reset everything.
   */
  const resetResume = () => {
    setResume(defaultResume)
    setSelectedTemplate('modern')
    clearResumeStorage()
  }

  return (
    <ResumeContext.Provider
      value={{
        resume,
        selectedTemplate,
        setResume,
        setSelectedTemplate,
        resetResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export { ResumeProvider }

export function useResume() {
  const context = useContext(ResumeContext)

  if (!context) {
    throw new Error(
      'useResume must be used inside ResumeProvider',
    )
  }

  return context
}