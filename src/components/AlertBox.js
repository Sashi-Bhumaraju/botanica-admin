import React  from "react";
import './AlertBox.css'
class AlertBox extends React.Component {
    static defaultProps = {
        message : 'sample message',
        feedbackFuntion : ()=>{},
        showAlert : ()=>{}
    }

    render () {
        return (
          <div className="AlertBox">
            <div className="AlertBoxCard">
                <div className="AlertBoxCardMessage">{this.props.message}</div>
                <div className="AlertBoxCardOptions">
                    <div className="Cancel" onClick={()=>{this.props.showAlert(false)}}>Cancel</div>
                    <div className="Ok" onClick={()=>{this.props.feedbackFuntion()}}>Delete</div>
                </div>
            </div>
          </div>
        );
    }
}

export default AlertBox;