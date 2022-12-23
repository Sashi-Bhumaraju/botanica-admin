import React from "react";
import './RequestCard.css';
import  deleteIcon from '../assets/delete.svg'
import AlertBox from "./AlertBox";
import { async } from "@firebase/util";

class RequestCard extends React.Component {

    static defaultProps = {
        plotNumber : 0,
        email : '',
        phone : '0',
        name:'0',
    }
    constructor(props) {
        super(props);
        this.state = {
            showAlert : false
        }
    }

    showAlert = (isShowAlert) => {
        this.setState({
            showAlert : isShowAlert
        })
    }

    handleDeleteRequest = async () => {
      await  this.props.deleteRequest(this.props.plotNumber,this.props.phone);
       this.showAlert(false);
    }

    render(){
        const PlotcardClass = "RequestCard";
        const alertBox = this.state.showAlert? <AlertBox message = {'Customer request is permanently deleted'} feedbackFuntion={this.handleDeleteRequest} showAlert = {this.showAlert}></AlertBox> : ''
        return(
            <>
            {alertBox}
            <div className={PlotcardClass}>
                <div className="RequestBody">
                    <div className="RequestPlotNumber"> 
                      <div className="RequestPlotNumberBody">{this.props.plotNumber}</div> 
                    </div>

                    <div className="RequestData">
                        <div className="RequestDataBody">{this.props.name}</div>
                        <div className="RequestDataBody email">{this.props.email}</div>
                        <div className="RequestDataBody phone">{this.props.phone}</div>
                    </div>
                    <div className="Delete">
                    <img className="DeleteBody" src={deleteIcon} onClick={()=>{this.showAlert(true)}}></img>
                    </div>
                  
                  </div>
            </div>
            </> 
        );
    }

}
export default RequestCard;