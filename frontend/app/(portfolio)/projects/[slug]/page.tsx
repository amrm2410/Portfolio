import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/common/MDXComponents';
import { Navigation } from '@/components';
import ParticlesBackground from '@/components/common/ParticlesBackground';
import './project-detail.css';

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) return { title: 'Project Not Found' };

  return {
    title: study.frontmatter.title,
    description: study.frontmatter.description,
    openGraph: {
      title: `${study.frontmatter.title} | Project Details`,
      description: study.frontmatter.description,
      images: study.frontmatter.coverImage ? [{ url: study.frontmatter.coverImage }] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) notFound();

  const { frontmatter, content } = study;
  const hasExecutiveSummary = frontmatter.product || frontmatter.users || frontmatter.problem || frontmatter.outcome;

  return (
    <div className="App" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navigation isHomePage={false} />

      <article className="project-detail">
        <div className="bento-grid project-hero-section">
          <div className="bento-card project-hero">
            <Link href="/#projects" className="project-back-link">
              <i className="fas fa-arrow-left"></i> Back to Projects
            </Link>

            <div>
              <span className="project-client-badge">{frontmatter.client}</span>
            </div>

            <h1 className="project-title">{frontmatter.title}</h1>
            <p className="project-description">{frontmatter.description}</p>

            <div className="project-meta">
              <div>
                <div className="project-meta-label">Role</div>
                <div className="project-meta-value">{frontmatter.role}</div>
              </div>
              <div>
                <div className="project-meta-label">Duration</div>
                <div className="project-meta-value">{frontmatter.duration}</div>
              </div>
              <div>
                <div className="project-meta-label">Date</div>
                <div className="project-meta-value">
                  {frontmatter.date
                    ? new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    : '—'}
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {frontmatter.tags.map((tag) => (
                <span key={tag} className="project-detail-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {frontmatter.coverImage && (
          <div className="bento-grid">
            <div className="bento-card project-cover-card">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                width={1200}
                height={675}
                style={{ width: '100%', height: 'auto' }}
                priority
                unoptimized
              />
            </div>
          </div>
        )}

        {hasExecutiveSummary && (
          <div className="bento-grid">
            <div className="bento-card project-summary-card">
              <div className="executive-summary">
                <h2 className="executive-summary-title">
                  <i className="fas fa-clipboard-list"></i>
                  Executive Summary
                </h2>
                <div className="executive-summary-grid">
                  {frontmatter.product && (
                    <div className="executive-summary-item">
                      <span className="executive-summary-label">Product</span>
                      <span className="executive-summary-value">{frontmatter.product}</span>
                    </div>
                  )}
                  {frontmatter.users && (
                    <div className="executive-summary-item">
                      <span className="executive-summary-label">Users</span>
                      <span className="executive-summary-value">{frontmatter.users}</span>
                    </div>
                  )}
                  {frontmatter.problem && (
                    <div className="executive-summary-item">
                      <span className="executive-summary-label">Problem</span>
                      <span className="executive-summary-value">{frontmatter.problem}</span>
                    </div>
                  )}
                  {frontmatter.constraints && (
                    <div className="executive-summary-item">
                      <span className="executive-summary-label">Constraints</span>
                      <span className="executive-summary-value">{frontmatter.constraints}</span>
                    </div>
                  )}
                  {frontmatter.myRole && (
                    <div className="executive-summary-item" style={{ gridColumn: '1 / -1' }}>
                      <span className="executive-summary-label">My Role</span>
                      <span className="executive-summary-value">{frontmatter.myRole}</span>
                    </div>
                  )}
                  {frontmatter.outcome && (
                    <div className="executive-summary-item executive-summary-outcome">
                      <span className="executive-summary-label">Outcome</span>
                      <span className="executive-summary-value">{frontmatter.outcome}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bento-grid">
          <div className="bento-card project-content-card">
            <div className="mdx-content">
              <MDXRemote source={content} components={mdxComponents} />
            </div>
          </div>
        </div>

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
