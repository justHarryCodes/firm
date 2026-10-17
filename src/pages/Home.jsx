import { Link } from 'react-router-dom'
import { Scale, FileText, UserCheck, ShieldCheck, ArrowRight } from 'lucide-react'
import { services } from '../lib/site'
import ServiceCard from '../components/ServiceCard'
import { useDocumentTitle } from '../lib/site'
import './pages.css'

const heroImg = '/r2-final-DSC_1004_pp-min.png'
const values = [
  { icon: UserCheck, title: 'Individual attention', body: 'Every inquiry is considered by me personally — no team, no handoff.' },
  { icon: ShieldCheck, title: 'Discretion & confidentiality', body: 'Your circumstances are discussed privately and handled with care.' },
  { icon: FileText, title: 'Clear communication', body: 'Legal considerations explained in plain language, so you understand your options.' },
  { icon: Scale, title: 'A considered approach', body: 'Practical guidance grounded in careful review, not rushed conclusions.' },
]

export default function Home() {
  useDocumentTitle('')
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="hero-eyebrow">Vache Thomassian · Private Legal Consultant</span>
            <h1>Clear Legal Guidance.<br /><em>Personal Attention.</em></h1>
            <p className="hero-lead">
              Thoughtful, confidential legal consultancy tailored to your circumstances.
              Receive personalized guidance to help you understand your options and
              navigate complex legal questions with greater clarity.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary reveal-d1">Get in Touch</Link>
              <Link to="/services" className="btn btn-outline reveal-d2">Explore Services <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hero-visual reveal reveal-d2">
            <img src={heroImg} alt="Vache Thomassian, private legal consultant" loading="eager" />
            <span className="hero-frame" />
            <div className="hero-badge">
              <strong>Vache Thomassian</strong>
              Private legal consultant, by appointment.
            </div>
          </div>
        </div>
      </section>

      <section className="values section-sm">
        <div className="container values-grid">
          {values.map((v) => (
            <div key={v.title} className="value">
              <div className="value-icon"><v.icon size={24} strokeWidth={1.5} /></div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How I can help</p>
            <h2>A considered approach to your legal questions</h2>
            <p>
              Personalized consultation across a focused set of areas — from preliminary
              guidance to contract review and private matters.
            </p>
          </div>
          <div className="services-overview-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-4)' }}>
            <Link to="/services" className="link-arrow">View all services <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Begin with a private conversation.</h2>
            <p>
              Share a brief, non-confidential description of your inquiry and take the
              first step toward clearer understanding of your legal options.
            </p>
            <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
