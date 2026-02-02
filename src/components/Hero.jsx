import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaAward, FaClock, FaShieldAlt } from 'react-icons/fa';
import heroBg from '../assets/hero-luxury.png';
import './Hero.css';

const trustBadges = [
    { icon: <FaClock />, text: '40+ Years' },
    { icon: <FaAward />, text: 'WBE Certified' },
    { icon: <FaShieldAlt />, text: 'Licensed & Insured' }
];

const Hero = () => {
    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPortfolio = () => {
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="hero-text"
                >
                    <motion.span
                        className="hero-eyebrow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Trusted Since 1981 • WBE Certified
                    </motion.span>

                    <h1>
                        Where Vision Meets<br />
                        <span className="text-accent">Landscape Excellence</span>
                    </h1>

                    <p className="hero-lead">
                        Chicago's premier full-service landscaping partner for municipalities,
                        contractors, and discerning property owners.
                    </p>

                    <div className="hero-cta-group">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-primary"
                            onClick={scrollToContact}
                        >
                            Request a Consultation
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn btn-outline"
                            onClick={scrollToPortfolio}
                        >
                            View Our Work
                        </motion.button>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    className="hero-badges"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    {trustBadges.map((badge, index) => (
                        <div key={index} className="trust-badge">
                            {badge.icon}
                            <span>{badge.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    onClick={scrollToServices}
                >
                    <span>Explore</span>
                    <FaChevronDown />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
