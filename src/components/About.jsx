import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle, FaStar, FaHandshake } from 'react-icons/fa';
import './About.css';

const values = [
    { icon: <FaStar />, title: 'Quality', description: 'Premium materials and expert craftsmanship in every project.' },
    { icon: <FaCheckCircle />, title: 'Safety', description: 'Rigorous safety protocols protect our team and your property.' },
    { icon: <FaHandshake />, title: 'Reliability', description: 'Consistent, on-time delivery you can count on.' },
    { icon: <FaAward />, title: 'Excellence', description: 'Exceeding expectations is our standard, not our goal.' }
];

const clients = [
    'Village of Mt. Prospect',
    'City of Palos Heights',
    'Nash Brothers Construction',
    'IHC Construction',
    'Electric Conduit Construction',
    'AT&T',
    'Intren'
];

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-layout">
                    {/* Content Side */}
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="section-subtitle">Our Legacy</span>
                        <h2>Four Decades of Transforming Chicagoland</h2>

                        <p className="about-lead">
                            Since 1981, American Landscaping Inc. has grown from a small local operation
                            into a trusted partner for municipalities, utility contractors, and discerning
                            property owners across the greater Chicago area.
                        </p>

                        <p>
                            Our mission is simple: exceed customer expectations every day, in every way.
                            We achieve this through properly trained employees, high-quality materials,
                            modern procedures, and well-maintained equipment — all while maintaining a
                            safe and respectful work environment.
                        </p>

                        <div className="wbe-badge">
                            <FaAward className="badge-icon" />
                            <div>
                                <strong>WBE Certified</strong>
                                <span>Women's Business Enterprise</span>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="timeline">
                            <div className="timeline-item">
                                <span className="timeline-year">1981</span>
                                <span className="timeline-text">Founded in Schaumburg, IL</span>
                            </div>
                            <div className="timeline-divider"></div>
                            <div className="timeline-item">
                                <span className="timeline-year">Today</span>
                                <span className="timeline-text">Full-service landscape leader</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Values Side */}
                    <motion.div
                        className="about-values"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3>Why Choose Us</h3>
                        <div className="values-grid">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    className="value-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="value-icon">{value.icon}</div>
                                    <div>
                                        <h4>{value.title}</h4>
                                        <p>{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Trusted By Section */}
                <motion.div
                    className="trusted-section"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h4>Trusted By Leading Organizations</h4>
                    <div className="client-list">
                        {clients.map((client, index) => (
                            <span key={index} className="client-item">{client}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
