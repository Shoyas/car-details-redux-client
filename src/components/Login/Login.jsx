import React, { useContext } from 'react';
import logo from '../Asset/image/New/carts/partner-2.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import googleLogo from '../Asset/image/New/carts/google.png';



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const googleHandleButton = () => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            // console.log(result.user.displayName);
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email: email};
            
            setLoggedInUser(signedInUser);
            // console.log(signedInUser);
            history.replace(from);
            
        }).catch((error) => {
            
        });
    }

    return (
        <section>
            <div className="text-center mt-5 mb-5">
                <Link to="/home">
                    <img src={logo} alt="" srcset=""/>
                </Link>
            </div>
            <div className="login-panel">
                <div className="text-center mt-5">
                    <h3 className="mt-3">Login</h3>
                    <button className="mt-3 btn btn-outline-warning" onClick={googleHandleButton}>
                        <img className="img-fluid google-img" src={googleLogo} alt=""/>
                        Login with google
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Login;