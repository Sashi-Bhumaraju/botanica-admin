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
            tempPlotsMapListData : [],
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

              var    temp3 = temp2[0].sort((a,b)=>{return +a.name -  +b.name})
              this.setState({
                plotsMapListData : temp3
              })

                    // sessionStorage.setItem("plots", JSON.stringify(temp2[0]));
                    setTimeout(()=> {
                        this.setState({
                            tempPlotsMapListData : this.state.plotsMapListData,
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
  s = ''
handleSearch = (evt) => {
  
   this.setState(()=>({
    search : evt.target.value
   }))
 this.makeSearch(evt.target.value);
}

makeSearch = (g) => {
   
    
    
    var k =  this.state.plotsMapListData.filter((v)=>{
        // console.log(v.name,this.state.search)
          if(v.name.localeCompare(g) === 0)
          {
            return v;
            console.log(",,,,,,,,,,")
          } 
        return           })
        if(k.length === 0){
            this.setState({
               tempPlotsMapListData :this.state. plotsMapListData,
            //    search : '',

            })
            return
       }
       
           console.log(k)

           this.setState(()=>({
            tempPlotsMapListData : k
         }) )
}

    render () {


        // const PlotsList =<> {this.state.plotsMapListData.map((v)=>{
        //      console.log(v.name)
        // })}</>
        return (
         
              (this.state.tempPlotsMapListData.length == 0)?
           <Loader></Loader> 
           :
        
        



        
            <div className="PlotsList">
                <div className="PlotsListBody">
                    <div className="search"> <input autoComplete="off" type="search" name="search" id="search" value={this.state.search} placeholder="search with plot number" onChange={this.handleSearch}></input>    </div>
                
                <> {this.state.tempPlotsMapListData.map((v)=>{
              return <PlotCard PlotNum= {v.name} Facing={v.facing} Available={v.available}   ></PlotCard>
       })}</>
                </div>
            </div>
        )
    }

}
export default PlotsList;