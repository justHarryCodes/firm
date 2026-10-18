import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import {
  Loader2, CheckCircle2, AlertTriangle, ShieldAlert, Send
} from 'lucide-react'
import { practiceAreas } from '../lib/site'
import './ContactForm.css'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

const initial = {
  name: '',
  email: '',
  phone: '',
  inquiry_type: '',
  preferred_contact: 'Email',
  message: '',
  consent: false,
}

const contactMethods = ['Email', 'Phone', 'Either']

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.phone && !/^[+\d\s()-]{6,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!values.inquiry_type) errors.inquiry_type = 'Please select a type of inquiry.'
  if (!values.message.trim()) errors.message = 'Please share a brief description.'
  else if (values.message.trim().length < 10) errors.message = 'Please provide a little more detail.'
  if (!values.consent) errors.consent = 'Please acknowledge the privacy notice to continue.'
  return errors
}

export default function ContactForm() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    const svc = params.get('service')
    if (svc) {
      const match = practiceAreas.find((s) => s.id === svc)
      if (match) {
        setValues((v) => ({ ...v, inquiry_type: match.title }))
      }
    }
  }, [params])

  const fieldError = (name) => touched[name] && errors[name] ? errors[name] : null

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
  }
  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }))
    setErrors(validate(values))
  }

  const inquiryOptions = useMemo(
    () => ['General inquiry', ...practiceAreas.map((s) => s.title)],
    []
  )

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate(values)
    setErrors(v)
    setTouched({ name: true, email: true, phone: true, inquiry_type: true, preferred_contact: true, message: true, consent: true })
    if (Object.keys(v).length > 0) return

    if (!isConfigured) {
      setStatus('success')
      return
    }

    setStatus('loading')
    setSubmitError('')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          reply_to: values.email,
          phone: values.phone || 'Not provided',
          inquiry_type: values.inquiry_type,
          preferred_contact: values.preferred_contact,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setSubmitError(
        err?.text || err?.message || 'Your inquiry could not be delivered. Please try again shortly.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="form-success-icon"><CheckCircle2 size={40} strokeWidth={1.4} /></div>
        <h3>Thank you — your inquiry has been received.</h3>
        <p>
          {isConfigured
            ? 'I will review your message and respond using your preferred contact method. Please allow a reasonable time for a reply.'
            : 'This is a demo confirmation — EmailJS is not yet configured, so no email was actually sent. Once credentials are added, inquiries will be delivered automatically.'}
        </p>
        <div className="form-success-actions">
          <button type="button" className="btn btn-outline" onClick={() => {
            setValues(initial); setTouched({}); setErrors({}); setStatus('idle')
            navigate('/contact', { replace: true })
          }}>
            Send another inquiry
          </button>
          <a href="/" className="link-arrow">Return home</a>
        </div>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {!isConfigured && (
        <div className="form-demo-notice" role="note">
          <ShieldAlert size={16} />
          <span>
            <strong>Demo mode.</strong> EmailJS is not configured, so submissions will not be delivered.
            Add your EmailJS credentials to <code>.env</code> to enable real delivery.
          </span>
        </div>
      )}

      <div className="form-warning" role="note">
        <AlertTriangle size={16} />
        <span>
          Please do not submit confidential information, sensitive personal data, original documents,
          or urgent legal deadlines through this initial inquiry form.
        </span>
      </div>

      <div className="form-grid">
        <Field label="Full name" name="name" required error={fieldError('name')}>
          <input
            type="text" id="name" name="name" autoComplete="name"
            value={values.name} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!fieldError('name')} disabled={status === 'loading'}
          />
        </Field>

        <Field label="Email address" name="email" required error={fieldError('email')}>
          <input
            type="email" id="email" name="email" autoComplete="email"
            value={values.email} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!fieldError('email')} disabled={status === 'loading'}
          />
        </Field>

        <Field label="Phone number (optional)" name="phone" error={fieldError('phone')}>
          <input
            type="tel" id="phone" name="phone" autoComplete="tel"
            value={values.phone} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!fieldError('phone')} disabled={status === 'loading'}
          />
        </Field>

        <Field label="Type of matter" name="inquiry_type" required error={fieldError('inquiry_type')}>
          <select
            id="inquiry_type" name="inquiry_type"
            value={values.inquiry_type} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!fieldError('inquiry_type')} disabled={status === 'loading'}
          >
            <option value="">Select…</option>
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>

        <Field label="Preferred contact method" name="preferred_contact">
          <div className="radio-row" role="radiogroup" aria-label="Preferred contact method">
            {contactMethods.map((m) => (
              <label key={m} className={`radio-chip ${values.preferred_contact === m ? 'is-selected' : ''}`}>
                <input
                  type="radio" name="preferred_contact" value={m}
                  checked={values.preferred_contact === m} onChange={handleChange}
                  disabled={status === 'loading'}
                />
                {m}
              </label>
            ))}
          </div>
        </Field>

        <Field
          label="Brief message"
          name="message"
          required
          error={fieldError('message')}
          full
        >
          <textarea
            id="message" name="message" rows={5}
            value={values.message} onChange={handleChange} onBlur={handleBlur}
            aria-invalid={!!fieldError('message')} disabled={status === 'loading'}
            placeholder="Share a brief, non-confidential description of your inquiry…"
          />
        </Field>

        <div className="form-field form-field-full">
          <label className="consent-check">
            <input
              type="checkbox" name="consent"
              checked={values.consent} onChange={handleChange} onBlur={handleBlur}
              aria-invalid={!!fieldError('consent')} disabled={status === 'loading'}
            />
            <span>
              I have read and acknowledge the website’s{' '}
              <a href="/privacy" target="_blank" rel="noopener">privacy notice</a>.
            </span>
          </label>
          {fieldError('consent') && <p className="form-error">{fieldError('consent')}</p>}
        </div>
      </div>

      {status === 'error' && (
        <div className="form-submit-error" role="alert">
          <AlertTriangle size={16} />
          <span>{submitError}</span>
        </div>
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary form-submit" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <><Loader2 size={16} className="spin" /> Sending…</>
          ) : (
            <>Send Inquiry <Send size={15} /></>
          )}
        </button>
        <p className="form-note">
          Submitting this form does not establish a lawyer-client relationship.
        </p>
      </div>
    </form>
  )
}

function Field({ label, name, required, error, full, children }) {
  return (
    <div className={`form-field ${full ? 'form-field-full' : ''}`}>
      <label htmlFor={name}>
        {label}{required && <span className="req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}
