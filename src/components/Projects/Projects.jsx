import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css';
import { PROJECTS } from '../../constants/projects';

const Projects = () => {
    const navigate = useNavigate();

    const handleViewDetails = (projectSlug) => {
        navigate(`/projects/${projectSlug}`);
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Featured <span>Projects</span></h2>
                <p className="projects-description">
                    A curated selection of my best work showcasing full-stack development expertise and innovative design solutions
                </p>

                <div className="projects-grid">
                    {PROJECTS.map(project => (
                        <div key={project.id} className="projects-card">
                            <div className="projects-card-image">
                                {project.coverImage ? (
                                    <img src={project.coverImage} alt={`${project.title} Project`} className="project-cover-image" />
                                ) : (
                                    <i className={project.icon}></i>
                                )}
                            </div>
                            <div className="projects-card-content">
                                <h3 className="projects-card-title">{project.title}</h3>
                                <p className="projects-card-description">{project.description}</p>
                                <div className="projects-card-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="projects-card-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    {project.comingSoon ? (
                                        <div className="coming-soon-badge">Coming Soon</div>
                                    ) : (
                                        <>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="projects-live-link"
                                                >
                                                    <i className="fas fa-external-link-alt"></i>
                                                    View Live Site
                                                </a>
                                            )}
                                            {project.projectLink && (
                                                <button
                                                    className="projects-link-btn"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className="fas fa-link"></i>
                                                    Project Link
                                                </button>
                                            )}
                                            {project.hasDetails && (
                                                <button
                                                    onClick={() => handleViewDetails(project.slug)}
                                                    className="projects-details-btn"
                                                >
                                                    <i className="fas fa-info-circle"></i>
                                                    Project Details
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
