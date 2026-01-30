import React from 'react';
import './StovaDetails.css';
import stovaLandingPage from '../../assets/project-assets/Stova/UI/Stova landing page.png';
import stovaWireframe from '../../assets/project-assets/Stova/wireframe/Stova Wireframe.png';

const StovaDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="stova-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Stova</h1>
                    <p className="project-subtitle">Premium Furniture & Interior Design E-commerce Platform</p>
                    <div className="project-tags">
                        <span className="project-tag">E-commerce</span>
                        <span className="project-tag">Interior Design</span>
                        <span className="project-tag">Furniture</span>
                        <span className="project-tag">UI/UX Design</span>
                        <span className="project-tag">Webflow No-code Development</span>
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
                                Stova is a premium furniture and interior design e-commerce platform that transforms how customers discover, visualize, and purchase modern furniture solutions. The platform combines elegant design with cutting-edge functionality to deliver an exceptional shopping experience.
                            </p>
                            <p className="overview-text">
                                Featuring expertly crafted furniture collections for kitchens, bathrooms, and living spaces, Stova provides customers with personalized design solutions and seamless online shopping. The platform showcases over 500+ premium products with detailed visualizations and expert consultation services.
                            </p>
                            <p className="overview-text">
                                Built with a focus on comfort, functionality, and timeless design, Stova bridges the gap between traditional furniture retail and modern digital experiences, making high-quality interior design accessible to everyone.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">E-commerce Platform</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Duration</span>
                                <span className="stat-value">1 Months</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Team Size</span>
                                <span className="stat-value">3 Members</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Lead UI/UX & Webflow</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Pages Size</span>
                                <span className="stat-value">+10 Pages</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Furniture & Interior Design</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Project Challenges */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Challenges</span></h2>
                        <div className="challenges-grid">
                            <div className="challenge-card">
                                <h3 className="challenge-title">Visual Product Presentation</h3>
                                <p className="challenge-description">
                                    Creating an immersive visual experience that allows customers to truly appreciate furniture quality and design details through digital interfaces, requiring high-quality imagery and intuitive navigation.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Design Consultation Integration</h3>
                                <p className="challenge-description">
                                    Seamlessly integrating personalized design consultation services into the e-commerce platform while maintaining user-friendly interfaces for both customers and design experts.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Multi-Category Organization</h3>
                                <p className="challenge-description">
                                    Organizing diverse furniture categories (kitchens, bathrooms, living spaces) in an intuitive way that helps customers easily navigate and discover products across different room types.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-couch"></i>
                                </div>
                                <h3 className="feature-title">Premium Furniture Catalog</h3>
                                <p className="feature-description">Expertly curated furniture collections for kitchens, bathrooms, and living spaces with detailed product information and high-quality imagery.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-palette"></i>
                                </div>
                                <h3 className="feature-title">Interior Design Solutions</h3>
                                <p className="feature-description">Personalized design consultation services with expert advice to transform every corner of your home with style and functionality.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3 className="feature-title">Advanced Product Search</h3>
                                <p className="feature-description">Intelligent search functionality with filters for categories, price range, style, and room type to help customers find their perfect furniture.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h3 className="feature-title">Responsive Design</h3>
                                <p className="feature-description">Fully responsive design optimized for all devices, ensuring seamless shopping experience across desktop, tablet, and mobile platforms.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h3 className="feature-title">E-commerce Integration</h3>
                                <p className="feature-description">Complete e-commerce functionality with secure payment processing, order management, and customer account features.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-comments"></i>
                                </div>
                                <h3 className="feature-title">Customer Support</h3>
                                <p className="feature-description">Integrated customer support system with live chat, contact forms, and comprehensive consultation services for design guidance.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Wireframes */}
                    <div className="content-section">
                        <h2 className="section-title">Wireframes & <span>Structure</span></h2>
                        <div className="wireframe-section">
                            <div className="wireframe-container">
                                <div className="wireframe-image-wrapper">
                                    <img src={stovaWireframe} alt="Stova Website Wireframes" className="wireframe-img" />
                                </div>
                                <div className="wireframe-details">
                                    <h3 className="wireframe-title">Design Process & Information Architecture</h3>
                                    <p className="wireframe-description">
                                        The wireframing phase was crucial in establishing the information hierarchy and user flow for the Stova platform.
                                        These low-fidelity wireframes helped map out the content structure, navigation patterns, and key interactive elements
                                        before moving to high-fidelity designs.
                                    </p>
                                    <div className="wireframe-highlights">
                                        <div className="wireframe-highlight">
                                            <div className="highlight-icon">
                                                <i className="fas fa-sitemap"></i>
                                            </div>
                                            <div className="highlight-content">
                                                <h4 className="highlight-title">Information Architecture</h4>
                                                <p className="highlight-desc">Organized content hierarchy with clear navigation paths and product categorization</p>
                                            </div>
                                        </div>

                                        <div className="wireframe-highlight">
                                            <div className="highlight-icon">
                                                <i className="fas fa-mouse-pointer"></i>
                                            </div>
                                            <div className="highlight-content">
                                                <h4 className="highlight-title">User Flow Mapping</h4>
                                                <p className="highlight-desc">Defined key user journeys from discovery to purchase with optimal conversion paths</p>
                                            </div>
                                        </div>

                                        <div className="wireframe-highlight">
                                            <div className="highlight-icon">
                                                <i className="fas fa-mobile-alt"></i>
                                            </div>
                                            <div className="highlight-content">
                                                <h4 className="highlight-title">Responsive Layout Planning</h4>
                                                <p className="highlight-desc">Planned responsive behavior and mobile-first approach for all screen sizes</p>
                                            </div>
                                        </div>

                                        <div className="wireframe-highlight">
                                            <div className="highlight-icon">
                                                <i className="fas fa-puzzle-piece"></i>
                                            </div>
                                            <div className="highlight-content">
                                                <h4 className="highlight-title">Component Structure</h4>
                                                <p className="highlight-desc">Identified reusable components and established consistent design patterns</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A comprehensive design system was created to ensure consistency and visual harmony throughout the furniture e-commerce platform.
                        </p>

                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">
                                    The combination of Playfair Display and Inter font families creates an elegant yet modern aesthetic. Playfair Display brings sophistication to headlines while Inter ensures excellent readability for body content.
                                </p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Display</span>
                                        <span className="weight-sample display">Playfair Display Bold</span>
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
                                <p className="design-system-text">
                                    A warm, earthy color palette that reflects the natural beauty and craftsmanship of premium furniture, creating an inviting and luxurious atmosphere.
                                </p>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#8B7355'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Warm Brown</h4>
                                            <p className="color-hex-card">#8B7355</p>
                                            <p className="color-usage-card">Primary brand color, accents, call-to-action</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#F5F2ED'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Cream White</h4>
                                            <p className="color-hex-card">#F5F2ED</p>
                                            <p className="color-usage-card">Backgrounds, cards, light sections</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#D4A574'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Gold Accent</h4>
                                            <p className="color-hex-card">#D4A574</p>
                                            <p className="color-usage-card">Highlights, premium features, luxury elements</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#2C2C2C'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Charcoal</h4>
                                            <p className="color-hex-card">#2C2C2C</p>
                                            <p className="color-usage-card">Text, headings, dark backgrounds</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. UI Screens */}
                    <div className="content-section">
                        <h2 className="section-title">UI <span>Screens</span></h2>
                        <div className="ui-screens-grid">
                            <div className="ui-screen-card">
                                <div className="ui-screen-content">
                                    <h3 className="ui-screen-title">Homepage Design</h3>
                                    <p className="ui-screen-description">Modern and elegant homepage featuring hero section with furniture showcase, product categories, statistics, and comprehensive furniture collections.</p>
                                    <div className="ui-screen-features">
                                        <span className="ui-feature-tag">Hero Section</span>
                                        <span className="ui-feature-tag">Product Showcase</span>
                                        <span className="ui-feature-tag">Statistics Display</span>
                                        <span className="ui-feature-tag">Contact Form</span>
                                    </div>
                                </div>
                                <div className="ui-screen-image">
                                    <img src={stovaLandingPage} alt="Stova Homepage - Full Design" className="screen-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 8. Business Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Business <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">120K+</div>
                                <div className="impact-label">Social Media Followers</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">500+</div>
                                <div className="impact-label">Premium Products</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">80+</div>
                                <div className="impact-label">Furniture Categories</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">100+</div>
                                <div className="impact-label">Completed Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StovaDetails;