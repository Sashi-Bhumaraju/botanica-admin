import React from 'react';
import './Home.css'
import Navbar from './Navbar';
import { auth } from "../firebase-config";
import Login from './Login';
import Home2  from './Home2';
import {  GoogleAuthProvider, signInWithPopup, signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";

class Home extends React.Component {

    constructor ( props ) {
        super (props) 
        this.state = {
            goToHome : false
        }
    }

    handleGoToHome = (value) => {
        this.setState({
            goToHome : value
        })
    }

    handleSignOut = async () => {
        await  signOut(auth);
        this.setState({
            goToHome :false
        })
    }


    render () {
           const ele =  this.state.goToHome?<Home2 SignOut={this.handleSignOut}></Home2> :  <Login goToHome = {this.handleGoToHome} ></Login>  
        return (
           <div>
             {ele}
           </div>
          
        )
    }

}

export default Home;