import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    return (
        <div className="registration-wrap">
            <div className="registration-form">
                <form onSubmit="">
                    <h2>Please, Register</h2>
                    
                    <input type="text" name="name" id="" placeholder="Type your Name" /> <br />
                    <input type="number" name="number" id="" placeholder="Type your phone number" /> <br />
                    <input type="email" name="name" id="" placeholder="Type your Email" /> <br />
                    <input type="password" name="name" id="" placeholder="Type your password" /> <br /> 
                    <input type="password" name="password" id="" placeholder="Re-type your password" />
                    <Link to="/login"><p className="login-page">Already have an account?</p></Link>
                    
                    <div>
                        <input className="btn-style" type="submit" value="Register" />
                    </div>   
                </form>
            </div>
        </div>
    );
};

export default Registration;