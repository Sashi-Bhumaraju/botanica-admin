import React from "react";
import './Home2.css';
import Navbar from "./Navbar";
import PlotsList from "./PlotsList";
import Request from './Request'

class Home2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumber : 1
        }
    }

    PageNumber = (num) => {
            this.setState({
                pageNumber : num
            })
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    }


    render () {
        const  body = (this.state.pageNumber == 1)? <PlotsList></PlotsList> : <Request></Request>

        return (
            <div>
                <Navbar SignOut={this.props.SignOut} PageNumber = {this.PageNumber} ></Navbar>
                {body}
            </div>
        )
    }
}

export default Home2;