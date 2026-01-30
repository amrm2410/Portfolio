import React from 'react';
import './VenturaTradingDetails.css';
import venturaUI from '../../assets/project-assets/Ventura Trading/UI/1920w light.png';

const VenturaTradingDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="ventura-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Ventura Trading</h1>
                    <p className="project-subtitle">Modern Trading Platform Landing Page Design</p>
                    <div className="project-tags">
                        <span className="project-tag">Landing Page</span>
                        <span className="project-tag">Trading Platform</span>
                        <span className="project-tag">UI/UX Design</span>
                        <span className="project-tag">Web Design</span>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="container">
                    {/* 1. Project Overview and Details */}
                    <div className="project-overview">
                        <div className="overview-content">
                            <h2 className="section-title">Project <span>Overview</span></h2>
                            <p className="overview-text">
                                Ventura Trading is a sleek and modern landing page designed for a trading platform company. The design focuses on creating a strong first impression that communicates trust, professionalism, and cutting-edge technology in the financial sector.
                            </p>
                            <p className="overview-text">
                                The landing page showcases the platform's key features and benefits through a clean, visually appealing layout that guides visitors through the value proposition. With strategic use of typography, color, and whitespace, the design effectively communicates complex trading concepts in an accessible way.
                            </p>
                            <p className="overview-text">
                                Built with conversion optimization in mind, the landing page incorporates clear call-to-action elements, trust indicators, and engaging visuals that encourage visitor engagement and sign-ups.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Landing Page</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Duration</span>
                                <span className="stat-value">2 Weeks</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Team Size</span>
                                <span className="stat-value">1 Member</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Web Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Screens</span>
                                <span className="stat-value">1 Screen</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Trading</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Design Challenges */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Challenges</span></h2>
                        <div className="challenges-grid">
                            <div className="challenge-card">
                                <h3 className="challenge-title">Building Trust & Credibility</h3>
                                <p className="challenge-description">
                                    Creating a design that instantly establishes trust and credibility in the competitive financial services industry where first impressions are crucial.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Simplifying Complex Information</h3>
                                <p className="challenge-description">
                                    Presenting complex trading features and financial concepts in a way that's accessible to both novice and experienced traders without oversimplifying.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Conversion-Focused Design</h3>
                                <p className="challenge-description">
                                    Balancing aesthetic appeal with conversion optimization, ensuring the landing page effectively guides visitors toward taking action.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Design Highlights */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Highlights</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-paint-brush"></i>
                                </div>
                                <h3 className="feature-title">Modern Aesthetics</h3>
                                <p className="feature-description">Clean, contemporary design with a professional color palette that reflects the sophistication of the trading industry.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <h3 className="feature-title">Visual Hierarchy</h3>
                                <p className="feature-description">Strategic layout and typography that guides visitors through key information and call-to-action elements effectively.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h3 className="feature-title">Clear CTAs</h3>
                                <p className="feature-description">Prominent and strategically placed call-to-action buttons designed to maximize conversion rates and user engagement.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-columns"></i>
                                </div>
                                <h3 className="feature-title">Organized Sections</h3>
                                <p className="feature-description">Well-structured content sections that present platform features and benefits in a logical, easy-to-digest format.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="feature-title">Trust Elements</h3>
                                <p className="feature-description">Incorporated trust indicators and security badges to establish credibility and build user confidence.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-desktop"></i>
                                </div>
                                <h3 className="feature-title">Desktop Optimized</h3>
                                <p className="feature-description">Designed with desktop users in mind, taking advantage of wider screens to showcase platform features effectively.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A professional design system crafted for the trading industry, featuring clean typography and a color palette that conveys trust and professionalism.
                        </p>

                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">
                                    Clean, modern typography that ensures readability and establishes visual hierarchy throughout the landing page.
                                </p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Display</span>
                                        <span className="weight-sample display">Segoe UI Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Heading</span>
                                        <span className="weight-sample heading">Segoe UI SemiBold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Body</span>
                                        <span className="weight-sample body">Segoe UI Regular</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Caption</span>
                                        <span className="weight-sample caption">Segoe UI Light</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <p className="design-system-text">
                                    A professional color scheme that balances visual appeal with functionality, using colors that convey trust in the financial sector.
                                </p>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#242E42'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Dark Navy</h4>
                                            <p className="color-hex-card">#242E42</p>
                                            <p className="color-usage-card">Primary background, headers, dark elements</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#0D4DA5'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Primary Blue</h4>
                                            <p className="color-hex-card">#0D4DA5</p>
                                            <p className="color-usage-card">Primary actions, buttons, links, highlights</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#E2E8F0'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Light Gray</h4>
                                            <p className="color-hex-card">#E2E8F0</p>
                                            <p className="color-usage-card">Backgrounds, borders, secondary elements</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Final Design */}
                    <div className="content-section">
                        <h2 className="section-title">Final <span>Design</span></h2>
                        <div className="ui-screens-grid">
                            <div className="ui-screen-card">
                                <div className="ui-screen-content">
                                    <h3 className="ui-screen-title">Landing Page</h3>
                                    <p className="ui-screen-description">A modern, professional landing page designed to showcase the trading platform's features and convert visitors into users.</p>
                                    <div className="ui-screen-features">
                                        <span className="ui-feature-tag">Hero Section</span>
                                        <span className="ui-feature-tag">Features Overview</span>
                                        <span className="ui-feature-tag">Trust Indicators</span>
                                        <span className="ui-feature-tag">Call-to-Action</span>
                                    </div>
                                </div>
                                <div className="ui-screen-image">
                                    <img src={venturaUI} alt="Ventura Trading Landing Page" className="screen-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenturaTradingDetails;
