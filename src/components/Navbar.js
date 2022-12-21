import React from "react";
import './Navbar.css';
import burger from '../assets/burger.svg'

class Navbar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            showNavbarItems : false
        }
    }

    handleSignOut = () => {
        this.props.SignOut();
    }


    showNavbarItems = () => {
     this.setState({
        showNavbarItems : !this.state.showNavbarItems
     })
    }

    page1 = () =>{
        console.log("page1")
        this.props.PageNumber(1)
    }
    page2 = () =>{
        console.log('page2')
        this.props.PageNumber(2)
    }

    render () {
       

        const Items = this.state.showNavbarItems? " NavbarItems show" :'NavbarItems'
        return (
            <div className="Navbar">
   <div className="Brand">
      Botanica
    </div>

    <div className="NavbarLinkToggle" onClick={this.showNavbarItems}>
    <img className="NavbarLinkToggle" src={burger}></img>
    </div>

  <nav className={Items}>
    <div className="NavbarLink" onClick={this.page1}>
       Plots
    </div>
    <div className="NavbarLink" onClick={this.page2}>
     Requests
    </div>

    <div className="SignOut" onClick={this.handleSignOut}>Sign Out</div>
  </nav>
</div>
        )
    }
}

export default Navbar;