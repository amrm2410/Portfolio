import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="about-title">About <span>Me</span></h2>
                <p className="about-subtitle">Transforming ideas into digital reality through expert development and creative solutions</p>

                <div className="about-content">
                    <div className="about-expertise">
                        <h3 className="expertise-title">My Expertise</h3>
                        <div className="expertise-list">
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>UI/UX Design</h4>
                                    <p>End-to-end web applications with modern frameworks</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>Front End Development</h4>
                                    <p>Cross-platform mobile apps for iOS and Android</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>E-commerce Solutions and No-Code Development</h4>
                                    <p>Custom online stores and payment integrations</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>Data Analysis</h4>
                                    <p>Custom online stores and payment integrations</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>Business Analysis</h4>
                                    <p>Custom online stores and payment integrations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-profile">
                        <p className="profile-description">I'm a passionate full-stack developer with a love for creating elegant, efficient solutions to complex problems.</p>

                        <div className="about-stats-grid">
                            <div className="about-stat-item">
                                <span className="about-stat-number">3+</span>
                                <span className="about-stat-label">Years Experience</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-number">25+</span>
                                <span className="about-stat-label">Projects Delivered</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-number">15+</span>
                                <span className="about-stat-label">Technologies</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-number">98%</span>
                                <span className="about-stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;