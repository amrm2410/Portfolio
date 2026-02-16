'use client';

import { useState } from 'react';
import {
  CONTACT_INFO,
  SOCIAL_LINKS,
  CONTACT_FORM_TITLE,
  CONTACT_INFO_TITLE,
  CONTACT_INFO_DESCRIPTION,
  SOCIAL_TITLE
} from '@/constants/contact';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyP8HUEHpsLbv2ypkTi33SOxWo3X8Js2dZFzktfrOtbLz7wAWtW2QbBwm70HkRt_l0/exec';
    const data = new FormData();
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('project_details', formData.project);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: data
      });
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', project: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="contact bento-section">
      <div className="bento-grid">
        <div className="bento-section-header" style={{ gridColumn: '1 / -1' }}>
          <h2 className="bento-section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-form-section">
            <div className="bento-card contact-form-card">
              <h3 className="form-title">{CONTACT_FORM_TITLE}</h3>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project">Project Details</label>
                  <textarea
                    id="project"
                    name="project"
                    rows={5}
                    placeholder="Tell me about your project requirements, timeline, and budget..."
                    value={formData.project}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="submit-success">Message sent successfully! I&apos;ll get back to you soon.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="submit-error">Something went wrong. Please try again.</div>
                )}

                <button type="submit" className="send-message-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-section">
            <div className="bento-card contact-info-card">
              <h3 className="info-title">{CONTACT_INFO_TITLE}</h3>
              <p className="info-description">{CONTACT_INFO_DESCRIPTION}</p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">{CONTACT_INFO.email}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">{CONTACT_INFO.phone}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">{CONTACT_INFO.location}</span>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-detail-content">
                    <span className="contact-label">Response Time</span>
                    <span className="contact-value">{CONTACT_INFO.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card social-media-card">
              <h3 className="social-title">{SOCIAL_TITLE}</h3>
              <div className="social-links">
                {SOCIAL_LINKS.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
