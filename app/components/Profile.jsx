import React from 'react'
import kittenArray from '../kittenPics'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.user) {
      const user = this.props.user
      if ( user.name && !user.img ) {
        user.img = kittenArray[Math.floor(Math.random() * kittenArray.length)]
      }
      this.setState({user: user})
    }
  }

  render() {
    const user = this.state.user ? this.state.user : {}
    return (
      <div>
        <div className='col-xs-2'></div>
        <div className='col-xs-3'>
          <div className='prof-card'>
            <img src={user.img} className='prof-img' />
          </div>
        </div>
        <div className='col-xs-2'></div>
        <div className='col-xs-4'>
          <h3 className='center'>{user.name}</h3>
          <p className='center'>{user.email}</p>
        </div>
        <div className='col-xs-12'>
          <h4>My Ideas</h4>
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
                this.props.ideas && this.props.ideas.map((idea, idx) => {
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
      </div>
    )
  }
  
}