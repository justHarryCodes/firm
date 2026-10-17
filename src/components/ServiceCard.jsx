import { Link } from 'react-router-dom'
import { ArrowRight, Scale, FileText, Briefcase, UserCheck } from 'lucide-react'
import './ServiceCard.css'

const icons = { Scale, FileText, Briefcase, UserCheck }

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] || Scale
  return (
    <article
      id={service.id}
      className="service-card reveal"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="service-card-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.short}</p>
      <Link
        to={`/contact?service=${encodeURIComponent(service.id)}`}
        className="service-card-cta"
      >
        Discuss This Service <ArrowRight size={15} />
      </Link>
    </article>
  )
}
