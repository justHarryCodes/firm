import { Mail, Phone, MessageCircle, Clock } from 'lucide-react'
import { siteConfig, useDocumentTitle } from '../lib/site'
import ContactForm from '../components/ContactForm'
import './pages.css'

const tawkConfigured = Boolean(import.meta.env.VITE_TAWK_PROPERTY_ID)

export default function Contact() {
  useDocumentTitle('Contact')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Tell me how I can help.</h1>
          <p>
            Share a brief, non-confidential description of your inquiry and I will respond
            using your preferred contact method. Every inquiry is reviewed personally.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-intro reveal">
            <h2 className="eyebrow">A few details</h2>
            <p>
              Use the form to outline your inquiry. There is no obligation in reaching out,
              and your message is treated with discretion.
            </p>
            <div className="contact-info">
              {siteConfig.email && (
                <div className="contact-info-item">
                  <Mail size={18} className="icon" />
                  <div>
                    <div className="label">Email</div>
                    <div className="value">{siteConfig.email}</div>
                  </div>
                </div>
              )}
              {siteConfig.phone && (
                <div className="contact-info-item">
                  <Phone size={18} className="icon" />
                  <div>
                    <div className="label">Phone</div>
                    <div className="value">{siteConfig.phone}</div>
                  </div>
                </div>
              )}
              <div className="contact-info-item">
                <Clock size={18} className="icon" />
                <div>
                  <div className="label">Response time</div>
                  <div className="value">Within a reasonable time, during business days</div>
                </div>
              </div>
              {!siteConfig.email && !siteConfig.phone && (
                <p style={{ fontSize: '0.85rem', color: 'var(--navy-400)', fontStyle: 'italic' }}>
                  Contact details will appear here once configured.
                </p>
              )}
            </div>

            <div className={`chat-note ${tawkConfigured ? '' : 'disabled'}`}>
              <MessageCircle size={16} />
              <span>
                <strong>Live chat.</strong>{' '}
                {tawkConfigured
                  ? 'Use the chat widget for an initial inquiry. Please do not share confidential case details over chat — it is intended for brief, preliminary questions only, not emergency legal advice.'
                  : 'Live chat is not currently configured. Once Tawk.to credentials are added, visitors can start an initial conversation here.'}
              </span>
            </div>
          </aside>

          <div className="reveal reveal-d1">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
