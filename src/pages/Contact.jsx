import { Mail, Phone, MessageCircle, Clock, MapPin } from 'lucide-react'
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
          <h1>Tell us how we can help.</h1>
          <p>
            Share a brief, non-confidential description of your situation and we will respond
            using your preferred contact method. Every inquiry is reviewed personally by
            {' '}{siteConfig.attorneyFirst}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-intro reveal">
            <h2 className="eyebrow">{siteConfig.firm}</h2>
            <p>
              Use the form to outline your matter. There is no obligation in reaching out,
              and your message is treated with discretion.
            </p>
            <div className="contact-info">
              <div className="contact-info-item">
                <MapPin size={18} className="icon" />
                <div>
                  <div className="label">Office</div>
                  <div className="value">{siteConfig.location}</div>
                </div>
              </div>
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
