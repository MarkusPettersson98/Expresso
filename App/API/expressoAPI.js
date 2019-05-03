import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';

const URL = 'https://expressobackend.herokuapp.com/api/';
/**
 * Returns all the names of all the shops in the database
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = async () => {
    const getName = shop => {
        return shop.name;
    };

    console.log('expressoAPI: Call on getAllShopNames');
    const myData = await fetch(URL + 'getAllShops/')
        .then(res => res.json())
        .then(response => {
            return response.map(getName);
        })
        .catch(error => {
            console.log('error', error);
            return [];
        });

    console.log('expressoAPI: Recieved by getAllShopNames', myData);

    return myData;
};
/**
 * Function to get the current date, useful for when creating reciepts
 */
const getCurrentDate = () => {
    let today = new Date();
    let time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    let date;
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    date = mm + '/' + dd + '/' + yyyy;

    let dateTime = date + ' ' + time;
    console.log('expressoAPI: getCurrentDate: TODAY', today);
    console.log('expressoAPI: getCurrentDate: DATE', date);
    console.log('expreesoAPI: getCurrentDate: TIME', time);
    console.log('expreesoAPI: getCurrentDate: dateTime', dateTime);

    return [today, time];
};

const getCurrentTime = () => {};

/**
 * Returns all the information of a all the shops in the database
 * This includes the names, the coordinates and their drinklist
 */

export const getShop = async wantedShop => {
    console.log('expressoAPI: call on getShop with:', wantedShop);
    const allInformation = await fetch(URL + 'getShop/' + wantedShop)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => []);

    console.log(
        'expressoAPI: getShop with:',
        wantedShop,
        'recieved information:',
        allInformation,
    );
    return allInformation;
};

/**
 * Returns a promise which if resolved contains all the coffesorts in a specific shop
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = async wantedShop => {
    console.log('expressoAPI: call on getAllCoffeeFromAShop with:', wantedShop);

    const drinkList = await fetch(URL + 'getShop/' + wantedShop)
        .then(res => res.json())
        .then(response => {
            return response.drinkList;
        })
        .catch(error => []);
    console.log(
        'expressoAPI: getAllCoffeeFromAShop: Recieved with:',
        wantedShop,
        'Drinklist: ',
        drinkList,
    );
    return drinkList;
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
