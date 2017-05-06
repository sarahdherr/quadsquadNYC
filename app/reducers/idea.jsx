import axios from 'axios'

const initialState = {
  ideas: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case STOCK_IDEAS:
    return action.ideas
  }
  return state
}

const STOCK_IDEAS = 'STOCK_IDEAS'
export const stockIdeas = ideas => ({
  type: STOCK_IDEAS, ideas
})

export const signup = (user) =>
  dispatch =>
    axios.post('api/users', user)
      .then(() => dispatch(whoami()))
      .catch(err => console.error(err))

export const fetchIdeas = () =>
  dispatch =>
    axios.get('/api/ideas')
      .then(ideas => dispatch(stockIdeas(ideas)))
      .catch(err => console.error(err))

export default reducer
