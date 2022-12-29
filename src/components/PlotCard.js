import React from "react";
import './PlotCard.css';
import pen from '../assets/pen.svg'

class PlotCard extends React.Component {

    static defaultProps = {
        Available : false,
        PlotNum : 0,
        Facing : 'east',
        Dimension : '0',
        Size:'0',
        buttonText : 'Change'
    }

    constructor(props) {
        super(props)
        this.state = {
            showModal : false, 
            checked: true 
        }
    }

    handleChanged = async() => {
        await  this.handleChangePlotAvailability()
        console.log("checking")
        this.setState({
                checked : !this.state.checked
            });
      }

    openModal =  () => {
    
        this.setState({
            showModal : true
        })
    }

    closeModal = () => {
        this.setState({
            showModal : false
        } )
    }

 handleChangePlotAvailability = async () => {
   
  await  this.props.changePlotAvailability(this.props.PlotNum);

 }

    render(){
        const status = this.props.Available? <div className="available">Available</div>  : <div className="sold">Sold</div>
        const PlotcardClass = "PlotCard";
        // const request =<div className="requestButton" onClick={this.handleChangePlotAvailability}>{this.props.buttonText}</div> 
        const request =      <div className="switch"   onClick={this.handleChanged}>
        <input
          type="checkbox"
          checked={this.props.Available}
          onChange={this.handleChanged}
         
        />
        <span className="slider"></span>
      </div>
        // const modal = this.state.showModal? <Modal plotNumber={this.props.PlotNum} closeModalFuntion = {this.closeModal} ></Modal> : ''
        return(
            <>
            {/* {modal} */}
         
            <div className={PlotcardClass}>
                <div className="PlotBody">

                    <div className="plotNumber"> 
                      <div className="plotNumberBody">{this.props.PlotNum}</div> 
                    </div>

                    <div className="plotStausElement"> 
                        <div className="PlotStatusElementBody">{status}</div>
                    </div>

                    {request}

                    <div className="Pen">
                       <img className="PenBody" src={pen}></img>
                    </div>
                 
                  </div>
            </div>
            </> 
        );
    }

}
export default PlotCard;