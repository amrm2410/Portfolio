import React from 'react';
import './BreadfastDetails.css';
import LazyImage from '../LazyImage/LazyImage';
import breadfastCover from '../../assets/project-assets/Breadfast/Breadfast Cover.png';
import breadfastThumbnail from '../../assets/project-assets/Breadfast/Thumbnail.png';
import breadfastImg1 from '../../assets/project-assets/Breadfast/Thumbnail-1.png';
import breadfastImg2 from '../../assets/project-assets/Breadfast/Thumbnail-2.png';
import breadfastImg3 from '../../assets/project-assets/Breadfast/Thumbnail-3.png';
import breadfastImg4 from '../../assets/project-assets/Breadfast/Thumbnail-4.png';
import breadfastImg5 from '../../assets/project-assets/Breadfast/Thumbnail-5.png';
import breadfastImg6 from '../../assets/project-assets/Breadfast/Thumbnail-6.png';
import breadfastImg7 from '../../assets/project-assets/Breadfast/Thumbnail-7.png';
import breadfastImg8 from '../../assets/project-assets/Breadfast/Thumbnail-8.png';
import breadfastImg9 from '../../assets/project-assets/Breadfast/Thumbnail-9.png';

const BreadfastDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="breadfast-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Breadfast</h1>
                    <p className="project-subtitle">On-Demand Grocery Delivery App - UX League Business Case</p>
                    <div className="project-tags">
                        <span className="project-tag">Grocery Delivery</span>
                        <span className="project-tag">Mobile App</span>
                        <span className="project-tag">Food Tech</span>
                        <span className="project-tag">Community Features</span>
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
                                Breadfast is a leading on-demand grocery delivery app serving thousands of households daily with fresh groceries and essentials. This UX League business case challenged us to evolve Breadfast from a simple grocery delivery service into a vibrant lifestyle ecosystem.
                            </p>
                            <p className="overview-text">
                                The mission was to design an integrated experience that unites community engagement with premium membership benefits. By enabling customers to share honest reviews, curate bundles and collections, and discover community-generated content, we aimed to transform casual shoppers into loyal community contributors.
                            </p>
                            <p className="overview-text">
                                This project focused on building trust, increasing order frequency and basket size, and driving organic growth loops through social sharing and community advocacy—all while positioning Breadfast as a daily lifestyle app rather than just another grocery delivery service.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">UX Business Case</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Duration</span>
                                <span className="stat-value">4 Hours Challenge</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Competition</span>
                                <span className="stat-value">UX League 2025</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">UX/UI Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Focus Area</span>
                                <span className="stat-value">Community Engagement</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Food Tech & Delivery</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. The Challenge */}
                    <div className="content-section">
                        <h2 className="section-title">The <span>Challenge</span></h2>
                        <div className="challenge-overview">
                            <p className="challenge-intro">
                                Breadfast serves thousands of households daily with fresh groceries and essentials. While customers already rely on Breadfast as a daily habit, two powerful growth levers remain underexploited:
                            </p>
                            <div className="challenges-grid">
                                <div className="challenge-card">
                                    <div className="challenge-number">01</div>
                                    <h3 className="challenge-title">Community Contributors Gap</h3>
                                    <p className="challenge-description">
                                        Turning loyal shoppers into community contributors who share reviews, bundles, and recommendations that build trust and inspire others. Currently, this engagement opportunity is untapped.
                                    </p>
                                </div>
                                <div className="challenge-card">
                                    <div className="challenge-number">02</div>
                                    <h3 className="challenge-title">Subscription Adoption Barrier</h3>
                                    <p className="challenge-description">
                                        Encouraging heavy users to become subscribers with exclusive perks and benefits that drive loyalty, unlock savings, and increase order frequency. Premium membership adoption needs acceleration.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Mission & Objectives */}
                    <div className="content-section">
                        <h2 className="section-title">Mission & <span>Objectives</span></h2>

                        <div className="mission-box">
                            <h3 className="mission-title">Our Mission</h3>
                            <p className="mission-text">
                                Design an integrated experience that unites <strong>community engagement</strong> and <strong>premium membership</strong> — ensuring Breadfast becomes not just a grocery app, but a lifestyle ecosystem.
                            </p>
                        </div>

                        <div className="objectives-section">
                            <h3 className="objectives-title">Design Objectives</h3>
                            <div className="objectives-list">
                                <div className="objective-item">
                                    <div className="objective-icon">
                                        <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="objective-content">
                                        <h4>Encourage Customer Reviews & Content</h4>
                                        <p>Enable customers to share honest reviews, curated bundles, and collections that build community trust</p>
                                    </div>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <div className="objective-content">
                                        <h4>Enable Discovery & Shopping</h4>
                                        <p>Help users discover and shop from community-generated content seamlessly within the app</p>
                                    </div>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">
                                        <i className="fas fa-user-plus"></i>
                                    </div>
                                    <div className="objective-content">
                                        <h4>Seamless Subscription Onboarding</h4>
                                        <p>Provide clear subscription value with benefits like free items, discounts, and early access</p>
                                    </div>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">
                                        <i className="fas fa-gift"></i>
                                    </div>
                                    <div className="objective-content">
                                        <h4>Connect Community with Benefits</h4>
                                        <p>Link community participation with subscription perks—extra visibility, featured bundles, and added perks</p>
                                    </div>
                                </div>
                                <div className="objective-item">
                                    <div className="objective-icon">
                                        <i className="fas fa-chart-line"></i>
                                    </div>
                                    <div className="objective-content">
                                        <h4>Drive Organic Growth</h4>
                                        <p>Create social sharing and advocacy opportunities throughout the shopping journey</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="key-objectives-grid">
                            <div className="key-objective-card">
                                <div className="key-objective-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h4>Build Trust & Authenticity</h4>
                                <p>Amplify real customer voices through verified reviews and social proof</p>
                            </div>
                            <div className="key-objective-card">
                                <div className="key-objective-icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <h4>Increase Order Metrics</h4>
                                <p>Drive higher basket size, retention, and subscription value</p>
                            </div>
                            <div className="key-objective-card">
                                <div className="key-objective-icon">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <h4>Launch Organic Growth</h4>
                                <p>Enable social sharing and community advocacy loops</p>
                            </div>
                            <div className="key-objective-card">
                                <div className="key-objective-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <h4>Position as Lifestyle App</h4>
                                <p>Transform from delivery service to daily lifestyle destination</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Key Features & Solutions */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3 className="feature-title">Customer Reviews & Ratings</h3>
                                <p className="feature-description">Honest customer reviews with rich media, ratings, and verified purchase badges to build trust and authenticity across the platform.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-box-open"></i>
                                </div>
                                <h3 className="feature-title">Curated Bundles & Collections</h3>
                                <p className="feature-description">Community-created bundles and collections that customers can discover, shop from, and share with others for personalized recommendations.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-crown"></i>
                                </div>
                                <h3 className="feature-title">Premium Membership Program</h3>
                                <p className="feature-description">Subscription tiers with exclusive benefits including free items, discounts, early access, and enhanced community features for loyal customers.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3 className="feature-title">Community Discovery Feed</h3>
                                <p className="feature-description">Social feed showcasing community content, trending bundles, popular reviews, and content from customers you follow for inspiration.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-share-alt"></i>
                                </div>
                                <h3 className="feature-title">Social Sharing & Advocacy</h3>
                                <p className="feature-description">Seamless sharing of reviews, bundles, and shopping experiences to social media platforms with beautiful share cards and referral incentives.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-trophy"></i>
                                </div>
                                <h3 className="feature-title">Gamification & Rewards</h3>
                                <p className="feature-description">Achievement badges, contributor levels, and featured content spots that reward active community members and drive engagement.</p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Strategic Constraints */}
                    <div className="content-section">
                        <h2 className="section-title">Strategic <span>Constraints</span></h2>
                        <div className="constraints-list">
                            <div className="constraint-item">
                                <div className="constraint-icon">
                                    <i className="fas fa-mobile-alt"></i>
                                </div>
                                <div className="constraint-content">
                                    <h4>Platform Integration</h4>
                                    <p>Must integrate smoothly into the existing Breadfast iOS & Android apps without disrupting current user experience or workflows</p>
                                </div>
                            </div>
                            <div className="constraint-item">
                                <div className="constraint-icon">
                                    <i className="fas fa-headset"></i>
                                </div>
                                <div className="constraint-content">
                                    <h4>Customer Support Excellence</h4>
                                    <p>Must not significantly increase customer support workload—leverage simple UX and automated moderation where possible</p>
                                </div>
                            </div>
                            <div className="constraint-item">
                                <div className="constraint-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <div className="constraint-content">
                                    <h4>Content Moderation</h4>
                                    <p>Comply with content moderation and privacy regulations with automated filters and reporting systems</p>
                                </div>
                            </div>
                            <div className="constraint-item">
                                <div className="constraint-icon">
                                    <i className="fas fa-trophy"></i>
                                </div>
                                <div className="constraint-content">
                                    <h4>Loyalty System Alignment</h4>
                                    <p>Subscription must have simple tiering and cancellation, avoiding complex point-based loyalty systems</p>
                                </div>
                            </div>
                            <div className="constraint-item">
                                <div className="constraint-icon">
                                    <i className="fas fa-code"></i>
                                </div>
                                <div className="constraint-content">
                                    <h4>Feasible Development</h4>
                                    <p>Should be feasible to pilot with moderate engineering investment—no over-engineered solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Design Process */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Process</span></h2>
                        <div className="process-timeline">
                            <div className="process-step">
                                <div className="process-number">01</div>
                                <div className="process-content">
                                    <h4>Problem Understanding</h4>
                                    <p>Analyzed the business challenge, identified user pain points, and clarified key objectives for community and subscription features</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="process-number">02</div>
                                <div className="process-content">
                                    <h4>Research & Insights</h4>
                                    <p>Reviewed competitor apps, studied community engagement patterns, and identified best practices for subscription onboarding</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="process-number">03</div>
                                <div className="process-content">
                                    <h4>Conceptual User Flows</h4>
                                    <p>Mapped customer journeys showcasing key interactions from browsing to reviewing, bundle creation, and subscription sign-up</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="process-number">04</div>
                                <div className="process-content">
                                    <h4>Low-Fidelity Wireframes</h4>
                                    <p>Created wireframes demonstrating core app screens and subscription onboarding flows with clear information hierarchy</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="process-number">05</div>
                                <div className="process-content">
                                    <h4>Interactive Prototype</h4>
                                    <p>Developed clickable prototype showcasing the user journey with real interactions and seamless flow transitions</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="process-number">06</div>
                                <div className="process-content">
                                    <h4>Presentation & Storytelling</h4>
                                    <p>Crafted a 2-slide structured story explaining the problem, idea, and value to both users and Breadfast business</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Design Showcase */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Showcase</span></h2>
                        <div className="design-images">
                            <div className="design-image">
                                <LazyImage src={breadfastThumbnail} alt="Breadfast Design Thumbnail" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg1} alt="Breadfast Design 1" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg2} alt="Breadfast Design 2" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg3} alt="Breadfast Design 3" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg4} alt="Breadfast Design 4" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg5} alt="Breadfast Design 5" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg6} alt="Breadfast Design 6" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg7} alt="Breadfast Design 7" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg8} alt="Breadfast Design 8" />
                            </div>
                            <div className="design-image">
                                <LazyImage src={breadfastImg9} alt="Breadfast Design 9" />
                            </div>
                        </div>
                    </div>

                    {/* 8. Interactive Prototype */}
                    <div className="content-section">
                        <h2 className="section-title">Interactive <span>Prototype</span></h2>
                        <div className="figma-embed">
                            <iframe
                                style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                                width="100%"
                                height="600"
                                src="https://embed.figma.com/proto/3SpQYVBN7Ab11JD6CYCU7a/Breadfast?page-id=0%3A1&node-id=2-6&p=f&viewport=150%2C215%2C0.16&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A6&embed-host=share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* 9. Expected Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Expected <span>Impact</span></h2>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h4>Community Engagement</h4>
                                <p>Transform loyal shoppers into active contributors sharing reviews, bundles, and recommendations</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-crown"></i>
                                </div>
                                <h4>Subscription Growth</h4>
                                <p>Increase premium membership adoption with clear value proposition and seamless onboarding</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-shopping-basket"></i>
                                </div>
                                <h4>Order Frequency</h4>
                                <p>Drive higher basket size and retention through community discovery and subscription benefits</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-heart"></i>
                                </div>
                                <h4>Brand Loyalty</h4>
                                <p>Position Breadfast as a daily lifestyle app creating emotional connections beyond transactions</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-share-alt"></i>
                                </div>
                                <h4>Organic Growth</h4>
                                <p>Enable viral sharing loops and community advocacy reducing customer acquisition costs</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-shield-alt"></i>
                                </div>
                                <h4>Trust & Authenticity</h4>
                                <p>Build customer confidence through verified reviews and real community voices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadfastDetails;
