'use client';

import { smoothScroll } from '@/lib/smoothScroll';
import './Hero.css';

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bento-grid">
        {/* Row 1: Main card + Avatar card */}
        <div className="hero-main-card">
          <div className="hero-decorative">
            <div className="hero-circle hero-circle-1"></div>
            <div className="hero-circle hero-circle-2"></div>
          </div>
          <div className="hero-main-content">
            <h1 className="hero-headline">
              I turn complex<br />
              workflows into<br />
              <span className="hero-gradient-text">scalable UX</span>
            </h1>
            <p className="hero-tagline">
              4+ years specializing in B2B SaaS &amp; enterprise products &mdash;
              dashboards, approvals, data-heavy tables, and design systems.
            </p>
            <div className="cta-buttons">
              <a href="/AmrAbbas_UI_UX_CV.pdf" download="AmrAbbas_UI_UX_CV.pdf" className="btn btn-primary">
                <i className="fas fa-download"></i>
                Download CV
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                <i className="fas fa-rocket"></i>
                Start Project
              </a>
            </div>
          </div>
        </div>

        {/* Info cards beside quote */}
        <div className="bento-card hero-info-card">
          <span className="info-emoji">&#x1F4BC;</span>
          <div className="info-content">
            <span className="info-label">Currently</span>
            <span className="info-value">Product Designer @ Cedar Rose</span>
          </div>
        </div>

        <div className="bento-card hero-info-card">
          <span className="info-emoji">&#x1F30D;</span>
          <div className="info-content">
            <span className="info-label">Based in</span>
            <span className="info-value">Egypt &middot; Open to Remote</span>
          </div>
        </div>

        <div className="bento-card hero-info-card">
          <span className="info-emoji">&#x2728;</span>
          <div className="info-content">
            <span className="info-label">Experience</span>
            <span className="info-value">4+ years &middot; 25+ products</span>
          </div>
        </div>

        <div className="bento-card hero-info-card">
          <span className="info-emoji">&#x1F3AF;</span>
          <div className="info-content">
            <span className="info-label">Focus</span>
            <span className="info-value">B2B SaaS &middot; Enterprise UX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
