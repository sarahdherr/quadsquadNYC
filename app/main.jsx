'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store from './store'
// import Jokes from './components/Jokes'
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import LogoutContainer from './containers/LogoutContainer'
// import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Ideas from './components/Ideas'

/* const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
)(
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
) */

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Home}>
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/logout' component={LogoutContainer} />
        <Route path='/ideas' component={Ideas} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
