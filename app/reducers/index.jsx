import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  idea: require('./idea').default
})

export default rootReducer
