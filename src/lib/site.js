import { useEffect } from 'react'

const BASE_TITLE = 'KJT Law Group, LLP — Vaché Thomassian, Esq.'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — KJT Law Group, LLP` : BASE_TITLE
  }, [title])
}

export const siteConfig = {
  firm: 'KJT Law Group, LLP',
  attorney: 'Vaché Thomassian, Esq.',
  attorneyFirst: 'Vaché Thomassian',
  role: 'Founding Partner · Attorney at Law',
  location: 'Glendale, California',
  monogram: 'KJT',
  tagline: 'Personal Injury & Employment Law',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
}

export const practiceAreas = [
  {
    id: 'auto-truck-accidents',
    title: 'Automobile & Truck Accidents',
    short: 'Representation for individuals injured in motor vehicle and commercial truck collisions.',
    description:
      'Representing individuals injured in car, motorcycle, and commercial truck collisions — investigating the facts, establishing liability, and pursuing full and fair compensation for medical expenses, lost income, and pain and suffering.',
    icon: 'Car',
  },
  {
    id: 'premises-liability',
    title: 'Premises Liability',
    short: 'Claims arising from unsafe conditions on residential, commercial, or public property.',
    description:
      'Holding property owners accountable for unsafe conditions that cause injury — including slip-and-fall incidents, inadequate maintenance, and hazardous premises. Thorough investigation identifies responsible parties and supports a clear path to recovery.',
    icon: 'Building2',
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death Claims',
    short: 'Compassionate representation for families who have lost a loved one due to another’s negligence.',
    description:
      'Compassionate, principled representation for families who have lost a loved one due to another party’s negligence. These matters are handled with discretion and care, pursuing accountability and financial security for those left behind.',
    icon: 'HeartHandshake',
  },
  {
    id: 'workplace-discrimination',
    title: 'Workplace Discrimination',
    short: 'Protecting employees from unlawful treatment based on protected characteristics.',
    description:
      'Protecting employees from unlawful treatment based on race, gender, age, disability, national origin, or other protected characteristics. Each matter is evaluated carefully to identify violations and pursue appropriate remedies.',
    icon: 'Scale',
  },
  {
    id: 'wrongful-termination',
    title: 'Wrongful Termination',
    short: 'Advocacy for employees dismissed in violation of the law or public policy.',
    description:
      'Advocacy for employees who have been dismissed in violation of the law, public policy, or an employment agreement. A proactive review of the circumstances helps identify whether termination rights were violated and what recovery may be available.',
    icon: 'FileText',
  },
  {
    id: 'wage-hour-disputes',
    title: 'Wage & Hour Disputes',
    short: 'Recovering unpaid wages, overtime, and addressing wage and hour violations.',
    description:
      'Pursuing unpaid wages, missed overtime, meal-and-rest-break violations, and other wage-and-hour matters. Careful review of pay records and employment terms helps ensure employees receive the compensation they are owed under the law.',
    icon: 'Briefcase',
  },
]

// Kept for backward compatibility where components reference `services`
export const services = practiceAreas
