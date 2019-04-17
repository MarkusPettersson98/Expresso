import { combineReducers } from 'redux';
import { CART_ADD_COFFEE, ITEM_DECREMENT, ITEM_INCREMENT } from './actions';
import { brygg_kaffe } from '../dummy-data';

const INITIAL_STATE = [];

function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        // add basic coffee to cart
        case CART_ADD_COFFEE:
            if (!state.length /* || (check if action.coffee.id is in state)*/) {
                return [...state, { coffee: action.coffee, amount: 1 }];
            }

        // if the cart is not empty =>
        // fall through to increment already selected coffee

        // TODO: what will need to be done when multiple coffees with different ID.s arrive,
        // write a check as suggested above.

        case ITEM_INCREMENT:
            // here we traverse state orderItems and check where id:s match, where they match we increment.
            return state.map(item => {
                if (item.coffee.id === action.coffee.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
        case ITEM_DECREMENT:
            // here we traverse state orderItems and check where id:s match, where they match we decrement.
            return state.map(item => {
                if (item.coffee.id === action.coffee.id) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            });
        default:
            return state;
    }
}

const expressoApp = combineReducers({
    cart,
});

export default expressoApp;
