import {
    getAllShopNames,
    getShop,
    getAllCoffeeFromAShop,
    getShopPicture,
} from '../expressoAPI';

import defaultPic from '../../pages/components/resources/ExpressoTransp.png';
import bultenPic from '../../pages/components/resources/bulten.jpg';
import wikkan from '../../pages/components/resources/wijkanders.jpg';

describe('Testing if getAllShopNames output all the names', () => {
    it('Should output only the names of all the avaible shops', () => {
        return getAllShopNames().then(data => expect(data).toEqual([
            'Biblioteket',
            'Bulten',
            'Linsen',
            'Veras Café',
            'Wijkanders',
            'nopictures',
        ]));
    });
});

describe('Testing if all the coffeesorts from a shop is printed out ', () => {
    it('Should print out the drinkList for a shop i.e. all the avaible coffee from a specific shop', () => {
        return getAllCoffeeFromAShop('Bulten').then(data => expect(data).toEqual({
            brewed_coffee: {
                id: 123,
                name: 'Brewed Coffee',
                price: 12,
                volume: 330,
            },
            cappuccino: {
                id: 124,
                name: 'Cappuccino',
                price: 28,
                volume: 500,
            },
            latte: {
                id: 125,
                name: 'Caffee Latte',
                price: 28,
                volume: 500,
            },
        }));
    });

    it('Case insensitive check of above', () => {
        return getAllCoffeeFromAShop('buLteN').then(data => expect(data).toEqual({
            brewed_coffee: {
                id: 123,
                name: 'Brewed Coffee',
                price: 12,
                volume: 330,
            },
            cappuccino: {
                id: 124,
                name: 'Cappuccino',
                price: 28,
                volume: 500,
            },
            latte: {
                id: 125,
                name: 'Caffee Latte',
                price: 28,
                volume: 500,
            },
        }));
    });

    it('Checking other restaurants, list for Wijkanders expected', () => {
        return getAllCoffeeFromAShop('Wijkanders').then(data => expect(data).toEqual({
            brewed_coffee: {
                id: 123,
                name: 'Brewed Coffee',
                price: 12,
                volume: 330,
            },
            latte: {
                id: 125,
                name: 'Caffee Latte',
                price: 28,
                volume: 500,
            },
        }));
    });
});

describe('Testing if getShop returns the right shop', () => {
    it('Should output Bulten store', () => {
        return getShop('Bulten').then(data => expect(data).toEqual({
            coordinates: {
                latitude: 57.689008,
                longitude: 11.978538,
            },
            drinkList: {
                brewed_coffee: {
                    id: 123,
                    name: 'Brewed Coffee',
                    price: 12,
                    volume: 330,
                },
                cappuccino: {
                    id: 124,
                    name: 'Cappuccino',
                    price: 28,
                    volume: 500,
                },
                latte: {
                    id: 125,
                    name: 'Caffee Latte',
                    price: 28,
                    volume: 500,
                },
            },
            name: 'Bulten',
        }));
    });

    it('Case sensitivity check', () => {
        return getShop('buLtEn').then(data => expect(data).toEqual({
            coordinates: {
                latitude: 57.689008,
                longitude: 11.978538,
            },
            drinkList: {
                brewed_coffee: {
                    id: 123,
                    name: 'Brewed Coffee',
                    price: 12,
                    volume: 330,
                },
                cappuccino: {
                    id: 124,
                    name: 'Cappuccino',
                    price: 28,
                    volume: 500,
                },
                latte: {
                    id: 125,
                    name: 'Caffee Latte',
                    price: 28,
                    volume: 500,
                },
            },
            name: 'Bulten',
        }));
    });

    it('Should output Wijkanders store, checking if other restaurants work too', () => {
        return getShop('Wijkanders').then(data => expect(data).toEqual({
            coordinates: {
                latitude: 57.692538,
                longitude: 11.97539,
            },
            drinkList: {
                brewed_coffee: {
                    id: 123,
                    name: 'Brewed Coffee',
                    price: 12,
                    volume: 330,
                },
                latte: {
                    id: 125,
                    name: 'Caffee Latte',
                    price: 28,
                    volume: 500,
                },
            },
            name: 'Wijkanders',
        }));
    });
});

describe('Testing if getShopPicture returns picture of requested shop', () => {
    it('Should return a picture', () => {
       return getShopPicture('nopictures').then(data => expect(data).toEqual(defaultPic));
    });
    it('Should return a picture', () => {
        return getShopPicture('bulTen').then(data => expect(data).toEqual(bultenPic));
    });

    it('Should return a picture', () => {
        return getShopPicture('wijkanders').then(data => expect(data).toEqual(wikkan));
    });
});
