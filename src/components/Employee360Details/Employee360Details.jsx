import React from 'react';
import './Employee360Details.css';

const Employee360Details = () => {
    // Image URLs - Design system components
    const calendar = 'https://i.ibb.co/pr3LMGJX/Calendar.png';
    const frame488 = 'https://i.ibb.co/fVsSrXcp/Frame-488.png';

    // Image URLs - Mobile UI screens
    const onboarding = 'https://i.ibb.co/MkDrc4Nr/Onboarding.png';
    const onboarding1 = 'https://i.ibb.co/Kx0qBQx6/Onboarding-1.png';
    const mobile1 = 'https://i.ibb.co/G4k58zKK/i-Phone-13-mini-1.png';
    const mobile5 = 'https://i.ibb.co/vFYCLv3/i-Phone-13-mini-5.png';
    const mobile6 = 'https://i.ibb.co/TDfr0dst/i-Phone-13-mini-6.png';
    const mobile7 = 'https://i.ibb.co/SX0D3kdq/i-Phone-13-mini-7.png';
    const mobile8 = 'https://i.ibb.co/Qv45khSR/i-Phone-13-mini-8.png';
    const mobile9 = 'https://i.ibb.co/35fSwy1W/i-Phone-13-mini-9.png';
    const mobile10 = 'https://i.ibb.co/rf2QHN3M/i-Phone-13-mini-10.png';
    const mobile11 = 'https://i.ibb.co/Kx5fdrTt/i-Phone-13-mini-11.png';
    const mobile12 = 'https://i.ibb.co/FLJTCJxY/i-Phone-13-mini-12.png';
    const mobile13 = 'https://i.ibb.co/KjwTDXgK/i-Phone-13-mini-13.png';

    // Image URLs - Dashboard screens
    const dashboard1 = 'https://i.ibb.co/s9jJ4YzR/Dashboard-Screen.png';
    const dashboard2 = 'https://i.ibb.co/svHqjT6G/Dashboard-Screen-1.png';
    const dashboard3 = 'https://i.ibb.co/7JmC8LCh/Dashboard-Screen-2.png';
    const dashboard4 = 'https://i.ibb.co/svHqjT6G/Dashboard-Screen-1.png';
    const dashboard5 = 'https://i.ibb.co/x8qwGRK3/Dashboard-Screen-5.png';

    const [selectedDashboard, setSelectedDashboard] = React.useState(dashboard1);

    const handleBackClick = () => {
        window.history.back();
    };

    const dashboardScreens = [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5];

    return (
        <div className="employee360-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Employee 360</h1>
                    <p className="project-subtitle">Comprehensive Employee Management Platform</p>
                    <div className="project-tags">
                        <span className="project-tag">HR Management</span>
                        <span className="project-tag">Analytics</span>
                        <span className="project-tag">Performance Tracking</span>
                        <span className="project-tag">Mobile & Web</span>
                        <span className="project-tag">UI/UX Design</span>
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
                                Employee 360 is a comprehensive human resources management platform designed to streamline employee management, performance tracking, and workforce analytics. The platform provides a complete 360-degree view of employee engagement, productivity, and organizational development.
                            </p>
                            <p className="overview-text">
                                Built with modern HR best practices in mind, Employee 360 offers powerful tools for attendance tracking, performance reviews, goal management, and real-time analytics. The dual-interface system serves both employees through an intuitive mobile application and HR administrators through a robust web dashboard.
                            </p>
                            <p className="overview-text">
                                The solution addresses critical HR challenges by providing transparent performance metrics, efficient workflow management, data-driven insights, and enhanced communication between employees and management teams.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">HR Management</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platforms</span>
                                <span className="stat-value">Mobile & Dashboard</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value"> UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">HR Management</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Target Users</span>
                                <span className="stat-value">Employees, HR</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Key Feature</span>
                                <span className="stat-value">Employees Tracking</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h3 className="feature-title">Attendance Management</h3>
                                <p className="feature-description">Smart attendance tracking with check-in/out, leave requests, and real-time attendance analytics for better workforce management.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="feature-title">Performance Analytics</h3>
                                <p className="feature-description">Comprehensive performance metrics, KPI tracking, and data-driven insights for employee evaluation and development.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-tasks"></i>
                                </div>
                                <h3 className="feature-title">Goal Management</h3>
                                <p className="feature-description">Set, track, and achieve individual and team goals with progress monitoring and milestone celebrations.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-user-check"></i>
                                </div>
                                <h3 className="feature-title">Employee Profiles</h3>
                                <p className="feature-description">Detailed employee profiles with skills, certifications, work history, and performance records all in one place.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <h3 className="feature-title">Leave Management</h3>
                                <p className="feature-description">Simplified leave requests, approvals, and tracking with automated balance calculations and calendar integration.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <h3 className="feature-title">Real-time Notifications</h3>
                                <p className="feature-description">Instant notifications for important updates, approvals, deadlines, and team communications to keep everyone informed.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A cohesive design system was developed to ensure consistency across mobile and web platforms, enhancing user experience and brand identity.
                        </p>

                        {/* Typography & Color Palette */}
                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">Employee 360 uses a modern sans-serif typeface for clarity and readability across all platform interfaces.</p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Display</span>
                                        <span className="weight-sample display">Inter Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Heading</span>
                                        <span className="weight-sample heading">Inter SemiBold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Body</span>
                                        <span className="weight-sample body">Inter Regular</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Caption</span>
                                        <span className="weight-sample caption">Inter Medium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#00BCD4'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Primary Cyan</h4>
                                            <p className="color-hex-card">#00BCD4</p>
                                            <p className="color-usage-card">Primary brand color, CTAs, highlights</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#6DA5B0'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Medium Teal</h4>
                                            <p className="color-hex-card">#6DA5B0</p>
                                            <p className="color-usage-card">Accents, secondary actions</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#A8CFD8'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Light Blue</h4>
                                            <p className="color-hex-card">#A8CFD8</p>
                                            <p className="color-usage-card">Backgrounds, subtle accents</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#C4DCE1'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Pale Blue</h4>
                                            <p className="color-hex-card">#C4DCE1</p>
                                            <p className="color-usage-card">Cards, panels, light backgrounds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Components */}
                        <div className="design-subsection">
                            <h3 className="subsection-title">Components</h3>
                            <div className="components-showcase">
                                <div className="component-item">
                                    <div className="component-image">
                                        <img src={calendar} alt="Calendar Component" />
                                    </div>
                                    <h3 className="component-title">Calendar Component</h3>
                                    <p className="component-description">Interactive calendar for leave management, attendance tracking, and event scheduling with intuitive date selection.</p>
                                </div>

                                <div className="component-item">
                                    <div className="component-image">
                                        <img src={frame488} alt="UI Components" />
                                    </div>
                                    <h3 className="component-title">UI Component Library</h3>
                                    <p className="component-description">Comprehensive set of reusable components including cards, buttons, forms, and data visualization elements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Mobile Application (Normal Users) */}
                    <div className="content-section">
                        <h2 className="section-title">Mobile <span>Application</span></h2>
                        <p className="section-description">
                            The mobile app provides employees with easy access to their profiles, attendance, leave requests, and performance tracking on-the-go.
                        </p>
                        <div className="mobile-screens-grid">
                            <img src={onboarding} alt="Mobile Onboarding" className="mobile-img" />
                            <img src={onboarding1} alt="Mobile Onboarding Screen" className="mobile-img" />
                            <img src={mobile1} alt="Mobile Screen 1" className="mobile-img" />
                            <img src={mobile5} alt="Mobile Screen 5" className="mobile-img" />
                            <img src={mobile6} alt="Mobile Screen 6" className="mobile-img" />
                            <img src={mobile7} alt="Mobile Screen 7" className="mobile-img" />
                            <img src={mobile8} alt="Mobile Screen 8" className="mobile-img" />
                            <img src={mobile9} alt="Mobile Screen 9" className="mobile-img" />
                            <img src={mobile10} alt="Mobile Screen 10" className="mobile-img" />
                            <img src={mobile11} alt="Mobile Screen 11" className="mobile-img" />
                            <img src={mobile12} alt="Mobile Screen 12" className="mobile-img" />
                            <img src={mobile13} alt="Mobile Screen 13" className="mobile-img" />
                        </div>
                    </div>

                    {/* 5. Admin Dashboard */}
                    <div className="content-section">
                        <h2 className="section-title">Admin <span>Dashboard</span></h2>
                        <p className="section-description">
                            The web dashboard empowers HR teams and managers with comprehensive tools for employee management, analytics, and organizational oversight.
                        </p>

                        <div className="ui-screens-subsection">
                            <div className="web-screens-gallery">
                                <div className="main-web-screen">
                                    <img src={selectedDashboard} alt="Selected Dashboard View" className="main-screen-img" />
                                </div>
                                <div className="web-thumbnails">
                                    {dashboardScreens.map((screen, index) => (
                                        <img
                                            key={index}
                                            src={screen}
                                            alt={`Dashboard View ${index + 1}`}
                                            className={`web-thumbnail ${selectedDashboard === screen ? 'active' : ''}`}
                                            onClick={() => setSelectedDashboard(screen)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">40%</div>
                                <div className="impact-label">Faster HR Processing</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">85%</div>
                                <div className="impact-label">Employee Engagement</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">60%</div>
                                <div className="impact-label">Time Saved</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">95%</div>
                                <div className="impact-label">User Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee360Details;
