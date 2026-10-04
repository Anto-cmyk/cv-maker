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

interface CreativeTemplateProps {
  resume: ResumeData
}

function CreativeTemplate({
  resume,
}: CreativeTemplateProps) {
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
      {/* CREATIVE HEADER */}
      <header className="relative overflow-hidden bg-slate-900 px-12 py-10 text-white">
        <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-blue-600/30" />

        <div className="absolute -bottom-24 right-20 h-40 w-40 rounded-full bg-cyan-400/20" />

        <div className="relative">
          <div className="flex items-start justify-between gap-8">
            <div>
              <div className="mb-4 h-1 w-16 rounded-full bg-blue-400" />

              <h1 className="text-4xl font-bold tracking-tight">
                {personal.fullName || 'Your Name'}
              </h1>

              <p className="mt-2 text-lg font-medium text-blue-300">
                {personal.jobTitle || 'Professional Title'}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
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
        </div>
      </header>

      <main className="px-12 py-9">

        {/* SUMMARY */}
        {summary && (
          <CreativeSection title="About Me">
            <p className="text-sm leading-7 text-slate-600">
              {summary}
            </p>
          </CreativeSection>
        )}

        {/* SKILLS */}
        {skills.length > 0 && (
          <CreativeSection title="Skills">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
                >
                  <span className="text-xs font-semibold text-blue-700">
                    {skill.name}
                  </span>

                  {skill.level && (
                    <span className="ml-2 text-[10px] text-blue-400">
                      {skill.level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CreativeSection>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <CreativeSection title="Experience">
            <div className="relative space-y-7 pl-5">
              <div className="absolute bottom-1 left-0 top-1 w-px bg-slate-200" />

              {experience.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                >
                  <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-white bg-blue-600 shadow-sm" />

                  <div className="flex justify-between gap-5">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.position}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-blue-600">
                        {item.company}
                      </p>
                    </div>

                    <p className="shrink-0 text-[11px] text-slate-400">
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
          </CreativeSection>
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <CreativeSection title="Featured Projects">
            <div className="grid grid-cols-2 gap-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-slate-200 p-5 transition"
                >
                  <div className="mb-3 h-1 w-10 rounded-full bg-blue-500" />

                  <h3 className="text-sm font-bold text-slate-900">
                    {project.name}
                  </h3>

                  {project.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {project.description}
                    </p>
                  )}

                  {project.technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-500"
                          >
                            {technology}
                          </span>
                        ),
                      )}
                    </div>
                  )}

                  {project.link && (
                    <p className="mt-3 text-[10px] font-medium text-blue-600">
                      {project.link}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CreativeSection>
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <CreativeSection title="Education">
            <div className="grid grid-cols-2 gap-5">
              {education.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl bg-slate-50 p-5"
                >
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600">
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

                  <p className="mt-3 text-[10px] font-medium text-slate-400">
                    {item.startDate}
                    {item.startDate && ' – '}
                    {item.endDate}
                  </p>

                  {item.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CreativeSection>
        )}

        {/* CERTIFICATIONS */}
        {certifications.length > 0 && (
          <CreativeSection title="Certifications">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {certifications.map((certification) => (
                <div
                  key={certification.id}
                  className="border-l-2 border-blue-500 pl-4"
                >
                  <h3 className="text-sm font-bold text-slate-900">
                    {certification.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {certification.issuer}
                  </p>

                  {certification.date && (
                    <p className="mt-1 text-[10px] text-slate-400">
                      {certification.date}
                    </p>
                  )}

                  {certification.link && (
                    <p className="mt-1 text-[10px] text-blue-600">
                      {certification.link}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CreativeSection>
        )}

        {/* LANGUAGES */}
        {languages.length > 0 && (
          <CreativeSection title="Languages">
            <div className="grid grid-cols-3 gap-4">
              {languages.map((language) => (
                <div
                  key={language.id}
                  className="rounded-lg border border-slate-200 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-slate-700">
                    {language.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {language.level}
                  </p>
                </div>
              ))}
            </div>
          </CreativeSection>
        )}

        {/* REFERENCES */}
        {references.length > 0 && (
          <CreativeSection title="References">
            <div className="grid grid-cols-2 gap-5">
              {references.map((reference) => (
                <div
                  key={reference.id}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <h3 className="text-sm font-bold text-slate-900">
                    {reference.name}
                  </h3>

                  {reference.position && (
                    <p className="mt-1 text-xs font-medium text-blue-600">
                      {reference.position}
                    </p>
                  )}

                  {reference.company && (
                    <p className="text-xs text-slate-500">
                      {reference.company}
                    </p>
                  )}

                  {reference.email && (
                    <p className="mt-2 text-xs text-slate-500">
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
          </CreativeSection>
        )}
      </main>
    </div>
  )
}

interface CreativeSectionProps {
  title: string
  children: ReactNode
}

function CreativeSection({
  title,
  children,
}: CreativeSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-600" />

        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
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

export default CreativeTemplate