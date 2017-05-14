import React from 'react'

export default class extends React.Component {
  handleInput = (evt) => {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleSubmitAdd(this.state)
  }

  render() {
    return (
      <div className='add-idea-form'>
        <form>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Category</strong></label>
            <select name='category' onChange={this.handleInput} className='form-group new-line' id="select">
              <option></option>
              <option>Museum</option>
              <option>Arts</option>
              <option>Shopping</option>
              <option>Show</option>
              <option>Food</option>
              <option>Drink</option>
              <option>Other</option>
            </select>
          </div>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Name</strong></label>
            <input type='text' name='name' onChange={this.handleInput} className='form-control' />
          </div>
          <div className='form-group new-line'>
            <h3 className='control-label'><strong>When</strong></h3>  
            <label className='control-label'><em>Start</em></label>            
            <input type='datetime-local' name='start' onChange={this.handleInput} className='form-control' />
            <label className='control-label'><em>End</em></label>
            <input type='datetime-local' name='end' onChange={this.handleInput} className='form-control' />            
          </div>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Where</strong></label>
            <input type='text' name='where' onChange={this.handleInput} className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Price</strong></label>
            <input type='text' name='price' onChange={this.handleInput} className='form-control' />
          </div>
          <div className='center'>
            <button onClick={this.handleSubmit} className='btn btn-warning signup-btn'>Add Idea</button>
          </div>
        </form>
      </div>
    )
  }
}
