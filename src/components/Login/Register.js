import React, { useState } from 'react';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import firebaseInitialize from '../../firebase/firebase.authentication';

firebaseInitialize();
const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const handleRegistration = (e)=>{
        e.preventDefault();

        if(password.length < 6){
           setError('Password should be at least 6 characters');
            return;
        }

        if(isLogin){
            ProcceLogin(email, password);
        }
        else{
            CreatNewRegister(email, password);
        }
    }

    const ProcceLogin = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then(result =>{
                console.log(result.user);
                setError('');
            })
            .catch(error =>{
                setError(error.massage);
            })

    }

    const CreatNewRegister = (email, password) =>{

        createUserWithEmailAndPassword(auth, email, password)
            .then(result =>{
                setError('');
                setUserNmae();
            })
            .catch((error) => {
                setError(error.massage);
            })

    }

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
        console.log(email, password);
    }

    const toggleLogin = (e) =>{
            setIsLogin(e.target.checked)
    }

    const setUserNmae = () =>{
        updateProfile(auth.currentUser, {displayName:name})
            .then(result => {} )  

    }

    return (
        <div className="form-style">
            <form onSubmit={handleRegistration}>

             <h2 className="text-primary" >Please, {isLogin ? "Login" : " Register"} </h2>

             {
                 !isLogin && <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                 <div className="col-sm-10">
                 <input onBlur={handleName} type="text" className="form-control" id="inputEmail3" required/>
                 </div>
             </div>
             }
            
            <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required/>
                </div>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3" required/>
                </div>
            </div>
            
            <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                    </label>
                </div>
                </div>
            </div>

            <div className="row mb-3 text-danger">{error}</div>

            <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register" }</button>
</form>
        </div>
    );
};

export default Login;