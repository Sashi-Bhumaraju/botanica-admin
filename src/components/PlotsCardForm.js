import React from 'react';
import './PlotsCardForm.css';
import plotsDataServices from '../services/plots-data.service'
import Loader from './LoaderMini';

class PlotCardForm extends React.Component {
  state = {
    facing: this.props.Facing,
    dimension: this.props.Dimension,
    size: this.props.Size,
    isLoading:false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form values
  }

  changePlotData =  (plotNum,newFacing,newDimension,newSize) => {

   
          var tempPlotsData = this.props.plotsMapListData.map((plotObj)=>{
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

         plotsDataServices.updatePlotsData('jmsdc1RhDPrwoFBa7yZC',A);
        // await this.props.getPlotsData();
  
   }

   handleChangePlotData = () => {

    this.setState({
        isLoading : true
      })
      
    this.changePlotData(this.props.PlotNum,this.state.facing,this.state.dimension,this.state.size);
    this.props.getPlotsData();
    setTimeout(()=> this.props.handleToggle(),2000)
   }
  
  render() {
    const l = this.state.isLoading? <Loader></Loader> : '';
    const comp = this.state.isLoading? <div className='Loading'></div> : <> <form onSubmit={this.handleSubmit}>
                        <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="facing" placeholder='Facing' value={this.state.facing} onChange={this.handleChange} /></div>
                        <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="dimension" placeholder='Dimension' value={this.state.dimension} onChange={this.handleChange} /></div>
                        <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="size" placeholder='Size' value={this.state.size} onChange={this.handleChange} /></div>
                        {/* <button type="submit">Submit</button> */}
                    </form>
                    <div className="Buttons">
                            <div className='buttonCancel' onClick={this.props.handleToggle}>Cancel</div>
                            <div className='buttonSubmit' onClick={this.handleChangePlotData}>Update</div>
                    </div>  </>
    return (
        <div className='PlotCardForm'>
        {comp}
      </div>
    );
  }
}

export default PlotCardForm;