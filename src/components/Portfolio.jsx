import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpandAlt, FaTimes } from 'react-icons/fa';
import './Portfolio.css';

// Import images
import heroImg from '../assets/hero-luxury.png';
import hardscapeImg from '../assets/portfolio-hardscape.png';
import restorationImg from '../assets/portfolio-restoration.png';

const categories = ['All', 'Restoration', 'Maintenance', 'Hardscape', 'Commercial'];

const projects = [
    {
        id: 1,
        title: 'Estate Landscape Restoration',
        location: 'Barrington Hills, IL',
        category: 'Restoration',
        img: heroImg,
        description: 'Complete property restoration including grading, erosion control, and premium sod installation.'
    },
    {
        id: 2,
        title: 'Luxury Patio & Fire Feature',
        location: 'Lincoln Park, Chicago',
        category: 'Hardscape',
        img: hardscapeImg,
        description: 'Custom stone paver patio with built-in fire pit and ambient landscape lighting.'
    },
    {
        id: 3,
        title: 'Municipal Park Restoration',
        location: 'Village of Mt. Prospect',
        category: 'Commercial',
        img: restorationImg,
        description: 'Large-scale turf restoration and tree installation for municipal recreation area.'
    },
    {
        id: 4,
        title: 'Corporate Campus Grounds',
        location: 'Schaumburg, IL',
        category: 'Maintenance',
        img: restorationImg,
        description: 'Year-round grounds maintenance program for Fortune 500 corporate headquarters.'
    },
    {
        id: 5,
        title: 'Utility Corridor Restoration',
        location: 'Palos Heights, IL',
        category: 'Restoration',
        img: heroImg,
        description: 'Post-construction restoration for utility installation project with hydroseeding.'
    },
    {
        id: 6,
        title: 'Residential Outdoor Living',
        location: 'Lake Forest, IL',
        category: 'Hardscape',
        img: hardscapeImg,
        description: 'Complete backyard transformation with patio, retaining walls, and irrigation.'
    }
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="section portfolio-section bg-white">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Work</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Explore our portfolio of successful landscape transformations
                        across the Chicagoland area.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <div className="portfolio-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <motion.div className="portfolio-grid" layout>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="portfolio-item"
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -8 }}
                            >
                                <img src={project.img} alt={project.title} loading="lazy" />
                                <div className="portfolio-overlay">
                                    <span className="portfolio-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <span className="portfolio-location">{project.location}</span>
                                    <button
                                        className="portfolio-expand"
                                        onClick={() => setSelectedProject(project)}
                                        aria-label="View project details"
                                    >
                                        <FaExpandAlt />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="lightbox-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                <FaTimes />
                            </button>
                            <img src={selectedProject.img} alt={selectedProject.title} />
                            <div className="lightbox-info">
                                <span className="portfolio-category">{selectedProject.category}</span>
                                <h3>{selectedProject.title}</h3>
                                <span className="portfolio-location">{selectedProject.location}</span>
                                <p>{selectedProject.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
