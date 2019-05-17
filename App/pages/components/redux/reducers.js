import { combineReducers } from 'redux';
import {
  CART_ADD_COFFEE,
  CART_CLEAR,
  ITEM_DECREMENT,
  ITEM_INCREMENT,
} from './actions';

import { calculateCartAmount, calculateCartPrice } from './cartFunctions';

export const INITIAL_CART_STATE = {
  price: 0,
  amount: 0,
  shopId: null,
  orderItems: [],
};

/*
orderItem: {
    amount: number,
    coffee: {
        price: number,
        id: number,
        description: string,
        ownMug: boolean
    },
};
*/

export const cart = function(currentCart = INITIAL_CART_STATE, action) {
  console.log('reducers', currentCart);

  const ownMugDiscount = 2;

  const coffee = action.coffee;
  const match = orderItem =>
    orderItem.coffee.id === coffee.id &&
    orderItem.coffee.ownMug === coffee.ownMug;

  switch (action.type) {
    case CART_ADD_COFFEE: {
      // If adding coffee from another café
      if (currentCart.shopId != null && currentCart.shopId != coffee.shopId) return currentCart;

      const existingOrderItem = currentCart.orderItems.find(match);

      // If order item already exists, call increment function instead
      if (existingOrderItem) {
        return cart(currentCart, { type: ITEM_INCREMENT, coffee });
      }

      // Create a new order item (add quantity to a coffee)
      const ownMugOption = coffee.ownMug;
      const newOrderItem = {
        //Reduce price with 2 kr if you have your own mug
        coffee: {
          ...coffee,
          ownMug: ownMugOption,
          price: ownMugOption ? (coffee.price - ownMugDiscount) : coffee.price,
        },
        amount: 1,
      };

      // Copy old orderItems from cart and add the new orderItem
      const newOrderItems = [...currentCart.orderItems, newOrderItem];
      const newCartPrice = calculateCartPrice(newOrderItems);
      const newCartAmount = calculateCartAmount(newOrderItems);

      // Return the updated cart state
      return {
        ...currentCart,
        orderItems: newOrderItems,
        price: newCartPrice,
        amount: newCartAmount,
        shopId: coffee.shopId,
      };
    }

    case ITEM_INCREMENT: {
      // Increment amount of existing orderItem by one
      const newOrderItems = mapSome(
        currentCart.orderItems,
        match,
        incrementAmount,
      );
      const newCartPrice = calculateCartPrice(newOrderItems);
      const newCartAmount = calculateCartAmount(newOrderItems);

      // Return the updated cart state
      return {
        ...currentCart,
        orderItems: newOrderItems,
        price: newCartPrice,
        amount: newCartAmount,
      };
    }
    case ITEM_DECREMENT: {
      // Decrement amount of existing orderItem by one
      let newOrderItems = mapSome(
        currentCart.orderItems,
        match,
        decrementAmount,
      );

      // Check if orderItem should be deleted
      const newAmount = newOrderItems.find(match).amount;
      if (newAmount <= 0) {
        // Remove orderItem (since amount is none or negative)
        newOrderItems = currentCart.orderItems.filter(
          orderItem => !match(orderItem),
        );
      }

      const newCartPrice = calculateCartPrice(newOrderItems);
      const newCartAmount = calculateCartAmount(newOrderItems);

      // Return the updated cart state
      return {
        ...currentCart,
        orderItems: newOrderItems,
        price: newCartPrice,
        amount: newCartAmount,
      };
    }
    case CART_CLEAR: {
      return INITIAL_CART_STATE;
    }
    default:
      return currentCart;
  }
};

// Increment amount of orderItem by one
const incrementAmount = orderItem => {
  const newAmount = orderItem.amount + 1;
  return {
    ...orderItem,
    amount: newAmount,
  };
};

// Decrement amount of orderItem by one
const decrementAmount = orderItem => {
  const newAmount = orderItem.amount - 1;
  // Else, just decrement orderItem amount by one
  return {
    ...orderItem,
    amount: newAmount,
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
