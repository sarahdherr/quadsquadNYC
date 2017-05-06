import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleInput(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.lot(this.state)
  }

  render() {
    return (
      <div className='add-idea-form'>
        <form>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Category</strong></label>
            <select className='form-group new-line' id="select">
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
            <input type='text' name='name' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <h3 className='control-label'><strong>When</strong></h3>  
            <label className='control-label'><em>Start</em></label>            
            <input type='datetime-local' name='name' className='form-control' />
            <label className='control-label'><em>End</em></label>
            <input type='datetime-local' name='name' className='form-control' />            
          </div>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Where</strong></label>
            <input type='text' name='name' className='form-control' />
          </div>
          <div className='form-group new-line'>
            <label className='control-label'><strong>Price</strong></label>
            <input type='text' name='name' className='form-control' />
          </div>
          <div className='center'>
            <button className='btn btn-warning signup-btn'>Add Idea</button>
          </div>
        </form>
      </div>
    )
  }
}
