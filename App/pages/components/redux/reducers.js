import { combineReducers } from 'redux'
import { CART_ADD_COFFEE, ITEM_DECREMENT, ITEM_INCREMENT } from './actions'
import { brygg_kaffe } from '../dummy-data';

const INITIAL_STATE = [{coffee : brygg_kaffe, amount: 1}]

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CART_ADD_COFFEE:
      return [...state, {coffee: action.coffee, amount: 1}]

    case ITEM_INCREMENT:
      // find item, increment the counter.
      // return state
      // do use action.coffeeID
      console.log("increment", action.id)
      return state;
    case ITEM_DECREMENT:
      // find item, decrement the counter.
      // return state
      // do use action.coffeeID
      return state;
    default:
      return state
  }
}

const expressoApp = combineReducers({
  cart,
})

export default expressoApp
