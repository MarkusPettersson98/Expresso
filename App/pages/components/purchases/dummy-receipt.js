export const receipt = {
    
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
    shop: 'Bulten',
    totalAmount: 2,
    totalPrice: 28,
    
};

export default (allData = {
    receipt: receipt,
});
