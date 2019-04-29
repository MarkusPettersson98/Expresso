/*
 * action types
 */
export const CART_ADD_COFFEE = 'CART_ADD_COFFEE';
export const CART_CLEAR = 'CART_CLEAR';
export const ITEM_INCREMENT = 'ITEM_INCREMENT';
export const ITEM_DECREMENT = 'ITEM_DECREMENT';

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

export function addCoffee(coffee) {
    return { type: CART_ADD_COFFEE, coffee };
}

export function clearCart() {
    return { type: CART_CLEAR };
}
