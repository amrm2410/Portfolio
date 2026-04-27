import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getCaseStudyBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/common/MDXComponents';
import { Navigation } from '@/components';
import ParticlesBackground from '@/components/common/ParticlesBackground';
import CedarRoseTabs from './CedarRoseTabs';
import '../[slug]/project-detail.css';
import './cedar-rose.css';

export const metadata: Metadata = {
  title: 'Cedar Rose — Product Design Portfolio',
  description: 'Product design ownership across Cedar Rose\'s risk intelligence ecosystem — from 0→1 dashboard design to cross-product workflow ownership.',
  openGraph: {
    title: 'Cedar Rose — Product Design Portfolio',
    description: 'Product design ownership across Cedar Rose\'s risk intelligence ecosystem.',
    images: [{ url: '/project-assets/Cedar Rose/cedar-rose-logo.png' }],
  },
};

export default function CedarRosePage() {
  const crisEcosystem = getCaseStudyBySlug('cris-ecosystem');
  const riskPortfolio = getCaseStudyBySlug('risk-portfolio');

  return (
    <div className="App" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navigation isHomePage={false} />

      <article className="project-detail">
        {/* Hero */}
        <div className="bento-grid project-hero-section">
          <div className="bento-card project-hero">
            <Link href="/#projects" className="project-back-link">
              <i className="fas fa-arrow-left"></i> Back to Projects
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <Image
                src="/project-assets/Cedar Rose/cedar-rose-logo.png"
                alt="Cedar Rose"
                width={64}
                height={64}
                style={{ borderRadius: '12px', background: '#272C68' }}
                unoptimized
              />
              <div>
                <span className="project-client-badge" style={{ marginBottom: 0 }}>
                  Cedar Rose
                </span>
              </div>
            </div>

            <h1 className="project-title">Cedar Rose &mdash; Product Design</h1>

            <p className="project-description">
              Product design ownership across Cedar Rose&rsquo;s risk intelligence ecosystem &mdash; from building a real-time monitoring dashboard (0&rarr;1) to cross-product workflow design across internal, QA, client, and report surfaces.
            </p>

            <div className="project-meta">
              <div>
                <div className="project-meta-label">Role</div>
                <div className="project-meta-value">Product Designer (Enterprise / B2B SaaS)</div>
              </div>
              <div>
                <div className="project-meta-label">Duration</div>
                <div className="project-meta-value">Ongoing</div>
              </div>
              <div>
                <div className="project-meta-label">Scope</div>
                <div className="project-meta-value">Multi-product Ecosystem</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Card */}
        <div className="bento-grid">
          <div className="bento-card project-content-card">
            <div className="mdx-content">
              <h2>At a Glance</h2>
              <ul>
                <li><strong>Products:</strong> CRiS Backoffice (Internal) &bull; CRiS Intel (Client-facing) &bull; QA Platform &bull; Credit Report Output</li>
                <li><strong>Primary users:</strong> Business Researchers &bull; QA reviewers &bull; Clients/Analysts</li>
                <li><strong>My role:</strong> Product Designer (Enterprise / B2B SaaS) &mdash; cross-product ownership</li>
                <li><strong>Focus:</strong> workflows, IA, reusable patterns, states/edge cases, developer handoff, and scalability decisions</li>
              </ul>

              <hr />

              <h2>Ecosystem Context</h2>
              <p>Cedar Rose&rsquo;s CRiS ecosystem connects internal production workflows to client consumption:</p>
              <ul>
                <li><strong>CRiS Backoffice (internal researchers):</strong> screening entities, due diligence, and generating structured risk profiles</li>
                <li><strong>QA Platform:</strong> reviewing report quality, completeness, and researcher KPIs before delivery</li>
                <li><strong>CRiS Intel (client-facing):</strong> portfolio monitoring, alert triage, dashboards, and report access</li>
                <li><strong>Credit Report output:</strong> a sellable product output reflecting consolidated and validated data</li>
              </ul>
              <p><strong>Design goal:</strong> Ensure the same data semantics flow end-to-end so &ldquo;what researchers capture&rdquo; becomes &ldquo;what clients see,&rdquo; and QA can validate quality before release.</p>

              <hr />

              <h2>What I Owned</h2>
              <p>Across the CRiS product suite, I focused on:</p>

              <h3>1) Enterprise workflow design</h3>
              <ul>
                <li>Designed structured data capture and review workflows from research &rarr; QA &rarr; client delivery</li>
                <li>Defined statuses, ownership, and clear action paths to reduce handoff friction</li>
              </ul>

              <h3>2) Cross-product consistency &amp; patterns</h3>
              <ul>
                <li>Standardized <strong>tables, filters, and forms</strong> (sorting, pagination, bulk actions, validations)</li>
                <li>Defined <strong>interaction states</strong> (loading/empty/error/permission) across products</li>
                <li>Ensured consistent field definitions and semantics for shared concepts (risk levels, alert categories)</li>
              </ul>

              <h3>3) QA governance and quality workflows</h3>
              <ul>
                <li>Designed workflows to ensure researchers&rsquo; outputs are checked before final delivery</li>
                <li>Supported KPI tracking concepts and review signals that map back to client-facing semantics</li>
              </ul>

              <h3>4) Competitive research &amp; market positioning</h3>
              <ul>
                <li>Conducted competitor UX research to identify best practices, gaps, and differentiation opportunities</li>
                <li>Delivered recommendations to support product positioning and prioritization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabbed Projects Card */}
        <CedarRoseTabs
          tabs={[
            {
              icon: 'fas fa-phone-alt',
              label: 'Call / Interview Details',
              content: crisEcosystem ? (
                <MDXRemote source={crisEcosystem.content} components={mdxComponents} />
              ) : (
                <p>Content not available.</p>
              ),
            },
            {
              icon: 'fas fa-chart-line',
              label: 'Risk Intelligence Dashboard',
              content: riskPortfolio ? (
                <MDXRemote source={riskPortfolio.content} components={mdxComponents} />
              ) : (
                <p>Content not available.</p>
              ),
            },
          ]}
        />

        {/* Footer Actions */}
        <div className="bento-grid">
          <div className="project-footer-actions">
            <Link href="/#projects" className="btn btn-secondary">
              <i className="fas fa-arrow-left"></i> All Projects
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
