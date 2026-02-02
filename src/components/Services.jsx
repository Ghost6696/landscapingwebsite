import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaTools, FaTruckLoading } from 'react-icons/fa';
import './Services.css';

const services = [
    {
        icon: <FaTools />,
        title: "Restoration",
        description: "Specialized removal of excess debris, grading, surface finishing, and sodding. We restore balance to the land."
    },
    {
        icon: <FaLeaf />,
        title: "Maintenance",
        description: "Comprehensive care including pruning, fertilization, seasonal planting, and advanced irrigation systems."
    },
    {
        icon: <FaTruckLoading />,
        title: "Transport",
        description: "Professional trucking for hire with a wide range of equipment for your specific logistical needs."
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Expertise</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Comprehensive Landscape Services
                    </motion.h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <div className="service-icon-wrapper">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
