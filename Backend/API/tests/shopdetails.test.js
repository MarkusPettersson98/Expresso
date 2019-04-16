const api = require("../api").testable;
const testData = require("../../Database/data");

test('Get the requested shop back', () => {
    const shop = 'Bulten';
    const foundShop = api.lookUpShop(shop).name;
    expect(foundShop).toBe(shop);
});

test('Get the correct coffee assortment from a shop', () => {
    const shop = 'Bulten';
    const shopAssortment = testData.assortment.find(assortment => assortment.shop === shop).coffees;
    const foundCoffee = api.lookUpCoffee(shop);
    expect(foundCoffee).toBe(shopAssortment);
});
