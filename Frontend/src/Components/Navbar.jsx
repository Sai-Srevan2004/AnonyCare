import React, { useState } from 'react';
import './Components.css';
import { NavLink ,Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../Slices/authSlice';



const Navbar = () => {
    

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const token = useSelector((state) => state.auth.token); // Get token from Redux
    const dispatch = useDispatch();
  
    
    const handleLogout = () => {
      dispatch(Logout(null)); // Call the logout action
      localStorage.removeItem('anonytoken'); // Remove token from localStorage
      alert("logged out");
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
                {
                    token?<p onClick={handleLogout} className='login-btn'>Logout</p>:<Link className='Link' to='/login'><p className="login-btn">Login</p></Link>

                }
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
