import { SOCIAL_LINKS } from '@/constants/contact';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bento-section">
      <div className="bento-grid">
        <div className="footer-card">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-heading">Let&apos;s work together</h3>
              <p className="footer-text">
                Have a project in mind? I&apos;d love to hear about it.
              </p>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              <a href="mailto:amrm241020@gmail.com" className="footer-cta">
                Get in touch <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Amr Abbas. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
