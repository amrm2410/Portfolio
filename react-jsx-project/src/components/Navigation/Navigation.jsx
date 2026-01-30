import React, { useEffect, useState } from 'react';
import './Navigation.css';
import logoImage from '../../assets/images/amr-abbas-logo.png';
import { smoothScroll } from '../../utils/smoothScroll';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.navigation');
            if (nav) {
                if (window.scrollY > 100) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        smoothScroll(targetId);
        setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navigation">
            <div className="navigation-container">
                <div className="navigation-logo">
                    <img src={logoImage} alt="Amr Abbas - UI/UX Designer" />
                </div>

                {/* Burger Menu Button */}
                <button
                    className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links */}
                <ul className={`navigation-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
                    <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
                    <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;