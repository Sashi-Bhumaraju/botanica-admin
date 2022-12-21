import React from "react";
import './Home2.css';
import Navbar from "./Navbar";

class Home2 extends React.Component {


    render () {
        return (
            <div>
                <Navbar SignOut={this.props.SignOut} ></Navbar>
            </div>
        )
    }
}

export default Home2;