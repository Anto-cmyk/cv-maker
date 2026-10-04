import {
  ArrowLeft,
  Eye,
  Check,
} from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import ResumeForm from '../components/ResumeForm'
import ResumePreview from '../components/ResumePreview'
import { useResume } from '../context/ResumeContext'
import { templates } from '../data/templates'

function Builder() {
  const navigate = useNavigate()

  const {
    selectedTemplate,
    setSelectedTemplate,
  } = useResume()

  return (
    <div className="min-h-screen bg-slate-100">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6">

          <div className="flex items-center gap-3">

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
            >
              <ArrowLeft size={16} />

              <span className="hidden sm:inline">
                Home
              </span>
            </Button>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Resume Builder
              </h1>

              <p className="hidden text-xs text-slate-500 sm:block">
                Create your professional resume
              </p>
            </div>

          </div>

          <Button
            size="sm"
            onClick={() => navigate('/preview')}
          >
            <Eye size={16} />

            <span className="hidden sm:inline">
              Full Preview
            </span>

            <span className="sm:hidden">
              Preview
            </span>
          </Button>

        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">

        {/* TEMPLATE SELECTOR */}
        

        {/* BUILDER GRID */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(500px,0.95fr)]">

          {/* FORM */}
          <section className="min-w-0">

            <ResumeForm />

          </section>

          {/* LIVE PREVIEW */}
          

        </div>

      </main>

    </div>
  )
}

export default Builder