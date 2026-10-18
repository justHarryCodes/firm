import { Link } from "react-router-dom";
import {
  Scale,
  FileText,
  UserCheck,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { practiceAreas, siteConfig, useDocumentTitle } from "../lib/site";
import ServiceCard from "../components/ServiceCard";
import "./pages.css";

const heroImg = "/r2-final-DSC_1004_pp-min.png";

const values = [
  {
    icon: UserCheck,
    title: "Client-focused",
    body: "Every matter is handled with personal attention and straightforward, honest advice.",
  },
  {
    icon: ShieldCheck,
    title: "Holding parties accountable",
    body: "Thorough investigation and proactive preparation to identify liability and pursue recovery.",
  },
  {
    icon: FileText,
    title: "Clear communication",
    body: "Clients deserve transparent updates and a clear understanding of their legal options.",
  },
  {
    icon: Scale,
    title: "A commitment to justice",
    body: "Principled, results-oriented representation for individuals facing difficult circumstances.",
  },
];

export default function Home() {
  useDocumentTitle("");
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="hero-eyebrow">Welcome To My Private Firm</span>
            <h1>
              Protecting Your Rights.
              <br />
              <em>Personal Attention.</em>
            </h1>
            <p className="hero-lead">
              {siteConfig.attorneyFirst} represents individuals and families in
              personal injury and employment law matters — bringing a strategic,
              detail-oriented approach to complex legal disputes and a
              commitment to justice.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary reveal-d1">
                Request a Consultation
              </Link>
              <Link to="/services" className="btn btn-outline reveal-d2">
                Explore Practice Areas <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="hero-visual reveal reveal-d2">
            <img
              src={heroImg}
              alt={`${siteConfig.attorneyFirst}, founding partner of ${siteConfig.firm}`}
              loading="eager"
            />
            <span className="hero-frame" />
            <div className="hero-badge">
              <strong>{siteConfig.attorney}</strong>
              {siteConfig.role}
            </div>
          </div>
        </div>
      </section>

      <section className="values section-sm">
        <div className="container values-grid">
          {values.map((v) => (
            <div key={v.title} className="value">
              <div className="value-icon">
                <v.icon size={24} strokeWidth={1.5} />
              </div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Practice Areas</p>
            <h2>
              Representing individuals in personal injury &amp; employment
              matters
            </h2>
            <p>
              A focused practice dedicated to the rights of individuals and
              families — from motor vehicle collisions and wrongful death claims
              to workplace discrimination and wage disputes.
            </p>
          </div>
          <div className="services-overview-grid">
            {practiceAreas.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "var(--space-4)" }}>
            <Link to="/services" className="link-arrow">
              View all practice areas <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section-sm"
        style={{
          background: "var(--ivory)",
          borderTop: "1px solid var(--navy-50)",
          borderBottom: "1px solid var(--navy-50)",
        }}
      >
        <div className="container">
          <div className="about-grid" style={{ alignItems: "center" }}>
            <div className="about-body reveal" style={{ maxWidth: "640px" }}>
              <p className="eyebrow">Meet {siteConfig.attorneyFirst}</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                A principled, detail-oriented approach to complex legal
                disputes.
              </h2>
              <p style={{ color: "var(--navy-600)", lineHeight: 1.8 }}>
                {siteConfig.attorney} is the founding partner of{" "}
                {siteConfig.firm}, based in {siteConfig.location}. His legal
                philosophy is grounded in thorough investigation, honest
                communication, and a commitment to justice — taking a proactive
                approach to case preparation to identify critical evidence and
                pursue appropriate avenues for recovery.
              </p>
              <div style={{ marginTop: "var(--space-3)" }}>
                <Link to="/about" className="link-arrow">
                  Read the full profile <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div
              className="about-image reveal reveal-d1"
              style={{ maxWidth: "420px" }}
            >
              <img
                src={heroImg}
                alt={siteConfig.attorneyFirst}
                loading="lazy"
              />
              <span className="hero-frame" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="cta-band reveal">
            <h2>Begin with a confidential conversation.</h2>
            <p>
              Share a brief, non-confidential description of your situation and
              take the first step toward understanding your legal options.
            </p>
            <Link to="/contact" className="btn btn-gold">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
