import React, { useEffect } from 'react';
import { Navigation, Hero, About, Skills, Projects, Services, Contact } from '../components';

const HomePage = () => {
    useEffect(() => {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="App">
            <Navigation />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Contact />
        </div>
    );
};

export default HomePage;
