export const receipt = {
    totalAmount: 2,
    coffees: [
        {
            amount: 2,
            coffee: [
                {
                    description: 'Bränt kaffe från hubben',
                    id: 123,
                    name: 'Brygg',
                    price: 12,
                },
            ],
        },
        {},
    ],
    date: 20190510,
    totalPrice: 28,
    shop: 'Bulten',
};

export default (allData = {
    receipt: receipt,
});
