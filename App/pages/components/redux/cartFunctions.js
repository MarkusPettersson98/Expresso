export const calculateCartPrice = orderItems => {
    // Iterate over all keys (coffeeids). For every unique coffeeid, calculate total cost for that coffee
    // variant and add to total cost

    const totalOrderItemPrice = orderItem => orderItem.coffee.price * orderItem.amount;

    return Object.keys(orderItems).reduce(
        (currentTotalPrice, key) => {
            const orderItem = orderItems[key];
            return currentTotalPrice + totalOrderItemPrice(orderItem);
        }, 0);

};

export const calculateCartAmount = orderItems => {
    // Iterate over all keys (coffeeids). For every unique coffeeid, check how many coffees
    // there are in cart and add to total amount

    const totalOrderItemAmount = orderItem => orderItem.amount;

    return Object.keys(orderItems).reduce(
        ((currentTotalAmount, key) => {
            const orderItem = orderItems[key];
            return currentTotalAmount + totalOrderItemAmount(orderItem);
        }), 0);
};
