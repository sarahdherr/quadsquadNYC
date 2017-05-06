import React from 'react'
import { Link } from 'react-router'

const Login = ({ login }) => (
  <div className='container center'>
    <div className='col-lg-4' />
    <div className='col-lg-4 single-img'>
      <img src='https://www.ymcanyc.org/i/images/mosaic-images/vtour_4.jpg/@mx_350' />
    </div>
    <form className='col-lg-12 small-top-pad' onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
    } }>
      <div className="form-group new-line">
        <label className="control-label">Email</label>
        <input type="text" className="form-control" id="inputDefault" />
      </div>
      <div className="form-group new-line">
        <label className="control-label">Password</label>
        <input type="password" className="form-control" id="inputDefault" />
      </div>
      <div className='center'>
        <button type='submit'>Login</button>
      </div>
      <p>Or, <Link to='/signup'>create an account</Link>.</p>
    </form>
  </div>
)

export default Login

// import {login} from 'APP/app/reducers/auth'
// import {connect} from 'react-redux'

// export default connect(
//   state => ({}),
//   {login},
// )(Login)
