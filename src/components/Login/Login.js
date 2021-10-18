import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider , GithubAuthProvider } from "firebase/auth";
import firebaseInitialize from '../../firebase/firebase.authentication';
import './Login.css';



firebaseInitialize();

const Login = () => {

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleGoogle = () =>{
        signInWithPopup(auth, googleProvider)
            .then(result =>{
                console.log(result.user)
            })
    };

    const handleGithub = () =>{
        signInWithPopup(auth, gitHubProvider)
            .then(resul =>{
                console.log(resul.user);
            } )
    }

    const handleFacebook = () =>{

    }

    return (
        <div className="login-wrap">
            <div className="login-form">

                <form onSubmit="">
                    <h2>Please, Login</h2>
                    <input type="email" name="email" id="" placeholder="Type your email" /> <br />
                    <input type="password" name="email" id="" placeholder="Type Your password" /> <br />

                    <Link><p className="forget-pass">Forget Password?</p></Link>
                    <div>
                    <input className="btn-style" type="submit" value="Login" /> 
                    </div>
                </form>

                 <div className="register-page">
                 <label>Dont't have an account?</label><Link to="/registration"> <span>Register</span> </Link>
                </div>   

                <div className="others-login-system">

                        <h3>Or</h3>
                        <p>login with </p>
                        <button className="google-login" onClick={handleGoogle}>Goolge</button>
                        <button className="github-login" onClick={handleGithub}>Github</button>
                        <button className="fb-login" onClick={handleFacebook}>Facebook</button>
                </div>

            </div>
        </div>
    );
};

export default Login;