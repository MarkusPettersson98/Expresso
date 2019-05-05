import allData from './dummy-data';
import defaultPic from '../pages/components/resources/ExpressoTransp.png';

const herokuURL = 'https://expressobackend.herokuapp.com/api/';
const postURL =
    'https://share-places-1555452472826.firebaseio.com/kvitton.json';

import { connect } from 'react-redux';
import { calculateCartPrice } from '../pages/components/redux/cartFunctions';

/**
 * Returns all the names of all the shops in the database hosted at heroku
 * This only inlcudes the names of the shops
 */
export const getAllShopNames = async () => {
    const getName = shop => {
        return shop.name;
    };

    console.log('expressoAPI: Call on getAllShopNames');
    const myData = await fetch(herokuURL + 'getAllShops/')
        .then(res => res.json())
        .then(response => {
            return response.map(getName);
        })
        .catch(error => {
            console.log('error', error);
            return [];
        });

    console.log('expressoAPI: Recieved by getAllShopNames', myData);

    // method if only using dummdata, without fetching data from heroku.
    //    return getShopsBackend().then(shops => shops.map(getName));

    return myData;
};
/**
 * Function to get the current date, useful for when creating reciepts
 */
const getCurrentDate = () => {
    let today = new Date();
    let sec = today.getSeconds();
    let min = today.getMinutes();
    let hour = today.getHours();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    hour = hour < 10 ? '0' + hour : hour;

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    
    let date;
    
    date = mm + '/' + dd + '/' + yyyy;
    
    let time = hour + ':' + min + ':' + sec;
    let dateTime = date + ' ' + time;
    /*console.log('expressoAPI: getCurrentDate: TODAY', today);
    console.log('expressoAPI: getCurrentDate: DATE', date);
    console.log('expreesoAPI: getCurrentDate: TIME', time);*/
    console.log('expreesoAPI: getCurrentDate: dateTime', dateTime);

    return dateTime;
};

/**
 * Returns all the information of a all the shops in the database using heroku
 * This includes the names, the coordinates and their drinklist
 */
export const getShop = async wantedShop => {
    console.log('expressoAPI: call on getShop with:', wantedShop);
    const allInformation = await fetch(herokuURL + 'getShop/' + wantedShop)
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
 * Returns all the information about a specific shop using dummydata
 * This includes name, coordinates and the drinkList of the shop
 * @param wantedShop  The name of the wanted shop
 */
const getShopDummyData = async wantedShop => {
    // TODO replace allData.shops with actual call to API
    const foundShop = allData.shops.find(shop => {
        return shop.name.toUpperCase() == wantedShop.toUpperCase();
    });

    return foundShop;
};

/**
 * Returns a promise which if resolved contains all the coffesorts in a specific shop
 * from heroku
 * @param wantedShop  The name of the wanted shop
 */
export const getAllCoffeeFromAShop = async wantedShop => {
    console.log('expressoAPI: call on getAllCoffeeFromAShop with:', wantedShop);

    const drinkList = await fetch(herokuURL + 'getShop/' + wantedShop)
        .then(res => res.json())
        .then(response => {
            return response.drinkList;
        })
        .catch(error => {
            console.log('expressoAPI: getAllCoffeeFromAShop ERROR', error);
            return [];
        });
    console.log(
        'expressoAPI: getAllCoffeeFromAShop: Recieved with:',
        wantedShop,
        'Drinklist: ',
        drinkList,
    );
    return drinkList;
};

/**
 * Fetches all coffee from shops using the dummydata.
 * @param wantedShop the name of the wanted shop
 */
export const getAllCoffeeFromAShopDummyData = async wantedShop => {
    return getShopDummyData(wantedShop).then(shop => shop.drinkList);
};

/**
 * Returns all the information about a specific shop
 * This only includes the picture of the requested shop
 * @param wantedShop  The name of the wanted shop
 */
export const getShopPicture = async wantedShop => {
    return getShopDummyData(wantedShop).then(shop => {
        return shop.picture ? shop.picture : defaultPic;
    });
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

/**
 *
 * @param id order ID, will be improved, currently restarts when rebooting app.
 * @param cart The actual cart when pressed on the button, @TODO this should be refactored to be independent of sender.
 * @param selectedShop The shop of which the order belongs to.
 */
export const sendOrder = async (id, cart, selectedShop) => {
    let orderItems = Object.values(cart);
    let total = calculateCartPrice(orderItems);
    let coffees = {};

    orderItems.forEach(orderItem => {
        coffees[orderItem.coffee.name] = orderItem.amount;
    });

    fetch(postURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            coffee: coffees,
            shop: selectedShop,
            price: total,
            date: getCurrentDate(),
        }),
    })
        .then(res => console.log())
        .catch(err => console.log(err));
};

const mapStateToProps = state => {
    return { cart: state.cart };
};

export default connect(mapStateToProps)(sendOrder);
