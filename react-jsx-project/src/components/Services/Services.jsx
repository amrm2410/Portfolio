import './Services.css';

const SERVICES = [
    {
        id: 1,
        icon: 'fas fa-comments',
        title: 'Free Consultation',
        description: 'Not sure where to start? Book a free 30-minute call to discuss your project goals and explore how I can help bring your vision to life.',
        price: 'Free',
        priceNote: null
    },
    {
        id: 2,
        icon: 'fas fa-pencil-ruler',
        title: 'Full Design',
        description: 'Complete UI/UX design from user research to final handoff. You get wireframes, interactive prototypes, and production-ready design files.',
        price: '$750',
        priceNote: 'Starting price per page'
    },
    {
        id: 3,
        icon: 'fas fa-code',
        title: 'Design & Development',
        description: 'Need a complete solution? I handle both design and frontend development, delivering a fully functional, pixel-perfect product.',
        price: '$1000',
        priceNote: 'Starting price per page'
    }
];

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container">
                <h2 className="section-title">How I Can <span style={{color: '#3b82f6'}}>Help</span></h2>
                <p className="services-description">
                    Choose the service that fits your needs, from quick consultations to complete product solutions
                </p>

                <div className="services-grid">
                    {SERVICES.map(service => (
                        <div key={service.id} className="services-card">
                            <div className="services-card-icon">
                                <i className={service.icon}></i>
                            </div>
                            <div className="services-card-content">
                                <h3 className="services-card-title">{service.title}</h3>
                                <div className="services-card-pricing">
                                    <span className="services-price">{service.price}</span>
                                    {service.priceNote && <span className="services-price-note">{service.priceNote}</span>}
                                </div>
                                <p className="services-card-description">{service.description}</p>
                                <a
                                    href="https://amr-uiux.setmore.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="services-book-btn"
                                >
                                    <i className="fas fa-calendar-check"></i>
                                    Book Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
