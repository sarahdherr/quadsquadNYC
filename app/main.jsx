'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import axios from 'axios'

import store from './store'
// import Jokes from './components/Jokes'
import LoginContainer from './containers/LoginContainer'
import SignupContainer from './containers/SignupContainer'
import LogoutContainer from './containers/LogoutContainer'
// import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Home from './components/Home'
import IdeasContainer from './containers/IdeasContainer'
import AppContainer from './containers/AppContainer'
import ProfileContainer from './containers/ProfileContainer'

import { stockIdeas } from './reducers/idea'
import { stockUserIdeas } from './reducers/user'

const onIdeasEnter = (nextRouterState) => {
  axios.get('/api/ideas')
    .then(ideas => store.dispatch(stockIdeas(ideas.data)))
    .catch(err => console.error(err))
}

const onProfileEnter = (nextRouterState) => {
  axios.get(`/api/ideas/${nextRouterState.id}`)
    .then(ideas => store.dispatch(stockUserIdeas(ideas.data)))
    .catch(err => console.error(err))
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={AppContainer}>
        <Route path='/home' component={Home} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/signup' component={SignupContainer} />
        <Route path='/logout' component={LogoutContainer} />
        <Route path='/ideas' component={IdeasContainer} onEnter={onIdeasEnter} />
        <Route path='/profile/:id' component={ProfileContainer} />
        <IndexRedirect to='/home' />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
