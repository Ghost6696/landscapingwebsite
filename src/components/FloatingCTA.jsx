import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone } from 'react-icons/fa';
import './FloatingCTA.css';

const FloatingCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 100vh
            setIsVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="floating-cta"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container floating-cta-content">
                        <p>Ready to transform your property?</p>
                        <div className="floating-cta-buttons">
                            <a href="tel:8473039326" className="phone-cta">
                                <FaPhone /> 847.303.9326
                            </a>
                            <button className="btn btn-primary" onClick={scrollToContact}>
                                Get Your Free Quote
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingCTA;
