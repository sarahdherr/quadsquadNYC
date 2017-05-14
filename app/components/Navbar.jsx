import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  // console.log(props)
  return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to='/home'>Quad Squad</Link>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to='/ideas'>Ideas</Link></li>
          {/*<li><Link to={`/ideas/${props.user}`}>My Ideas</Link></li>*/}
        </ul>
        <ul className="nav navbar-nav navbar-right">
          {
            props.user
            ? (<li><Link to='/logout'>Logout</Link></li>)
            : (<li><Link to='/login'>LogIn</Link></li>)
          }
        </ul>
      </div>
    </div>
  </nav>
  )}
