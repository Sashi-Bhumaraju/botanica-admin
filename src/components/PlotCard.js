import React from "react";
import './PlotCard.css';
import pen from '../assets/pen.svg';
import PlotCardForm from './PlotsCardForm.js';

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
            showModal : true,
            showMore: false
        })
    }

    closeModal = () => {
        this.setState({
            showModal : this.props.PlotCardFormShow
        } )
    }
    handleToggle = () => {
        this.setState(prevState => ({
          showMore: !prevState.showMore
        }));
      };
    
 handleChangePlotAvailability = async () => {
  await  this.props.changePlotAvailability(this.props.PlotNum);
 }

    render(){
        const pcf =  <PlotCardForm PlotNum={this.props.PlotNum} Facing={this.props.Facing} Dimension={this.props.Dimension} Size={this.props.Size} handleToggle={this.handleToggle} changePlotData={this.props.changePlotData} getPlotsData={this.props.getPlotsData} plotsMapListData={this.props.plotsMapListData} ></PlotCardForm>;
        const status = this.props.Available? <div className="available">Available</div>  : <div className="sold">Sold</div>
        const PlotcardClass = "PlotCard";
        const PlotsCardF = this.state.showMore? pcf : '';
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

                    <div className="Pen" onClick={this.handleToggle}>
                       <img className="PenBody" src={pen}></img>
                    </div>
                 
                  </div>
                  {PlotsCardF}
            </div>
            </> 
        );
    }

}
export default PlotCard;