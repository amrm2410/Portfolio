import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllCaseStudies } from '@/lib/mdx';
import './CaseStudies.css';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'In-depth case studies showcasing UX research, design process, and measurable impact across enterprise and consumer products.',
  openGraph: {
    title: 'Case Studies | Amr Abbas',
    description: 'In-depth case studies showcasing UX research, design process, and measurable impact.',
  },
};

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="case-studies-page">
      <div className="case-studies-container">
        <header className="case-studies-header">
          <h1 className="case-studies-title">Case Studies</h1>
          <p className="case-studies-description">
            In-depth explorations of design challenges, research insights, and measurable business impact.
            Each case study demonstrates user-centered design thinking and data-driven decision making.
          </p>
        </header>

        {caseStudies.length === 0 ? (
          <div className="case-studies-empty">
            <p>No case studies available yet. Check back soon!</p>
          </div>
        ) : (
          <div className="case-studies-grid">
            {caseStudies.map((study) => (
              <article key={study.slug} className="case-study-card">
                {study.frontmatter.coverImage && (
                  <div className="case-study-cover">
                    <Image
                      src={study.frontmatter.coverImage}
                      alt={study.frontmatter.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                  </div>
                )}

                <div className="case-study-body">
                  <div className="case-study-client-wrapper">
                    <span className="case-study-client">
                      {study.frontmatter.client}
                    </span>
                  </div>

                  <h2 className="case-study-card-title">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.frontmatter.title}
                    </Link>
                  </h2>

                  <p className="case-study-card-description">
                    {study.frontmatter.description}
                  </p>

                  <div className="case-study-tags">
                    {study.frontmatter.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="case-study-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="case-study-footer">
                    <span className="case-study-role">
                      {study.frontmatter.role}
                    </span>
                    <Link href={`/case-studies/${study.slug}`} className="case-study-link">
                      Read Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="case-studies-back">
          <Link href="/" className="case-studies-back-link">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
