import React from 'react';
import Loader from './Loader';
import LoaderC from './LoaderC';
import './RequestList.css';
import RequestsDataService from '../services/RequestsDataService';
import PlotCard from './PlotCard';
import RequestCard from './RequestCard';
class Request extends React.Component {
    
    constructor(props){
          
        super(props);
        this.state = {
            requestListData : [],
            tempRequestListData : [],
            updated: true,
            search:"",
            isLoading : false

        }
    }

        componentDidMount() {
          
           this.getRequestData();
        }

        getRequestData = async () => {     
                try{
                    var snapshots =  await  RequestsDataService.getAllRequestsData();
                    var data = snapshots.docs.map((data)=>data.data().requests);
                    console.log(data)
                    this.setState({
                        requestListData : data[0],
                        tempRequestListData : data[0]
                    })                   
                }
                catch (err) {
                       console.log("check your internet connetion")
                }
        }


handleSearch = (evt) => {
  
   this.setState(()=>({
    search : evt.target.value
   }))
 this.makeSearch(evt.target.value);
}

makeSearch = (g) => {
   
    var k =  this.state.requestListData.filter((v)=>{
          if(v.plotNumber.localeCompare(g) === 0)
          {
            return v;
          } 
        return           })
        if(k.length === 0){
            this.setState({
               tempRequestListData :this.state. requestListData,
            })
            return
       }
       
           console.log(k)

           this.setState(()=>({
            tempRequestListData : k,
          
         }) )
}

     changePlotAvailability = async (plotNum) => {

      this.setState({
        isLoading : true
      })
            var tempPlotsData = this.state.requestListData.map((plotObj)=>{
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

          await RequestsDataService.updateRequestsData('tjepwaktliW5sPtRxDYz',A);
          this.getPlotsData();
    
     }





    render () {


        const loading = (this.state.isLoading)? <LoaderC></LoaderC> : ''
        return (
         
              (this.state.tempRequestListData.length == 0 )?
          <Loader></Loader>
           :
            <div className="PlotsList">
                {loading}
                <div className="PlotsListBody">
                    <div className="search"> <input autoComplete="off" type="search" name="search" id="search" value={this.state.search} placeholder="search your plot number" onChange={this.handleSearch}></input>    </div>
               
                <> {this.state.tempRequestListData.map((v)=>{
              return  <RequestCard plotNumber = {v.plotNumber}  name={v.name} email={v.email} phone={v.phone} ></RequestCard>
       })}</>
                </div>
               
            </div>
           
        )
    }

}

export default Request;