import { Info } from 'lucide-react'
import { useDocumentTitle } from '../lib/site'
import './pages.css'

const aboutImg = '/r2-final-DSC_1004_pp-min.png'

export default function About() {
  useDocumentTitle('About')
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>Vache Thomassian</h1>
          <p>
            A private legal consultant — offering personal, discreet guidance focused on
            understanding your circumstances and helping you identify appropriate next steps.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-image reveal">
            <img src={aboutImg} alt="Vache Thomassian, private legal consultant" loading="lazy" />
            <span className="hero-frame" />
          </div>
          <div className="about-body reveal reveal-d1">
            <p className="lead">
              Every legal matter deserves careful attention. My approach is centered on
              understanding your circumstances, explaining relevant considerations clearly,
              and helping you identify appropriate next steps.
            </p>
            <p>
              I work privately with individuals and businesses who value a considered,
              personal approach. This is not a firm — it is a solo practice. Rather than
              offering generic answers, each consultation begins by listening, so the
              guidance you receive reflects your specific situation, not a template.
            </p>
            <p>
              My aim is to bring clarity to complex legal questions: to explain the
              considerations that matter, outline the options available, and help you
              move forward with greater confidence. Where a matter falls outside my
              scope of practice, I will say so plainly.
            </p>

            <div className="placeholder-card">
              <h4><Info size={14} /> To be supplied by me</h4>
              <ul className="placeholder-list">
                <li>Professional biography and background</li>
                <li>Qualifications and credentials</li>
                <li>Applicable jurisdiction(s) of practice</li>
                <li>Areas of professional competence</li>
                <li>Licensing or registration details, where relevant</li>
              </ul>
              <p style={{ fontSize: '0.82rem', color: 'var(--navy-400)', marginTop: '0.8rem', marginBottom: 0 }}>
                These details will appear here once verified.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
