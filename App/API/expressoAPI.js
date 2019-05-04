import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';

var postURL = 'https://share-places-1555452472826.firebaseio.com/kvitton.json';

/**
 * Returns all the names of all the shops in the database
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = async () => {
    const getName = shop => {
        return shop.name;
    };
    return getShopsBackend().then(shops => shops.map(getName));
};

/**
 * Returns all the information of a all the shops in the database
 * This includes the names, the coordinates and their drinklist
 */
export const getShop = async wantedShop => {
    const getInformation = shop => {
        return {
            name: shop.name,
            coordinates: shop.coordinates,
            drinkList: shop.drinkList,
        };
    };
    return getShopBackend(wantedShop).then(shop => getInformation(shop));
};

/**
 * Returns a promise which if resolved contains all the coffesorts in a specific shop
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = async wantedShop => {
    return getShopBackend(wantedShop).then(shop => shop.drinkList);
};

/**
 * Returns all the information about a specific shop
 * This only includes the picture of the requested shop
 * @param wantedShop  The name of the wanted shop
 */
export const getShopPicture = async wantedShop => {
    return getShopBackend(wantedShop).then(shop => {
        return shop.picture ? shop.picture : defaultPic;
    });
};

/**
 * Returns all the information about a specific shop
 * This includes name, coordinates and the drinkList of the shop
 * @param wantedShop  The name of the wanted shop
 */
const getShopBackend = async wantedShop => {
    // TODO replace allData.shops with actual call to API
    const foundShop = allData.shops.find(shop => {
        return shop.name.toUpperCase() == wantedShop.toUpperCase();
    });

    return foundShop;
};

/**
 * Query the backend API which returns a shop.
 * Return a promise object with resolved API call
 * @param wantedShop  The name of the wanted shop
 */
const getShopsBackend = async () => {
    // TODO replace allData.shops with actual call to API
    return allData.shops;
};

export const sendOrder = (id, coffee, selectedShop, price) => {
    console.log('betalade');

    fetch(postURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            coffee: coffee,
            shop: selectedShop,
            price: price,
        }),
    })
        .then(res => console.log())
        .catch(err => console.log(err));
};
