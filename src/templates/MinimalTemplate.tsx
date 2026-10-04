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

interface MinimalTemplateProps {
  resume: ResumeData
}

function MinimalTemplate({
  resume,
}: MinimalTemplateProps) {
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
      className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white px-14 py-14 text-slate-900"
    >
      {/* HEADER */}
      <header className="pb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          {personal.fullName || 'Your Name'}
        </h1>

        <p className="mt-2 text-base font-medium text-slate-500">
          {personal.jobTitle || 'Professional Title'}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-slate-500">
          {personal.email && (
            <ContactItem
              icon={<Mail size={12} />}
              value={personal.email}
            />
          )}

          {personal.phone && (
            <ContactItem
              icon={<Phone size={12} />}
              value={personal.phone}
            />
          )}

          {personal.location && (
            <ContactItem
              icon={<MapPin size={12} />}
              value={personal.location}
            />
          )}

          {personal.website && (
            <ContactItem
              icon={<Globe size={12} />}
              value={personal.website}
            />
          )}

          {personal.linkedin && (
            <ContactItem
              icon={<Link size={12} />}
              value={personal.linkedin}
            />
          )}

          {personal.github && (
            <ContactItem
              icon={<Code2 size={12} />}
              value={personal.github}
            />
          )}
        </div>
      </header>

      <div className="h-px bg-slate-300" />

      {/* SUMMARY */}
      {summary && (
        <MinimalSection title="Profile">
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            {summary}
          </p>
        </MinimalSection>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <MinimalSection title="Experience">
          <div className="space-y-7">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.position}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.company}
                      {item.location && ` · ${item.location}`}
                    </p>
                  </div>

                  <p className="shrink-0 text-[11px] text-slate-400">
                    {item.startDate}
                    {item.startDate && ' — '}
                    {item.current
                      ? 'Present'
                      : item.endDate}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <MinimalSection title="Education">
          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      {item.degree}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.institution}
                      {item.location && ` · ${item.location}`}
                    </p>

                    {item.field && (
                      <p className="mt-1 text-xs text-slate-400">
                        {item.field}
                      </p>
                    )}
                  </div>

                  <p className="shrink-0 text-[11px] text-slate-400">
                    {item.startDate}
                    {item.startDate && ' — '}
                    {item.endDate}
                  </p>
                </div>

                {item.description && (
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <MinimalSection title="Skills">
          <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2"
              >
                <span className="text-sm text-slate-700">
                  {skill.name}
                </span>

                {skill.level && (
                  <span className="text-[10px] text-slate-400">
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <MinimalSection title="Projects">
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {project.name}
                  </h3>

                  {project.link && (
                    <span className="text-[10px] text-slate-400">
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
                  <p className="mt-2 text-[10px] text-slate-400">
                    {project.technologies.join(' · ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* CERTIFICATIONS */}
      {certifications.length > 0 && (
        <MinimalSection title="Certifications">
          <div className="space-y-4">
            {certifications.map((certification) => (
              <div
                key={certification.id}
                className="flex items-start justify-between gap-5"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {certification.issuer}
                  </p>

                  {certification.link && (
                    <p className="mt-1 text-[10px] text-slate-400">
                      {certification.link}
                    </p>
                  )}
                </div>

                {certification.date && (
                  <span className="shrink-0 text-[11px] text-slate-400">
                    {certification.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* LANGUAGES */}
      {languages.length > 0 && (
        <MinimalSection title="Languages">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {languages.map((language) => (
              <div key={language.id}>
                <span className="text-sm font-medium text-slate-700">
                  {language.name}
                </span>

                <span className="ml-2 text-xs text-slate-400">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </MinimalSection>
      )}

      {/* REFERENCES */}
      {references.length > 0 && (
        <MinimalSection title="References">
          <div className="grid grid-cols-2 gap-x-10 gap-y-6">
            {references.map((reference) => (
              <div key={reference.id}>
                <h3 className="text-sm font-semibold text-slate-900">
                  {reference.name}
                </h3>

                {reference.position && (
                  <p className="mt-1 text-xs text-slate-500">
                    {reference.position}
                  </p>
                )}

                {reference.company && (
                  <p className="text-xs text-slate-500">
                    {reference.company}
                  </p>
                )}

                {reference.email && (
                  <p className="mt-1 text-xs text-slate-400">
                    {reference.email}
                  </p>
                )}

                {reference.phone && (
                  <p className="text-xs text-slate-400">
                    {reference.phone}
                  </p>
                )}
              </div>
            ))}
          </div>
        </MinimalSection>
      )}
    </div>
  )
}

interface MinimalSectionProps {
  title: string
  children: ReactNode
}

function MinimalSection({
  title,
  children,
}: MinimalSectionProps) {
  return (
    <section className="mt-8">
      <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h2>

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

export default MinimalTemplate