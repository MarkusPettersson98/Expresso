export const calculateCartPrice = orderItems => {
    let total = 0;
    // check if the orderItem is an empty object using
    // https://coderwall.com/p/_g3x9q/how-to-check-if-javascript-object-is-empty
    if (Object.keys(orderItems).length) {
        // loop through object using https://stackoverflow.com/a/5737192
        console.log(Object.keys(orderItems));
        Object.keys(orderItems).forEach(function(key) {
            total = total + orderItems[key].coffee.price * orderItems[key].amount;
        });
    }
    return total;
};
