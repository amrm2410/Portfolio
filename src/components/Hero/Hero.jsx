import React from 'react';
import './Hero.css';
import { smoothScroll } from '../../utils/smoothScroll';

const Hero = () => {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        smoothScroll(targetId);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content fade-in">
                <h1 className="hero-title">Amr Abbas</h1>
                <p className="hero-subtitle">Create, Innovate, Inspire</p>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <span className="hero-stat-number">3+</span>
                        <span className="hero-stat-label">Years Experience</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-number">20+</span>
                        <span className="hero-stat-label">Projects Delivered</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-number">93%</span>
                        <span className="hero-stat-label">Client Satisfaction</span>
                    </div>
                </div>

                <div className="hero-description">
                    <p>
                        Highly driven and detail-oriented UI/UX Designer and Business Analyst with over 3 years of professional experience in crafting user-focused designs and streamlining business operations. Adept at translating complex requirements into innovative, intuitive solutions that enhance user experience and achieve organizational goals. Skilled in leading cross-functional projects, mentoring teams, and delivering measurable outcomes. Passionate about integrating design thinking, business insights, and cutting-edge technology to drive impactful results.
                    </p>
                </div>

                <div className="cta-buttons">
                    <a href="#projects" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#projects')}>
                        <i className="fas fa-eye"></i>
                        View My Portfolio
                    </a>
                    <a href="#contact" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                        <i className="fas fa-rocket"></i>
                        Kick Off Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;