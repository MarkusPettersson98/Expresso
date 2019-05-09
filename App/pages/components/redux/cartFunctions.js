export const calculateCartPrice = orderItems => {
    // Iterate over all keys (coffeeids). For every unique coffeeid, calculate total cost for that coffee
    // variant and add to total cost

    const totalOrderItemPrice = orderItem =>
        orderItem.coffee.price * orderItem.amount;

    return orderItems.reduce((currentTotalPrice, orderItem) => {
        return currentTotalPrice + totalOrderItemPrice(orderItem);
    }, 0);
};

export const calculateCartAmount = orderItems => {
    // Iterate over all keys (coffeeids). For every unique coffeeid, check how many coffees
    // there are in cart and add to total amount

    const totalOrderItemAmount = orderItem => orderItem.amount;

    return orderItems.reduce((currentTotalAmount, orderItem) => {
        return currentTotalAmount + totalOrderItemAmount(orderItem);
    }, 0);
};
