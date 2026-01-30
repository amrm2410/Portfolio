import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="about-title">About <span>Me</span></h2>
                <p className="about-subtitle">Bridging the gap between user needs and business goals through strategic design</p>

                <div className="about-content">
                    {/* Left Side - Bio Description */}
                    <div className="about-bio">
                        <h3 className="bio-title">Who I Am</h3>
                        <p className="bio-text">
                            I'm a Senior UI/UX Designer with 3+ years of experience creating user-centered digital products that drive real business results.
                        </p>
                        <p className="bio-text">
                            I specialize in transforming complex requirements into intuitive interfaces that users love. From wireframes to high-fidelity prototypes, I craft experiences that balance aesthetics with functionality.
                        </p>
                        <p className="bio-text">
                            My approach combines design thinking with data-driven insights, ensuring every decision is backed by user research and aligned with business objectives.
                        </p>
                        <div className="bio-highlights">
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>20+ successful projects delivered</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>Cross-functional team leadership</span>
                            </div>
                            <div className="highlight-item">
                                <i className="fas fa-check-circle"></i>
                                <span>End-to-end product design</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Expertise */}
                    <div className="about-expertise">
                        <h3 className="expertise-title">What I Do</h3>
                        <div className="expertise-list">
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>UI/UX Design</h4>
                                    <p>Creating intuitive interfaces with a focus on usability, accessibility, and visual appeal.</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>Frontend Development</h4>
                                    <p>Building responsive web applications using React, ensuring pixel-perfect implementation.</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>E-commerce & No-Code</h4>
                                    <p>Launching online stores and MVPs quickly with Shopify, Webflow, and modern tools.</p>
                                </div>
                            </div>
                            <div className="expertise-item">
                                <div className="expertise-bullet"></div>
                                <div className="expertise-details">
                                    <h4>User Research</h4>
                                    <p>Conducting user interviews, usability testing, and data analysis to inform design decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
