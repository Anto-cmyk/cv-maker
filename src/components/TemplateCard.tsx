import {
  ArrowRight,
  Check,
} from 'lucide-react'

import type { ResumeTemplate } from '../data/templates'

interface TemplateCardProps {
  template: ResumeTemplate
  onSelect: (id: string) => void
}

function TemplateCard({
  template,
  onSelect,
}: TemplateCardProps) {

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Resume preview */}

      <div className="relative aspect-[8.5/11] overflow-hidden bg-slate-100 p-5">

        {template.popular && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
            Popular
          </div>
        )}

        <div className="h-full w-full overflow-hidden rounded-md bg-white shadow-md">

          {/* Mini resume */}

          <div className="p-5">

            <div className="mb-5 border-b border-slate-200 pb-4">

              <div className="h-3 w-28 rounded bg-slate-900" />

              <div className="mt-2 h-2 w-20 rounded bg-blue-500" />

              <div className="mt-3 h-1.5 w-36 rounded bg-slate-200" />

            </div>

            <div className="space-y-4">

              <div>
                <div className="mb-2 h-2 w-20 rounded bg-slate-700" />

                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-slate-200" />
                  <div className="h-1.5 w-11/12 rounded bg-slate-200" />
                  <div className="h-1.5 w-10/12 rounded bg-slate-200" />
                </div>
              </div>

              <div>
                <div className="mb-2 h-2 w-24 rounded bg-slate-700" />

                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded bg-slate-200" />
                  <div className="h-1.5 w-10/12 rounded bg-slate-200" />
                </div>
              </div>

              <div>
                <div className="mb-2 h-2 w-16 rounded bg-slate-700" />

                <div className="flex flex-wrap gap-1.5">
                  <div className="h-3 w-10 rounded bg-blue-100" />
                  <div className="h-3 w-14 rounded bg-blue-100" />
                  <div className="h-3 w-12 rounded bg-blue-100" />
                  <div className="h-3 w-9 rounded bg-blue-100" />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Hover overlay */}

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition group-hover:opacity-100">

          <button
            onClick={() => onSelect(template.id)}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl"
          >
            Use this template
            <ArrowRight size={16} />
          </button>

        </div>

      </div>

      {/* Card information */}

      <div className="p-5">

        <div className="flex items-start justify-between gap-3">

          <div>
            <h3 className="font-bold text-slate-900">
              {template.name}
            </h3>

            <p className="mt-1 text-xs font-medium text-blue-600">
              {template.category}
            </p>
          </div>

          <Check
            size={18}
            className="text-blue-600"
          />

        </div>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          {template.description}
        </p>

      </div>

    </div>
  )
}

export default TemplateCard