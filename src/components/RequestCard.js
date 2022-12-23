import React from "react";
import './RequestCard.css';

class RequestCard extends React.Component {

    static defaultProps = {
        plotNumber : 0,
        email : '',
        phone : '0',
        name:'0',
    }

    render(){
        const PlotcardClass = "RequestCard";
        return(
            <>
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
                  </div>
            </div>
            </> 
        );
    }

}
export default RequestCard;