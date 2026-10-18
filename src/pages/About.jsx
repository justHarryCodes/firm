import { GraduationCap, Award, MapPin, BadgeCheck } from 'lucide-react'
import { siteConfig, useDocumentTitle } from '../lib/site'
import './pages.css'

const aboutImg = '/r2-final-DSC_1004_pp-min.png'

const credentials = [
  { icon: GraduationCap, label: 'Education', items: [
    'Bachelor of Arts — University of California, Berkeley',
    'Juris Doctor — Loyola Law School, Los Angeles',
    'Master’s Degree — Columbia University, School of International & Public Affairs',
  ]},
  { icon: BadgeCheck, label: 'Bar Admissions', items: [
    'State Bar of California — admitted 2013',
    'U.S. District Court, Central District of California',
  ]},
  { icon: MapPin, label: 'Location', items: [
    `${siteConfig.firm} — ${siteConfig.location}`,
  ]},
  { icon: Award, label: 'Practice Focus', items: [
    'Personal Injury',
    'Employment Law',
  ]},
]

export default function About() {
  useDocumentTitle('About')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>{siteConfig.attorney}</h1>
          <p>
            {siteConfig.role} of {siteConfig.firm}, based in {siteConfig.location}.
            Representing individuals and families in personal injury and employment law matters.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image reveal">
            <img src={aboutImg} alt={`${siteConfig.attorneyFirst}, founding partner of ${siteConfig.firm}`} loading="lazy" />
            <span className="hero-frame" />
          </div>
          <div className="about-body reveal reveal-d1">
            <p className="lead">
              {siteConfig.attorney} is a distinguished attorney and the founding partner of
              {' '}{siteConfig.firm}, based in {siteConfig.location}. He represents individuals
              and families in personal injury and employment law matters, bringing a strategic,
              detail-oriented approach to complex legal disputes.
            </p>
            <p>
              His practice encompasses automobile and truck accidents, premises liability,
              wrongful death claims, workplace discrimination, wrongful termination, and wage
              and hour disputes. He is committed to protecting the rights of individuals,
              holding negligent parties accountable, and helping clients navigate challenging
              legal circumstances with confidence and clarity.
            </p>
            <p>
              {siteConfig.attorneyFirst}’s legal philosophy is grounded in thorough
              investigation, honest communication, and a commitment to justice. He takes a
              proactive approach to case preparation — identifying critical evidence,
              evaluating potential liability, and pursuing appropriate avenues for recovery.
              He believes clients deserve straightforward advice, transparent communication,
              and dedicated representation throughout the legal process.
            </p>
            <p>
              Beyond his legal practice, {siteConfig.attorneyFirst} is guided by a longstanding
              commitment to social justice and community advocacy. His work reflects a
              dedication to fairness, accountability, and ensuring that individuals receive
              meaningful legal representation when confronting difficult personal,
              professional, or financial circumstances.
            </p>
            <p>
              Through his professional leadership and client-focused approach, {siteConfig.attorneyFirst}
              {' '}continues to advocate for individuals seeking knowledgeable, principled, and
              results-oriented legal representation.
            </p>

            <div className="credentials-grid">
              {credentials.map((c) => (
                <div key={c.label} className="credential-card">
                  <h4><c.icon size={15} /> {c.label}</h4>
                  <ul>
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
