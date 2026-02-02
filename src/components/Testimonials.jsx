import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
    {
        quote: "ALI has been our go-to partner for municipal restoration work for over a decade. Their professionalism, attention to detail, and quality of work are unmatched in the industry.",
        author: "Project Manager",
        company: "Village of Mt. Prospect",
        rating: 5
    },
    {
        quote: "Reliable, responsive, and always delivers on time. We trust American Landscaping with our most demanding projects because they consistently exceed expectations.",
        author: "Operations Director",
        company: "Nash Brothers Construction",
        rating: 5
    },
    {
        quote: "Their restoration team transformed our post-construction sites beautifully. The attention to grading and erosion control has saved us significant costs down the line.",
        author: "Site Superintendent",
        company: "IHC Construction",
        rating: 5
    },
    {
        quote: "Working with ALI is seamless. Their communication is excellent, their crews are professional, and the results speak for themselves. Highly recommended.",
        author: "Facilities Manager",
        company: "AT&T",
        rating: 5
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [autoplay]);

    const next = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoplay(false);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="section testimonials-section bg-dark">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Client Testimonials</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Partners Say
                    </motion.h2>
                </div>

                <div className="testimonial-carousel">
                    <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
                        <FaChevronLeft />
                    </button>

                    <div className="testimonial-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                className="testimonial-card"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                <FaQuoteLeft className="quote-icon" />
                                <p className="testimonial-quote">
                                    "{testimonials[current].quote}"
                                </p>
                                <div className="testimonial-rating">
                                    {[...Array(testimonials[current].rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <span className="author-name">{testimonials[current].author}</span>
                                    <span className="author-company">{testimonials[current].company}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button className="carousel-btn next" onClick={next} aria-label="Next">
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots */}
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === current ? 'active' : ''}`}
                            onClick={() => {
                                setAutoplay(false);
                                setCurrent(index);
                            }}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
