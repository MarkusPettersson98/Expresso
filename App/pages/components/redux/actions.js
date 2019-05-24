/*
 * action types
 */
export const CART_ADD_COFFEE = 'CART_ADD_COFFEE';
export const CART_CLEAR = 'CART_CLEAR';
export const ITEM_INCREMENT = 'ITEM_INCREMENT';
export const ITEM_DECREMENT = 'ITEM_DECREMENT';
export const ADD_SHOP = 'ADD_SHOP';

/*
 * other constants
 */

/*
 * action creators
 */

export function incrementCoffee(coffee) {
    return { type: ITEM_INCREMENT, coffee };
}

export function decrementCoffee(coffee) {
    return { type: ITEM_DECREMENT, coffee };
}

export function addCoffee(coffee, amount = 1) {
    return { type: CART_ADD_COFFEE, coffee, amount };
}

export function clearCart() {
    return { type: CART_CLEAR };
}

export function addShop(shop) {
    return { type: ADD_SHOP, shop };
}
