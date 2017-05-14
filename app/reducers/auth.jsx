import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const signup = (user) =>
  dispatch =>
    axios.post('api/users', user)
      .then(user => dispatch(login(user.email, user.password)))
      .then(() => browserHistory.push('/ideas'))
      .catch(err => console.error(err))

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/ideas'))
      .catch(err => console.error(err))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => browserHistory.push('/home'))
      .catch(err => console.error(err))
      
export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export default reducer
