import type { ReactNode } from 'react'

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Link,
  Code2,
} from 'lucide-react'

import type { ResumeData } from '../types/resume'

interface CorporateTemplateProps {
  resume: ResumeData
}

function CorporateTemplate({
  resume,
}: CorporateTemplateProps) {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
    languages,
    references,
  } = resume

  return (
    <div
      id="resume-preview"
      className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white text-slate-900"
    >
      {/* CORPORATE HEADER */}
      <header className="border-b-4 border-slate-800 bg-slate-50 px-12 py-9">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-wide">
              {personal.fullName || 'YOUR NAME'}
            </h1>

            <p className="mt-2 text-base font-semibold uppercase tracking-wider text-slate-600">
              {personal.jobTitle || 'PROFESSIONAL TITLE'}
            </p>
          </div>

          <div className="text-right text-xs text-slate-500">
            {personal.email && (
              <p className="flex items-center justify-end gap-1.5">
                <Mail size={12} />
                {personal.email}
              </p>
            )}

            {personal.phone && (
              <p className="mt-1 flex items-center justify-end gap-1.5">
                <Phone size={12} />
                {personal.phone}
              </p>
            )}

            {personal.location && (
              <p className="mt-1 flex items-center justify-end gap-1.5">
                <MapPin size={12} />
                {personal.location}
              </p>
            )}
          </div>
        </div>

        {(personal.website ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
            {personal.website && (
              <span className="flex items-center gap-1.5">
                <Globe size={12} />
                {personal.website}
              </span>
            )}

            {personal.linkedin && (
              <span className="flex items-center gap-1.5">
                <Link size={12} />
                {personal.linkedin}
              </span>
            )}

            {personal.github && (
              <span className="flex items-center gap-1.5">
                <Code2 size={12} />
                {personal.github}
              </span>
            )}
          </div>
        )}
      </header>

      <main className="px-12 py-9">

        {/* SUMMARY */}
        {summary && (
          <CorporateSection title="Professional Summary">
            <p className="text-sm leading-6 text-slate-600">
              {summary}
            </p>
          </CorporateSection>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <CorporateSection title="Professional Experience">
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.id}>
                  <div className="grid grid-cols-[1fr_auto] gap-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.position}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {item.company}
                      </p>

                      {item.location && (
                        <p className="mt-1 text-xs text-slate-400">
                          {item.location}
                        </p>
                      )}
                    </div>

                    <p className="text-right text-xs font-medium text-slate-500">
                      {item.startDate}
                      {item.startDate && ' – '}
                      {item.current
                        ? 'Present'
                        : item.endDate}
                    </p>
                  </div>

                  {item.description && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <CorporateSection title="Education">
            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] gap-6"
                >
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {item.institution}
                    </p>

                    {item.field && (
                      <p className="mt-1 text-xs text-slate-500">
                        {item.field}
                      </p>
                    )}

                    {item.location && (
                      <p className="mt-1 text-xs text-slate-400">
                        {item.location}
                      </p>
                    )}
                  </div>

                  <p className="text-right text-xs text-slate-500">
                    {item.startDate}
                    {item.startDate && ' – '}
                    {item.endDate}
                  </p>
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* SKILLS */}
        {skills.length > 0 && (
          <CorporateSection title="Core Competencies">
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between border-b border-slate-100 pb-2"
                >
                  <span className="text-sm font-medium text-slate-700">
                    {skill.name}
                  </span>

                  {skill.level && (
                    <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <CorporateSection title="Selected Projects">
            <div className="space-y-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border-b border-slate-100 pb-5 last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm font-bold text-slate-900">
                      {project.name}
                    </h3>

                    {project.link && (
                      <span className="text-xs text-slate-500">
                        {project.link}
                      </span>
                    )}
                  </div>

                  {project.description && (
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {project.technologies.length > 0 && (
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      Technologies: {project.technologies.join(', ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <CorporateSection title="Certifications">
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {certifications.map((certification) => (
                <div key={certification.id}>
                  <h3 className="text-sm font-bold text-slate-900">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {certification.issuer}
                  </p>

                  {certification.date && (
                    <p className="mt-1 text-xs text-slate-400">
                      {certification.date}
                    </p>
                  )}

                  {certification.link && (
                    <p className="mt-1 text-xs text-slate-500">
                      {certification.link}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* LANGUAGES */}
        {languages.length > 0 && (
          <CorporateSection title="Languages">
            <div className="grid grid-cols-3 gap-5">
              {languages.map((language) => (
                <div key={language.id}>
                  <p className="text-sm font-semibold text-slate-700">
                    {language.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {language.level}
                  </p>
                </div>
              ))}
            </div>
          </CorporateSection>
        )}

        {/* REFERENCES */}
        {references.length > 0 && (
          <CorporateSection title="Professional References">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6">
              {references.map((reference) => (
                <div key={reference.id}>
                  <h3 className="text-sm font-bold text-slate-900">
                    {reference.name}
                  </h3>

                  {reference.position && (
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      {reference.position}
                    </p>
                  )}

                  {reference.company && (
                    <p className="text-xs text-slate-500">
                      {reference.company}
                    </p>
                  )}

                  {reference.email && (
                    <p className="mt-1 text-xs text-slate-500">
                      {reference.email}
                    </p>
                  )}

                  {reference.phone && (
                    <p className="text-xs text-slate-500">
                      {reference.phone}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CorporateSection>
        )}
      </main>
    </div>
  )
}

interface CorporateSectionProps {
  title: string
  children: ReactNode
}

function CorporateSection({
  title,
  children,
}: CorporateSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 border-b-2 border-slate-800 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-800">
        {title}
      </h2>

      {children}
    </section>
  )
}

export default CorporateTemplate