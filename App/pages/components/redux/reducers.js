import { combineReducers } from 'redux';
import { CART_ADD_COFFEE, CART_CLEAR, ITEM_DECREMENT, ITEM_INCREMENT } from './actions';

/*
  INITIAL_STATE
  An object with key: coffeeId and value is an object that contains
  coffee type and amount.
  {
    123: {coffee: {...}, amount: 1},
    124: {coffee: {...}, amount: 5},
    ...
  }
*/
const INITIAL_STATE = {};

function cart(orderItems = INITIAL_STATE, action) {
    let existingItem;
    switch (action.type) {
        case CART_ADD_COFFEE:
          existingItem = orderItems[action.coffee.id];
          return Object.assign({}, orderItems,
            {[action.coffee.id]: { coffee: action.coffee, amount: existingItem ? existingItem.amount + 1 : 1 }}
          )
        case CART_CLEAR:
          return {};
        case ITEM_INCREMENT:
          existingItem = orderItems[action.coffee.id];
          return Object.assign({}, orderItems,
            {[action.coffee.id]: { coffee: action.coffee, amount: existingItem ? existingItem.amount + 1 : 1 }}
          )
        case ITEM_DECREMENT:
          existingItem = orderItems[action.coffee.id];
          if (existingItem.amount == 1) { // Delete item
            let newState = Object.assign({}, orderItems);
            delete newState[action.coffee.id];
            return newState
          }
          return Object.assign({}, orderItems,
            {[action.coffee.id]: { coffee: action.coffee, amount: existingItem ? existingItem.amount - 1 : 1 }}
          )
        default:
            return orderItems;
    }
}

const expressoApp = combineReducers({
    cart,
});

export default expressoApp;
