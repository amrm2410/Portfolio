import './Hero.css';
import { smoothScroll } from '../../utils/smoothScroll';
import cvFile from '../../assets/AmrAbbas_UI_UX CV.pdf';

const Hero = () => {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        smoothScroll(targetId);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content fade-in">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-title">Amr Abbas</h1>
                <h2 className="hero-job-title">Senior UI/UX Designer</h2>
                <p className="hero-subtitle">I design digital experiences that users love and businesses trust</p>

                <div className="hero-stats">
                    <div className="hero-stat">
                        <span className="hero-stat-number">3+</span>
                        <span className="hero-stat-label">Years Experience</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-number">20+</span>
                        <span className="hero-stat-label">Projects Delivered</span>
                    </div>
                    <div className="hero-stat">
                        <span className="hero-stat-number">93%</span>
                        <span className="hero-stat-label">Client Satisfaction</span>
                    </div>
                </div>

                <div className="cta-buttons">
                    <a href={cvFile} download="AmrAbbas_UI_UX_CV.pdf" className="btn btn-primary">
                        <i className="fas fa-download"></i>
                        Download My CV
                    </a>
                    <a href="#contact" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                        <i className="fas fa-rocket"></i>
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;