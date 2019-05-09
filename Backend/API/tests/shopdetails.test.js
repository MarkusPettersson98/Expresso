const api = require("../api").testable;
const { shops } = require("../../Database/newData");

test("Get the requested shop back", () => {
    const shop = "Bulten";
    const foundShop = api.lookUpShop(shop).name;
    expect(foundShop).toBe(shop);
});

test("Indicate that shop does not exists if requesting unlisted shop", () => {
    const shop = "Bulten234";
    const foundShop = api.lookUpShop(shop);
    expect(foundShop).toBe(false);
});

test("Get the correct coffee assortment from a shop", () => {
    const shopName = "Bulten";
    const shop = shops.find(shop => {
        return shop.name === shopName;
    });
    const shopDrinkList = shop.drinkList;

    const foundCoffee = api.lookUpCoffee(shopName);
    expect(foundCoffee).toBe(shopDrinkList);
});

test("Indicate that coffee assortment from unlisted shop does not exist", () => {
    const shop = "Bulten123";
    const foundCoffee = api.lookUpCoffee(shop);
    expect(foundCoffee).toBe(false);
});
