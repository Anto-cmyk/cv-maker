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

interface ExecutiveTemplateProps {
  resume: ResumeData
}

function ExecutiveTemplate({
  resume,
}: ExecutiveTemplateProps) {
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
      {/* EXECUTIVE HEADER */}
      <header className="bg-slate-900 px-12 py-10 text-white">
        <h1 className="text-4xl font-bold tracking-tight">
          {personal.fullName || 'Your Name'}
        </h1>

        <p className="mt-2 text-lg font-medium text-slate-300">
          {personal.jobTitle || 'Professional Title'}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
          {personal.email && (
            <ContactItem
              icon={<Mail size={13} />}
              value={personal.email}
            />
          )}

          {personal.phone && (
            <ContactItem
              icon={<Phone size={13} />}
              value={personal.phone}
            />
          )}

          {personal.location && (
            <ContactItem
              icon={<MapPin size={13} />}
              value={personal.location}
            />
          )}

          {personal.website && (
            <ContactItem
              icon={<Globe size={13} />}
              value={personal.website}
            />
          )}

          {personal.linkedin && (
            <ContactItem
              icon={<Link size={13} />}
              value={personal.linkedin}
            />
          )}

          {personal.github && (
            <ContactItem
              icon={<Code2 size={13} />}
              value={personal.github}
            />
          )}
        </div>
      </header>

      {/* BODY */}
      <div className="px-12 py-10">

        {/* SUMMARY */}
        {summary && (
          <ExecutiveSection title="Executive Profile">
            <p className="text-sm leading-7 text-slate-600">
              {summary}
            </p>
          </ExecutiveSection>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <ExecutiveSection title="Professional Experience">
            <div className="space-y-7">
              {experience.map((item) => (
                <div
                  key={item.id}
                  className="border-l-2 border-slate-300 pl-5"
                >
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.position}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {item.company}
                      </p>
                    </div>

                    <p className="shrink-0 text-xs font-medium text-slate-500">
                      {item.startDate}
                      {item.startDate && ' – '}
                      {item.current
                        ? 'Present'
                        : item.endDate}
                    </p>
                  </div>

                  {item.location && (
                    <p className="mt-1 text-xs text-slate-400">
                      {item.location}
                    </p>
                  )}

                  {item.description && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ExecutiveSection>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <ExecutiveSection title="Education">
            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {item.institution}
                      </p>
                    </div>

                    <p className="shrink-0 text-xs text-slate-500">
                      {item.startDate}
                      {item.startDate && ' – '}
                      {item.endDate}
                    </p>
                  </div>

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
              ))}
            </div>
          </ExecutiveSection>
        )}

        {/* TWO COLUMN INFORMATION */}
        <div className="mt-8 grid grid-cols-2 gap-10">

          {/* SKILLS */}
          {skills.length > 0 && (
            <ExecutiveSection title="Core Skills">
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex items-center justify-between gap-3 border-b border-slate-100 pb-2"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>

                    {skill.level && (
                      <span className="text-[10px] uppercase tracking-wide text-slate-400">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </ExecutiveSection>
          )}

          {/* LANGUAGES */}
          {languages.length > 0 && (
            <ExecutiveSection title="Languages">
              <div className="space-y-3">
                {languages.map((language) => (
                  <div key={language.id}>
                    <p className="text-sm font-semibold text-slate-700">
                      {language.name}
                    </p>

                    <p className="text-xs text-slate-500">
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>
            </ExecutiveSection>
          )}
        </div>

        {/* PROJECTS */}
        {projects.length > 0 && (
          <ExecutiveSection title="Selected Projects">
            <div className="grid grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <h3 className="text-sm font-bold text-slate-900">
                    {project.name}
                  </h3>

                  {project.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {project.technologies.length > 0 && (
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                      {project.technologies.join(' • ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ExecutiveSection>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <ExecutiveSection title="Certifications">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {certifications.map((certification) => (
                <div key={certification.id}>
                  <h3 className="text-sm font-bold text-slate-900">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {certification.issuer}
                  </p>

                  {certification.date && (
                    <p className="text-xs text-slate-400">
                      {certification.date}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ExecutiveSection>
        )}

        {/* REFERENCES */}
        {references.length > 0 && (
          <ExecutiveSection title="References">
            <div className="grid grid-cols-2 gap-8">
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
          </ExecutiveSection>
        )}
      </div>
    </div>
  )
}

interface ExecutiveSectionProps {
  title: string
  children: ReactNode
}

function ExecutiveSection({
  title,
  children,
}: ExecutiveSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
          {title}
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {children}
    </section>
  )
}

interface ContactItemProps {
  icon: ReactNode
  value: string
}

function ContactItem({
  icon,
  value,
}: ContactItemProps) {
  return (
    <span className="flex items-center gap-1.5">
      {icon}
      {value}
    </span>
  )
}

export default ExecutiveTemplate