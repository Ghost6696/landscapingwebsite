import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#0f2621',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.3)',
            padding: '2rem 0',
            textAlign: 'center',
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} American Landscaping Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
