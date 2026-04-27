import type { MDXComponents } from 'mdx/types';
import './MDXComponents.css';

export const mdxComponents: MDXComponents = {
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};
