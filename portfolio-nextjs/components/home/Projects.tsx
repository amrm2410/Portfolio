'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/constants/projects';
import './Projects.css';

const GRADIENTS = [
  'linear-gradient(135deg, #1e3a5f, #2d5a87)',
  'linear-gradient(135deg, #0d4a3e, #1a7a65)',
  'linear-gradient(135deg, #3d1f56, #6b3fa0)',
  'linear-gradient(135deg, #4a1a1a, #8b3a3a)',
  'linear-gradient(135deg, #1a3a4a, #2d6b87)',
  'linear-gradient(135deg, #3a1a4a, #6b2d87)',
  'linear-gradient(135deg, #1a4a2e, #2d875a)',
];

const getSizeClass = (index: number): string => {
  const pattern = ['lg', 'md', 'sm', 'md', 'sm', 'sm', 'lg'];
  return pattern[index % pattern.length];
};

const Projects = () => {
  return (
    <section id="projects" className="projects bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">Selected Work</h2>
          <span className="bento-section-count">{PROJECTS.length} projects</span>
        </div>

        <div className="projects-bento-grid">
          {PROJECTS.map((project, index) => {
            const sizeClass = getSizeClass(index);
            const gradient = GRADIENTS[index % GRADIENTS.length];
            const className = `project-bento-card project-size-${sizeClass}`;

            const content = (
              <>
                {/* Background image */}
                {project.coverImage && (
                  <div className="project-bento-bg">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="project-bento-image"
                      unoptimized
                    />
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="project-bento-overlay"></div>
                {/* Content */}
                <div className="project-bento-content">
                  <div className="project-bento-top">
                    <span className="project-category-pill">{project.tags[0]}</span>
                    {project.comingSoon && <span className="project-coming-soon-pill">Coming Soon</span>}
                  </div>
                  <div className="project-bento-bottom">
                    <h3 className="project-bento-title">{project.title}</h3>
                    <div className="project-bento-tags">
                      {project.tags.slice(1, 3).map((tag, i) => (
                        <span key={i} className="project-bento-tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-bento-arrow">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </>
            );

            if (project.hasDetails) {
              return (
                <Link
                  key={project.id}
                  href={`/case-studies/${project.slug}`}
                  className={className}
                  style={{ background: gradient }}
                >
                  {content}
                </Link>
              );
            }

            if (project.link) {
              return (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{ background: gradient }}
                >
                  {content}
                </a>
              );
            }

            if (project.projectLink) {
              return (
                <a
                  key={project.id}
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={{ background: gradient }}
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={project.id}
                className={className}
                style={{ background: gradient }}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
