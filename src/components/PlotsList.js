import React from "react";
import PlotCard from "./PlotCard";
import './PlotsList.css';
import plotsDataServices
 from "../services/plots-data.service";
 import Loader from './Loader'
import { async } from "@firebase/util";
import { TwitterAuthProvider } from "firebase/auth";
import LoaderC from "./LoaderC";


class PlotsList extends React.Component {

      
    constructor(props){
          
        super(props);
        this.state = {
            
            // active:false,
            // showCard:false,
            // formPlotNum:0,
            plotsMapListData : [],
            tempPlotsMapListData : [],
            updated: true,
            search:"",
            isLoading : false

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

              var    temp3 = temp2[0].sort((a,b)=>{return +a.name -  +b.name})
              this.setState({
                plotsMapListData : temp3
              })

                    // sessionStorage.setItem("plots", JSON.stringify(temp2[0]));
                    setTimeout(()=> {
                        this.setState({
                            tempPlotsMapListData : this.state.plotsMapListData,
                            isLoading : false
                           
                            // updated : false
                        })
                      },2000)
                   
                }
                catch (err) {
                       console.log("check your internet connetion")
                }
        }





putToDatabase = () => {

    //  plotsDataServices.addPlotsData(A);

}
  s = ''
handleSearch = (evt) => {
  
   this.setState(()=>({
    search : evt.target.value
   }))
 this.makeSearch(evt.target.value);
}

makeSearch = (g) => {
   
   
    
    var k =  this.state.plotsMapListData.filter((v)=>{
          if(v.name.localeCompare(g) === 0)
          {
            return v;
          } 
        return           })
        if(k.length === 0){
            this.setState({
               tempPlotsMapListData :this.state. plotsMapListData,
            })
            return
       }
       
           console.log(k)

           this.setState(()=>({
            tempPlotsMapListData : k,
          
         }) )
}

     changePlotAvailability = async (plotNum) => {

      this.setState({
        isLoading : true
      })
            var tempPlotsData = this.state.plotsMapListData.map((plotObj)=>{
                if(plotObj.name.localeCompare(plotNum) === 0)
                {
                  return {...plotObj, available : !plotObj.available}
                } 
                return plotObj;
            })

            var A = {
                'plots' : [...tempPlotsData]
            }
            console.log(A);

          await plotsDataServices.updatePlotsData('jmsdc1RhDPrwoFBa7yZC',A);
          this.getPlotsData();
    
     }

     changePlotData = async (plotNum,newFacing,newDimension,newSize) => {

      // this.setState({
      //   isLoading : true
      // })
            var tempPlotsData = this.state.plotsMapListData.map((plotObj)=>{
                if(plotObj.name.localeCompare(plotNum) === 0)
                {
                  return {...plotObj, facing : newFacing, dimension : newDimension, size : newSize  }
                } 
                return plotObj;
            })

            var A = {
                'plots' : [...tempPlotsData]
            }
            console.log(A);

          await plotsDataServices.updatePlotsData('jmsdc1RhDPrwoFBa7yZC',A);
          this.getPlotsData();
    
     }





    render () {


        const loading = (this.state.isLoading)? <LoaderC></LoaderC> : ''
        return (
         
              (this.state.tempPlotsMapListData.length == 0 )?
           <Loader></Loader> 
           :
            <div className="PlotsList">
                {loading}
                <div className="PlotsListBody">
                    <div className="search"> <input  autoComplete="off" type="search" name="search" id="search" value={this.state.search} placeholder="search your plot number" onChange={this.handleSearch}></input>    </div>
                
                <> {this.state.tempPlotsMapListData.map((v)=>{
              return <PlotCard key={v.name} PlotCardFormShow={false} PlotNum= {v.name} Facing={v.facing} Available={v.available} Size={v.size} Dimension={v.dimension}  changePlotAvailability={this.changePlotAvailability} changePlotData={this.changePlotData} getPlotsData={this.getPlotsData} plotsMapListData={this.state.plotsMapListData}></PlotCard>
       })}</>
                </div>
            </div>
        )
    }

}
export default PlotsList;