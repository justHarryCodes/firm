import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services, useDocumentTitle } from '../lib/site'
import ServiceCard from '../components/ServiceCard'
import './pages.css'

export default function Services() {
  useDocumentTitle('Services')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Focused consultation, clearly explained.</h1>
          <p>
            A considered set of service areas — each beginning with a private conversation
            to understand your circumstances. These categories are offered as proposed
            services and may be edited to reflect my applicable scope of practice.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-overview-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background: 'var(--ivory)', borderTop: '1px solid var(--navy-50)', borderBottom: '1px solid var(--navy-50)' }}>
        <div className="container">
          <div className="section-head" style={{ marginBottom: 'var(--space-4)' }}>
            <p className="eyebrow">In detail</p>
            <h2>What each service involves</h2>
          </div>
          <div className="services-detail">
            {services.map((s, i) => (
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
                  Discuss This Service <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Not sure which service fits?</h2>
            <p>
              Begin with a general consultation — we can determine together where your
              question is best addressed.
            </p>
            <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
