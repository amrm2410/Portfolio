import React from 'react';
import './GatesAdminRequestDetails.css';
import LazyImage from '../LazyImage/LazyImage';
import dashboardImg1 from '../../assets/project-assets/Gates Admin Request/dashboard/Screenshot 2025-10-04 033331.png';
import dashboardImg2 from '../../assets/project-assets/Gates Admin Request/dashboard/Screenshot 2025-10-04 033359.png';
import dashboardImg3 from '../../assets/project-assets/Gates Admin Request/dashboard/Screenshot 2025-10-04 033419.png';
import dashboardImg4 from '../../assets/project-assets/Gates Admin Request/dashboard/Screenshot 2025-10-04 033431.png';
import dashboardImg5 from '../../assets/project-assets/Gates Admin Request/dashboard/Screenshot 2025-10-04 033442.png';
import uiImg1 from '../../assets/project-assets/Gates Admin Request/UI/Screenshot 2025-10-04 032738.png';
import uiImg2 from '../../assets/project-assets/Gates Admin Request/UI/Screenshot 2025-10-04 032802.png';
import uiImg3 from '../../assets/project-assets/Gates Admin Request/UI/Screenshot 2025-10-04 032820.png';

const GatesAdminRequestDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="gates-admin-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Gates Admin Request</h1>
                    <p className="project-subtitle">Stationary Request Solution with Inventory Tracking & Power BI Analytics</p>
                    <div className="project-tags">
                        <span className="project-tag">Request Management</span>
                        <span className="project-tag">Inventory Tracking</span>
                        <span className="project-tag">Power BI Dashboard</span>
                        <span className="project-tag">Admin Panel</span>
                        <span className="project-tag">Analytics</span>
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
                                Gates Admin Request is a comprehensive stationary request and inventory management solution designed to streamline the process of tracking, monitoring, and fulfilling employee stationary requests within the organization.
                            </p>
                            <p className="overview-text">
                                The system features a powerful admin panel for request management combined with advanced Power BI dashboards that provide deep insights into request patterns, inventory levels, and resource allocation. This dual-interface approach ensures both operational efficiency and strategic decision-making capabilities.
                            </p>
                            <p className="overview-text">
                                By digitizing the stationary request process, the solution eliminates manual paperwork, reduces fulfillment time, provides real-time stock visibility, and generates actionable insights that help optimize inventory management and budget planning.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Enterprise Solution</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Corporate Management</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platform</span>
                                <span className="stat-value">Web Application</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Key Features</span>
                                <span className="stat-value">Admin Panel & Power BI</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Focus Area</span>
                                <span className="stat-value">Request & Inventory Management</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. The Challenge */}
                    <div className="content-section">
                        <h2 className="section-title">The <span>Challenge</span></h2>
                        <div className="challenge-overview">
                            <p className="challenge-intro">
                                The organization faced significant challenges in managing stationary requests and inventory tracking through traditional manual processes:
                            </p>
                            <div className="challenges-grid">
                                <div className="challenge-card">
                                    <div className="challenge-number">01</div>
                                    <h3 className="challenge-title">Manual Request Processing</h3>
                                    <p className="challenge-description">
                                        Employee stationary requests were submitted via paper forms or emails, leading to delays, lost requests, and difficulty in tracking request status and fulfillment.
                                    </p>
                                </div>
                                <div className="challenge-card">
                                    <div className="challenge-number">02</div>
                                    <h3 className="challenge-title">Inventory Visibility Gap</h3>
                                    <p className="challenge-description">
                                        Lack of real-time inventory tracking resulted in stock-outs, over-ordering, and inability to forecast stationary needs accurately based on historical data.
                                    </p>
                                </div>
                                <div className="challenge-card">
                                    <div className="challenge-number">03</div>
                                    <h3 className="challenge-title">Limited Analytics & Insights</h3>
                                    <p className="challenge-description">
                                        No centralized reporting or analytics capabilities made it impossible to identify spending patterns, optimize inventory levels, or make data-driven decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Solution & Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Solution & <span>Key Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-clipboard-list"></i>
                                </div>
                                <h3 className="feature-title">Request Management System</h3>
                                <p className="feature-description">Streamlined digital request submission and approval workflow with status tracking, automated notifications, and request history.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-boxes"></i>
                                </div>
                                <h3 className="feature-title">Inventory Tracking</h3>
                                <p className="feature-description">Real-time stock level monitoring, automated low-stock alerts, and comprehensive inventory management dashboard.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-bar"></i>
                                </div>
                                <h3 className="feature-title">Power BI Analytics Dashboard</h3>
                                <p className="feature-description">Interactive visualizations showing request trends, spending patterns, department-wise consumption, and predictive insights.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-user-shield"></i>
                                </div>
                                <h3 className="feature-title">Admin Control Panel</h3>
                                <p className="feature-description">Centralized admin interface for managing requests, updating inventory, configuring approval workflows, and user management.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bell"></i>
                                </div>
                                <h3 className="feature-title">Automated Notifications</h3>
                                <p className="feature-description">Email and in-app notifications for request updates, approvals, low stock alerts, and fulfillment confirmations.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-file-export"></i>
                                </div>
                                <h3 className="feature-title">Reporting & Export</h3>
                                <p className="feature-description">Customizable reports with export capabilities to Excel, PDF, and automated scheduled report delivery to stakeholders.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Admin Panel UI */}
                    <div className="content-section">
                        <h2 className="section-title">Admin Panel <span>Interface</span></h2>
                        <p className="section-description">
                            The admin panel provides a comprehensive interface for managing all aspects of stationary requests and inventory. Designed for efficiency and ease of use, it enables administrators to process requests quickly, monitor inventory levels, and maintain full control over the system.
                        </p>
                        <div className="ui-showcase">
                            <div className="ui-image-large">
                                <LazyImage src={uiImg1} alt="Admin Panel Dashboard" />
                                <p className="image-caption">Main Dashboard - Request Overview & Quick Stats</p>
                            </div>
                            <div className="ui-images-grid">
                                <div className="ui-image">
                                    <LazyImage src={uiImg2} alt="Request Management Interface" />
                                    <p className="image-caption">Request Management</p>
                                </div>
                                <div className="ui-image">
                                    <LazyImage src={uiImg3} alt="Inventory Tracking" />
                                    <p className="image-caption">Inventory Tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Power BI Dashboard */}
                    <div className="content-section">
                        <h2 className="section-title">Power BI <span>Analytics Dashboard</span></h2>
                        <p className="section-description">
                            Advanced Power BI dashboards transform raw data into actionable insights. The analytics suite provides comprehensive views of request patterns, spending trends, inventory turnover, and predictive analytics to support strategic decision-making.
                        </p>
                        <div className="dashboard-showcase">
                            {[dashboardImg1, dashboardImg2, dashboardImg3, dashboardImg4, dashboardImg5].map((img, index) => (
                                <div key={index} className="dashboard-image">
                                    <LazyImage src={img} alt={`Power BI Dashboard ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 6. Impact & Results */}
                    <div className="content-section">
                        <h2 className="section-title">Impact & <span>Results</span></h2>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h4>Reduced Processing Time</h4>
                                <p>Request fulfillment time decreased significantly with automated workflows and digital tracking</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h4>Enhanced Visibility</h4>
                                <p>Real-time inventory tracking and analytics provide complete visibility into stock levels and usage patterns</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <h4>Cost Optimization</h4>
                                <p>Data-driven insights enable better budget planning and reduce unnecessary inventory costs</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h4>Improved Employee Experience</h4>
                                <p>Simplified request process with transparent tracking enhances employee satisfaction</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-database"></i>
                                </div>
                                <h4>Centralized Data Management</h4>
                                <p>All request and inventory data stored in one place for easy access and analysis</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h4>Strategic Insights</h4>
                                <p>Power BI analytics reveal trends and patterns that support informed decision-making</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GatesAdminRequestDetails;
