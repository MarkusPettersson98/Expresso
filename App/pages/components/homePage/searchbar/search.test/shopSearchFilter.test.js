import { shopPartialMatch, shopSearchFilter } from '../ShopSearchbar';

import {
    shops
} from './search-dummy-data';

const cutInHalf = (word) => word.slice(0, (word.length / 2));

const someShop = shops[0];
const shopName = someShop.name;
const halfShopName = cutInHalf(shopName);

/* Partial match */
test('match shop object against shopname', () => {
    const match = shopPartialMatch(someShop, shopName);
    expect(match).toBeTruthy();
});

test('match shop object against substring of shopname', () => {
    const match = shopPartialMatch(someShop, halfShopName);
    expect(match).toBeTruthy();
});

/* Search filter */
test('match empty string against shops', () => {
    const matchedShops = shopSearchFilter('', shops);
    expect(matchedShops).toEqual(shops);
});

test('match half coffee name against shops', () => {
    const matchedShops = shopSearchFilter(halfShopName, shops);
    expect(matchedShops.length).toBe(1);
});

test('match gibberish against shops', () => {
    const matchedShops = shopSearchFilter('qqq', shops);
    expect(matchedShops.length).toBe(0);
});

test('match number against shops', () => {
    expect(() => shopSearchFilter(123, shops)).toThrow(TypeError);
});