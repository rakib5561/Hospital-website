import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="pageWrape">
        
            <section className="banner-part">
                    <div className="banner-content">
                        <h1>Care for <br /> Every Situation</h1>
                        <h3>Talking care of relatives</h3>
                        <Link to="/contact"><button className="btn-style">Contact Us</button></Link>
                    </div>
            </section>

        </div>
    );
};

export default Home;