import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { siteConfig, practiceAreas } from '../lib/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/r2-final-DSC_1004_pp-min.png" alt="" className="footer-mark" aria-hidden="true" />
          <p className="footer-name">{siteConfig.firm}</p>
          <p className="footer-desc">
            {siteConfig.attorney} — {siteConfig.role}. Based in {siteConfig.location}.
            Representing individuals and families in personal injury and employment law matters
            with thorough investigation, honest communication, and a commitment to justice.
          </p>
        </div>

        <nav className="footer-col" aria-label="Pages">
          <h4 className="footer-heading">Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy &amp; Disclaimer</Link>
        </nav>

        <nav className="footer-col" aria-label="Practice Areas">
          <h4 className="footer-heading">Practice Areas</h4>
          {practiceAreas.map((s) => (
            <Link key={s.id} to={`/services#${s.id}`}>{s.title}</Link>
          ))}
        </nav>

        <div className="footer-col footer-contact">
          <h4 className="footer-heading">Get in touch</h4>
          <Link to="/contact" className="btn btn-outline footer-cta">
            Request a Consultation <ArrowUpRight size={16} />
          </Link>
          {siteConfig.email && (
            <a href={`mailto:${siteConfig.email}`} className="footer-contact-link">
              <Mail size={15} /> {siteConfig.email}
            </a>
          )}
          {siteConfig.phone && (
            <a href={`tel:${siteConfig.phone}`} className="footer-contact-link">
              <Phone size={15} /> {siteConfig.phone}
            </a>
          )}
          {!siteConfig.email && !siteConfig.phone && (
            <p className="footer-placeholder">Contact details to be provided.</p>
          )}
        </div>
      </div>

      <div className="footer-base">
        <div className="container footer-base-inner">
          <p>© {year} {siteConfig.firm}. All rights reserved.</p>
          <p className="footer-disclaimer">
            The content of this website is provided for general information only and is not
            legal advice. Submitting an inquiry does not establish a lawyer-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
