import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const serviceOptions = [
    'Site Restoration',
    'Landscape Design',
    'Grounds Maintenance',
    'Hardscaping',
    'Irrigation Systems',
    'Commercial Trucking',
    'Other'
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Get in Touch</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Start Your Project Today
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Contact us for a free consultation. We bring expertise and
                        elegance to every landscape.
                    </motion.p>
                </div>

                <div className="contact-layout">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(847) 555-0123"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service Interest</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service...</option>
                                        {serviceOptions.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Project Details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    'Sending...'
                                ) : (
                                    <>
                                        <FaPaperPlane /> Send Message
                                    </>
                                )}
                            </button>

                            {submitted && (
                                <motion.div
                                    className="form-success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Thank you! We'll be in touch within 24 hours.
                                </motion.div>
                            )}
                        </form>

                        <div className="form-trust">
                            <span>✓ Free estimates within 24 hours</span>
                            <span>✓ Serving all of Chicagoland</span>
                            <span>✓ WBE Certified</span>
                        </div>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        className="contact-info-side"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="contact-info-cards">
                            <div className="info-card">
                                <div className="info-icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4>Headquarters</h4>
                                    <p>2233 Palmer Drive<br />Schaumburg, IL 60193</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>
                                        <a href="tel:8473039326">847.303.9326</a><br />
                                        <span className="text-muted">Fax: 847.303.9327</span>
                                    </p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>
                                        <a href="mailto:info@americanlandscapinginc.com">
                                            info@americanlandscapinginc.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">
                                    <FaClock />
                                </div>
                                <div>
                                    <h4>Business Hours</h4>
                                    <p>Mon - Fri: 7:00 AM - 5:00 PM<br />Sat: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-wrapper">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.302525700779!2d-88.0683!3d42.0457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faed9b2fd8f9b%3A0x6b77c5c2d3c9e3f!2s2233%20Palmer%20Dr%2C%20Schaumburg%2C%20IL%2060193!5e0!3m2!1sen!2sus!4v1706918000000!5m2!1sen!2sus"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="American Landscaping Location"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
