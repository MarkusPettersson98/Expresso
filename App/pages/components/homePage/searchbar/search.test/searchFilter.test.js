import { searchFilter, partialMatch } from '../SearchFilter';

import {
    shops,
    coffees
} from './search-dummy-data';


const cutInHalf = (word) => word.slice(0, (word.length / 2));

const someShop = shops[0];
const shopName = someShop.name;;

const someCoffee = coffees[0];
const coffeeName = someCoffee.name;
const halfCoffeeName = cutInHalf(coffeeName);

// Create dummy coffePartialMatch function
const coffePartialMatch = (coffee, expression) => partialMatch(coffee.name, expression);
// .. then compose a specialized search filter for coffee assortments
const coffeeSearchFilter = (expression) => searchFilter(expression, coffees, coffePartialMatch);

test('match empty string against coffee assortment', () => {
    const matchedCoffees = coffeeSearchFilter('');
    expect(matchedCoffees).toEqual(coffees);
});

test('match half coffee name against coffee assortment', () => {
    const matchedCoffees = coffeeSearchFilter(halfCoffeeName);
    expect(matchedCoffees.length).toBe(2);
});

test('match shop name against coffee assortment', () => {
    const matchedCoffees = coffeeSearchFilter(shopName);
    expect(matchedCoffees.length).toBe(0);
});