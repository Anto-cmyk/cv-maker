
import { useState } from 'react'
import {
  ArrowLeft,
  Download,
  Check,
  FileText,
  X,
  AlertTriangle,
  Pencil,
  RefreshCw,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import ResumePreview from '../components/ResumePreview'
import { useResume } from '../context/ResumeContext'
import { templates } from '../data/templates'
import { downloadResumePDF } from '../utils/pdf'

const PDF_HISTORY_KEY =
  'resume-builder-pdf-history'

function cleanFileName(value: string) {
  return value
    .replace(/\.pdf$/i, '')
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .trim()
}

function getPDFHistory(): string[] {
  try {
    const stored =
      localStorage.getItem(PDF_HISTORY_KEY)

    if (!stored) {
      return []
    }

    const parsed = JSON.parse(stored)

    return Array.isArray(parsed)
      ? parsed
      : []
  } catch {
    return []
  }
}

function savePDFHistory(fileName: string) {
  try {
    const history = getPDFHistory()

    const updated = [
      fileName,
      ...history.filter(
        (name) => name !== fileName,
      ),
    ].slice(0, 20)

    localStorage.setItem(
      PDF_HISTORY_KEY,
      JSON.stringify(updated),
    )
  } catch {
    // Ignore localStorage errors.
  }
}

function Preview() {
  const navigate = useNavigate()

  const {
    resume,
    selectedTemplate,
    setSelectedTemplate,
  } = useResume()

  const [isDownloading, setIsDownloading] =
    useState(false)

  const [showFilenameModal, setShowFilenameModal] =
    useState(false)

  const [showExistingModal, setShowExistingModal] =
    useState(false)

  const [fileName, setFileName] =
    useState('')

  const [pendingFileName, setPendingFileName] =
    useState('')

  const currentTemplate =
    templates.find(
      (template) =>
        template.id === selectedTemplate,
    )

  const defaultFileName =
    resume.personal.fullName
      ?.trim()
      .replace(/\s+/g, '-')
      .toLowerCase() || 'my-resume'

  const openDownloadDialog = () => {
    setFileName(defaultFileName)
    setShowFilenameModal(true)
  }

  const generatePDF = async (
    requestedName: string,
  ) => {
    const cleanedName =
      cleanFileName(requestedName)

    if (!cleanedName) {
      return
    }

    try {
      setIsDownloading(true)

      await downloadResumePDF({
        resume,
        selectedTemplate,
        fileName: cleanedName,
      })

      savePDFHistory(
        `${cleanedName}.pdf`,
      )

      setShowFilenameModal(false)
      setShowExistingModal(false)
      setPendingFileName('')
    } catch (error) {
      console.error(
        'Failed to generate PDF:',
        error,
      )

      alert(
        'Unable to generate the PDF. Please try again.',
      )
    } finally {
      setIsDownloading(false)
    }
  }

  const handleFilenameSubmit = () => {
    const cleanedName =
      cleanFileName(fileName)

    if (!cleanedName) {
      return
    }

    const finalName =
      `${cleanedName}.pdf`

    const history =
      getPDFHistory()

    if (history.includes(finalName)) {
      setPendingFileName(cleanedName)
      setShowFilenameModal(false)
      setShowExistingModal(true)
      return
    }

    generatePDF(cleanedName)
  }

  const handleChangeName = () => {
    setFileName(
      pendingFileName ||
        defaultFileName,
    )

    setShowExistingModal(false)
    setShowFilenameModal(true)
  }

  const handleUpdateExisting = () => {
    generatePDF(pendingFileName)
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                navigate('/builder')
              }
            >
              <ArrowLeft size={16} />

              <span className="hidden sm:inline">
                Back to Builder
              </span>
            </Button>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <h1 className="text-lg font-bold text-slate-900">
              Resume Preview
            </h1>
          </div>

          <Button
            size="sm"
            onClick={openDownloadDialog}
          >
            <Download size={16} />

            <span className="hidden sm:inline">
              Download PDF
            </span>

            <span className="sm:hidden">
              PDF
            </span>
          </Button>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          {/* Heading */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <FileText size={24} />
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Choose Your Template
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Select a professional design for
              your resume.
            </p>
          </div>

          {/* Templates */}
          <section className="mb-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {templates.map((template) => {
                const isSelected =
                  selectedTemplate ===
                  template.id

                return (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() =>
                      setSelectedTemplate(
                        template.id,
                      )
                    }
                    className={`relative rounded-xl border p-4 text-left transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-50 shadow-md ring-2 ring-blue-100'
                        : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check size={12} />
                      </div>
                    )}

                    <div
                      className={`mb-3 flex h-20 items-center justify-center rounded-lg ${
                        isSelected
                          ? 'bg-blue-100'
                          : 'bg-slate-100'
                      }`}
                    >
                      <div
                        className={`text-sm font-bold ${
                          isSelected
                            ? 'text-blue-700'
                            : 'text-slate-600'
                        }`}
                      >
                        {template.name}
                      </div>
                    </div>

                    <h3 className="text-sm font-semibold text-slate-900">
                      {template.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-5 text-slate-500">
                      {template.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </section>

          {/* Current template */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Current Template
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                {currentTemplate?.name ??
                  'Modern'}
              </h3>
            </div>

            <div className="hidden rounded-lg bg-white px-3 py-2 text-xs text-slate-500 shadow-sm sm:block">
              A4 Resume
            </div>
          </div>

          {/* Resume */}
          <div className="rounded-2xl bg-slate-200/70 p-3 shadow-inner sm:p-6 lg:p-8">
            <div className="overflow-x-auto">
              <ResumePreview />
            </div>
          </div>
        </div>
      </main>

      {/* Filename modal */}
      {showFilenameModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Download Your Resume
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Choose a name for your PDF.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowFilenameModal(false)
                }
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <div>
                <label
                  htmlFor="pdf-file-name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  File name
                </label>

                <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
                  <input
                    id="pdf-file-name"
                    type="text"
                    value={fileName}
                    onChange={(event) =>
                      setFileName(
                        event.target.value,
                      )
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === 'Enter'
                      ) {
                        handleFilenameSubmit()
                      }
                    }}
                    autoFocus
                    className="min-w-0 flex-1 px-4 py-3 text-sm text-slate-900 outline-none"
                    placeholder="Antony-Mwangi-CV"
                  />

                  <span className="flex items-center bg-slate-50 px-3 text-sm font-medium text-slate-400">
                    .pdf
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  Invalid filename characters will
                  be removed automatically.
                </p>
              </div>

              {/* Preview filename */}
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-start gap-3">
                  <FileText
                    size={18}
                    className="mt-0.5 text-blue-600"
                  />

                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      PDF file
                    </p>

                    <p className="mt-1 break-all text-xs text-slate-500">
                      {cleanFileName(
                        fileName,
                      ) || 'my-resume'}
                      .pdf
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4">
              <Button
                variant="ghost"
                onClick={() =>
                  setShowFilenameModal(false)
                }
              >
                Cancel
              </Button>

              <Button
                onClick={
                  handleFilenameSubmit
                }
                disabled={
                  !cleanFileName(fileName) ||
                  isDownloading
                }
              >
                <Download size={16} />

                {isDownloading
                  ? 'Generating...'
                  : 'Download PDF'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Existing file modal */}
      {showExistingModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/50 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="border-b border-slate-200 px-6 py-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <AlertTriangle
                    size={20}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    File Already Downloaded
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    A PDF with this filename was
                    previously created.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 py-5">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  Filename
                </p>

                <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                  {pendingFileName}.pdf
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Choose whether you want to generate
                the latest version, use another
                filename, or cancel.
              </p>
            </div>

            <div className="space-y-2 border-t border-slate-200 bg-slate-50 p-4">
              {/* Update */}
              <button
                type="button"
                onClick={
                  handleUpdateExisting
                }
                disabled={isDownloading}
                className="flex w-full items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-left transition hover:border-blue-300 hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <RefreshCw
                  size={18}
                  className="text-blue-600"
                />

                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Update Existing Copy
                  </p>

                  <p className="text-xs text-blue-700/70">
                    Generate the latest version.
                  </p>
                </div>
              </button>

              {/* Change name */}
              <button
                type="button"
                onClick={
                  handleChangeName
                }
                disabled={isDownloading}
                className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Pencil
                  size={18}
                  className="text-slate-600"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Change Filename
                  </p>

                  <p className="text-xs text-slate-500">
                    Save the resume with another name.
                  </p>
                </div>
              </button>

              {/* Cancel */}
              <button
                type="button"
                onClick={() => {
                  setShowExistingModal(false)
                  setPendingFileName('')
                }}
                disabled={isDownloading}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X
                  size={18}
                  className="text-slate-400"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Don't Download
                  </p>

                  <p className="text-xs text-slate-500">
                    Cancel this download.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Preview

