import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Portfolio.css';
import projectImg from '../assets/project-detail.png';
import heroImg from '../assets/hero-luxury.png';

const projects = [
    { id: 1, title: "Estate Restoration", location: "Barrington Hills", img: heroImg, size: "large" },
    { id: 2, title: "Modern Courtyard", location: "Lincoln Park", img: projectImg, size: "small" },
    { id: 3, title: "Municipal Plaza", location: "Schaumburg", img: projectImg, size: "small" },
    { id: 4, title: "Lakeside Retreat", location: "Lake Geneva", img: heroImg, size: "wide" }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Selected Works</span>
                    <h2>Curated Landscapes</h2>
                </div>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`portfolio-item ${project.size}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <img src={project.img} alt={project.title} loading="lazy" />
                            <div className="portfolio-overlay">
                                <div className="portfolio-info">
                                    <span className="location">{project.location}</span>
                                    <h3>{project.title}</h3>
                                </div>
                                <button className="view-btn"><FaExternalLinkAlt /></button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
