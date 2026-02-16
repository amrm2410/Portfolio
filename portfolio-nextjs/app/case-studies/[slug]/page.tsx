import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/common/MDXComponents';

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: study.frontmatter.title,
    description: study.frontmatter.description,
    openGraph: {
      title: `${study.frontmatter.title} | Case Study`,
      description: study.frontmatter.description,
      images: study.frontmatter.coverImage ? [{ url: study.frontmatter.coverImage }] : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const { frontmatter, content } = study;

  return (
    <article className="case-study-detail" style={{ background: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link
            href="/case-studies"
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '2rem',
              opacity: 0.9
            }}
          >
            ← Back to Case Studies
          </Link>

          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              {frontmatter.client}
            </span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
            {frontmatter.title}
          </h1>

          <p style={{ fontSize: '1.25rem', opacity: 0.95, marginBottom: '2rem', lineHeight: '1.6' }}>
            {frontmatter.description}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.25rem' }}>Role</div>
              <div style={{ fontWeight: '600' }}>{frontmatter.role}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.25rem' }}>Duration</div>
              <div style={{ fontWeight: '600' }}>{frontmatter.duration}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.25rem' }}>Date</div>
              <div style={{ fontWeight: '600' }}>{new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  fontSize: '0.875rem'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Cover Image */}
      {frontmatter.coverImage && (
        <div style={{ maxWidth: '1200px', margin: '-3rem auto 0', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
          <div style={{
            position: 'relative',
            height: '500px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
              unoptimized
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="mdx-content">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </div>

      {/* Footer Actions */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '3rem 2rem',
        borderTop: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <Link
          href="/case-studies"
          style={{
            padding: '0.75rem 2rem',
            background: '#f3f4f6',
            color: '#374151',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          ← All Case Studies
        </Link>
        <Link
          href={`/case-studies/${slug}/print`}
          style={{
            padding: '0.75rem 2rem',
            background: '#3b82f6',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
          target="_blank"
        >
          Print View →
        </Link>
      </div>
    </article>
  );
}
