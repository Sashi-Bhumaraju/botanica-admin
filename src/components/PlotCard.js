import React from "react";
import './PlotCard.css';

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
        
        }
    }

    openModal = () => {
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
        const request =<div className="requestButton" onClick={this.handleChangePlotAvailability}>{this.props.buttonText}</div> 
        // const modal = this.state.showModal? <Modal plotNumber={this.props.PlotNum} closeModalFuntion = {this.closeModal} ></Modal> : ''
        return(
            <>
            {/* {modal} */}
         
            <div className={PlotcardClass}>
                <div className="PlotBody">
                    <div className="plotNumber"> 
                        {/* <div className="PlotElementHeading">Plot No</div> */}
                      <div className="plotNumberBody">{this.props.PlotNum}</div> 
                        </div>
                    {/* <div className="plotElement"> 
                        <div className="PlotElementHeading">Facing    </div>
                        <div className="PlotElementBody">{this.props.Facing}</div>
                        </div> */}
                    {/* <div className="plotElement"> 
                        <div className="PlotElementHeading">Dimensions</div>
                        <div className="PlotElementBody">{this.props.Dimension}</div>
                        </div> */}
                    {/* <div className="plotElement"> 
                        <div className="PlotElementHeading">Size      </div>
                        <div className="PlotElementBody">{this.props.Size}</div>
                        </div> */}
                        <div className="plotStausElement"> 
                        {/* <div className="PlotStatusElementHeading">Status      </div> */}
                        <div className="PlotStatusElementBody">{status}</div>
                  </div>
                  {request}
                  </div>
                  

                
                 
            </div>
            </> 
        );
    }

}
export default PlotCard;