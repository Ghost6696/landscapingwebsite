import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-text">American</span>
                            <span className="logo-accent">Landscaping</span>
                        </div>
                        <p className="footer-tagline">
                            Exceeding expectations since 1981. Chicago's trusted
                            partner for landscape excellence.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Facebook"><FaFacebook /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Site Restoration</a></li>
                            <li><a href="#services">Landscape Design</a></li>
                            <li><a href="#services">Grounds Maintenance</a></li>
                            <li><a href="#services">Hardscaping</a></li>
                            <li><a href="#services">Commercial Trucking</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <FaMapMarkerAlt />
                            <span>2233 Palmer Drive<br />Schaumburg, IL 60193</span>
                        </div>
                        <div className="contact-item">
                            <FaPhone />
                            <a href="tel:8473039326">847.303.9326</a>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope />
                            <a href="mailto:info@americanlandscapinginc.com">info@americanlandscapinginc.com</a>
                        </div>
                        <div className="wbe-footer-badge">
                            WBE Certified
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} American Landscaping Inc. All Rights Reserved.</p>
                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <FaChevronUp />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
