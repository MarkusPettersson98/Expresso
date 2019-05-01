import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';
/**
 * Returns all the names of all the shops in the database
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = () => {
    const getName = shop => {
        return shop.name;
    };
    return allData.shops.map(getName);
};

/**
 * Returns all the information of a all the shops in the database
 * This includes the names and the coordinates
 */
export const getAllShopInfo = () => {
    const getInformation = info => {
        return {
            namn: info.name,
            coordinates: info.coordinates,
        };
    };
    return allData.shops.map(getInformation);
};

/**
 * Returns all the coffesorts in a specific shop
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = wantedShop => {
    return findShop(wantedShop).drinkList;
};

/**
 * Returns all the information about a specific shop
 * This includes name, coordinates and the drinkList of the shop
 * @param wantedShop  The name of the wanted shop
 */
export const getShop = wantedShop => {
    const foundShop = findShop(wantedShop); 
    return {
        name: foundShop.name,
        coordinates: foundShop.coordinates,
        drinkList: foundShop.drinkList,
    };
};

/**
 * Returns all the information about a specific shop
 * This only includes the picture of the requested shop
 * @param wantedShop  The name of the wanted shop
 */
export const getShopPicture = wantedShop => {
    const foundShop = findShop(wantedShop); 
    return foundShop.picture
        ? foundShop.picture
        : defaultPic;
};

/**
 * Returns a shop
 * This is the shop object itself
 * @param wantedShop  The name of the wanted shop
 */
export const findShop = wantedShop => {
    const foundShop = allData.shops.find(function(shop) {
        return shop.name.toUpperCase() == wantedShop.toUpperCase();
    });

    return foundShop;
};
