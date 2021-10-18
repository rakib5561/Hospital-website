import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Footer = () => {
    return (
        <div className="footer-part">
            <section className="footer-container">

                <div className="left-content">
                Copyrights © 2017 All Rights Reserved, <br /> Powered by Doctors
                </div>

                <div className="middle-content">
                <h2>Useful Links</h2>
                    <ul>
                        <li><Link className="footer-link" to="/login">Login</Link></li>
                        <li><Link className="footer-link" to="/registration">registration</Link></li>
                        <li><Link className="footer-link" to="/about">About us</Link></li>
                        <li><Link className="footer-link" to="/services">Services</Link></li>
                        <li><Link className="footer-link" to="/doctors">Doctors</Link></li>
                        <li><Link className="footer-link" to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="right-content">
                <h2>About hospitals</h2>
                        <p>The relentless service of Hospitals in the past 25 years taken health care to the most modern levels in the region catering to urban & rural. <br /> <br />
                        A Health Care Provider of Western Approach, Hospitals is the most trusted multispecialty hospital.</p>
                </div>

            </section>
        </div>
    );
};

export default Footer;