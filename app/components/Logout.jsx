import React from 'react'
import { Link } from 'react-router'

const Logout = (props) => {
  return (
  <div className='center'>
    <h3>Logout of your account.</h3>
    <div>
      <button className='btn btn-primary signup-btn' onClick={props.logout}>Logout</button>
    </div>
  </div>
  )
}

export default Logout
