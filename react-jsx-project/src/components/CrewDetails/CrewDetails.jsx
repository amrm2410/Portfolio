import React, { useState } from 'react';
import './CrewDetails.css';

const CrewDetails = () => {
    // Image URLs - Information Architecture
    const iaImage = 'https://i.ibb.co/F4GdxXb4/IA.png';

    // Image URLs - UI screens
    const desktop3 = 'https://i.ibb.co/zHm7hPpG/Desktop-3.png';
    const desktop42 = 'https://i.ibb.co/wZhmzX34/Desktop-42.png';
    const desktop43 = 'https://i.ibb.co/kVM9kLwZ/Desktop-43.png';
    const desktop44 = 'https://i.ibb.co/Nd756nLD/Desktop-44.png';
    const desktop45 = 'https://i.ibb.co/Y7WbP55y/Desktop-45.png';
    const desktop46 = 'https://i.ibb.co/MxsN42rC/Desktop-46.png';
    const desktop47 = 'https://i.ibb.co/b51STJdD/Desktop-47.png';
    const desktop48 = 'https://i.ibb.co/k2VjHdbr/Desktop-48.png';
    const desktop49 = 'https://i.ibb.co/SX55SRyk/Desktop-49.png';
    const desktop50 = 'https://i.ibb.co/cKx62TYV/Desktop-50.png';
    const desktop51 = 'https://i.ibb.co/DDvxGSTD/Desktop-51.png';
    const desktop52 = 'https://i.ibb.co/PZ8hdxcB/Desktop-52.png';
    const desktop53 = 'https://i.ibb.co/DHkkSMJG/Desktop-53.png';
    const desktop54 = 'https://i.ibb.co/GQHR8n9v/Desktop-54.png';
    const desktop55 = 'https://i.ibb.co/6RN7Gd92/Desktop-55.png';
    const desktop56 = 'https://i.ibb.co/zW7CZfSy/Desktop-56.png';
    const desktop57 = 'https://i.ibb.co/8gbNJQMD/Desktop-57.png';
    const desktop58 = 'https://i.ibb.co/ymz2JzSF/Desktop-58.png';
    const desktop59 = 'https://i.ibb.co/v4TKkgQ1/Desktop-59.png';
    const desktop60 = 'https://i.ibb.co/ks2yZMXJ/Desktop-60.png';
    const desktop61 = 'https://i.ibb.co/chNtbGVp/Desktop-61.png';
    const desktop62 = 'https://i.ibb.co/3y1BH44Q/Desktop-62.png';

    const [selectedScreen, setSelectedScreen] = useState(desktop3);

    const handleBackClick = () => {
        window.history.back();
    };

    const allScreens = [
        desktop3,  desktop42, desktop43, desktop44, desktop45, desktop46,
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
                            <img src={iaImage} alt="Crew Website Information Architecture" className="ia-image" />
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

                    {/* 6. UI Screens */}
                    <div className="content-section">
                        <h2 className="section-title">UI <span>Screens</span></h2>

                        {/* Website Screens */}
                        <div className="ui-screens-subsection">
                            <h3 className="subsection-title">Web Application</h3>
                            <div className="web-screens-gallery">
                                <div className="main-web-screen">
                                    <img src={selectedScreen} alt="Selected Website View" className="main-screen-img" />
                                </div>
                                <div className="web-thumbnails">
                                    {allScreens.map((screen, index) => (
                                        <img
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
