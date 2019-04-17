/*
 * action types
 */

export const CART_ADD_COFFEE = 'CART_ADD_COFFEE'
export const ITEM_INCREMENT = 'ITEM_INCREMENT'
export const ITEM_DECREMENT = 'ITEM_DECREMENT'

/*
 * other constants
 */



/*
 * action creators
 */

export function incrementCoffee(orderItem) {
  return {type: ITEM_INCREMENT, ...orderItem}
}

export function decrementCoffee(orderItem) {
  return {type: ITEM_DECREMENT, ...orderItem}
}


export function addCoffee(coffee) {
  return { type: CART_ADD_COFFEE, coffee }
}
