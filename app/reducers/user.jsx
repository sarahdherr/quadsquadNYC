import axios from 'axios'

const initialState = {
  ideas: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case STOCK_USER_IDEAS:
    return action.ideas
  }
  return state
}

const STOCK_USER_IDEAS = 'STOCK_USER_IDEAS'
export const stockUserIdeas = ideas => ({
  type: STOCK_USER_IDEAS, ideas
})

export default reducer
