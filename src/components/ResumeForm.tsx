import { useState } from 'react'

import {
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  Link,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Plus,
  Trash2,
  Pencil,
  X,
  Save,
  FolderKanban,
  Award,
  Languages,
  Users,
} from 'lucide-react'

import { useResume } from '../context/ResumeContext'

import type {
  Experience,
  Education,
  Skill,
  Project,
  Certification,
  Language,
  Reference,
} from '../types/resume'

function ResumeForm() {
  const { resume, setResume } = useResume()

  /*
   * ============================================================
   * EXPERIENCE STATE
   * ============================================================
   */

  const [editingExperienceId, setEditingExperienceId] =
    useState<string | null>(null)

  const [showExperienceForm, setShowExperienceForm] =
    useState(false)

  const [experienceForm, setExperienceForm] =
    useState<Experience>({
      id: '',
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    })

  /*
   * ============================================================
   * EDUCATION STATE
   * ============================================================
   */

  const [editingEducationId, setEditingEducationId] =
    useState<string | null>(null)

  const [showEducationForm, setShowEducationForm] =
    useState(false)

  const [educationForm, setEducationForm] =
    useState<Education>({
      id: '',
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    })

  /*
   * ============================================================
   * SKILLS STATE
   * ============================================================
   */

  const [editingSkillId, setEditingSkillId] =
    useState<string | null>(null)

  const [showSkillForm, setShowSkillForm] =
    useState(false)

  const [skillForm, setSkillForm] = useState<Skill>({
    id: '',
    name: '',
    level: 'Intermediate',
  })

  /*
   * ============================================================
   * PROJECTS STATE
   * ============================================================
   */

  const [editingProjectId, setEditingProjectId] =
    useState<string | null>(null)

  const [showProjectForm, setShowProjectForm] =
    useState(false)

  const [projectForm, setProjectForm] =
    useState<Project>({
      id: '',
      name: '',
      description: '',
      technologies: [],
      link: '',
    })

  const [technologiesInput, setTechnologiesInput] =
    useState('')

  /*
   * ============================================================
   * CERTIFICATIONS STATE
   * ============================================================
   */

  const [editingCertificationId, setEditingCertificationId] =
    useState<string | null>(null)

  const [showCertificationForm, setShowCertificationForm] =
    useState(false)

  const [certificationForm, setCertificationForm] =
    useState<Certification>({
      id: '',
      name: '',
      issuer: '',
      date: '',
      link: '',
    })

  /*
   * ============================================================
   * LANGUAGES STATE
   * ============================================================
   */

  const [editingLanguageId, setEditingLanguageId] =
    useState<string | null>(null)

  const [showLanguageForm, setShowLanguageForm] =
    useState(false)

  const [languageForm, setLanguageForm] =
    useState<Language>({
      id: '',
      name: '',
      level: '',
    })

  /*
   * ============================================================
   * REFERENCES STATE
   * ============================================================
   */

  const [editingReferenceId, setEditingReferenceId] =
    useState<string | null>(null)

  const [showReferenceForm, setShowReferenceForm] =
    useState(false)

  const [referenceForm, setReferenceForm] =
    useState<Reference>({
      id: '',
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
    })

  /*
   * ============================================================
   * SHARED INPUT STYLES
   * ============================================================
   */

  const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

  const textareaClass =
    'w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

  /*
   * ============================================================
   * PERSONAL INFORMATION
   * ============================================================
   */

  const updatePersonalField = (
    field: keyof typeof resume.personal,
    value: string,
  ) => {
    setResume((current) => ({
      ...current,
      personal: {
        ...current.personal,
        [field]: value,
      },
    }))
  }

  /*
   * ============================================================
   * PROFESSIONAL SUMMARY
   * ============================================================
   */

  const updateSummary = (value: string) => {
    setResume((current) => ({
      ...current,
      summary: value,
    }))
  }

  /*
   * ============================================================
   * EXPERIENCE FUNCTIONS
   * ============================================================
   */

  const openExperienceForm = () => {
    setEditingExperienceId(null)

    setExperienceForm({
      id: crypto.randomUUID(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    })

    setShowExperienceForm(true)
  }

  const editExperience = (experience: Experience) => {
    setEditingExperienceId(experience.id)
    setExperienceForm(experience)
    setShowExperienceForm(true)
  }

  const cancelExperienceForm = () => {
    setShowExperienceForm(false)
    setEditingExperienceId(null)
  }

  const updateExperienceField = (
    field: keyof Experience,
    value: string | boolean,
  ) => {
    setExperienceForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveExperience = () => {
    if (
      !experienceForm.company.trim() ||
      !experienceForm.position.trim()
    ) {
      return
    }

    setResume((current) => {
      if (editingExperienceId) {
        return {
          ...current,
          experience: current.experience.map((item) =>
            item.id === editingExperienceId
              ? experienceForm
              : item,
          ),
        }
      }

      return {
        ...current,
        experience: [
          ...current.experience,
          experienceForm,
        ],
      }
    })

    setShowExperienceForm(false)
    setEditingExperienceId(null)
  }

  const deleteExperience = (id: string) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * EDUCATION FUNCTIONS
   * ============================================================
   */

  const openEducationForm = () => {
    setEditingEducationId(null)

    setEducationForm({
      id: crypto.randomUUID(),
      institution: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    })

    setShowEducationForm(true)
  }

  const editEducation = (education: Education) => {
    setEditingEducationId(education.id)
    setEducationForm(education)
    setShowEducationForm(true)
  }

  const cancelEducationForm = () => {
    setShowEducationForm(false)
    setEditingEducationId(null)
  }

  const updateEducationField = (
    field: keyof Education,
    value: string,
  ) => {
    setEducationForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveEducation = () => {
    if (
      !educationForm.institution.trim() ||
      !educationForm.degree.trim()
    ) {
      return
    }

    setResume((current) => {
      if (editingEducationId) {
        return {
          ...current,
          education: current.education.map((item) =>
            item.id === editingEducationId
              ? educationForm
              : item,
          ),
        }
      }

      return {
        ...current,
        education: [
          ...current.education,
          educationForm,
        ],
      }
    })

    setShowEducationForm(false)
    setEditingEducationId(null)
  }

  const deleteEducation = (id: string) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * SKILLS FUNCTIONS
   * ============================================================
   */

  const openSkillForm = () => {
    setEditingSkillId(null)

    setSkillForm({
      id: crypto.randomUUID(),
      name: '',
      level: 'Intermediate',
    })

    setShowSkillForm(true)
  }

  const editSkill = (skill: Skill) => {
    setEditingSkillId(skill.id)
    setSkillForm(skill)
    setShowSkillForm(true)
  }

  const cancelSkillForm = () => {
    setShowSkillForm(false)
    setEditingSkillId(null)
  }

  const updateSkillField = (
    field: keyof Skill,
    value: string,
  ) => {
    setSkillForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveSkill = () => {
    if (!skillForm.name.trim()) {
      return
    }

    setResume((current) => {
      if (editingSkillId) {
        return {
          ...current,
          skills: current.skills.map((item) =>
            item.id === editingSkillId
              ? skillForm
              : item,
          ),
        }
      }

      return {
        ...current,
        skills: [
          ...current.skills,
          skillForm,
        ],
      }
    })

    setShowSkillForm(false)
    setEditingSkillId(null)
  }

  const deleteSkill = (id: string) => {
    setResume((current) => ({
      ...current,
      skills: current.skills.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * PROJECT FUNCTIONS
   * ============================================================
   */

  const openProjectForm = () => {
    setEditingProjectId(null)

    setProjectForm({
      id: crypto.randomUUID(),
      name: '',
      description: '',
      technologies: [],
      link: '',
    })

    setTechnologiesInput('')
    setShowProjectForm(true)
  }

  const editProject = (project: Project) => {
    setEditingProjectId(project.id)
    setProjectForm(project)
    setTechnologiesInput(
      project.technologies.join(', '),
    )
    setShowProjectForm(true)
  }

  const cancelProjectForm = () => {
    setShowProjectForm(false)
    setEditingProjectId(null)
    setTechnologiesInput('')
  }

  const updateProjectField = (
    field: keyof Project,
    value: string,
  ) => {
    setProjectForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveProject = () => {
    if (
      !projectForm.name.trim() ||
      !projectForm.description.trim()
    ) {
      return
    }

    const technologies = technologiesInput
      .split(',')
      .map((technology) => technology.trim())
      .filter(Boolean)

    const projectToSave: Project = {
      ...projectForm,
      technologies,
    }

    setResume((current) => {
      if (editingProjectId) {
        return {
          ...current,
          projects: current.projects.map((item) =>
            item.id === editingProjectId
              ? projectToSave
              : item,
          ),
        }
      }

      return {
        ...current,
        projects: [
          ...current.projects,
          projectToSave,
        ],
      }
    })

    setShowProjectForm(false)
    setEditingProjectId(null)
    setTechnologiesInput('')
  }

  const deleteProject = (id: string) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * CERTIFICATION FUNCTIONS
   * ============================================================
   */

  const openCertificationForm = () => {
    setEditingCertificationId(null)

    setCertificationForm({
      id: crypto.randomUUID(),
      name: '',
      issuer: '',
      date: '',
      link: '',
    })

    setShowCertificationForm(true)
  }

  const editCertification = (
    certification: Certification,
  ) => {
    setEditingCertificationId(certification.id)
    setCertificationForm(certification)
    setShowCertificationForm(true)
  }

  const cancelCertificationForm = () => {
    setShowCertificationForm(false)
    setEditingCertificationId(null)
  }

  const updateCertificationField = (
    field: keyof Certification,
    value: string,
  ) => {
    setCertificationForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveCertification = () => {
    if (
      !certificationForm.name.trim() ||
      !certificationForm.issuer.trim()
    ) {
      return
    }

    setResume((current) => {
      if (editingCertificationId) {
        return {
          ...current,
          certifications:
            current.certifications.map((item) =>
              item.id === editingCertificationId
                ? certificationForm
                : item,
            ),
        }
      }

      return {
        ...current,
        certifications: [
          ...current.certifications,
          certificationForm,
        ],
      }
    })

    setShowCertificationForm(false)
    setEditingCertificationId(null)
  }

  const deleteCertification = (id: string) => {
    setResume((current) => ({
      ...current,
      certifications:
        current.certifications.filter(
          (item) => item.id !== id,
        ),
    }))
  }

  /*
   * ============================================================
   * LANGUAGE FUNCTIONS
   * ============================================================
   */

  const openLanguageForm = () => {
    setEditingLanguageId(null)

    setLanguageForm({
      id: crypto.randomUUID(),
      name: '',
      level: '',
    })

    setShowLanguageForm(true)
  }

  const editLanguage = (language: Language) => {
    setEditingLanguageId(language.id)
    setLanguageForm(language)
    setShowLanguageForm(true)
  }

  const cancelLanguageForm = () => {
    setShowLanguageForm(false)
    setEditingLanguageId(null)
  }

  const updateLanguageField = (
    field: keyof Language,
    value: string,
  ) => {
    setLanguageForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveLanguage = () => {
    if (!languageForm.name.trim()) {
      return
    }

    setResume((current) => {
      if (editingLanguageId) {
        return {
          ...current,
          languages: current.languages.map((item) =>
            item.id === editingLanguageId
              ? languageForm
              : item,
          ),
        }
      }

      return {
        ...current,
        languages: [
          ...current.languages,
          languageForm,
        ],
      }
    })

    setShowLanguageForm(false)
    setEditingLanguageId(null)
  }

  const deleteLanguage = (id: string) => {
    setResume((current) => ({
      ...current,
      languages: current.languages.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * REFERENCE FUNCTIONS
   * ============================================================
   */

  const openReferenceForm = () => {
    setEditingReferenceId(null)

    setReferenceForm({
      id: crypto.randomUUID(),
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
    })

    setShowReferenceForm(true)
  }

  const editReference = (reference: Reference) => {
    setEditingReferenceId(reference.id)
    setReferenceForm(reference)
    setShowReferenceForm(true)
  }

  const cancelReferenceForm = () => {
    setShowReferenceForm(false)
    setEditingReferenceId(null)
  }

  const updateReferenceField = (
    field: keyof Reference,
    value: string,
  ) => {
    setReferenceForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const saveReference = () => {
    if (
      !referenceForm.name.trim() ||
      !referenceForm.position.trim() ||
      !referenceForm.company.trim()
    ) {
      return
    }

    setResume((current) => {
      if (editingReferenceId) {
        return {
          ...current,
          references: current.references.map(
            (item) =>
              item.id === editingReferenceId
                ? referenceForm
                : item,
          ),
        }
      }

      return {
        ...current,
        references: [
          ...current.references,
          referenceForm,
        ],
      }
    })

    setShowReferenceForm(false)
    setEditingReferenceId(null)
  }

  const deleteReference = (id: string) => {
    setResume((current) => ({
      ...current,
      references: current.references.filter(
        (item) => item.id !== id,
      ),
    }))
  }

  /*
   * ============================================================
   * JSX
   * ============================================================
   */

  return (
    <div className="space-y-6">

      {/* ========================================================
          PERSONAL INFORMATION
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <User size={19} />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">
              Personal Information
            </h2>

            <p className="text-sm text-slate-500">
              Basic information recruiters can use to contact you.
            </p>
          </div>

        </div>


        <div className="mt-6 grid gap-5 sm:grid-cols-2">

          <div className="sm:col-span-2">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              value={resume.personal.fullName}
              onChange={(e) =>
                updatePersonalField(
                  'fullName',
                  e.target.value,
                )
              }
              placeholder="e.g. Antony Mwangi"
              className={inputClass}
            />

          </div>


          <div className="sm:col-span-2">

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Professional Title
            </label>

            <input
              type="text"
              value={resume.personal.jobTitle}
              onChange={(e) =>
                updatePersonalField(
                  'jobTitle',
                  e.target.value,
                )
              }
              placeholder="e.g. Full-Stack Developer"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Mail size={15} />
              Email
            </label>

            <input
              type="email"
              value={resume.personal.email}
              onChange={(e) =>
                updatePersonalField(
                  'email',
                  e.target.value,
                )
              }
              placeholder="you@example.com"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Phone size={15} />
              Phone
            </label>

            <input
              type="tel"
              value={resume.personal.phone}
              onChange={(e) =>
                updatePersonalField(
                  'phone',
                  e.target.value,
                )
              }
              placeholder="+254 700 000 000"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin size={15} />
              Location
            </label>

            <input
              type="text"
              value={resume.personal.location}
              onChange={(e) =>
                updatePersonalField(
                  'location',
                  e.target.value,
                )
              }
              placeholder="Nairobi, Kenya"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Globe size={15} />
              Website
            </label>

            <input
              type="url"
              value={resume.personal.website}
              onChange={(e) =>
                updatePersonalField(
                  'website',
                  e.target.value,
                )
              }
              placeholder="https://yourwebsite.com"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Link size={15} />
              LinkedIn
            </label>

            <input
              type="text"
              value={resume.personal.linkedin}
              onChange={(e) =>
                updatePersonalField(
                  'linkedin',
                  e.target.value,
                )
              }
              placeholder="linkedin.com/in/yourname"
              className={inputClass}
            />

          </div>


          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Code2 size={15} />
              GitHub
            </label>

            <input
              type="text"
              value={resume.personal.github}
              onChange={(e) =>
                updatePersonalField(
                  'github',
                  e.target.value,
                )
              }
              placeholder="github.com/username"
              className={inputClass}
            />

          </div>

        </div>

      </section>


      {/* ========================================================
          PROFESSIONAL SUMMARY
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <User size={19} />
          </div>

          <div>
            <h2 className="font-bold text-slate-900">
              Professional Summary
            </h2>

            <p className="text-sm text-slate-500">
              Give recruiters a short overview of your professional background.
            </p>
          </div>

        </div>


        <div className="mt-6">

          <textarea
            rows={6}
            value={resume.summary}
            onChange={(e) =>
              updateSummary(e.target.value)
            }
            placeholder="Write a concise professional summary highlighting your experience, skills, strengths and career goals..."
            className={textareaClass}
          />

          <p className="mt-2 text-xs text-slate-400">
            Keep your summary concise and focused on your professional value.
          </p>

        </div>

      </section>


      {/* ========================================================
          WORK EXPERIENCE
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BriefcaseBusiness size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Work Experience
              </h2>

              <p className="text-sm text-slate-500">
                Add your professional experience.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openExperienceForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Experience
          </button>

        </div>


        {showExperienceForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Job Title
                </label>

                <input
                  type="text"
                  value={experienceForm.position}
                  onChange={(e) =>
                    updateExperienceField(
                      'position',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Software Developer"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company
                </label>

                <input
                  type="text"
                  value={experienceForm.company}
                  onChange={(e) =>
                    updateExperienceField(
                      'company',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. ABC Technologies"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>

                <input
                  type="text"
                  value={experienceForm.location}
                  onChange={(e) =>
                    updateExperienceField(
                      'location',
                      e.target.value,
                    )
                  }
                  placeholder="Nairobi, Kenya"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Start Date
                </label>

                <input
                  type="month"
                  value={experienceForm.startDate}
                  onChange={(e) =>
                    updateExperienceField(
                      'startDate',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  End Date
                </label>

                <input
                  type="month"
                  value={experienceForm.endDate}
                  disabled={experienceForm.current}
                  onChange={(e) =>
                    updateExperienceField(
                      'endDate',
                      e.target.value,
                    )
                  }
                  className={`${inputClass} disabled:cursor-not-allowed disabled:bg-slate-100`}
                />

              </div>


              <div className="flex items-center">

                <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">

                  <input
                    type="checkbox"
                    checked={experienceForm.current}
                    onChange={(e) =>
                      updateExperienceField(
                        'current',
                        e.target.checked,
                      )
                    }
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />

                  I currently work here

                </label>

              </div>


              <div className="sm:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  rows={5}
                  value={experienceForm.description}
                  onChange={(e) =>
                    updateExperienceField(
                      'description',
                      e.target.value,
                    )
                  }
                  placeholder="Describe your responsibilities, achievements and contributions..."
                  className={textareaClass}
                />

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelExperienceForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveExperience}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingExperienceId
                  ? 'Update Experience'
                  : 'Save Experience'}
              </button>

            </div>

          </div>
        )}


        {resume.experience.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <BriefcaseBusiness
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No work experience added
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add your professional experience above.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.experience.map((experience) => (

              <div
                key={experience.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {experience.position}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {experience.company}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {experience.startDate || 'Start date'}{' '}
                      –{' '}
                      {experience.current
                        ? 'Present'
                        : experience.endDate || 'End date'}
                    </p>

                  </div>


                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        editExperience(experience)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteExperience(experience.id)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>

                  </div>

                </div>


                {experience.location && (
                  <p className="mt-3 text-xs text-slate-500">
                    {experience.location}
                  </p>
                )}

                {experience.description && (
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {experience.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ========================================================
          EDUCATION
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <GraduationCap size={20} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Education
              </h2>

              <p className="text-sm text-slate-500">
                Add your academic background.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openEducationForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Education
          </button>

        </div>


        {showEducationForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="sm:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Institution
                </label>

                <input
                  type="text"
                  value={educationForm.institution}
                  onChange={(e) =>
                    updateEducationField(
                      'institution',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Murang'a University of Technology"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Degree / Qualification
                </label>

                <input
                  type="text"
                  value={educationForm.degree}
                  onChange={(e) =>
                    updateEducationField(
                      'degree',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Bachelor of Science"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Field of Study
                </label>

                <input
                  type="text"
                  value={educationForm.field}
                  onChange={(e) =>
                    updateEducationField(
                      'field',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Computer Technology"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Location
                </label>

                <input
                  type="text"
                  value={educationForm.location}
                  onChange={(e) =>
                    updateEducationField(
                      'location',
                      e.target.value,
                    )
                  }
                  placeholder="Murang'a, Kenya"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Start Date
                </label>

                <input
                  type="month"
                  value={educationForm.startDate}
                  onChange={(e) =>
                    updateEducationField(
                      'startDate',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  End Date
                </label>

                <input
                  type="month"
                  value={educationForm.endDate}
                  onChange={(e) =>
                    updateEducationField(
                      'endDate',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

              </div>


              <div className="sm:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  rows={4}
                  value={educationForm.description || ''}
                  onChange={(e) =>
                    updateEducationField(
                      'description',
                      e.target.value,
                    )
                  }
                  placeholder="Optional information about your studies, achievements or relevant coursework..."
                  className={textareaClass}
                />

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelEducationForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveEducation}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingEducationId
                  ? 'Update Education'
                  : 'Save Education'}
              </button>

            </div>

          </div>
        )}


        {resume.education.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <GraduationCap
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No education added
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add your academic qualifications above.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.education.map((education) => (

              <div
                key={education.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {education.degree}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {education.institution}
                    </p>

                    {education.field && (
                      <p className="mt-1 text-sm text-slate-500">
                        {education.field}
                      </p>
                    )}

                    <p className="mt-1 text-xs text-slate-500">
                      {education.startDate || 'Start date'}{' '}
                      –{' '}
                      {education.endDate || 'End date'}
                    </p>

                  </div>


                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        editEducation(education)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteEducation(education.id)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>

                  </div>

                </div>


                {education.location && (
                  <p className="mt-3 text-xs text-slate-500">
                    {education.location}
                  </p>
                )}

                {education.description && (
                  <p className="mt-3 whitespace-pre-line text-sm leading-6 text-slate-600">
                    {education.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ========================================================
          SKILLS
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Code2 size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Skills
              </h2>

              <p className="text-sm text-slate-500">
                Add your professional and technical skills.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openSkillForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Skill
          </button>

        </div>


        {showSkillForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Skill Name
                </label>

                <input
                  type="text"
                  value={skillForm.name}
                  onChange={(e) =>
                    updateSkillField(
                      'name',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. React.js"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Proficiency Level
                </label>

                <select
                  value={skillForm.level}
                  onChange={(e) =>
                    updateSkillField(
                      'level',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                >
                  <option value="Beginner">
                    Beginner
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                  <option value="Expert">
                    Expert
                  </option>
                </select>

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelSkillForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveSkill}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingSkillId
                  ? 'Update Skill'
                  : 'Save Skill'}
              </button>

            </div>

          </div>
        )}


        {resume.skills.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <Code2
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No skills added yet
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add your technical and professional skills.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.skills.map((skill) => (

              <div
                key={skill.id}
                className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {skill.name}
                  </h3>

                  {skill.level && (
                    <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {skill.level}
                    </span>
                  )}

                </div>


                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      editSkill(skill)
                    }
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                  >
                    <Pencil size={15} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteSkill(skill.id)
                    }
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={15} />
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ========================================================
          PROJECTS
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FolderKanban size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Projects
              </h2>

              <p className="text-sm text-slate-500">
                Showcase important projects and technical work.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openProjectForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Project
          </button>

        </div>


        {showProjectForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="space-y-4">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Name
                </label>

                <input
                  type="text"
                  value={projectForm.name}
                  onChange={(e) =>
                    updateProjectField(
                      'name',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. House Rental Platform"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Description
                </label>

                <textarea
                  rows={5}
                  value={projectForm.description}
                  onChange={(e) =>
                    updateProjectField(
                      'description',
                      e.target.value,
                    )
                  }
                  placeholder="Describe the project, what it does, your contribution and important achievements..."
                  className={textareaClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Technologies
                </label>

                <input
                  type="text"
                  value={technologiesInput}
                  onChange={(e) =>
                    setTechnologiesInput(
                      e.target.value,
                    )
                  }
                  placeholder="React, TypeScript, Node.js, MySQL"
                  className={inputClass}
                />

                <p className="mt-2 text-xs text-slate-400">
                  Separate technologies with commas.
                </p>

              </div>


              <div>

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Link size={15} />
                  Project Link
                </label>

                <input
                  type="url"
                  value={projectForm.link || ''}
                  onChange={(e) =>
                    updateProjectField(
                      'link',
                      e.target.value,
                    )
                  }
                  placeholder="https://github.com/username/project"
                  className={inputClass}
                />

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelProjectForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveProject}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingProjectId
                  ? 'Update Project'
                  : 'Save Project'}
              </button>

            </div>

          </div>
        )}


        {resume.projects.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <FolderKanban
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No projects added yet
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add projects that demonstrate your skills and experience.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.projects.map((project) => (

              <div
                key={project.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div className="min-w-0">

                    <h3 className="font-bold text-slate-900">
                      {project.name}
                    </h3>

                    {project.description && (
                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                        {project.description}
                      </p>
                    )}

                    {project.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">

                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700"
                            >
                              {technology}
                            </span>
                          ),
                        )}

                      </div>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <Link size={14} />
                        View Project
                      </a>
                    )}

                  </div>


                  <div className="flex shrink-0 items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        editProject(project)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteProject(project.id)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ========================================================
          CERTIFICATIONS
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Award size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Certifications
              </h2>

              <p className="text-sm text-slate-500">
                Add professional certifications and credentials.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openCertificationForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Certification
          </button>

        </div>


        {showCertificationForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="sm:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Certification Name
                </label>

                <input
                  type="text"
                  value={certificationForm.name}
                  onChange={(e) =>
                    updateCertificationField(
                      'name',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. AWS Certified Cloud Practitioner"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Issuing Organization
                </label>

                <input
                  type="text"
                  value={certificationForm.issuer}
                  onChange={(e) =>
                    updateCertificationField(
                      'issuer',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Amazon Web Services"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Date
                </label>

                <input
                  type="month"
                  value={certificationForm.date}
                  onChange={(e) =>
                    updateCertificationField(
                      'date',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                />

              </div>


              <div className="sm:col-span-2">

                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Link size={15} />
                  Certification Link
                </label>

                <input
                  type="url"
                  value={certificationForm.link || ''}
                  onChange={(e) =>
                    updateCertificationField(
                      'link',
                      e.target.value,
                    )
                  }
                  placeholder="https://example.com/credential"
                  className={inputClass}
                />

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelCertificationForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveCertification}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingCertificationId
                  ? 'Update Certification'
                  : 'Save Certification'}
              </button>

            </div>

          </div>
        )}


        {resume.certifications.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <Award
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No certifications added
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add certifications that strengthen your professional profile.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.certifications.map(
              (certification) => (

                <div
                  key={certification.id}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {certification.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600">
                        {certification.issuer}
                      </p>

                      {certification.date && (
                        <p className="mt-1 text-xs text-slate-500">
                          {certification.date}
                        </p>
                      )}

                      {certification.link && (
                        <a
                          href={certification.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
                        >
                          <Link size={14} />
                          View Credential
                        </a>
                      )}

                    </div>


                    <div className="flex items-center gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          editCertification(
                            certification,
                          )
                        }
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                      >
                        <Pencil size={15} />
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteCertification(
                            certification.id,
                          )
                        }
                        className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={15} />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ),
            )}

          </div>

        )}

      </section>


      {/* ========================================================
          LANGUAGES
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Languages size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Languages
              </h2>

              <p className="text-sm text-slate-500">
                Add languages and your proficiency level.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openLanguageForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Language
          </button>

        </div>


        {showLanguageForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Language
                </label>

                <input
                  type="text"
                  value={languageForm.name}
                  onChange={(e) =>
                    updateLanguageField(
                      'name',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. English"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Proficiency
                </label>

                <select
                  value={languageForm.level}
                  onChange={(e) =>
                    updateLanguageField(
                      'level',
                      e.target.value,
                    )
                  }
                  className={inputClass}
                >

                  <option value="">
                    Select proficiency
                  </option>

                  <option value="Basic">
                    Basic
                  </option>

                  <option value="Intermediate">
                    Intermediate
                  </option>

                  <option value="Advanced">
                    Advanced
                  </option>

                  <option value="Fluent">
                    Fluent
                  </option>

                  <option value="Native">
                    Native
                  </option>

                </select>

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelLanguageForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveLanguage}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingLanguageId
                  ? 'Update Language'
                  : 'Save Language'}
              </button>

            </div>

          </div>
        )}


        {resume.languages.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <Languages
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No languages added
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Add languages you can communicate in.
            </p>

          </div>

        ) : (

          <div className="mt-6 grid gap-3 sm:grid-cols-2">

            {resume.languages.map((language) => (

              <div
                key={language.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {language.name}
                  </h3>

                  {language.level && (
                    <span className="mt-1 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {language.level}
                    </span>
                  )}

                </div>


                <div className="flex items-center gap-1">

                  <button
                    type="button"
                    onClick={() =>
                      editLanguage(language)
                    }
                    className="rounded-lg p-2 text-slate-500 hover:bg-white hover:text-blue-600"
                    title="Edit language"
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteLanguage(language.id)
                    }
                    className="rounded-lg p-2 text-red-500 hover:bg-red-50"
                    title="Delete language"
                  >
                    <Trash2 size={15} />
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ========================================================
          REFERENCES
      ======================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Users size={19} />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                References
              </h2>

              <p className="text-sm text-slate-500">
                Add professional references when required.
              </p>
            </div>

          </div>


          <button
            type="button"
            onClick={openReferenceForm}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus size={16} />
            Add Reference
          </button>

        </div>


        {showReferenceForm && (
          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5">

            <div className="grid gap-4 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  value={referenceForm.name}
                  onChange={(e) =>
                    updateReferenceField(
                      'name',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. John Kamau"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Position
                </label>

                <input
                  type="text"
                  value={referenceForm.position}
                  onChange={(e) =>
                    updateReferenceField(
                      'position',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. Senior Software Engineer"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Company / Organization
                </label>

                <input
                  type="text"
                  value={referenceForm.company}
                  onChange={(e) =>
                    updateReferenceField(
                      'company',
                      e.target.value,
                    )
                  }
                  placeholder="e.g. ABC Technologies"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  value={referenceForm.email}
                  onChange={(e) =>
                    updateReferenceField(
                      'email',
                      e.target.value,
                    )
                  }
                  placeholder="john@example.com"
                  className={inputClass}
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone
                </label>

                <input
                  type="tel"
                  value={referenceForm.phone}
                  onChange={(e) =>
                    updateReferenceField(
                      'phone',
                      e.target.value,
                    )
                  }
                  placeholder="+254 700 000 000"
                  className={inputClass}
                />

              </div>

            </div>


            <div className="mt-5 flex flex-wrap justify-end gap-3">

              <button
                type="button"
                onClick={cancelReferenceForm}
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <X size={16} />
                Cancel
              </button>

              <button
                type="button"
                onClick={saveReference}
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                <Save size={16} />

                {editingReferenceId
                  ? 'Update Reference'
                  : 'Save Reference'}
              </button>

            </div>

          </div>
        )}


        {resume.references.length === 0 ? (

          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-6 py-10 text-center">

            <Users
              size={30}
              className="mx-auto text-slate-400"
            />

            <h3 className="mt-3 font-semibold text-slate-700">
              No references added
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              References can be added when they are required.
            </p>

          </div>

        ) : (

          <div className="mt-6 space-y-3">

            {resume.references.map((reference) => (

              <div
                key={reference.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {reference.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      {reference.position}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {reference.company}
                    </p>

                    <div className="mt-2 space-y-1 text-xs text-slate-500">

                      {reference.email && (
                        <p>
                          {reference.email}
                        </p>
                      )}

                      {reference.phone && (
                        <p>
                          {reference.phone}
                        </p>
                      )}

                    </div>

                  </div>


                  <div className="flex items-center gap-2">

                    <button
                      type="button"
                      onClick={() =>
                        editReference(reference)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-white hover:text-blue-600"
                    >
                      <Pencil size={15} />
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteReference(reference.id)
                      }
                      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  )
}

export default ResumeForm