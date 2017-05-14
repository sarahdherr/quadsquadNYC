import React from 'react'
import AddIdea from './AddIdea'
import store from '../store'
import {stockIdeas} from '../reducers/idea'
import axios from 'axios'
import strftime from 'strftime'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showAdd: false
    }
  }

  handleShowAdd = (evt) => {
    evt.preventDefault()
    this.setState({
      showAdd: !this.state.showAdd
    })
  }

  handleSubmitAdd = (newIdea) => {
    axios.post('/api/ideas', newIdea)
      .then(idea => {
        axios.get('/api/ideas')
          .then(ideas => store.dispatch(stockIdeas(ideas.data)))
          .catch(err => console.error(err))
      })
      .then(() => this.setState({ showAdd: false }))
      .catch(err => console.error(err))
  }

  render() {
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
            this.state.showAdd ? <AddIdea handleSubmitAdd={this.handleSubmitAdd} /> : <div></div>
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
                    <td>{strftime('%a, %D %l:%M %P', new Date(idea.start))} to {strftime('%a, %D %l:%M %P', new Date(idea.end))}</td>
                    <td>{idea.where}</td>
                    <td>{idea.price}</td>
                  </tr>
                )
              } )
            }
          </tbody>
        </table>
      </div>
    )
  }
}
