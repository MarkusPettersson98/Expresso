import { combineReducers } from 'redux';
import { CART_ADD_COFFEE, ITEM_DECREMENT, ITEM_INCREMENT } from './actions';

const INITIAL_STATE = [];

// TODO: what will need to be done when multiple coffees with different ID.s arrive,
// write a check in CART_ADD_COFFEE that checks if the id already is in the orderItems-Array,
// using for example :
//               if (!orderItems.length || (check if action.coffee.id is in orderItems))

function cart(orderItems = INITIAL_STATE, action) {
    switch (action.type) {
        case CART_ADD_COFFEE:
            if (!orderItems.length ) {
                return [...orderItems, { coffee: action.coffee, amount: 1 }];
            }

        // else =>
        case ITEM_INCREMENT:
            // traverse orderItems and check where id:s match, return copied state with incremented item amount.
            return orderItems.map(item => {
                if (item.coffee.id === action.coffee.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
        case ITEM_DECREMENT:
            return orderItems.map(item => {
                if (item.coffee.id === action.coffee.id) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            });
        default:
            return orderItems;
    }
}

const expressoApp = combineReducers({
    cart,
});

export default expressoApp;
