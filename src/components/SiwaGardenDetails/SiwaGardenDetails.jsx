import React from 'react';
import './SiwaGardenDetails.css';
import LazyImage from '../LazyImage/LazyImage';
import component1 from '../../assets/project-assets/Siwa Garden/Component 1.png';
import component2 from '../../assets/project-assets/Siwa Garden/Component 2.png';
import component3 from '../../assets/project-assets/Siwa Garden/Component 3.png';
import component16 from '../../assets/project-assets/Siwa Garden/Component 16.png';
import macbook17 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 17.png';
import macbook18 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 18.png';
import macbook19 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 19.png';
import macbook20 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 20.png';
import macbook21 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 21.png';
import macbook22 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 22.png';
import macbook23 from '../../assets/project-assets/Siwa Garden/UI/MacBook Air - 23.png';

const SiwaGardenDetails = () => {
    const [selectedWebScreen, setSelectedWebScreen] = React.useState(macbook17);

    const handleBackClick = () => {
        window.history.back();
    };

    const webScreens = [macbook17, macbook18, macbook19, macbook20, macbook21, macbook22, macbook23];

    return (
        <div className="siwa-garden-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Siwa Garden</h1>
                    <p className="project-subtitle">Premium Organic Products E-commerce Platform</p>
                    <div className="project-tags">
                        <span className="project-tag">E-commerce</span>
                        <span className="project-tag">Organic Products</span>
                        <span className="project-tag">Olive Oil</span>
                        <span className="project-tag">Dates</span>
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
                                Siwa Garden is a premium e-commerce platform specializing in authentic organic products from the Siwa Oasis. The platform brings the finest quality olive oils, dates, and other natural products directly from traditional Egyptian farms to customers worldwide.
                            </p>
                            <p className="overview-text">
                                Featuring an elegant shopping experience with detailed product information, sustainable sourcing stories, and seamless checkout process, Siwa Garden connects conscious consumers with premium organic products. The platform showcases the rich heritage of Siwa Oasis while providing modern e-commerce functionality.
                            </p>
                            <p className="overview-text">
                                Built with a focus on authenticity, quality, and user-friendly design, Siwa Garden combines traditional craftsmanship with contemporary online shopping, making premium organic products accessible to health-conscious customers everywhere.
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
                                <span className="stat-value">2 Months</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Team Size</span>
                                <span className="stat-value">3 Members</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Lead UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Pages Size</span>
                                <span className="stat-value">+10 Pages</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Organic Products</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Project Challenges */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Challenges</span></h2>
                        <div className="challenges-grid">
                            <div className="challenge-card">
                                <h3 className="challenge-title">Building Trust & Authenticity</h3>
                                <p className="challenge-description">
                                    Creating a digital experience that conveys the authentic origin and premium quality of organic products from Siwa Oasis, establishing trust with customers purchasing food products online.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Product Storytelling</h3>
                                <p className="challenge-description">
                                    Designing an interface that effectively communicates the sustainable sourcing, traditional farming methods, and unique heritage behind each product to differentiate from mass-market competitors.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Seamless Shopping Experience</h3>
                                <p className="challenge-description">
                                    Balancing rich product information, detailed sourcing stories, and nutritional content with a streamlined checkout process that doesn't overwhelm health-conscious customers.
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
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h3 className="feature-title">Smart Product Catalog</h3>
                                <p className="feature-description">Comprehensive catalog showcasing premium olive oils, dates, and organic products with detailed nutritional information, origin stories, and high-quality imagery.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h3 className="feature-title">Sourcing Transparency</h3>
                                <p className="feature-description">Interactive farm profiles and sourcing maps showing the journey from Siwa Oasis farms to customer doorsteps, building trust through complete transparency.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <h3 className="feature-title">Quality Certifications</h3>
                                <p className="feature-description">Prominently displayed organic certifications, quality badges, and third-party verification to assure customers of product authenticity and standards.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-credit-card"></i>
                                </div>
                                <h3 className="feature-title">Seamless Checkout</h3>
                                <p className="feature-description">Streamlined checkout process with multiple payment options, guest checkout, and saved preferences for returning customers for effortless purchasing.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-gift"></i>
                                </div>
                                <h3 className="feature-title">Gift & Subscription Options</h3>
                                <p className="feature-description">Curated gift boxes and flexible subscription plans for regular deliveries of fresh organic products directly from Siwa farms.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-book-open"></i>
                                </div>
                                <h3 className="feature-title">Recipe & Usage Guides</h3>
                                <p className="feature-description">Extensive collection of recipes, usage tips, and wellness guides to help customers maximize the benefits of premium organic products in their daily lives.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>

                        {/* Color Palette */}
                        <div className="design-subsection">
                            <h3 className="subsection-title">Color Palette</h3>
                            <div className="color-palette">
                                <div className="color-group">
                                    <h4 className="color-group-title">Primary Colors</h4>
                                    <div className="color-swatches">
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#2D5016'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Forest Green</span>
                                                <span className="color-code">#2D5016</span>
                                            </div>
                                        </div>
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#F5F9F0'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Light Mint</span>
                                                <span className="color-code">#F5F9F0</span>
                                            </div>
                                        </div>
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#1B3A0F'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Deep Green</span>
                                                <span className="color-code">#1B3A0F</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="color-group">
                                    <h4 className="color-group-title">Accent Colors</h4>
                                    <div className="color-swatches">
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#8BC34A'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Fresh Green</span>
                                                <span className="color-code">#8BC34A</span>
                                            </div>
                                        </div>
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#E8F5E9'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Pale Green</span>
                                                <span className="color-code">#E8F5E9</span>
                                            </div>
                                        </div>
                                        <div className="color-swatch">
                                            <div className="color-preview" style={{backgroundColor: '#558B2F'}}></div>
                                            <div className="color-info">
                                                <span className="color-name">Leaf Green</span>
                                                <span className="color-code">#558B2F</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Typography */}
                        <div className="design-subsection">
                            <h3 className="subsection-title">Typography</h3>
                            <div className="typography-showcase">
                                <div className="typography-item">
                                    <div className="typography-example">
                                        <h1 className="font-display">Grow Your Green Paradise</h1>
                                    </div>
                                    <div className="typography-details">
                                        <span className="font-name">Primary Heading</span>
                                        <span className="font-specs">Poppins, 48px, Bold</span>
                                        <span className="font-usage">Used for main headlines and hero text</span>
                                    </div>
                                </div>

                                <div className="typography-item">
                                    <div className="typography-example">
                                        <h2 className="font-heading">Sustainable Garden Solutions</h2>
                                    </div>
                                    <div className="typography-details">
                                        <span className="font-name">Secondary Heading</span>
                                        <span className="font-specs">Inter, 24px, SemiBold</span>
                                        <span className="font-usage">Used for section titles and subheadings</span>
                                    </div>
                                </div>

                                <div className="typography-item">
                                    <div className="typography-example">
                                        <p className="font-body">Transform your outdoor space with eco-friendly gardening practices and expert guidance for sustainable plant care and landscaping solutions.</p>
                                    </div>
                                    <div className="typography-details">
                                        <span className="font-name">Body Text</span>
                                        <span className="font-specs">Inter, 16px, Regular</span>
                                        <span className="font-usage">Used for paragraphs and descriptions</span>
                                    </div>
                                </div>

                                <div className="typography-item">
                                    <div className="typography-example">
                                        <span className="font-caption">500+ Plants • 1000+ Users • Expert Guidance</span>
                                    </div>
                                    <div className="typography-details">
                                        <span className="font-name">Caption Text</span>
                                        <span className="font-specs">Inter, 14px, Medium</span>
                                        <span className="font-usage">Used for labels, captions, and metadata</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Components */}
                        <div className="design-subsection">
                            <h3 className="subsection-title">Components</h3>
                            <div className="components-showcase">
                                <div className="component-item">
                                    <div className="component-image-wrapper">
                                        <LazyImage src={component1} alt="Component 1" className="component-img" />
                                    </div>
                                </div>

                                <div className="component-item">
                                    <div className="component-image-wrapper">
                                        <LazyImage src={component2} alt="Component 2" className="component-img" />
                                    </div>
                                </div>

                                <div className="component-item">
                                    <div className="component-image-wrapper">
                                        <LazyImage src={component3} alt="Component 3" className="component-img" />
                                    </div>
                                </div>

                                <div className="component-item component-item-full">
                                    <div className="component-image-wrapper">
                                        <LazyImage src={component16} alt="Component 16" className="component-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. UI Screens */}
                    <div className="content-section">
                        <h2 className="section-title">UI <span>Screens</span></h2>

                        {/* Web Screens */}
                        <div className="ui-screens-subsection">
                            <h3 className="subsection-title">Web Application</h3>
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

                    {/* 6. Business Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Business <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">1000+</div>
                                <div className="impact-label">Active Gardeners</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">500+</div>
                                <div className="impact-label">Plant Species</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">50+</div>
                                <div className="impact-label">Expert Guides</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">85%</div>
                                <div className="impact-label">User Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiwaGardenDetails;
