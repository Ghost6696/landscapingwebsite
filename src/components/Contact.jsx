import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <motion.div
                    className="contact-info-wrapper"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">Get in Touch</span>
                    <h2>Start Your Project</h2>
                    <p className="contact-lead">
                        Contact us today to discuss your vision. We bring expertise and elegance to every landscape.
                    </p>

                    <div className="info-block">
                        <h4>Headquarters</h4>
                        <p>2233 Palmer Drive<br />Schaumburg, IL 60193</p>
                    </div>

                    <div className="info-block">
                        <h4>Direct Lines</h4>
                        <p>Phone: 847.303.9326</p>
                        <p>Fax: 847.303.9327</p>
                    </div>

                    <div className="info-block">
                        <h4>Email</h4>
                        <p className="email-link">info@americanlandscapinginc.com</p>
                    </div>
                </motion.div>

                <motion.div
                    className="map-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.302525700779!2d-88.0683!3d42.0457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faed9b2fd8f9b%3A0x6b77c5c2d3c9e3f!2s2233%20Palmer%20Dr%2C%20Schaumburg%2C%20IL%2060193!5e0!3m2!1sen!2sus!4v1706918000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="American Landscaping Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
