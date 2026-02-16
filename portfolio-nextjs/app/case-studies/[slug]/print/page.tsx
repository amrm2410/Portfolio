import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

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
    title: `${study.frontmatter.title} - Print View`,
    description: study.frontmatter.description,
  };
}

export default async function CaseStudyPrintPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const { frontmatter, content } = study;

  return (
    <article style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Georgia, serif',
      lineHeight: '1.6',
      color: '#000',
      background: '#fff'
    }}>
      {/* Header */}
      <header style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid #000' }}>
        <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>
          {frontmatter.client}
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0 0 1rem 0', lineHeight: '1.2' }}>
          {frontmatter.title}
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#333', marginBottom: '1.5rem' }}>
          {frontmatter.description}
        </p>

        {/* Meta Information */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', fontSize: '0.875rem' }}>
          <div>
            <strong>Role:</strong> {frontmatter.role}
          </div>
          <div>
            <strong>Duration:</strong> {frontmatter.duration}
          </div>
          <div>
            <strong>Date:</strong> {new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginTop: '1rem' }}>
          <strong style={{ fontSize: '0.875rem' }}>Technologies:</strong>{' '}
          {frontmatter.tags.join(', ')}
        </div>
      </header>

      {/* Content */}
      <div style={{
        fontSize: '1rem',
        lineHeight: '1.8'
      }}>
        <MDXRemote
          source={content}
          components={{
            h1: (props) => <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', pageBreakAfter: 'avoid' }} {...props} />,
            h2: (props) => <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '0.75rem', pageBreakAfter: 'avoid' }} {...props} />,
            h3: (props) => <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1.5rem', marginBottom: '0.5rem', pageBreakAfter: 'avoid' }} {...props} />,
            p: (props) => <p style={{ marginBottom: '1rem', textAlign: 'justify' }} {...props} />,
            ul: (props) => <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }} {...props} />,
            ol: (props) => <ol style={{ marginBottom: '1rem', paddingLeft: '2rem' }} {...props} />,
            li: (props) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
            blockquote: (props) => <blockquote style={{ borderLeft: '4px solid #ccc', paddingLeft: '1rem', marginLeft: '0', marginBottom: '1rem', fontStyle: 'italic', color: '#555' }} {...props} />,
            code: (props) => <code style={{ background: '#f4f4f4', padding: '0.2rem 0.4rem', borderRadius: '3px', fontSize: '0.9em', fontFamily: 'monospace' }} {...props} />,
            pre: (props) => <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '4px', overflow: 'auto', marginBottom: '1rem', pageBreakInside: 'avoid' }} {...props} />,
            a: (props) => <a style={{ color: '#0066cc', textDecoration: 'underline' }} {...props} />,
            strong: (props) => <strong style={{ fontWeight: 'bold' }} {...props} />,
            em: (props) => <em style={{ fontStyle: 'italic' }} {...props} />,
          }}
        />
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #ccc', fontSize: '0.875rem', color: '#666' }}>
        <p>
          <strong>{frontmatter.title}</strong> | {frontmatter.client} | {new Date(frontmatter.date).getFullYear()}
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          This is a print-friendly version of the case study. Visit the online version for interactive elements.
        </p>
      </footer>
    </article>
  );
}
