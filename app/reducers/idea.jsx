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

export default reducer
