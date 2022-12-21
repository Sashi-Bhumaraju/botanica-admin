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

    render () {
        if (window.innerWidth > 768) {this.showNavbarItems()}

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
    <div className="NavbarLink">
       Plots
    </div>
    <div className="NavbarLink">
     Requests
    </div>

    <div className="SignOut" onClick={this.handleSignOut}>Sign Out</div>
  </nav>
</div>
        )
    }
}

export default Navbar;