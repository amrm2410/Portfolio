import React from 'react';
import './ByetDetails.css';
import LazyImage from '../LazyImage/LazyImage';

// Import cover image
import coverImage from '../../assets/project-assets/Byet/Cover.png';

// Import design system components from Byet folder
import component9 from '../../assets/project-assets/Byet/Component 9.png';
import group1 from '../../assets/project-assets/Byet/Group 1.png';
import frame69 from '../../assets/project-assets/Byet/Frame 69.png';
import frame76 from '../../assets/project-assets/Byet/Frame 76.png';
import frame77 from '../../assets/project-assets/Byet/Frame 77.png';
import frame78 from '../../assets/project-assets/Byet/Frame 78.png';
import frame79 from '../../assets/project-assets/Byet/Frame 79.png';

// Import Web UI screens
import webDesktop1 from '../../assets/project-assets/Byet/UI/Web/Desktop - 1.png';
import webDesktop2 from '../../assets/project-assets/Byet/UI/Web/Desktop - 2.png';
import webDesktop3 from '../../assets/project-assets/Byet/UI/Web/Desktop - 3.png';
import webDesktop4 from '../../assets/project-assets/Byet/UI/Web/Desktop - 4.png';
import webDesktop5 from '../../assets/project-assets/Byet/UI/Web/Desktop - 5.png';
import webDesktop6 from '../../assets/project-assets/Byet/UI/Web/Desktop - 6.png';
import webDesktop7 from '../../assets/project-assets/Byet/UI/Web/Desktop - 7.png';
import webDesktop8 from '../../assets/project-assets/Byet/UI/Web/Desktop - 8.png';
import webDesktop9 from '../../assets/project-assets/Byet/UI/Web/Desktop - 9.png';
import webDesktop10 from '../../assets/project-assets/Byet/UI/Web/Desktop - 10.png';
import webDesktop11 from '../../assets/project-assets/Byet/UI/Web/Desktop - 11.png';
import webDesktop13 from '../../assets/project-assets/Byet/UI/Web/Desktop - 13.png';

// Import Mobile UI screens
import mobile37 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 37.png';
import mobile39 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 39.png';
import mobile40 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 40.png';
import mobile41 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 41.png';
import mobile42 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 42.png';
import mobile43 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 43.png';
import mobile44 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 44.png';
import mobile45 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 45.png';
import mobile46 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 46.png';
import mobile47 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 47.png';
import mobile48 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 48.png';
import mobile49 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 49.png';
import mobile50 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 50.png';
import mobile54 from '../../assets/project-assets/Byet/UI/Mobile/iPhone 14 Plus - 54.png';

// Import Web Responsive screens
import responsive1 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 1.png';
import responsive2 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 2.png';
import responsive3 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 3.png';
import responsive4 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 4.png';
import responsive5 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 5.png';
import responsive6 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 6.png';
import responsive7 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 7.png';
import responsive8 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 8.png';
import responsive9 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 9.png';
import responsive10 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 10.png';
import responsive11 from '../../assets/project-assets/Byet/UI/Web-Responsive/iPhone 16 Pro Max - 11.png';

const ByetDetails = () => {
    const [selectedWebScreen, setSelectedWebScreen] = React.useState(webDesktop1);

    const handleBackClick = () => {
        window.history.back();
    };

    const webScreens = [webDesktop1, webDesktop2, webDesktop3, webDesktop4, webDesktop5, webDesktop6, webDesktop7, webDesktop8, webDesktop9, webDesktop10, webDesktop11, webDesktop13];

    return (
        <div className="byet-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Byet</h1>
                    <p className="project-subtitle">Modern Real Estate Platform</p>
                    <div className="project-tags">
                        <span className="project-tag">Real Estate</span>
                        <span className="project-tag">Property Management</span>
                        <span className="project-tag">Search Platform</span>
                        <span className="project-tag">Web & Mobile</span>
                        <span className="project-tag">UI/UX Design</span>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="container">
                    {/* Cover Image */}
                    <div className="cover-image-section">
                        <LazyImage src={coverImage} alt="Byet Platform Cover" className="cover-image" />
                    </div>

                    {/* 1. Project Overview and Details */}
                    <div className="project-overview">
                        <div className="overview-content">
                            <h2 className="section-title">Project <span>Overview</span></h2>
                            <p className="overview-text">
                                Byet is a comprehensive real estate platform designed to revolutionize the property buying, selling, and renting experience in the digital age. The platform connects buyers, sellers, renters, and real estate professionals through an intuitive and feature-rich ecosystem.
                            </p>
                            <p className="overview-text">
                                Built with modern technology and user-centric design principles, Byet offers advanced property search capabilities, virtual tours, detailed property information, and seamless communication tools. The platform serves both web and mobile users with responsive design ensuring optimal experience across all devices.
                            </p>
                            <p className="overview-text">
                                The solution addresses key pain points in the real estate industry by providing transparent information, efficient search tools, secure transactions, and enhanced connectivity between all stakeholders in the property market.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Real Estate Platform</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platforms</span>
                                <span className="stat-value">Web & Mobile (iOS/Android)</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Lead UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Real Estate & Property Tech</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Target Users</span>
                                <span className="stat-value">Buyers, Sellers, Renters, Agents</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Key Feature</span>
                                <span className="stat-value">Advanced Property Search</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3 className="feature-title">Advanced Search & Filters</h3>
                                <p className="feature-description">Powerful search engine with multiple filters including location, price range, property type, amenities, and more for precise property discovery.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-home"></i>
                                </div>
                                <h3 className="feature-title">Property Listings</h3>
                                <p className="feature-description">Detailed property information with high-quality images, virtual tours, floor plans, and comprehensive descriptions.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h3 className="feature-title">Interactive Maps</h3>
                                <p className="feature-description">Location-based search with interactive maps showing nearby amenities, schools, transportation, and neighborhood information.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <h3 className="feature-title">Agent Profiles</h3>
                                <p className="feature-description">Connect with verified real estate agents, view their portfolios, ratings, and communicate directly through the platform.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h3 className="feature-title">Favorites & Saved Searches</h3>
                                <p className="feature-description">Save favorite properties and search criteria to get instant notifications when new matching properties become available.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <h3 className="feature-title">Real-time Communication</h3>
                                <p className="feature-description">Built-in messaging system enabling seamless communication between buyers, sellers, and agents with instant notifications.</p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A comprehensive design system was created with reusable components to ensure consistency across the platform and enable rapid development.
                        </p>

                        {/* Typography & Color Palette */}
                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">The Byet platform uses Poppins typeface across all text elements, creating a clean, modern, and consistent reading experience.</p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Display</span>
                                        <span className="weight-sample display">Poppins Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Heading</span>
                                        <span className="weight-sample heading">Poppins SemiBold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Body</span>
                                        <span className="weight-sample body">Poppins Regular</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Caption</span>
                                        <span className="weight-sample caption">Poppins Medium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#2D3E50'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Primary</h4>
                                            <p className="color-hex-card">#2D3E50</p>
                                            <p className="color-usage-card">Primary brand color, headers, CTAs</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#1F2B38'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Dark</h4>
                                            <p className="color-hex-card">#1F2B38</p>
                                            <p className="color-usage-card">Backgrounds, footers, dark sections</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#4A5F7A'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Medium</h4>
                                            <p className="color-hex-card">#4A5F7A</p>
                                            <p className="color-usage-card">Borders, dividers, secondary elements</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#8A9BAE'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Light</h4>
                                            <p className="color-hex-card">#8A9BAE</p>
                                            <p className="color-usage-card">Text, icons, subtle accents</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#D4DCE6'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Lightest</h4>
                                            <p className="color-hex-card">#D4DCE6</p>
                                            <p className="color-usage-card">Backgrounds, cards, panels</p>
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
                                    <LazyImage src={component9} alt="Byet Component System" />
                                </div>
                                <h3 className="component-title">Component Library</h3>
                                <p className="component-description">Modular UI components including buttons, cards, forms, and navigation elements.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={group1} alt="Byet Component Group" />
                                </div>
                                <h3 className="component-title">Design Elements</h3>
                                <p className="component-description">Consistent design patterns and reusable interface elements.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={frame69} alt="Byet Frame Design" />
                                </div>
                                <h3 className="component-title">Layout Frames</h3>
                                <p className="component-description">Responsive layout structures for different screen sizes.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={frame76} alt="Byet Component Frame 76" />
                                </div>
                                <h3 className="component-title">Interactive Components</h3>
                                <p className="component-description">Dynamic elements with hover states and animations.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={frame77} alt="Byet Component Frame 77" />
                                </div>
                                <h3 className="component-title">Property Cards</h3>
                                <p className="component-description">Specialized cards for displaying property information.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={frame78} alt="Byet Component Frame 78" />
                                </div>
                                <h3 className="component-title">Form Elements</h3>
                                <p className="component-description">Input fields, dropdowns, and form validation components.</p>
                            </div>

                            <div className="component-item">
                                <div className="component-image">
                                    <LazyImage src={frame79} alt="Byet Component Frame 79" />
                                </div>
                                <h3 className="component-title">Navigation Patterns</h3>
                                <p className="component-description">Header, footer, and navigation menu components.</p>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Web Platform */}
                    <div className="content-section">
                        <h2 className="section-title">Web <span>Platform</span></h2>
                        <p className="section-description">
                            The web platform provides a comprehensive desktop experience with full-featured property search, detailed listings, and advanced management tools.
                        </p>

                        <div className="ui-screens-subsection">
                            <div className="web-screens-gallery">
                                <div className="main-web-screen">
                                    <LazyImage src={selectedWebScreen} alt="Selected Web View" className="main-screen-img" />
                                </div>
                                <div className="web-thumbnails">
                                    {webScreens.map((screen, index) => (
                                        <LazyImage
                                            key={index}
                                            src={screen}
                                            alt={`Web View ${index + 1}`}
                                            className={`web-thumbnail ${selectedWebScreen === screen ? 'active' : ''}`}
                                            onClick={() => setSelectedWebScreen(screen)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Mobile Application */}
                    <div className="content-section">
                        <h2 className="section-title">Mobile <span>Application</span></h2>
                        <p className="section-description">
                            The mobile app brings property search on-the-go with optimized interface for quick browsing, notifications, and location-based features.
                        </p>
                        <div className="mobile-screens-grid">
                            <LazyImage src={mobile37} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile39} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile40} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile41} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile42} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile43} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile44} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile45} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile46} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile47} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile48} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile49} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile50} alt="Mobile Screen" className="mobile-img" />
                            <LazyImage src={mobile54} alt="Mobile Screen" className="mobile-img" />
                        </div>
                    </div>

                    {/* 6. Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">5000+</div>
                                <div className="impact-label">Property Listings</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">3x</div>
                                <div className="impact-label">Faster Search</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">95%</div>
                                <div className="impact-label">User Satisfaction</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">100+</div>
                                <div className="impact-label">Active Agents</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ByetDetails;
