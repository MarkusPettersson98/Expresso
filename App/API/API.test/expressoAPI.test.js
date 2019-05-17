import {
    getAllShopNames,
    getShop,
    getAllCoffeeFromAShop,
    getShopPicture,
} from '../expressoAPI';
import 'isomorphic-fetch';

/**
 * @todo Mock files with jest, unable to currently...
 */

describe('Testing if getAllShopNames output all the names', () => {
    it('Should output only the names of all the avaible shops', () => {
        return getAllShopNames().then(data =>
            expect(data).toEqual([
                'Biblioteket',
                'Bulten',
                'Linsen',
                'Veras Café',
                'Wijkanders',
            ]),
        );
    });
});

describe('Testing if getShop returns the right shop', () => {
    it('Should output Bulten store', () => {
        return getShop('Bulten').then(data => {
            const { name, id } = data;

            expect(name).toBe('Bulten');
            expect(id).toBe(1);
        });
    });

    it('Case sensitivity check', () => {
        return getShop('buLtEn').then(data =>
            expect(data.name).toEqual('Bulten'),
        );
    });

    it('Should output Wijkanders store, checking if other restaurants work too', () => {
        return getShop('Wijkanders').then(data =>
            expect(data.name).toEqual('Wijkanders'),
        );
    });
});

describe('Testing if all the coffeesorts from a shop is printed out ', () => {
    it('Should print out the drinkList for a shop i.e. all the avaible coffee from a specific shop', () => {
        return getShop('Bulten').then(shop => {
            return getAllCoffeeFromAShop(shop.name).then(drinkList => {
                // Check thet the number of drinks is the expected amount
                expect(drinkList.length).toBe(2);
                // Check that all the coffees belong to Bulten
                const bultenId = shop.id;
                // Every checks if all elements in a list against a boolean epression
                const checkedCoffees = drinkList.every(
                    coffee => coffee.shopId === bultenId,
                );

                expect(checkedCoffees).toBeTruthy();
            });
        });
    });

    it('Case insensitive check of above', () => {
        return getShop('buLteN').then(shop => {
            return getAllCoffeeFromAShop(shop.name).then(drinkList => {
                // Check thet the number of drinks is the expected amount
                expect(drinkList.length).toBe(2);
                // Check that all the coffees belong to Bulten
                const bultenId = shop.id;
                // Every checks if all elements in a list against a boolean epression
                const checkedCoffees = drinkList.every(
                    coffee => coffee.shopId === bultenId,
                );

                expect(checkedCoffees).toBeTruthy();
            });
        });
    });

    it('Checking other restaurants, list for Wijkanders expected', () => {
        return getShop('Wijkanders').then(shop => {
            return getAllCoffeeFromAShop(shop.name).then(drinkList => {
                // Check thet the number of drinks is the expected amount
                expect(drinkList.length).toBe(2);
                // Check that all the coffees belong to Wijkanders
                const wijkandersId = shop.id;
                // Every checks if all elements in a list against a boolean epression
                const checkedCoffees = drinkList.every(
                    coffee => coffee.shopId === wijkandersId,
                );

                expect(checkedCoffees).toBeTruthy();
            });
        });
    });
});

describe('Testing if getShopPicture returns picture of requested shop', () => {
    it('Should return a picture', () => {
        return getShopPicture('nopictures').then(data =>
            expect(data).toBeDefined(),
        );
    });
    it('Should return a picture', () => {
        return getShopPicture('buLTen').then(data =>
            expect(data).toBeDefined(),
        );
    });

    it('Should return a picture', () => {
        return getShopPicture('wijkanders').then(data =>
            expect(data).toBeDefined(),
        );
    });
});
