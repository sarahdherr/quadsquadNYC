import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  ideas: require('./idea').default,
  user: require('./user').default
})

export default rootReducer
