'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { smoothScroll } from '@/lib/smoothScroll';
import { useTheme } from '@/context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScroll(targetId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="navigation-container">
        <div className="nav-left">
          <div className="navigation-logo">
            <Image
              src="/images/web icon.png"
              alt="Amr Abbas - Product Designer"
              width={120}
              height={40}
              priority
            />
          </div>
          <div className="nav-identity">
            <span className="nav-name">Amr Abbas</span>
            <span className="nav-role">Senior Product Designer</span>
          </div>
        </div>

        <button
          className={`burger-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-right ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="navigation-links">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <a href="#contact" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#contact')}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
