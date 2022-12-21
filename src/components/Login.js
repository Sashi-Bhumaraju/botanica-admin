import React from "react";
import { GoogleButton} from "react-google-button";
import "./Login.css";
import showcase from "../assets/showcase.png"
import googleOneTap from "google-one-tap";
import {  GoogleAuthProvider, signInWithPopup, signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

const options = {
    client_id : "616832706538-srg47qrbtiohda894hfovtru811i8ptr.apps.googleusercontent.com",
    auto_select : false,
    cancel_on_tap_outside : false,
    context : "signin"
}

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loginData : null
        }
    }

    googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)

    }

   render () {
      

        return (
            <div className="LoginPage">
             <img className="LoginShowacase" src={showcase}></img>   
            <div className="Login"> 
              <div className="LoginHeading">Login</div>
              <GoogleButton onClick={this.googleSignIn}></GoogleButton>
              <div className="LoginText">Only Silpa raghava botanica admins can login here</div>
            </div>
            </div>
           
        )
    }
}

export default Login;