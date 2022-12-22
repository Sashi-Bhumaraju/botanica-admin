import React from "react";
import PlotCard from "./PlotCard";
import './PlotsList.css';
import plotsDataServices
 from "../services/plots-data.service";
 import Loader from './Loader'

class PlotsList extends React.Component {

    
    constructor(props){
          
        super(props);
        this.state = {
            
            // active:false,
            // showCard:false,
            // formPlotNum:0,
            plotsMapListData : [],
            updated: true,
            search:""
        }
    }

        componentDidMount() {
          
           this.getPlotsData();
        }

        getPlotsData = async () => {
             var data = [];
             var temp = [];
             var temp2 = [];        
            //  let plots = await sessionStorage.getItem("plots") || null;
            // console.log('llllllllll,',plots)
            // if(plots === null || plots === 'undefined') {
              
                try{
                    data = await plotsDataServices.getAllPlotsData();
                    temp = data.docs.map((doc) => ({...doc.data()}))
                    temp2 = temp.map((doc)=>doc.plots)
                 console.log(temp2[0])
                    // sessionStorage.setItem("plots", JSON.stringify(temp2[0]));
                    setTimeout(()=> {
                        this.setState({
                            plotsMapListData : temp2[0],
                            // updated : false
                        })
                      },2000)
                   
                }
                catch (err) {
                       console.log("check your internet connetion")
                }
                
              
            // }      
            // else 
            // {
            //     console.log('llllllll',"yers")
            //    setTimeout(()=>{
            //     this.setState({
            //         plotsMapListData : JSON.parse(plots),
            //         updated : false
            //     })
            //    },2000)
             

            
            // }
        }





putToDatabase = () => {

    //  plotsDataServices.addPlotsData(A);

}

handleSearch = (evt) => {
   this.setState({
    search : evt.value
   })
}

    render () {


        const PlotsList =<> {this.state.plotsMapListData.map((v)=>{
             console.log(v.name)
        })}</>
        return (
         
              (this.state.plotsMapListData.length == 0)?
           <Loader></Loader> 
           :
        
        



        
            <div className="PlotsList">
                <div className="PlotsListBody">
                    <div className="search"> <input type="search" name="search" id="search" value={this.state.search} placeholder="search with plot number" onChange={this.handleSearch}></input>    </div>
                
                <> {this.state.plotsMapListData.map((v)=>{
              return <PlotCard PlotNum= {v.name} Facing={v.facing} Available={v.available}   ></PlotCard>
       })}</>
                </div>
            </div>
        )
    }

}
export default PlotsList;