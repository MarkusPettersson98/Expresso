import { combineReducers } from 'redux';
import {
    CART_ADD_COFFEE,
    CART_CLEAR,
    ITEM_DECREMENT,
    ITEM_INCREMENT,
} from './actions';

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
export const INITIAL_STATE = {};

export function cart(orderItems = INITIAL_STATE, action) {
    let existingItem;
    let id;
    switch (action.type) {
        case CART_ADD_COFFEE:
            id = action.coffee.id;
            existingItem = orderItems[id];
            return Object.assign({}, orderItems, {
                [id]: {
                    coffee: action.coffee,
                    amount: existingItem ? existingItem.amount + 1 : 1,
                },
            });
        case ITEM_INCREMENT:
            id = action.orderItem.coffee.id;
            existingItem = orderItems[id];

            return Object.assign({}, orderItems, {
                [id]: {
                    coffee: action.orderItem.coffee,
                    amount: existingItem ? existingItem.amount + 1 : 1,
                },
            });
        case ITEM_DECREMENT:
            id = action.orderItem.coffee.id;
            existingItem = orderItems[id];
            if (existingItem.amount == 1) {
                // Delete item
                let newState = Object.assign({}, orderItems);
                delete newState[id];
                return newState;
            }
            return Object.assign({}, orderItems, {
                [id]: {
                    coffee: action.orderItem.coffee,
                    amount: existingItem ? existingItem.amount - 1 : 1,
                },
            });
        case CART_CLEAR:
            return {};
        default:
            return orderItems;
    }
}

const expressoApp = combineReducers({
    cart,
});

export default expressoApp;
