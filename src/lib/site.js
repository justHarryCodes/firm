import { useEffect } from 'react'

const BASE_TITLE = 'Vache Thomassian — Private Legal Consultant'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Vache Thomassian` : BASE_TITLE
  }, [title])
}

export const siteConfig = {
  brand: 'Vache Thomassian',
  shortBrand: 'Vache Thomassian',
  monogram: 'VT',
  tagline: 'Private Legal Consultant',
  role: 'Private Legal Consultant',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
}

export const services = [
  {
    id: 'legal-consultation',
    title: 'Legal Consultation and Guidance',
    short: 'Preliminary discussions to understand a legal concern, clarify questions, and consider potential next steps.',
    description:
      'A considered first conversation about your legal concern. We clarify the question, review the relevant considerations, and outline practical options so you can decide on appropriate next steps with greater confidence.',
    icon: 'Scale',
  },
  {
    id: 'contract-review',
    title: 'Contract Review and Documentation',
    short: 'Consultation concerning contracts, agreements, and related legal documentation.',
    description:
      'Guidance on contracts, agreements, and related documentation — identifying points worth attention and explaining the considerations that matter, subject to applicable qualifications and authorization.',
    icon: 'FileText',
  },
  {
    id: 'business-commercial',
    title: 'Business and Commercial Legal Guidance',
    short: 'Preliminary guidance on commercial arrangements, business documentation, and legal considerations affecting business decisions.',
    description:
      'Preliminary guidance on commercial arrangements, business documentation, and the legal considerations that affect day-to-day business decisions — explained clearly and without jargon.',
    icon: 'Briefcase',
  },
  {
    id: 'personal-matters',
    title: 'Personal Legal Matters',
    short: 'Private consultation concerning personal legal questions and possible next steps.',
    description:
      'A private consultation for personal legal questions — an opportunity to talk through your circumstances, understand the considerations, and identify possible next steps within my applicable scope of practice.',
    icon: 'UserCheck',
  },
]
