import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './config/firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
       auth
         .signInWithPopup(provider)
         .then((result) =>{

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user)
         })
         .catch((error) => alert(error.message))
     } 
    
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt="logo"
                />
            <h1>Facebooki</h1>
            
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
           
        </div>
    )
}

export default Login
