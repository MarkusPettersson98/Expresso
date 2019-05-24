import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';

const herokuURL = 'https://expressobackend.herokuapp.com/api/';

/**
 * Function to get the current date, useful for when creating reciepts
 */
const getCurrentDate = () => {
    return Date.now();
};

/** Fixes a shop in order to work well with API-request
 *
 * @param urlArgument A name of a shop, like Veras Café or Bulten.
 */
const fixString = urlArgument => {
    const fixedString = encodeURIComponent(urlArgument);
    return fixedString;
};
/**
 * Returns all the information of a all the shops in the database using heroku
 * This includes the names, the coordinates and their drinklist
 */
export const getShop = async wantedShop => {
    let fixedString = fixString(wantedShop);

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
        return { shop: shop.name, coordinates: shop.coordinates, street: shop.street};
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

/**Returns all the receipts of a specified user - currently only customer '0' //TODO:add id as param
 *
 * @param id the id of the sought out customer
 */

export const getReceipt = async id => {
    const receipt = await fetch(herokuURL + 'getReceipt/' + id)
        .then(res => res.json())
        .then(response => {
            if(response.length) {
                return response[0]; //Since backend returns a list of receipts
            }
            throw 'No receipt found!';
        })
        .catch(error => {
            console.log('ERROR', error);
            return [];
        });
    return receipt;
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
export const sendOrder = async (cart, uid = 0) => {
    const { amount, price, shop, orderItems } = cart;

    const reciept = {
        totalAmount: amount,
        totalPrice: price,
        coffees: orderItems,
        shop: shop,
        date: getCurrentDate(),
        user: uid, // TODO: Replace with authenticated firebase user, this is only a mock
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
            console.log('Receipt link: ', getReceiptLink(res.id));
            return res.id;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
};

/**
 * Returns all receipts for one user database using heroku
 *
 */
export const getReceiptsUser = async user => {
    let fixedString = fixString(user);

    const allInformation = await fetch(herokuURL + 'getReceiptUser/' + fixedString)
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
