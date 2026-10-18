import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { practiceAreas, siteConfig, useDocumentTitle } from '../lib/site'
import ServiceCard from '../components/ServiceCard'
import './pages.css'

export default function Services() {
  useDocumentTitle('Practice Areas')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Practice Areas</p>
          <h1>Personal injury &amp; employment law.</h1>
          <p>
            {siteConfig.firm} represents individuals and families across a focused range of
            personal injury and employment matters. Each case begins with a thorough review
            of the facts and a clear explanation of your options.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-overview-grid">
            {practiceAreas.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--navy-50)', borderBottom: '1px solid var(--navy-50)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
            <p className="eyebrow">In detail</p>
            <h2>What each practice area involves</h2>
          </div>
          <div className="services-detail">
            {practiceAreas.map((s, i) => (
              <article id={s.id} className="service-detail" key={s.id}>
                <div className="service-detail-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="service-detail-body">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
                <Link
                  to={`/contact?service=${encodeURIComponent(s.id)}`}
                  className="btn btn-outline service-detail-cta"
                >
                  Discuss This Matter <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Not sure where your matter fits?</h2>
            <p>
              Begin with a general consultation — we can determine together how best to
              address your situation.
            </p>
            <Link to="/contact" className="btn btn-gold">Request a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  )
}
