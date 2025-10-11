import React, { useState } from 'react';
import './CrewDetails.css';
import LazyImage from '../LazyImage/LazyImage';

// Import Information Architecture
import iaImage from '../../assets/project-assets/Crew Website/IA.png';

// Import UI screens
import desktop3 from '../../assets/project-assets/Crew Website/UI/Desktop - 3.png';
import desktop42 from '../../assets/project-assets/Crew Website/UI/Desktop - 42.png';
import desktop43 from '../../assets/project-assets/Crew Website/UI/Desktop - 43.png';
import desktop44 from '../../assets/project-assets/Crew Website/UI/Desktop - 44.png';
import desktop45 from '../../assets/project-assets/Crew Website/UI/Desktop - 45.png';
import desktop46 from '../../assets/project-assets/Crew Website/UI/Desktop - 46.png';
import desktop47 from '../../assets/project-assets/Crew Website/UI/Desktop - 47.png';
import desktop48 from '../../assets/project-assets/Crew Website/UI/Desktop - 48.png';
import desktop49 from '../../assets/project-assets/Crew Website/UI/Desktop - 49.png';
import desktop50 from '../../assets/project-assets/Crew Website/UI/Desktop - 50.png';
import desktop51 from '../../assets/project-assets/Crew Website/UI/Desktop - 51.png';
import desktop52 from '../../assets/project-assets/Crew Website/UI/Desktop - 52.png';
import desktop53 from '../../assets/project-assets/Crew Website/UI/Desktop - 53.png';
import desktop54 from '../../assets/project-assets/Crew Website/UI/Desktop - 54.png';
import desktop55 from '../../assets/project-assets/Crew Website/UI/Desktop - 55.png';
import desktop56 from '../../assets/project-assets/Crew Website/UI/Desktop - 56.png';
import desktop57 from '../../assets/project-assets/Crew Website/UI/Desktop - 57.png';
import desktop58 from '../../assets/project-assets/Crew Website/UI/Desktop - 58.png';
import desktop59 from '../../assets/project-assets/Crew Website/UI/Desktop - 59.png';
import desktop60 from '../../assets/project-assets/Crew Website/UI/Desktop - 60.png';
import desktop61 from '../../assets/project-assets/Crew Website/UI/Desktop - 61.png';
import desktop62 from '../../assets/project-assets/Crew Website/UI/Desktop - 62.png';

const CrewDetails = () => {
    const [selectedScreen, setSelectedScreen] = useState(desktop3);

    const handleBackClick = () => {
        window.history.back();
    };

    const allScreens = [
        desktop3, desktop41, desktop42, desktop43, desktop44, desktop45, desktop46,
        desktop47, desktop48, desktop49, desktop50, desktop51, desktop52, desktop53,
        desktop54, desktop55, desktop56, desktop57, desktop58, desktop59, desktop60,
        desktop61, desktop62
    ];

    return (
        <div className="crew-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Crew Website</h1>
                    <p className="project-subtitle">Business Consultancy & HR Management Solutions Platform</p>
                    <div className="project-tags">
                        <span className="project-tag">Business Consultancy</span>
                        <span className="project-tag">HR Solutions</span>
                        <span className="project-tag">Corporate Website</span>
                        <span className="project-tag">UI/UX Design</span>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="container">
                    {/* 1. Project Overview */}
                    <div className="project-overview">
                        <div className="overview-content">
                            <h2 className="section-title">About <span>Crew</span></h2>
                            <p className="overview-text">
                                Crew is a leading business consultancy firm in Egypt specializing in comprehensive HR management solutions and personnel services. The company serves as a strategic partner for corporations and individuals, helping them achieve their business objectives through expert consultancy and innovative business solutions.
                            </p>
                            <p className="overview-text">
                                With a strong focus on mutual benefit, service quality, and client satisfaction, Crew offers five core services: outsourcing, consulting, government compliance services, learning and development, and recruitment. The platform is designed to help businesses navigate daily operational challenges, including social insurance, labor law compliance, and efficient government dealings.
                            </p>
                            <p className="overview-text">
                                The website serves as a comprehensive platform showcasing Crew's expertise while providing potential clients with easy access to their services and solutions, ultimately streamlining business operations and reducing overhead costs.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Corporate Website</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Business Consultancy & HR</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Lead UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platform</span>
                                <span className="stat-value">Web Application</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Target Users</span>
                                <span className="stat-value">Business Owners, HR Managers</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Key Services */}
                    <div className="content-section">
                        <h2 className="section-title">Core <span>Services</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <h3 className="feature-title">Outsourcing</h3>
                                <p className="feature-description">Comprehensive personnel outsourcing solutions to reduce operational overhead and improve business efficiency.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3 className="feature-title">Consulting</h3>
                                <p className="feature-description">Expert business consultancy services to help organizations achieve strategic goals and optimize operations.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h3 className="feature-title">Government Compliance</h3>
                                <p className="feature-description">Complete compliance services for social insurance, labor law, and government regulatory requirements.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-graduation-cap"></i>
                                </div>
                                <h3 className="feature-title">Learning & Development</h3>
                                <p className="feature-description">Professional training programs and development initiatives to enhance employee skills and performance.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="feature-title">Recruitment</h3>
                                <p className="feature-description">Efficient recruitment services to find qualified candidates faster and reduce hiring times.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. User Persona */}
                    <div className="content-section">
                        <h2 className="section-title">Target <span>Persona</span></h2>
                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-avatar">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="persona-info">
                                    <h3 className="persona-name">Samir El-Masry</h3>
                                    <p className="persona-title">Operations Manager / HR Manager</p>
                                    <p className="persona-meta">38 years • Cairo, Egypt • Medium to Large Enterprises</p>
                                </div>
                            </div>

                            <div className="persona-content">
                                <div className="persona-section">
                                    <h4 className="persona-subtitle"><i className="fas fa-bullseye"></i> Professional Goals</h4>
                                    <ul className="persona-list">
                                        <li>Streamline HR operations and reduce overhead costs</li>
                                        <li>Ensure 100% compliance with labor and social insurance laws</li>
                                        <li>Improve employee development and retention</li>
                                        <li>Reduce hiring times and find qualified candidates faster</li>
                                        <li>Establish reliable outsourcing partnerships</li>
                                    </ul>
                                </div>

                                <div className="persona-section">
                                    <h4 className="persona-subtitle"><i className="fas fa-exclamation-triangle"></i> Pain Points</h4>
                                    <ul className="persona-list pain-points">
                                        <li>Struggles with navigating complex Egyptian labor laws</li>
                                        <li>Overloaded internal HR team can't keep up with regulations and paperwork</li>
                                        <li>Recruitment is slow or delivers poor-fit candidates</li>
                                        <li>Government interactions are time-consuming and inefficient</li>
                                        <li>Needs upskilling programs but lacks training infrastructure</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Information Architecture */}
                    <div className="content-section">
                        <h2 className="section-title">Information <span>Architecture</span></h2>
                        <p className="section-description">
                            A well-structured information architecture designed to guide users efficiently through Crew's services and solutions.
                        </p>
                        <div className="ia-section">
                            <LazyImage src={iaImage} alt="Crew Website Information Architecture" className="ia-image" />
                        </div>
                    </div>

                    {/* 5. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>

                        <div className="design-system-grid">
                            {/* Typography */}
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">Tajawal font family provides excellent Arabic and English readability, perfect for corporate communications.</p>
                                <div className="typography-sample">
                                    <p className="tajawal-display">Tajawal Bold</p>
                                    <p className="tajawal-regular">Tajawal Regular</p>
                                    <p className="tajawal-light">Tajawal Light</p>
                                </div>
                            </div>

                            {/* Color Palette */}
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#003B5C'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Deep Ocean Blue</h4>
                                            <p className="color-hex-card">#003B5C</p>
                                            <p className="color-usage-card">Primary brand color, headers</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#708090'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Slate Gray</h4>
                                            <p className="color-hex-card">#708090</p>
                                            <p className="color-usage-card">Secondary elements, text</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#5F9EA0'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Steel Teal</h4>
                                            <p className="color-hex-card">#5F9EA0</p>
                                            <p className="color-usage-card">Accents, CTAs, highlights</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Website Screens */}
                    <div className="content-section">
                        <h2 className="section-title">Website <span>Screens</span></h2>
                        <p className="section-description">
                            Comprehensive website design showcasing all pages and key features of the Crew consultancy platform.
                        </p>

                        <div className="ui-screens-subsection">
                            <div className="web-screens-gallery">
                                <div className="main-web-screen">
                                    <LazyImage src={selectedScreen} alt="Selected Website View" className="main-screen-img" />
                                </div>
                                <div className="web-thumbnails">
                                    {allScreens.map((screen, index) => (
                                        <LazyImage
                                            key={index}
                                            src={screen}
                                            alt={`Website View ${index + 1}`}
                                            className={`web-thumbnail ${selectedScreen === screen ? 'active' : ''}`}
                                            onClick={() => setSelectedScreen(screen)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Project Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">45%</div>
                                <div className="impact-label">Faster Client Onboarding</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">90%</div>
                                <div className="impact-label">User Satisfaction</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">35%</div>
                                <div className="impact-label">Increase in Inquiries</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">100%</div>
                                <div className="impact-label">Compliance Accuracy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrewDetails;
