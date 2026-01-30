import React from 'react';
import './RiskPortfolioDetails.css';

const RiskPortfolioDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="risk-portfolio-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Risk Portfolio Overview Redesign</h1>
                    <p className="project-subtitle">Comprehensive Risk Assessment Dashboard for Cedar Rose</p>
                    <div className="project-tags">
                        <span className="project-tag">Risk Management</span>
                        <span className="project-tag">Dashboard Redesign</span>
                        <span className="project-tag">Data Visualization</span>
                        <span className="project-tag">UX Case Study</span>
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
                                This project focused on redesigning the Portfolio Overview dashboard for Cedar Rose, a leading business intelligence and risk management company based in Cyprus. The goal was to create a dashboard that feels clear, simple, and helpful for everyday use.
                            </p>
                            <p className="overview-text">
                                I organized the layout based on how risk managers, analysts, and compliance officers normally work. KPI cards provide a quick overview at a glance, while the Risk Trend chart and Sector Exposure help users understand the portfolio's overall direction.
                            </p>
                            <p className="overview-text">
                                The "Top Risers" section highlights companies that may need attention soon, and a geographic map shows global risk visually. The Company Table brings all key information together so users don't have to click around.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Dashboard Redesign</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Client</span>
                                <span className="stat-value">Cedar Rose</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Team Size</span>
                                <span className="stat-value">1 Member</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Senior UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Location</span>
                                <span className="stat-value">Cyprus - Remote</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Risk Management & BI</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. UX Problems Identified */}
                    <div className="content-section">
                        <h2 className="section-title">UX Problems <span>Identified</span></h2>
                        <p className="section-description">
                            Based on client feedback, I identified three main UX issues that needed to be addressed in the redesign.
                        </p>
                        <div className="challenges-grid">
                            <div className="challenge-card">
                                <h3 className="challenge-title">Risk Trend Visibility</h3>
                                <p className="challenge-description">
                                    Hard to notice which companies are becoming riskier. There was no simple way to see changes in risk over time. Managers needed trend visuals or alerts showing when a company is getting worse.
                                </p>
                                <span className="challenge-user">— Risk Manager</span>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Confusing Compliance Alerts</h3>
                                <p className="challenge-description">
                                    Sanctions, regulatory issues, and media alerts looked almost the same. There was no clear color system or grouping, so important alerts could be overlooked easily.
                                </p>
                                <span className="challenge-user">— Compliance Officer</span>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Excessive Navigation</h3>
                                <p className="challenge-description">
                                    Key insights required too much navigation. Risk score, exposure, alerts, and company performance were spread across different screens. Analysts needed most daily information in one place.
                                </p>
                                <span className="challenge-user">— Analyst</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Competitor Analysis */}
                    <div className="content-section">
                        <h2 className="section-title">Competitor <span>Analysis</span></h2>
                        <p className="section-description">
                            I analyzed leading risk management platforms to identify best practices and apply them to the redesign.
                        </p>
                        <div className="competitor-table-container">
                            <table className="competitor-table">
                                <thead>
                                    <tr>
                                        <th>Competitor</th>
                                        <th>What They Do Well</th>
                                        <th>What I Applied</th>
                                        <th>Why It Matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="competitor-name-cell">Moody's Analytics</td>
                                        <td>Risk trends, heatmaps, industry comparison</td>
                                        <td className="applied-cell">Risk Trend chart, Geographic Map, weekly change</td>
                                        <td>Helps users spot early risk shifts</td>
                                    </tr>
                                    <tr>
                                        <td className="competitor-name-cell">Dun & Bradstreet (D&B)</td>
                                        <td>Clear alerts, categories, workflow</td>
                                        <td className="applied-cell">Alert Center with tabs, severity colors, assign button</td>
                                        <td>Makes compliance easier and faster</td>
                                    </tr>
                                    <tr>
                                        <td className="competitor-name-cell">Refinitiv World-Check</td>
                                        <td>Strong sanctions + regulatory screening</td>
                                        <td className="applied-cell">Severity badges, alert filters, compliance KPIs</td>
                                        <td>Improves visibility of critical alerts</td>
                                    </tr>
                                    <tr>
                                        <td className="competitor-name-cell">S&P Global</td>
                                        <td>Sector exposure, risers/decliners list</td>
                                        <td className="applied-cell">Sector Pie Chart, Top Risers panel</td>
                                        <td>Gives portfolio insights quickly</td>
                                    </tr>
                                    <tr>
                                        <td className="competitor-name-cell">LexisNexis</td>
                                        <td>Simple entity profiles, workflow tools</td>
                                        <td className="applied-cell">Clean Company Details modal, alert badges</td>
                                        <td>Helps analysts view info in one click</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 4. Design Decisions */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Decisions</span></h2>
                        <p className="section-description">
                            My goal was to make the dashboard easy to read and quick to understand.
                        </p>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-th-large"></i>
                                </div>
                                <h3 className="feature-title">KPI Cards First</h3>
                                <p className="feature-description">Placed at the very top because users always look for the "big picture" first. Provides instant portfolio overview.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="feature-title">Risk Trend Chart</h3>
                                <p className="feature-description">Shows how the portfolio is behaving over time, helping users spot early risk shifts and patterns.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <h3 className="feature-title">Sector Exposure</h3>
                                <p className="feature-description">Visual breakdown of portfolio by sector, giving quick portfolio insights and diversification view.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-arrow-trend-up"></i>
                                </div>
                                <h3 className="feature-title">Top Risers Panel</h3>
                                <p className="feature-description">Helps users catch problems early by highlighting companies with increasing risk scores.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-globe"></i>
                                </div>
                                <h3 className="feature-title">Geographic Map</h3>
                                <p className="feature-description">Visualizes regional risk distribution, important for global portfolios and geographic exposure analysis.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-table"></i>
                                </div>
                                <h3 className="feature-title">Companies Table</h3>
                                <p className="feature-description">Brings all important info (risk score, alerts, sector, exposure, trend) into one view, eliminating navigation waste.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <h3 className="feature-title">Alert Center</h3>
                                <p className="feature-description">Inspired by D&B and Refinitiv with filters, severity colors, and assign options for compliance officers.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                                <h3 className="feature-title">Alerts Distribution</h3>
                                <p className="feature-description">Visual representation of alert types and severities, helping users understand the alert landscape quickly.</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A professional design system crafted for enterprise risk management, emphasizing clarity, accessibility, and data-driven decision making.
                        </p>

                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">
                                    Clean, professional typography optimized for data-heavy interfaces and extended reading sessions.
                                </p>
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
                                        <span className="weight-label">Data</span>
                                        <span className="weight-sample caption">Inter Medium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <p className="design-system-text">
                                    A sophisticated color scheme with clear visual indicators for risk levels and alert severities.
                                </p>
                                <div className="color-cards-grid">
                                    <div className="color-card primary-color">
                                        <div className="color-preview-large" style={{background: '#272C68'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Primary</h4>
                                            <p className="color-hex-card">#272C68</p>
                                            <p className="color-usage-card">Primary brand color, headers, navigation</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#376046'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Success</h4>
                                            <p className="color-hex-card">#376046</p>
                                            <p className="color-usage-card">Low risk, positive indicators, success states</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#B81D1D'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Error</h4>
                                            <p className="color-hex-card">#B81D1D</p>
                                            <p className="color-usage-card">High risk, critical alerts, errors</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#F59F0A'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Moderate</h4>
                                            <p className="color-hex-card">#F59F0A</p>
                                            <p className="color-usage-card">Medium risk, warnings, attention needed</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#9234EA'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">System-1</h4>
                                            <p className="color-hex-card">#9234EA</p>
                                            <p className="color-usage-card">System indicators, special categories</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#3C83F6'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">System-2</h4>
                                            <p className="color-hex-card">#3C83F6</p>
                                            <p className="color-usage-card">Information, links, secondary actions</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#F06C0E'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">System-3</h4>
                                            <p className="color-hex-card">#F06C0E</p>
                                            <p className="color-usage-card">Highlights, notifications, accents</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Interactive Prototype */}
                    <div className="content-section">
                        <h2 className="section-title">Interactive <span>Prototype</span></h2>
                        <p className="section-description">
                            Explore the live interactive prototype to experience the dashboard's functionality and user flow.
                        </p>
                        <div className="prototype-container">
                            <iframe
                                className="figma-prototype"
                                src="https://embed.figma.com/proto/MHYFAdwfogsoPmkRjdMUaF/Cedar-Rose?page-id=0%3A1&node-id=5-666&viewport=898%2C780%2C0.55&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A666&embed-host=share"
                                allowFullScreen
                                title="Risk Portfolio Overview Prototype"
                            ></iframe>
                        </div>
                    </div>

                    {/* 7. Reflection & Metrics */}
                    <div className="content-section">
                        <h2 className="section-title">Reflection & <span>Metrics</span></h2>
                        <p className="section-description">
                            After launch, I would track these key metrics to measure the success of the redesign.
                        </p>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number"><i className="fas fa-bell-slash"></i></div>
                                <div className="impact-label">Fewer Missed Alerts</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number"><i className="fas fa-clock"></i></div>
                                <div className="impact-label">Faster Reaction Time</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number"><i className="fas fa-filter"></i></div>
                                <div className="impact-label">Higher Filter Engagement</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number"><i className="fas fa-eye"></i></div>
                                <div className="impact-label">Improved Risk Visibility</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskPortfolioDetails;
