import { combineReducers } from 'redux';
import { CART_ADD_COFFEE, ITEM_DECREMENT, ITEM_INCREMENT } from './actions';
import { brygg_kaffe } from '../dummy-data';

const INITIAL_STATE = [{ coffee: brygg_kaffe, amount: 1 }];

function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CART_ADD_COFFEE:
            return [...state, { coffee: action.coffee, amount: 1 }];

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
