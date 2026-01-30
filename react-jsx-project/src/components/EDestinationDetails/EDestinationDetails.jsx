import React from 'react';
import './EDestinationDetails.css';
import slide1 from '../../assets/project-assets/E-Destination/Slide 16_9 - 2.png';
import slide2 from '../../assets/project-assets/E-Destination/Slide 16_9 - 3.png';

const EDestinationDetails = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className="edestination-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">E-Destination</h1>
                    <p className="project-subtitle">Smart Transportation & Route Planning Mobile App</p>
                    <div className="project-tags">
                        <span className="project-tag">Mobile Design</span>
                        <span className="project-tag">Navigation</span>
                        <span className="project-tag">Transport</span>
                        <span className="project-tag">Route Planning</span>
                        <span className="project-tag">UI/UX Design</span>
                    </div>
                </div>
            </div>

            <div className="project-content">
                <div className="container">
                    {/* Cover Image */}
                    {/* 1. Project Overview and Details */}
                    <div className="project-overview">
                        <div className="overview-content">
                            <h2 className="section-title">Product <span>Overview</span></h2>
                            <p className="overview-text">
                                E-Destination is a mobile application that assists users in discovering potential transportation options and routes to their desired destinations. The app provides comprehensive navigation solutions for public transportation, helping users efficiently navigate the city while avoiding high traffic.
                            </p>
                            <p className="overview-text">
                                Beyond basic navigation, E-Destination enhances the user experience by integrating entertainment services such as a music player, making commutes more enjoyable. The app offers intuitive route suggestions, real-time traffic updates, and multiple transportation options to ensure users reach their destinations on time.
                            </p>

                            <div className="mission-vision-grid">
                                <div className="mission-box">
                                    <h3><i className="fas fa-bullseye"></i> Mission</h3>
                                    <p>To provide users with convenient access to transportation information and routes through our mobile app.</p>
                                </div>
                                <div className="vision-box">
                                    <h3><i className="fas fa-eye"></i> Vision</h3>
                                    <p>To become the go-to platform for individuals seeking efficient and reliable navigation solutions worldwide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Mobile Application</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platform</span>
                                <span className="stat-value">iOS & Android</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Transportation & Navigation</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Target Users</span>
                                <span className="stat-value">Urban Commuters</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Key Feature</span>
                                <span className="stat-value">Route Optimization</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Problem Statement */}
                    <div className="content-section">
                        <h2 className="section-title">Problem <span>Statement</span></h2>
                        <div className="problem-box">
                            <div className="problem-icon">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                            <div className="problem-content">
                                <p className="problem-text">
                                    People have problems finding the best route and transportation to reach their desired destination and prevent high traffic. Urban commuters often face challenges with getting lost, missing connections, and experiencing high traffic congestion, leading to wasted time and frustration.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Business Goals */}
                    <div className="content-section">
                        <h2 className="section-title">Business <span>Goals</span></h2>
                        <div className="goals-grid">
                            <div className="goal-card">
                                <div className="goal-number">01</div>
                                <h3 className="goal-title">Enhance User Experience</h3>
                                <p className="goal-description">
                                    Offer intuitive route suggestions that make navigation simple and efficient for all users.
                                </p>
                            </div>
                            <div className="goal-card">
                                <div className="goal-number">02</div>
                                <h3 className="goal-title">Expand Coverage</h3>
                                <p className="goal-description">
                                    Include a wide range of destinations and transportation options across the city and beyond.
                                </p>
                            </div>
                            <div className="goal-card">
                                <div className="goal-number">03</div>
                                <h3 className="goal-title">Continuous Improvement</h3>
                                <p className="goal-description">
                                    Continuously improve app functionality based on user feedback and technological advancements.
                                </p>
                            </div>
                            <div className="goal-card">
                                <div className="goal-number">04</div>
                                <h3 className="goal-title">Entertainment Integration</h3>
                                <p className="goal-description">
                                    Enhance user experience by adding entertainment services like music player to the app.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. User Persona */}
                    <div className="content-section">
                        <h2 className="section-title">User <span>Persona</span></h2>
                        <div className="persona-card">
                            <div className="persona-header">
                                <div className="persona-avatar">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                                <div className="persona-info">
                                    <h3 className="persona-name">Youssef Malek</h3>
                                    <p className="persona-subtitle">Busy Professional & Urban Explorer</p>
                                </div>
                            </div>

                            <div className="persona-body">
                                <div className="persona-section">
                                    <h4><i className="fas fa-id-card"></i> Demographics</h4>
                                    <div className="persona-details">
                                        <div className="detail-item">
                                            <span className="detail-label">Age / Gender:</span>
                                            <span className="detail-value">25 / Male</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Location:</span>
                                            <span className="detail-value">Cairo, Egypt</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Occupation:</span>
                                            <span className="detail-value">Engineer</span>
                                        </div>
                                        <div className="detail-item">
                                            <span className="detail-label">Family Status:</span>
                                            <span className="detail-value">Single</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="persona-section">
                                    <h4><i className="fas fa-user"></i> Bio</h4>
                                    <p>Youssef is a busy professional living in the city who relies on public transportation to get around. He enjoys exploring new places and trying different restaurants in his free time.</p>
                                </div>

                                <div className="persona-grid">
                                    <div className="persona-section">
                                        <h4><i className="fas fa-bullseye"></i> Goals</h4>
                                        <p>To efficiently navigate the city using public transportation and discover new places easily.</p>
                                    </div>

                                    <div className="persona-section">
                                        <h4><i className="fas fa-heart"></i> Motivations</h4>
                                        <ul>
                                            <li>Convenience and saving time</li>
                                            <li>Exploring the city</li>
                                            <li>Reducing carbon footprint</li>
                                        </ul>
                                    </div>

                                    <div className="persona-section">
                                        <h4><i className="fas fa-exclamation-circle"></i> Pain Points</h4>
                                        <ul>
                                            <li>Getting lost in unfamiliar areas</li>
                                            <li>Missing connections</li>
                                            <li>High traffic congestion</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. User Story / Storyboard */}
                    <div className="content-section">
                        <h2 className="section-title">User <span>Story</span></h2>
                        <div className="storyboard">
                            <div className="story-intro">
                                <p>Ahmed is a fresh graduate navigating his first major job opportunity. Here's how E-Destination helped him succeed:</p>
                            </div>

                            <div className="story-timeline">
                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Opportunity</h4>
                                        <p>Ahmed receives a call from HR about a job opportunity he applied for a week ago. They schedule an interview at the company campus in Smart Village next week.</p>
                                    </div>
                                </div>

                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-question-circle"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Challenge</h4>
                                        <p>Ahmed lives in Nasr City and has never been to Smart Village. He asks his friends, but no one knows the best route to get there.</p>
                                    </div>
                                </div>

                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-mobile-alt"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Discovery</h4>
                                        <p>While using social media, an advertisement appears for E-Destination - an app that helps find potential routes and transportation to any destination.</p>
                                    </div>
                                </div>

                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Exploration</h4>
                                        <p>Ahmed downloads the app and explores it. He finds a wide variety of routes to reach his destination and discovers the built-in music player for entertainment during the trip.</p>
                                    </div>
                                </div>

                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-route"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Journey</h4>
                                        <p>Ahmed uses the app during his trip, choosing the most suitable route to reach the interview location while enjoying music along the way.</p>
                                    </div>
                                </div>

                                <div className="story-step">
                                    <div className="story-icon">
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div className="story-content">
                                        <h4>The Success</h4>
                                        <p>Ahmed arrives on time for his interview. The manager is very impressed, and Ahmed's punctuality made a great first impression.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6. Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-route"></i>
                                </div>
                                <h3 className="feature-title">Smart Route Planning</h3>
                                <p className="feature-description">Multiple route options with real-time traffic updates to help users choose the fastest and most efficient path.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bus"></i>
                                </div>
                                <h3 className="feature-title">Multi-Modal Transportation</h3>
                                <p className="feature-description">Comprehensive coverage of buses, metro, microbuses, and other public transportation options.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h3 className="feature-title">Real-Time Updates</h3>
                                <p className="feature-description">Live traffic conditions, estimated arrival times, and route adjustments based on current conditions.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-music"></i>
                                </div>
                                <h3 className="feature-title">Entertainment Integration</h3>
                                <p className="feature-description">Built-in music player to enhance the commute experience and make journeys more enjoyable.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-map-marked-alt"></i>
                                </div>
                                <h3 className="feature-title">Destination Discovery</h3>
                                <p className="feature-description">Easy search and discovery of destinations with accurate location information and navigation guidance.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-bookmark"></i>
                                </div>
                                <h3 className="feature-title">Saved Routes</h3>
                                <p className="feature-description">Save frequently used routes and destinations for quick access and faster trip planning.</p>
                            </div>
                        </div>
                    </div>

                    {/* 7. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A comprehensive design system was created to ensure consistency and visual harmony throughout the application.
                        </p>

                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">
                                    The Asap font family was chosen for its clean, modern appearance and excellent readability across different screen sizes. The type system includes multiple weights to establish clear visual hierarchy.
                                </p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Regular</span>
                                        <span className="weight-sample">Asap Regular</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Medium</span>
                                        <span className="weight-sample medium">Asap Medium</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Semi Bold</span>
                                        <span className="weight-sample semibold">Asap Semi Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Bold</span>
                                        <span className="weight-sample bold">Asap Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Italic Variants</span>
                                        <span className="weight-sample italic">Available in all weights</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <p className="design-system-text">
                                    A carefully selected color palette creates visual impact while maintaining accessibility and readability.
                                </p>
                                <div className="color-palette">
                                    <div className="color-card">
                                        <div className="color-swatch" style={{background: '#234270'}}></div>
                                        <div className="color-info">
                                            <h4 className="color-name">Indigo (Rainbow)</h4>
                                            <p className="color-hex">#234270</p>
                                            <p className="color-usage">Primary brand color, navigation elements, headers</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-swatch" style={{background: '#A41F13'}}></div>
                                        <div className="color-info">
                                            <h4 className="color-name">Blood (Animal)</h4>
                                            <p className="color-hex">#A41F13</p>
                                            <p className="color-usage">Accent color, important alerts, call-to-action buttons</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 8. Design Showcase */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>Showcase</span></h2>
                        <p className="section-description">
                            Visual presentation of the app's key screens and user interface design, showcasing the intuitive navigation and user-friendly experience.
                        </p>
                        <div className="design-showcase">
                            <div className="design-slide">
                                <img src={slide1} alt="E-Destination App Design 1" />
                            </div>
                            <div className="design-slide">
                                <img src={slide2} alt="E-Destination App Design 2" />
                            </div>
                        </div>
                    </div>

                    {/* 9. Interactive Prototype */}
                    <div className="content-section">
                        <h2 className="section-title">Interactive <span>Prototype</span></h2>
                        <p className="section-description">
                            Experience the app's interactive prototype showcasing the complete user journey from search to navigation.
                        </p>
                        <div className="figma-embed">
                            <iframe
                                title="E-Destination Interactive Prototype"
                                style={{border: '1px solid rgba(0, 0, 0, 0.1)'}}
                                width="100%"
                                height="600"
                                src="https://embed.figma.com/proto/wCv8bF8IeYJ1lHiXD18Xnd/Mwslatk?node-id=4-2&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=16%3A124&embed-host=share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* 10. Impact & Benefits */}
                    <div className="content-section">
                        <h2 className="section-title">Impact & <span>Benefits</span></h2>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <h4>Time Efficiency</h4>
                                <p>Helps users save time by finding the fastest routes and avoiding traffic congestion</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-compass"></i>
                                </div>
                                <h4>Easy Navigation</h4>
                                <p>Eliminates the stress of getting lost in unfamiliar areas with clear guidance</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-leaf"></i>
                                </div>
                                <h4>Environmental Impact</h4>
                                <p>Promotes public transportation use, reducing carbon footprint and traffic congestion</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-smile"></i>
                                </div>
                                <h4>Enhanced Experience</h4>
                                <p>Makes commuting enjoyable with entertainment features and stress-free navigation</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-money-bill-wave"></i>
                                </div>
                                <h4>Cost Savings</h4>
                                <p>Helps users find the most economical transportation options for their journey</p>
                            </div>
                            <div className="impact-card">
                                <div className="impact-icon">
                                    <i className="fas fa-city"></i>
                                </div>
                                <h4>City Exploration</h4>
                                <p>Encourages users to explore new places confidently with reliable navigation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EDestinationDetails;
