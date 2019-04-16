const api = require("../api").testable;
const testData = require("../../Database/data");

test('Get the requested shop back', () => {
    const shop = 'Bulten';
    const foundShop = api.lookUpShop(shop).name;
    expect(foundShop).toBe(shop);
});

test('Indicate that shop does not exists if requesting unlisted shop', () => {
    const shop = 'Bulten234';
    const foundShop = api.lookUpShop(shop);
    expect(foundShop).toBe(false);
});

test('Get the correct coffee assortment from a shop', () => {
    const shop = 'Bulten';
    const shopAssortment = testData.assortment.find(assortment => assortment.shop === shop).coffees;
    const foundCoffee = api.lookUpCoffee(shop);
    expect(foundCoffee).toBe(shopAssortment);
});

test('Indicate that coffee assortment from unlisted shop does not exist', () => {
    const shop = 'Bulten123';
    const foundCoffee = api.lookUpCoffee(shop);
    expect(foundCoffee).toBe(false);
});
