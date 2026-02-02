import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import heroBg from '../assets/hero-luxury.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hero-text"
                >
                    <span className="hero-eyebrow">Established 1981</span>
                    <h1>Cultivating <br />Timeless Landscapes</h1>
                    <p className="hero-mission">
                        Exceeding expectations through precision, craftsmanship,
                        and a dedication to natural beauty.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="cta-button"
                        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Explore Our Services
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="scroll-indicator"
                >
                    <FaChevronDown />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
