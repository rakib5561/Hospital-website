import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="nav-container">
                <div className="nav-logo">
                    <h1>Hospitals</h1>
                </div>
                <div className="menu-link">
                        <ul>
                            <li><Link to="/home" className="link-style">Home</Link></li>
                            <li><Link to="/about" className="link-style">About Us</Link></li>
                            <li><Link to="/services" className="link-style">Services</Link></li>
                            <li><Link to="/doctors" className="link-style">Doctors</Link></li>
                            <li><Link to="/contact" className="link-style">Contact Us</Link></li>
                            <li><Link to="/login" className="link-style">Login</Link></li>
                           
                        </ul>
                </div>
            </nav>
    );
};

export default Header;