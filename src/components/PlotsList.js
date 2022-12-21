import React from "react";
import PlotCard from "./PlotCard";
import './PlotsList.css';

class PlotsList extends React.Component {

    render () {
        return (
            <div className="PlotsList">
                <div className="PlotsListBody">
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                <PlotCard></PlotCard>
                </div>
            </div>
        )
    }

}
export default PlotsList;