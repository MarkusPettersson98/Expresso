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

/** Fixes a shop in order to work well with API-request
 *
 * @param shop A name of a shop, like Veras Café or Bulten.
 */
const fixShopString = shop => {
    const fixedString = encodeURIComponent(shop);
    return fixedString;
};
/**
 * Returns all the information of a all the shops in the database using heroku
 * This includes the names, the coordinates and their drinklist
 */
export const getShop = async wantedShop => {
    let fixedString = fixShopString(wantedShop);

    const allInformation = await fetch(herokuURL + 'getShop/' + fixedString)
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('ERROR', error);
            return [];
        });
    return allInformation;
};

/**
 * Returns all the information of a all the shops by id
 * This includes the names, the coordinates and their drinklist
 * @param wantedShopId number representing the id of wanted shop
 */
export const getShopById = async wantedShopId => {
    const allInformation = await fetch(
        herokuURL + 'getShopById/' + wantedShopId,
    )
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('ERROR', error);
            return [];
        });
    return allInformation;
};

/**
 * Returns a promise which if resolved contains all the coffesorts in a specific shop
 * from heroku
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = async wantedShop => {
    const shop = await getShop(wantedShop);
    return shop.drinkList;
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
    return foundShop.picture ? foundShop.picture : defaultPic;
};

/**
 * Query the backend API which returns a shop.
 * Return a promise object with resolved API call
 * @param wantedShop  The name of the wanted shop
 */
export const getAllShops = async () => {
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

/** Gets all shops coordninates and their name.
 *
 */
export const getAllShopsCoords = async () => {
    const getNameCoords = shop => {
        return { shop: shop.name, coordinates: shop.coordinates };
    };
    shops = await getAllShops();
    return shops.map(getNameCoords);
};

/**
 * Returns all the names of all the shops in the database hosted at heroku
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = async () => {
    const getName = shop => {
        return shop.name;
    };
    shops = await getAllShops();
    return shops.map(getName);
};

/*
    Given an ID of a receipt, create a link to that receipt
*/
export const getReceiptLink = id => {
    return herokuURL + 'getReceipt/' + id;
};

/*
    Given an ID of a receipt, create a link to 'scan' that receipt
*/
export const getScanReceiptLink = id => {
    return herokuURL + 'scanReceipt/' + id;
};

/**
 * @param cart The actual cart when pressed on the button, @TODO this should be refactored to be independent of sender.
 * @param selectedShop The shop of which the order belongs to.
 */
export const sendOrder = async cart => {
    const { amount, price, shop, orderItems } = cart;

    const reciept = {
        totalAmount: amount,
        totalPrice: price,
        coffees: orderItems,
        shop: shop,
        date: getCurrentDate(),
        user: 0, // TODO: Replace with authenticated firebase user, this is only a mock
    };

    const sendOrderUrl = herokuURL + 'postOrder/';

    return fetch(sendOrderUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(reciept),
    })
        .then(res => res.json())
        .then(res => {
            console.log("Receipt link: ", getReceiptLink);
            return res.id;
        })
        .catch(err => console.log(err));
};
