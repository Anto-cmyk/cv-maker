import { ArrowLeft, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import TemplateCard from '../components/TemplateCard'
import { templates } from '../data/templates'
import { useResume } from '../context/ResumeContext'

function Templates() {
  const navigate = useNavigate()
  const { setSelectedTemplate } = useResume()

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId)
    navigate(`/builder?template=${templateId}`)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <FileText size={19} />
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              Resume<span className="text-blue-600">Builder</span>
            </span>
          </button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={16} />
            Back Home
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Resume Templates
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Choose a professional template
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            Select a clean, recruiter-friendly design and start
            building your resume. You can change the template later
            without losing your information.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onSelect={handleSelectTemplate}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Templates