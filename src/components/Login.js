import React from "react";
import { GoogleButton} from "react-google-button";
import "./Login.css";
import showcase from "../assets/showcase.png"
import googleOneTap from "google-one-tap";
import {  GoogleAuthProvider, signInWithPopup, signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";
import AdminEmail from "../services/plots-data.services.js"
import { async } from "@firebase/util";
import Loader from './Loader'

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
            currentUser : null,
            error : false,
            loading : true
        }
    }

    googleSignIn = () => {
        this.setState({error:false})
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
    }

  async  componentDidMount () {
    this.setState({error:false})
     await  this.VarifyAdmin();
   
    }


    VarifyAdmin = async () => {
        
       onAuthStateChanged(auth, async (user)=> {

             var adminEmailArrayRef = await AdminEmail.getAllAdminEmailData()
             var adminEmails = adminEmailArrayRef.docs.map((docc)=>docc.data().emails);

            adminEmails.map(async (email)=>{

                var flag = true;
                for(let i = 0 ; i < email.length; i++){

                    if(email[i].localeCompare(user?.email)==0) {
                        flag = false
                        // console.log(user?.email)
                        this.props.goToHome(true);
                        this.setState({
                            currentUser : user,
                            error : false,
                            loading:false

                          })
                          console.log(user?.email)
                          break;
                         }  }
              if ( flag) {
             
               {
                 if(this.state.loading) {
                    await  signOut(auth);
              
                    this.setState({
                     currentUser : null,
                     loading:false
                    })

                 }
                 else {
                    await  signOut(auth);
              
                    this.setState({
                     currentUser : null,
                     error : true,
                     loading:false
                    })
                 }
                    
                   }
            
            


              }


            })

        })
    }

   render () {
      
        const alert = this.state.error? <div className="error"> select valid admin email to login </div> : ''
        const ele = this.state.loading? <Loader></Loader> :<>  <img className="LoginShowacase" src="https://source.unsplash.com/random/?botanica"></img>   
        <div className="Login"> 
          <div className="LoginHeading">Login</div>
          <GoogleButton style={{backgroundColor: '#20232a'}} onClick={this.googleSignIn}></GoogleButton>
          {alert}
          <div className="LoginText">Only silpa raghava botanica admins can login here</div>
        </div></>

        return (
            <div className="LoginPage">
               {ele}
            </div>
           
        )
    }
}

export default Login;