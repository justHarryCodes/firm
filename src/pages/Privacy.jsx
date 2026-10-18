import { ShieldAlert } from 'lucide-react'
import { siteConfig, useDocumentTitle } from '../lib/site'
import './pages.css'

export default function Privacy() {
  useDocumentTitle('Privacy & Disclaimer')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy &amp; Legal Disclaimer</h1>
          <p>
            The following explains how information submitted through this website is handled,
            together with important limitations on the content and use of this site.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-narrow">
          <article className="legal-article">
            <div className="disclaimer-box">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldAlert size={20} /> Important Disclaimer
              </h2>
              <p>
                This website provides general information about {siteConfig.firm} and its
                practice areas. Its content is not, by itself, legal advice for any specific matter.
              </p>
              <p>
                Submitting an inquiry through this website does not automatically establish
                an attorney-client relationship. The firm’s services and availability depend
                on applicable professional rules, qualifications, and jurisdiction. An
                attorney-client relationship is formed only upon a signed engagement agreement.
              </p>
              <p style={{ marginBottom: 0 }}>
                Urgent legal matters should be directed to an appropriately qualified
                professional or the relevant authority without delay.
              </p>
            </div>

            <h2>Privacy Policy</h2>
            <p>
              This policy describes how {siteConfig.firm} handles information submitted
              through the inquiry form and live chat. It is provided for general information
              and may be updated from time to time.
            </p>

            <h3>Information you submit</h3>
            <p>
              When you use the inquiry form, you may provide your name, email address,
              an optional phone number, the type of matter, your preferred contact method,
              and a brief message. You also acknowledge the privacy notice by checking the
              consent box.
            </p>
            <p>
              <strong>Please do not submit</strong> confidential information, sensitive
              personal data, original documents, or urgent legal deadlines through the
              initial inquiry form or live chat.
            </p>

            <h3>Purpose of collecting contact details</h3>
            <p>
              Contact details are collected solely to respond to your inquiry and to
              arrange a consultation where appropriate. They are not used for unsolicited
              marketing.
            </p>

            <h3>Third-party service providers</h3>
            <ul>
              <li>
                <strong>EmailJS</strong> — used to transmit inquiry form submissions by
                email. EmailJS processes the submitted data as necessary to deliver the
                message. See EmailJS’s own privacy documentation for details.
              </li>
              <li>
                <strong>Tawk.to</strong> — when live chat is enabled, chat conversations
                are processed by Tawk.to as the chat service provider. See Tawk.to’s
                privacy documentation for details on how chat data is handled.
              </li>
            </ul>

            <h3>Data handling and retention</h3>
            <p>
              <em>[Retention details to be supplied by the firm.]</em> Specific retention
              periods and data-storage arrangements will be described here once confirmed.
              Until then, submitted inquiries are retained only as long as reasonably
              necessary to respond and arrange any follow-up.
            </p>

            <h3>Your questions</h3>
            <p>
              To ask privacy-related questions or request information about data you have
              submitted, use the contact form or, once provided, the published email
              address.
            </p>

            <h3>No claimed certifications</h3>
            <p>
              No specific legal compliance status, security certification, or regulatory
              authorization is claimed on this website beyond the attorney’s bar admissions
              stated on the About page.
            </p>

            <hr className="rule" />
            <p style={{ fontSize: '0.85rem', color: 'var(--navy-400)' }}>
              This page contains editable placeholder content. The firm should review and
              replace any bracketed or placeholder text with verified information before
              publishing.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
