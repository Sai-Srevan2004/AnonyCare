import React from 'react';
import './Components.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h1>AnonyCare</h1>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#mission">Our Mission</a></li>
                        <li><a href="#contact">About</a></li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <a href="#" className="social-icon">Facebook</a>
                    <a href="#" className="social-icon">Twitter</a>
                    <a href="#" className="social-icon">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 AnonyCare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
