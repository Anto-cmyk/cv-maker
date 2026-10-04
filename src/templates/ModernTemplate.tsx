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

interface ModernTemplateProps {
  resume: ResumeData
}

function ModernTemplate({
  resume,
}: ModernTemplateProps) {
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
      className="mx-auto min-h-[1123px] w-full max-w-[794px] bg-white px-12 py-12 text-slate-900"
    >
      {/* HEADER */}
      <header className="border-b-2 border-slate-900 pb-6">
        <h1 className="text-4xl font-bold tracking-tight">
          {personal.fullName || 'Your Name'}
        </h1>

        <p className="mt-2 text-lg font-medium text-blue-600">
          {personal.jobTitle || 'Professional Title'}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
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

      {/* SUMMARY */}
      {summary && (
        <ResumeSection title="Professional Summary">
          <p className="text-sm leading-6 text-slate-600">
            {summary}
          </p>
        </ResumeSection>
      )}

      {/* EXPERIENCE */}
      {experience.length > 0 && (
        <ResumeSection title="Work Experience">
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {item.position}
                    </h3>

                    <p className="text-sm font-medium text-blue-600">
                      {item.company}
                    </p>
                  </div>

                  <p className="shrink-0 text-xs text-slate-500">
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
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* EDUCATION */}
      {education.length > 0 && (
        <ResumeSection title="Education">
          <div className="space-y-5">
            {education.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {item.degree}
                    </h3>

                    <p className="text-sm font-medium text-blue-600">
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
                  <p className="mt-1 text-sm text-slate-500">
                    {item.field}
                  </p>
                )}

                {item.location && (
                  <p className="mt-1 text-xs text-slate-400">
                    {item.location}
                  </p>
                )}

                {item.description && (
                  <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* SKILLS */}
      {skills.length > 0 && (
        <ResumeSection title="Skills">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {skill.name}

                {skill.level && (
                  <span className="ml-1 text-slate-400">
                    · {skill.level}
                  </span>
                )}
              </span>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* PROJECTS */}
      {projects.length > 0 && (
        <ResumeSection title="Projects">
          <div className="space-y-5">
            {projects.map((project) => (
              <div key={project.id}>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-slate-900">
                    {project.name}
                  </h3>

                  {project.link && (
                    <span className="shrink-0 text-xs text-blue-600">
                      {project.link}
                    </span>
                  )}
                </div>

                {project.description && (
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>
                )}

                {project.technologies.length > 0 && (
                  <p className="mt-2 text-xs font-medium text-blue-600">
                    {project.technologies.join(' • ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* CERTIFICATIONS */}
      {certifications.length > 0 && (
        <ResumeSection title="Certifications">
          <div className="space-y-3">
            {certifications.map((certification) => (
              <div key={certification.id}>
                <div className="flex justify-between gap-4">
                  <h3 className="text-sm font-bold text-slate-900">
                    {certification.name}
                  </h3>

                  {certification.date && (
                    <span className="shrink-0 text-xs text-slate-500">
                      {certification.date}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500">
                  {certification.issuer}
                </p>

                {certification.link && (
                  <p className="mt-1 text-xs text-blue-600">
                    {certification.link}
                  </p>
                )}
              </div>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* LANGUAGES */}
      {languages.length > 0 && (
        <ResumeSection title="Languages">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {languages.map((language) => (
              <div
                key={language.id}
                className="flex justify-between gap-3 text-sm"
              >
                <span className="font-medium">
                  {language.name}
                </span>

                <span className="text-slate-500">
                  {language.level}
                </span>
              </div>
            ))}
          </div>
        </ResumeSection>
      )}

      {/* REFERENCES */}
      {references.length > 0 && (
        <ResumeSection title="References">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {references.map((reference) => (
              <div key={reference.id}>
                <h3 className="text-sm font-bold text-slate-900">
                  {reference.name}
                </h3>

                {reference.position && (
                  <p className="mt-0.5 text-xs text-blue-600">
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
        </ResumeSection>
      )}
    </div>
  )
}

interface ResumeSectionProps {
  title: string
  children: ReactNode
}

function ResumeSection({
  title,
  children,
}: ResumeSectionProps) {
  return (
    <section className="mt-7">
      <h2 className="mb-3 border-b border-slate-200 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-900">
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

export default ModernTemplate