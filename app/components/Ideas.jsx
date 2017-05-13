import React from 'react'
import AddIdea from './AddIdea'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdd: false
    }
    this.handleShowAdd = this.handleShowAdd.bind(this)
  }

  handleShowAdd(evt) {
    evt.preventDefault()
    this.setState({
      showAdd: !this.state.showAdd
    })
  }

  render() {
    console.log('props in ideas', this.props)
    return (
      <div>
        <h2 className='center'>All The Ideas</h2>
        <div className='new-btn-line'>
          <button onClick={this.handleShowAdd} className='add-button btn btn-warning'>
            { !this.state.showAdd ?
              '+' : 'x'
            }
          </button>
        </div>
        <div className='col-lg-12'>
          {
            this.state.showAdd ? <AddIdea /> : <div></div>
          }
        </div>
        <table className="table table-striped table-hover table-bordered table-padding center">
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Name</th>
              <th>When</th>
              <th>Where</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.ideas.length && this.props.ideas.map((idea, idx) => {
                return (
                  <tr key={idea.id}>
                    <td>{idx}</td>
                    <td>{idea.category}</td>
                    <td>{idea.name}</td>
                    <td>{idea.start} to {idea.end}</td>
                    <td>{idea.where}</td>
                    <td>{idea.price}</td>
                  </tr>
                )
              } )
            }
            
            <tr>
              <td>1</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
