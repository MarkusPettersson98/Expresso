import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';

const herokuURL = 'https://expressobackend.herokuapp.com/api/';
const firebaseURL =
    'https://share-places-1555452472826.firebaseio.com/kvitton.json';

/**
 * Function to get the current date, useful for when creating reciepts
 */
const getCurrentDate = () => {
    return Date.now();
};

/**
 * Returns all the information of a all the shops in the database using heroku
 * This includes the names, the coordinates and their drinklist
 */
export const getShop = async wantedShop => {
    const allInformation = await fetch(herokuURL + 'getShop/' + wantedShop)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => []);
    return allInformation;
};

/**
 * Returns a promise which if resolved contains all the coffesorts in a specific shop
 * from heroku
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = async wantedShop => {
    return await getShop(wantedShop).drinkList;
};

/**
 * Returns the picture to a wanted shop
 * @param wantedShop  The name of the wanted shop
 * @todo Fix so that this works with the images hosted at backend.
 */
export const getShopPicture = async wantedShop => {
    const foundShop = allData.shops.find(shop => {
        return shop.name.toUpperCase() == wantedShop.toUpperCase();
    });
    return foundShop.picture;
};

/**
 * Query the backend API which returns a shop.
 * Return a promise object with resolved API call
 * @param wantedShop  The name of the wanted shop
 */
const getAllShops = async () => {
    const myData = await fetch(herokuURL + 'getAllShops/')
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('error', error);
            return [];
        });

    return myData;
};

/**
 * Returns all the names of all the shops in the database hosted at heroku
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = async () => {
    const getName = shop => {
        return shop.name;
    };
    const shops = await getAllShops();
    return shops.map(getName);
};

/**
 * @param cart The actual cart when pressed on the button, @TODO this should be refactored to be independent of sender.
 * @param selectedShop The shop of which the order belongs to.
 */
export const sendOrder = async cart => {
    fetch(firebaseURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            cart: cart,
            date: getCurrentDate(),
        }),
    })
        .then(res => console.log())
        .catch(err => console.log(err));
};
