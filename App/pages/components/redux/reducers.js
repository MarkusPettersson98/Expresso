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

// const cart = {
//     quantity: 0,
//     totalPrice: 0,
//     items: [orderItems],
// };

// const orderItem = {
//     id: 123,
//     name: "bryggkaffe",
//     price: 0,
//     quantity: 0,
//     ownMug: false,
// };

export const INITIAL_STATE = {};
export const INITIAL_CART_STATE = {
    price: 0,
    amount: 0,
    orderItems: [],
};

export function cart(cart = INITIAL_CART_STATE, action) {
    console.log('reducers', cart);

    switch (action.type) {
        case CART_ADD_COFFEE: {
            const coffee = action.coffee;

            const existingOrderItem = cart.orderItems.find(
                orderItem => orderItem.coffee.id === coffee.id,
            );
            // If order item already exists, just return cart as is
            if (existingOrderItem) {
                return cart;
            }

            // Create a new order item (add quantity to a coffee)
            const newOrderItem = {
                coffee: coffee,
                amount: 1,
            };

            // Copy old orderItems from cart and add the new orderItem
            const newOrderItems = [...cart.orderItems, newOrderItem];
            const newCartPrice = cart.price + newOrderItem.coffee.price;
            const newCartAmount = cart.amount + 1;

            // Return the updated cart state
            return {
                ...cart,
                orderItems: newOrderItems,
                price: newCartPrice,
                amount: newCartAmount,
            };
        }

        case ITEM_INCREMENT: {
            const coffee = action.coffee;

            // Increment amount of existing orderItem by one
            const match = orderItem => orderItem.coffee.id === coffee.id;

            const newOrderItems = mapSome(
                cart.orderItems,
                match,
                incrementAmount,
            );

            // Return a new cart object with updated state
            return {
                ...cart,
                orderItems: newOrderItems,
            };
        }
        case ITEM_DECREMENT: {
            const coffee = action.coffee;

            // Decrement amount of existing orderItem by one
            const match = orderItem => orderItem.coffee.id === coffee.id;

            const newOrderItems = mapSome(
                cart.orderItems,
                match,
                decrementAmount,
            );

            return {
                ...cart,
                orderItems: newOrderItems,
            };
        }
        case CART_CLEAR: {
            return {};
        }
        default:
            return cart;
    }
}

// Increment amount of orderItem by one
const incrementAmount = orderItem => {
    return {
        ...orderItem,
        amount: orderItem.amount + 1,
    };
};

// Decrement amount of orderItem by one
const decrementAmount = orderItem => {
    return {
        ...orderItem,
        amount: orderItem.amount - 1,
    };
};

// Selectively apply a function on items for which predicate is truthy
const mapSome = (array, predicate, fun) => {
    return array.map(item => {
        return predicate(item) ? fun(item) : item;
    });
};

const expressoApp = combineReducers({
    cart,
});

export default expressoApp;
