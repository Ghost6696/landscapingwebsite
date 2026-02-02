import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const stats = [
    { value: 40, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 100, suffix: '+', label: 'Municipal Contracts' },
    { value: 98, suffix: '%', label: 'Client Retention' }
];

const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const step = target / (duration / 16);

            const timer = setInterval(() => {
                start += step;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <span ref={ref} className="stat-number">
            {count}{suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Counter target={stat.value} suffix={stat.suffix} />
                            <span className="stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
