import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import './About.css';
import heroBg from '../assets/hero-luxury.png'; // Reusing hero image for now as the 'about' visual

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container about-container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-image-wrapper"
                >
                    <div className="about-image-bg"></div>
                    <img src={heroBg} alt="American Landscaping Team" className="about-image" />
                    <div className="experience-badge">
                        <span className="year">30+</span>
                        <span className="text">Years of<br />Excellence</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="about-content"
                >
                    <span className="section-subtitle">Our Story</span>
                    <h2>A Legacy of Quality</h2>
                    <p className="about-lead">
                        Founded in 1981, American Landscaping Inc. has grown from a small operation into a premier full-service supplier for the greater Chicagoland area.
                    </p>
                    <p>
                        Our mission is simple: exceed customer expectations every day. We achieve this
                        through a rigorous dedication to safety, respect, and craftsmanship.
                        WBE Certified (Women’s Business Enterprise), we bring a unique perspective and
                        uncompromising attention to detail to every project.
                    </p>

                    <div className="client-list">
                        <h4>Trusted By</h4>
                        <ul>
                            <li>The Village of Mt. Prospect</li>
                            <li>Nash Brothers Construction</li>
                            <li>AT&T</li>
                            <li>City of Palos Heights</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
