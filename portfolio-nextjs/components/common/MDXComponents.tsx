import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem', color: '#1f2937' }}>
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ fontSize: '2rem', fontWeight: '600', marginTop: '2.5rem', marginBottom: '1rem', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem', marginBottom: '0.75rem', color: '#374151' }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p style={{ marginBottom: '1.25rem', lineHeight: '1.8', color: '#4b5563', fontSize: '1.0625rem' }}>
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#4b5563' }}>
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', color: '#4b5563' }}>
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li style={{ marginBottom: '0.5rem', lineHeight: '1.75' }}>
      {children}
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote style={{
      borderLeft: '4px solid #3b82f6',
      paddingLeft: '1.5rem',
      marginLeft: 0,
      marginRight: 0,
      marginTop: '1.5rem',
      marginBottom: '1.5rem',
      fontStyle: 'italic',
      color: '#6b7280',
      background: '#f9fafb',
      padding: '1rem 1.5rem',
      borderRadius: '4px'
    }}>
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong style={{ fontWeight: '600', color: '#1f2937' }}>
      {children}
    </strong>
  ),
  a: ({ href, children }) => (
    <a href={href} style={{ color: '#3b82f6', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
  hr: () => (
    <hr style={{ margin: '3rem 0', border: 'none', borderTop: '1px solid #e5e7eb' }} />
  ),
};
