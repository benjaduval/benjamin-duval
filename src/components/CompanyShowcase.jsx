import { featuredCompanies } from '../data/content'
import CompanySection from './CompanySection'

export default function CompanyShowcase() {
  return (
    <div id="work">
      <div className="section-shell pb-6 pt-24 md:pt-32">
        <p className="section-label">Selected ventures</p>
        <h2 className="section-title mt-4 max-w-3xl">
          Five companies. Five chapters of building at scale.
        </h2>
        <p className="section-subtitle mt-6">
          Deep dives into the ventures where I operated as founder or C-level — with product context,
          metrics, and the work that moved the needle.
        </p>
      </div>

      <div className="divide-y divide-black/[0.05]">
        {featuredCompanies.map((company, index) => (
          <CompanySection key={company.id} company={company} index={index} />
        ))}
      </div>
    </div>
  )
}
