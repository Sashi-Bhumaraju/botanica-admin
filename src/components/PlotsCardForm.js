import React from 'react';
import './PlotsCardForm.css';

class PlotCardForm extends React.Component {
  state = {
    field1: '',
    field2: '',
    field3: ''
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

  render() {
    return (
        <div className='PlotCardForm'>
      <form onSubmit={this.handleSubmit}>
       <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="field1" placeholder='Facing' value={this.state.field1} onChange={this.handleChange} /></div>
       <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="field1" placeholder='Dimension' value={this.state.field1} onChange={this.handleChange} /></div>
       <div className='PlotCardFormBody'> <input className='PlotCardFormInput' type="text" name="field1" placeholder='Size' value={this.state.field1} onChange={this.handleChange} /></div>
        {/* <button type="submit">Submit</button> */}
      </form>
     <div className="Buttons">
     <div className='buttonCancel'>Cancel</div>
            <div className='buttonSubmit'>Update</div>
     </div>
           
      </div>
    );
  }
}

export default PlotCardForm;