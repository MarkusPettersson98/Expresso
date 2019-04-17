/*
 * action types
 */

export const CART_ADD_COFFEE = 'CART_ADD_COFFEE'

/*
 * other constants
 */



/*
 * action creators
 */

export function addCoffee(coffee) {
  return { type: CART_ADD_COFFEE, coffee }
}
