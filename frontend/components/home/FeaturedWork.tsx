import Link from 'next/link';
import Image from 'next/image';
import './FeaturedWork.css';

const FEATURED_PROJECTS = [
  {
    slug: 'cedar-rose',
    client: 'Cedar Rose',
    title: 'Cedar Rose',
    subtitle: 'Risk Intelligence Ecosystem — Product Design',
    summary:
      'Product design ownership across Cedar Rose\'s risk intelligence ecosystem — from building a real-time monitoring dashboard (0→1) to cross-product workflow design across internal, QA, client, and report surfaces.',
    tags: ['Risk Intelligence', 'Multi-product Ecosystem', 'Enterprise Workflows', 'Real-time Monitoring'],
    impact: null,
    coverImage: '/project-assets/Cedar Rose/cedar-rose-logo.png',
    coverFit: 'contain' as const,
    coverBg: '#272C68',
    fullWidth: true,
  },
  {
    slug: 'gates-crm-erp',
    client: 'Gates Developments',
    title: 'Gates Benchmark',
    subtitle: 'Unified CRM + ERP Platform',
    summary:
      'Designed an enterprise platform unifying CRM and ERP for a real estate developer — end-to-end workflows across Sales, Customer Care, Legal, Finance/Treasury, and Procurement with SLA-driven cases and Arabic RTL support.',
    tags: ['CRM Design', 'ERP System', 'Workflows', 'RTL Support'],
    impact: null,
    coverImage: '/project-assets/Gates Developments CRM & ERP/Cover.png',
    coverFit: 'cover' as const,
    coverBg: undefined,
    fullWidth: true,
  },
];

const FeaturedWork = () => {
  return (
    <section id="featured-work" className="featured-work bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">Featured Case Studies</h2>
          <span className="bento-section-count">{FEATURED_PROJECTS.length} deep dives</span>
        </div>

        <div className="featured-projects-grid">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`featured-project-card bento-card${project.fullWidth ? ' featured-project-card-full' : ''}`}
            >
              <div className="featured-cover" style={project.coverBg ? { background: project.coverBg } : undefined}>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  style={{ objectFit: project.coverFit }}
                  unoptimized
                />
              </div>
              <div className="featured-content">
                <div className="featured-content-top">
                  <span className="featured-client">{project.client}</span>
                  {project.impact && (
                    <span className="featured-impact-chip">
                      <i className="fas fa-chart-line"></i>
                      {project.impact}
                    </span>
                  )}
                </div>
                <h3 className="featured-title">
                  {project.title}
                  {project.subtitle && <span className="featured-subtitle">{project.subtitle}</span>}
                </h3>
                <p className="featured-summary">{project.summary}</p>
                <div className="featured-bottom">
                  <div className="featured-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="featured-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="featured-cta">
                    Read Case Study <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
