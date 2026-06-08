'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;

          // Animate the section
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';

          // Find and stagger bento cards within the section
          const cards = el.querySelectorAll('.bento-card, .hero-main-card, .project-bento-card, .footer-card');
          cards.forEach((card, index) => {
            const cardEl = card as HTMLElement;
            cardEl.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`;
            cardEl.style.opacity = '1';
            cardEl.style.transform = 'translateY(0) scale(1)';
          });
        }
      });
    }, observerOptions);

    // Set initial state for sections
    document.querySelectorAll('section, footer').forEach(section => {
      const el = section as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(section);
    });

    // Set initial state for bento cards
    document.querySelectorAll('.bento-card, .hero-main-card, .project-bento-card, .footer-card').forEach(card => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px) scale(0.97)';
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
