import React from 'react';
import { motion } from 'framer-motion';
import {
    FaTools,
    FaLeaf,
    FaDraftingCompass,
    FaCubes,
    FaTint,
    FaTruckMoving
} from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaTools />,
        title: 'Site Restoration',
        description: 'From post-construction cleanup to complete site restoration, we transform disturbed land into pristine environments.',
        features: ['Debris Removal', 'Grading', 'Erosion Control', 'Sodding']
    },
    {
        icon: <FaDraftingCompass />,
        title: 'Landscape Design',
        description: 'Custom landscape architecture that enhances property value and creates lasting outdoor spaces.',
        features: ['3D Visualization', 'Plant Selection', 'Hardscape Integration', 'Lighting Plans']
    },
    {
        icon: <FaLeaf />,
        title: 'Grounds Maintenance',
        description: 'Year-round care programs that keep your property in peak condition every season.',
        features: ['Mowing', 'Fertilization', 'Aeration', 'Seasonal Cleanup']
    },
    {
        icon: <FaCubes />,
        title: 'Hardscaping',
        description: 'Patios, walkways, and retaining walls built with precision and designed to endure.',
        features: ['Brick Pavers', 'Stone Walls', 'Outdoor Lighting', 'Drainage Solutions']
    },
    {
        icon: <FaTint />,
        title: 'Irrigation Systems',
        description: 'Smart irrigation solutions that conserve water while keeping landscapes thriving.',
        features: ['System Design', 'Installation', 'Smart Controllers', 'Maintenance']
    },
    {
        icon: <FaTruckMoving />,
        title: 'Commercial Trucking',
        description: 'Heavy equipment and material transport for projects of any scale.',
        features: ['Wide Equipment Range', 'On-Time Delivery', 'Bulk Materials', 'Site Support']
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section bg-white">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Expertise</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Comprehensive Landscape Solutions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        From restoration to ongoing maintenance, we deliver exceptional results
                        for municipalities, contractors, and property owners.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="services-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p>Need a customized solution for your project?</p>
                    <button
                        className="btn btn-secondary"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Discuss Your Requirements
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
