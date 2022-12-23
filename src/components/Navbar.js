import React from "react";
import './Navbar.css';
import burger from '../assets/burger.svg'

class Navbar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            showNavbarItems : false,
            activeColor :  true
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
        this.setState({
            showNavbarItems : !this.state.showNavbarItems,
            activeColor:true
         })
    }
    page2 = () =>{
        console.log('page2')
        this.props.PageNumber(2)
        this.setState({
            showNavbarItems : !this.state.showNavbarItems,
            activeColor:false
         })
    }

    render () {
       
         const page1Color  = this.state.activeColor? '#1DA1F2' : 'white'
         const page2Color  = this.state.activeColor?  'white' : '#1DA1F2'

        const Items = this.state.showNavbarItems? " NavbarItems show" :'NavbarItems'
        return (
            <div className="Navbar">
   <div className="Brand">
     Botanica
    </div>

    <div className="NavbarLinkToggle"  onClick={this.showNavbarItems}>
    <img className="NavbarLinkToggle" src={burger}></img>
    </div>

  <nav className={Items}>
    <div className="NavbarLink" onClick={this.page1} style={{color : page1Color} }>
       Plots
    </div>
    <div className="NavbarLink" onClick={this.page2} style={{color : page2Color}}>
     Requests
    </div>

    <div className="SignOut" onClick={this.handleSignOut}>Sign Out</div>
  </nav>
</div>
        )
    }
}

export default Navbar;