import React, { useState } from 'react';
import './Components.css';
import { NavLink } from 'react-router-dom';

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
                    <NavLink className='Link' to='/'><li>Home</li></NavLink>
                    <NavLink className='Link' to='/chat'><li>Chat</li></NavLink>
                     <NavLink className='Link' to='/about'><li>About</li></NavLink>
                </ul>
                <NavLink className='Link' to='/login'><p className="login-btn">Login</p></NavLink>
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
