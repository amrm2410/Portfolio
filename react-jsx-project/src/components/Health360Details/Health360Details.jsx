import React from 'react';
import './Health360Details.css';

const Health360Details = () => {
    const handleBackClick = () => {
        window.history.back();
    };

    // Image URLs - Patient Mobile screens
    const patientMobile1 = 'https://i.ibb.co/QjpwVrWV/i-Phone-13-mini-2.png';
    const patientMobile2 = 'https://i.ibb.co/1YTR7gfG/i-Phone-13-mini-3.png';
    const patientMobile3 = 'https://i.ibb.co/27xLshQC/i-Phone-13-mini-4.png';
    const patientMobile4 = 'https://i.ibb.co/bgqT84XZ/i-Phone-13-mini-6.png';
    const patientMobile5 = 'https://i.ibb.co/ymnL5bJq/i-Phone-13-mini-10.png';
    const patientMobile6 = 'https://i.ibb.co/YYJ59nc/i-Phone-13-mini-20.png';
    const patientMobile7 = 'https://i.ibb.co/tSShvbd/i-Phone-13-mini-21.png';
    const patientMobile8 = 'https://i.ibb.co/rK1W7tL0/i-Phone-13-mini-22.png';
    const patientMobile9 = 'https://i.ibb.co/7xHXMv2f/i-Phone-13-mini-23.png';

    // Image URLs - Patient Web screens
    const patientWeb1 = 'https://i.ibb.co/997sjCbd/1920w-light.png';
    const patientWeb2 = 'https://i.ibb.co/xKv0h64t/1920w-light-1.png';
    const patientWeb3 = 'https://i.ibb.co/zVPxHnYg/1920w-light-2.png';
    const patientWeb4 = 'https://i.ibb.co/np8j7h9/1920w-light-3.png';
    const patientWeb5 = 'https://i.ibb.co/wFpRk8mG/1920w-light-4.png';
    const patientWeb6 = 'https://i.ibb.co/PzFpgrpD/1920w-light-5.png';
    const patientWeb7 = 'https://i.ibb.co/93wJhLq2/1920w-light-6.png';
    const patientWeb8 = 'https://i.ibb.co/fVM91Ks4/1920w-light-7.png';

    // Image URLs - Doctor Mobile screens
    const doctorMobile1 = 'https://i.ibb.co/Xx6tfbjW/i-Phone-13-mini-7.png';
    const doctorMobile2 = 'https://i.ibb.co/xqKMqhrN/i-Phone-13-mini-11.png';
    const doctorMobile3 = 'https://i.ibb.co/9mGMwkFh/i-Phone-13-mini-12.png';
    const doctorMobile4 = 'https://i.ibb.co/mV0kKPbB/i-Phone-13-mini-14.png';

    // Image URLs - Doctor Web screens
    const doctorWeb1 = 'https://i.ibb.co/ZpzFn81P/Img.png';
    const doctorWeb2 = 'https://i.ibb.co/RG9rFXDW/Img-1.png';
    const doctorWeb3 = 'https://i.ibb.co/ycdKvk5M/Img-2.png';
    const doctorWeb4 = 'https://i.ibb.co/TJjhQzP/Img-3.png';
    const doctorWeb5 = 'https://i.ibb.co/M536yV1Z/Img-4.png';
    const doctorWeb6 = 'https://i.ibb.co/mrvhSK0v/Group-26.png';

    return (
        <div className="health360-details">
            <button onClick={handleBackClick} className="back-button">
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="project-header">
                <div className="container">
                    <h1 className="project-title">Health 360</h1>
                    <p className="project-subtitle">Holistic Healthcare Management System</p>
                    <div className="project-tags">
                        <span className="project-tag">Healthcare</span>
                        <span className="project-tag">Patient Management</span>
                        <span className="project-tag">Medical Dashboard</span>
                        <span className="project-tag">UI/UX Design</span>
                        <span className="project-tag">Web & Mobile App</span>
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
                                Health 360 is a comprehensive healthcare management system designed to revolutionize patient care and medical practice management. The platform provides complete solutions for both patients and healthcare providers, featuring integrated monitoring, appointment scheduling, and comprehensive reporting capabilities.
                            </p>
                            <p className="overview-text">
                                Built with a patient-first approach, Health 360 offers seamless experiences across web and mobile platforms for both patients and doctors. The system enables real-time health monitoring, secure medical records management, telemedicine consultations, and intelligent analytics for improved healthcare outcomes.
                            </p>
                            <p className="overview-text">
                                The dual-interface design ensures that both patients and healthcare providers have tailored experiences with features specific to their needs, while maintaining seamless data integration and communication between all stakeholders.
                            </p>
                        </div>

                        <div className="overview-stats">
                            <h3 className="stats-title">Project Details</h3>
                            <div className="stat-item">
                                <span className="stat-label">Project Type</span>
                                <span className="stat-value">Healthcare Platform</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Duration</span>
                                <span className="stat-value">3 Months</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Team Size</span>
                                <span className="stat-value">5 Members</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">My Role</span>
                                <span className="stat-value">Lead UI/UX Designer</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Platforms</span>
                                <span className="stat-value">Web & Mobile (iOS/Android)</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Industry</span>
                                <span className="stat-value">Healthcare & Medical</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Project Challenges */}
                    <div className="content-section">
                        <h2 className="section-title">Project <span>Challenges</span></h2>
                        <div className="challenges-grid">
                            <div className="challenge-card">
                                <h3 className="challenge-title">Dual User Experience</h3>
                                <p className="challenge-description">
                                    Creating two distinct yet cohesive user experiences for patients and doctors, each with different needs, workflows, and information hierarchies while maintaining design consistency across the platform.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Medical Data Complexity</h3>
                                <p className="challenge-description">
                                    Presenting complex medical data, health records, and diagnostic information in an accessible, understandable format for patients while providing comprehensive details for medical professionals.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Privacy & Security</h3>
                                <p className="challenge-description">
                                    Ensuring HIPAA compliance and implementing robust security measures while maintaining an intuitive user experience and seamless data flow between patients and healthcare providers.
                                </p>
                            </div>
                            <div className="challenge-card">
                                <h3 className="challenge-title">Cross-Platform Consistency</h3>
                                <p className="challenge-description">
                                    Maintaining feature parity and design consistency across web and mobile platforms while optimizing for each platform's unique interaction patterns and capabilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Key Features */}
                    <div className="content-section">
                        <h2 className="section-title">Key <span>Features</span></h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-user-md"></i>
                                </div>
                                <h3 className="feature-title">Patient Portal</h3>
                                <p className="feature-description">Comprehensive patient dashboard with health records, appointment management, medication tracking, and direct communication with healthcare providers.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-stethoscope"></i>
                                </div>
                                <h3 className="feature-title">Doctor Dashboard</h3>
                                <p className="feature-description">Advanced medical dashboard for doctors with patient management, appointment scheduling, medical records access, and prescription management tools.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <h3 className="feature-title">Appointment System</h3>
                                <p className="feature-description">Intelligent appointment scheduling with automated reminders, calendar integration, and real-time availability management for healthcare providers.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-heartbeat"></i>
                                </div>
                                <h3 className="feature-title">Health Monitoring</h3>
                                <p className="feature-description">Real-time health metrics tracking with visual charts, trend analysis, and automated alerts for abnormal readings or critical health indicators.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-video"></i>
                                </div>
                                <h3 className="feature-title">Telemedicine</h3>
                                <p className="feature-description">Integrated video consultation capabilities enabling remote patient consultations with secure, HIPAA-compliant communication channels.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-prescription-bottle-alt"></i>
                                </div>
                                <h3 className="feature-title">Prescription Management</h3>
                                <p className="feature-description">Digital prescription system with medication reminders, dosage tracking, refill requests, and pharmacy integration for seamless medication management.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-file-medical"></i>
                                </div>
                                <h3 className="feature-title">Medical Records</h3>
                                <p className="feature-description">Secure electronic health records system with document uploads, lab results, imaging reports, and complete medical history tracking.</p>
                            </div>

                            <div className="feature-card">
                                <div className="feature-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3 className="feature-title">Analytics & Reporting</h3>
                                <p className="feature-description">Comprehensive analytics dashboard with health trends, treatment outcomes, and business intelligence for healthcare providers and administrators.</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Design System */}
                    <div className="content-section">
                        <h2 className="section-title">Design <span>System</span></h2>
                        <p className="section-description">
                            A comprehensive design system was created to ensure consistency and visual harmony throughout the healthcare platform.
                        </p>

                        <div className="design-system-grid">
                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-font"></i> Typography</h3>
                                <p className="design-system-text">
                                    The Poppins and Inter font families were chosen for their professional appearance and excellent readability across medical interfaces. The type system includes multiple weights to establish clear visual hierarchy.
                                </p>
                                <div className="typography-weights">
                                    <div className="weight-item">
                                        <span className="weight-label">Display</span>
                                        <span className="weight-sample display">Poppins Bold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Heading</span>
                                        <span className="weight-sample heading">Poppins SemiBold</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Body</span>
                                        <span className="weight-sample body">Inter Regular</span>
                                    </div>
                                    <div className="weight-item">
                                        <span className="weight-label">Caption</span>
                                        <span className="weight-sample caption">Inter Medium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="design-system-section">
                                <h3 className="design-system-subtitle"><i className="fas fa-palette"></i> Color Palette</h3>
                                <p className="design-system-text">
                                    A carefully selected color palette creates visual impact while maintaining accessibility and medical professionalism.
                                </p>
                                <div className="color-cards-grid">
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#0C7570'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Primary Teal</h4>
                                            <p className="color-hex-card">#0C7570</p>
                                            <p className="color-usage-card">Primary brand color, navigation, headers</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#BFEBE5'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Light Mint</h4>
                                            <p className="color-hex-card">#BFEBE5</p>
                                            <p className="color-usage-card">Secondary accent, backgrounds, highlights</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#27AE60'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Success Green</h4>
                                            <p className="color-hex-card">#27AE60</p>
                                            <p className="color-usage-card">Success states, confirmations, healthy indicators</p>
                                        </div>
                                    </div>
                                    <div className="color-card">
                                        <div className="color-preview-large" style={{background: '#E74C3C'}}></div>
                                        <div className="color-info-card">
                                            <h4 className="color-name-card">Alert Red</h4>
                                            <p className="color-hex-card">#E74C3C</p>
                                            <p className="color-usage-card">Errors, critical alerts, urgent notifications</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Patient Web Interface */}
                    <div className="content-section">
                        <h2 className="section-title">Patient <span>Web Interface</span></h2>
                        <p className="section-description">
                            The patient web portal provides a comprehensive dashboard for managing health information, appointments, and communication with healthcare providers. Designed with accessibility and ease of use in mind.
                        </p>
                        <div className="web-screens-grid">
                            {[
                                { img: patientWeb1, title: 'Patient Dashboard', desc: 'Overview of health status, upcoming appointments, and quick access to key features' },
                                { img: patientWeb2, title: 'Appointment Booking', desc: 'Find and schedule appointments with available doctors based on specialty and availability' },
                                { img: patientWeb3, title: 'Medical Records', desc: 'Access and manage complete medical history, lab results, and health documents' },
                                { img: patientWeb4, title: 'Health Monitoring', desc: 'Track vital signs and health metrics with visual charts and trend analysis' },
                                { img: patientWeb5, title: 'Doctor Profiles', desc: 'Browse detailed doctor profiles with specialties, availability, and patient reviews' },
                                { img: patientWeb6, title: 'Prescription Management', desc: 'View current medications, dosage information, and request prescription refills' },
                                { img: patientWeb7, title: 'Consultation History', desc: 'Review past consultations, diagnoses, and treatment plans from healthcare providers' },
                                { img: patientWeb8, title: 'Settings & Profile', desc: 'Manage personal information, preferences, and notification settings' }
                            ].map((screen, index) => (
                                <div key={index} className="web-screen-card">
                                    <div className="web-screen-image">
                                        <img src={screen.img} alt={screen.title} className="screen-img" />
                                    </div>
                                    <div className="web-screen-content">
                                        <h3 className="web-screen-title">{screen.title}</h3>
                                        <p className="web-screen-description">{screen.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 6. Patient Mobile App */}
                    <div className="content-section">
                        <h2 className="section-title">Patient <span>Mobile App</span></h2>
                        <p className="section-description">
                            The patient mobile app brings healthcare management to your fingertips with an intuitive, streamlined interface optimized for on-the-go access to health information and services.
                        </p>
                        <div className="mobile-screens-grid">
                            {[
                                { img: patientMobile1, title: 'Mobile Dashboard', desc: 'Quick access to health overview and important features' },
                                { img: patientMobile2, title: 'Doctor Search', desc: 'Find and filter doctors by specialty and location' },
                                { img: patientMobile3, title: 'Booking Flow', desc: 'Simple appointment scheduling with calendar integration' },
                                { img: patientMobile4, title: 'Health Tracking', desc: 'Monitor daily health metrics and vital signs' },
                                { img: patientMobile5, title: 'Notifications', desc: 'Stay updated with appointment reminders and health alerts' },
                                { img: patientMobile6, title: 'Medical History', desc: 'Access past consultations and treatment records' },
                                { img: patientMobile7, title: 'Prescriptions', desc: 'View medications and set reminder alerts' },
                                { img: patientMobile8, title: 'Doctor Details', desc: 'Comprehensive doctor information and booking options' },
                                { img: patientMobile9, title: 'Profile Settings', desc: 'Manage account preferences and personal information' }
                            ].map((screen, index) => (
                                <div key={index} className="mobile-screen-card">
                                    <div className="mobile-screen-image">
                                        <img src={screen.img} alt={screen.title} className="mobile-img" />
                                    </div>
                                    <div className="mobile-screen-content">
                                        <h4 className="mobile-screen-title">{screen.title}</h4>
                                        <p className="mobile-screen-description">{screen.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 7. Doctor Web Dashboard */}
                    <div className="content-section">
                        <h2 className="section-title">Doctor <span>Web Dashboard</span></h2>
                        <p className="section-description">
                            The doctor's web dashboard provides comprehensive tools for patient management, medical records access, and practice administration with advanced analytics and reporting capabilities.
                        </p>
                        <div className="web-screens-grid">
                            {[
                                { img: doctorWeb1, title: 'Doctor Dashboard', desc: 'Overview of daily schedule, patient queue, and key statistics' },
                                { img: doctorWeb2, title: 'Patient Management', desc: 'Access patient records, history, and manage ongoing treatments' },
                                { img: doctorWeb3, title: 'Appointment Calendar', desc: 'Manage schedule, availability, and appointment confirmations' },
                                { img: doctorWeb4, title: 'Medical Records Access', desc: 'Review comprehensive patient medical history and lab results' },
                                { img: doctorWeb5, title: 'Analytics Dashboard', desc: 'Track patient outcomes, practice metrics, and performance indicators' },
                                { img: doctorWeb6, title: 'Consultation Interface', desc: 'Conduct consultations with integrated patient information and tools' }
                            ].map((screen, index) => (
                                <div key={index} className="web-screen-card">
                                    <div className="web-screen-image">
                                        <img src={screen.img} alt={screen.title} className="screen-img" />
                                    </div>
                                    <div className="web-screen-content">
                                        <h3 className="web-screen-title">{screen.title}</h3>
                                        <p className="web-screen-description">{screen.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 8. Doctor Mobile App */}
                    <div className="content-section">
                        <h2 className="section-title">Doctor <span>Mobile App</span></h2>
                        <p className="section-description">
                            The doctor's mobile app enables healthcare providers to manage patients and appointments on the go, with quick access to critical patient information and communication tools.
                        </p>
                        <div className="mobile-screens-grid">
                            {[
                                { img: doctorMobile1, title: 'Doctor Home', desc: 'Quick overview of appointments and patient alerts' },
                                { img: doctorMobile2, title: 'Patient List', desc: 'Browse and search patient records on the go' },
                                { img: doctorMobile3, title: 'Patient Details', desc: 'Access complete patient information and medical history' },
                                { img: doctorMobile4, title: 'Schedule Management', desc: 'Manage appointments and availability settings' }
                            ].map((screen, index) => (
                                <div key={index} className="mobile-screen-card">
                                    <div className="mobile-screen-image">
                                        <img src={screen.img} alt={screen.title} className="mobile-img" />
                                    </div>
                                    <div className="mobile-screen-content">
                                        <h4 className="mobile-screen-title">{screen.title}</h4>
                                        <p className="mobile-screen-description">{screen.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 9. Business Impact */}
                    <div className="content-section">
                        <h2 className="section-title">Business <span>Impact</span></h2>
                        <div className="impact-stats">
                            <div className="impact-stat">
                                <div className="impact-number">10K+</div>
                                <div className="impact-label">Active Patients</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">500+</div>
                                <div className="impact-label">Healthcare Providers</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">50K+</div>
                                <div className="impact-label">Appointments Managed</div>
                            </div>
                            <div className="impact-stat">
                                <div className="impact-number">95%</div>
                                <div className="impact-label">User Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health360Details;
