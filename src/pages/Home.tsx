import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileCheck2,
  FileText,
  LayoutTemplate,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

import Button from '../components/Button'
import Navbar from '../components/Navbar'
import TemplateCard from '../components/TemplateCard'

import { templates } from '../data/templates'

 

interface FeatureProps {
  icon: ReactNode
  title: string
  description: string
}

interface StepProps {
  number: string
  title: string
  description: string
}

function Home() {
  const navigate = useNavigate()

  const handleCreateResume = () => {
    navigate('/builder')
  }

  const handleSelectTemplate = (templateId: string) => {
    navigate(`/builder?template=${templateId}`)
  }
  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}

      <Navbar onCreateResume={handleCreateResume} />
      {/* HERO */}

      <section className="relative overflow-hidden bg-slate-950">

        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* HERO CONTENT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">

              <Sparkles
                size={15}
                className="text-blue-400"
              />

              Professional resumes, made simple

            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">

              Build a resume that gets you

              <span className="text-blue-400">
                {' '}noticed.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">

              Create a clean, professional resume in minutes.
              Choose a design, enter your details, preview your
              resume instantly, and download it as a PDF.

            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Button
  size="lg"
  onClick={handleCreateResume}
>
                Create My Resume

                <ArrowRight size={18} />
              </Button>

              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore Templates
              </a>

            </div>

            {/* TRUST POINTS */}

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={16}
                  className="text-blue-400"
                />

                No account required

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={16}
                  className="text-blue-400"
                />

                Free to create

              </div>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={16}
                  className="text-blue-400"
                />

                Download as PDF

              </div>

            </div>

          </div>

          {/* HERO RESUME PREVIEW */}

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">

            <div className="absolute -inset-6 rounded-[2rem] bg-blue-600/10 blur-2xl" />

            <div className="relative rotate-1 rounded-2xl border border-white/10 bg-white p-5 shadow-2xl">

              <div className="rounded-xl bg-white p-7 text-slate-900">

                <div className="border-b border-slate-200 pb-5">

                  <div className="flex items-start justify-between">

                    <div>

                      <div className="h-6 w-44 rounded bg-slate-900" />

                      <div className="mt-2 h-3 w-28 rounded bg-blue-500" />

                    </div>

                    <div className="h-12 w-12 rounded-full bg-slate-100" />

                  </div>

                  <div className="mt-4 flex gap-4">

                    <div className="h-2 w-24 rounded bg-slate-200" />

                    <div className="h-2 w-20 rounded bg-slate-200" />

                    <div className="h-2 w-28 rounded bg-slate-200" />

                  </div>

                </div>

                <div className="mt-6 space-y-6">

                  <div>

                    <div className="mb-3 h-3 w-24 rounded bg-slate-800" />

                    <div className="space-y-2">

                      <div className="h-2 w-full rounded bg-slate-100" />

                      <div className="h-2 w-11/12 rounded bg-slate-100" />

                      <div className="h-2 w-10/12 rounded bg-slate-100" />

                    </div>

                  </div>

                  <div>

                    <div className="mb-3 h-3 w-32 rounded bg-slate-800" />

                    <div className="space-y-4">

                      <div>

                        <div className="h-2.5 w-36 rounded bg-slate-700" />

                        <div className="mt-2 h-2 w-24 rounded bg-blue-200" />

                        <div className="mt-2 space-y-1.5">

                          <div className="h-1.5 w-full rounded bg-slate-100" />

                          <div className="h-1.5 w-10/12 rounded bg-slate-100" />

                        </div>

                      </div>

                      <div>

                        <div className="h-2.5 w-40 rounded bg-slate-700" />

                        <div className="mt-2 h-2 w-20 rounded bg-blue-200" />

                        <div className="mt-2 h-1.5 w-11/12 rounded bg-slate-100" />

                      </div>

                    </div>

                  </div>

                  <div>

                    <div className="mb-3 h-3 w-20 rounded bg-slate-800" />

                    <div className="flex flex-wrap gap-2">

                      <div className="h-6 w-16 rounded bg-slate-100" />

                      <div className="h-6 w-20 rounded bg-slate-100" />

                      <div className="h-6 w-14 rounded bg-slate-100" />

                      <div className="h-6 w-16 rounded bg-slate-100" />

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TEMPLATES */}

      <section
        id="templates"
        className="bg-slate-50 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

              <LayoutTemplate size={24} />

            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose a design that fits you
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Professional templates designed to keep your
              experience clear, organized and easy to read.
            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {templates.map((template) => (
              <TemplateCard
  key={template.id}
  template={template}
  onSelect={handleSelectTemplate}
/>
            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Built for job seekers
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to create a professional resume.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              No complicated setup. No unnecessary accounts.
              Just a focused tool for creating a strong resume.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <Feature
              icon={<FileCheck2 size={23} />}
              title="Professional layouts"
              description="Clean designs with strong typography and spacing that make your experience easy to scan."
            />

            <Feature
              icon={<Zap size={23} />}
              title="Live preview"
              description="See your resume change instantly while you enter and edit your information."
            />

            <Feature
              icon={<ShieldCheck size={23} />}
              title="No account required"
              description="Start building immediately without registration or a complicated onboarding process."
            />

            <Feature
              icon={<Download size={23} />}
              title="PDF download"
              description="Export your completed resume into a professional document ready for applications."
            />

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section
        id="how-it-works"
        className="bg-slate-950 px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Simple process
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              From blank page to job-ready resume.
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <Step
              number="01"
              title="Choose a template"
              description="Pick the professional layout that best represents your career and industry."
            />

            <Step
              number="02"
              title="Add your details"
              description="Enter your profile, experience, education, skills, projects and other information."
            />

            <Step
              number="03"
              title="Download and apply"
              description="Review your finished resume and download the final PDF for your job applications."
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center shadow-2xl shadow-blue-600/20 sm:px-12">

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your resume?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Create a professional resume in minutes and
            take the next step toward your career.
          </p>

          <div className="mt-8">

           <Button
  size="lg"
  variant="secondary"
  onClick={handleCreateResume}
>
              Start Building

              <ArrowRight size={18} />
            </Button>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">

              <FileText size={16} />

            </div>

            <span className="font-bold text-slate-900">
              Resume<span className="text-blue-600">Builder</span>
            </span>

          </div>

          <p className="text-sm text-slate-500">
            Build better. Apply with confidence.
          </p>

        </div>

      </footer>

    </div>
  )
}

function Feature({
  icon,
  title,
  description,
}: FeatureProps) {

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

    </div>
  )
}

function Step({
  number,
  title,
  description,
}: StepProps) {

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7">

      <span className="text-sm font-bold text-blue-400">
        {number}
      </span>

      <h3 className="mt-5 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {description}
      </p>

    </div>
  )
}

export default Home