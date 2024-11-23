import React, { useState } from 'react';
import './Components.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>AnonyCare</h1>
            </div>

            <div className="navbar-items">
                <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <Link className='Link' to='/'><li>Home</li></Link>
                    <Link className='Link' to='/chat'><li>Chat</li></Link>
                     <Link className='Link' to='/about'><li>About</li></Link>
                </ul>
                <Link className='Link' to='/login'><p className="login-btn">Login</p></Link>
            </div>

            {/* Hamburger Icon for mobile screens */}
            <div className="navbar-hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
