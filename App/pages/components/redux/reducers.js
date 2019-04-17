import { combineReducers } from 'redux'
import { CART_ADD_COFFEE } from './actions'
import { brygg_kaffe } from '../dummy-data';

const INITIAL_STATE = [
  brygg_kaffe,
]

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_ADD_COFFEE:
      return [...state, action.coffee]
    default:
      return state
  }
}

const expressoApp = combineReducers({
  cart,
})

export default expressoApp
