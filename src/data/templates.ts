export interface ResumeTemplate {
  id: string
  name: string
  description: string
  category: string
  popular?: boolean
}

export const templates: ResumeTemplate[] = [
  {
    id: 'modern',
    name: 'Modern',
    description:
      'A clean, contemporary layout designed for technology and modern professional roles.',
    category: 'Professional',
    popular: true,
  },

  {
    id: 'executive',
    name: 'Executive',
    description:
      'A sophisticated and authoritative design for senior professionals and corporate roles.',
    category: 'Corporate',
  },

  {
    id: 'minimal',
    name: 'Minimal',
    description:
      'A simple, elegant layout that focuses attention on your experience and achievements.',
    category: 'Minimal',
  },

  {
    id: 'corporate',
    name: 'Corporate',
    description:
      'A traditional professional design suitable for business, finance and administration roles.',
    category: 'Corporate',
  },

  {
    id: 'creative',
    name: 'Creative',
    description:
      'A visually distinctive but professional design for creative and technology careers.',
    category: 'Creative',
  },
]