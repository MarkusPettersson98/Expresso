/* Function definitions for handling API requests */

const { shops } = require("../Database/newData");
const path = require('path');

const getAllShops = (req, res) => {
    /*
      Return status code 200 (request was OK) and
      write all shops to response header
    */
    return res.status(200).send(shops);
};

const getShop = (req, res) => {
    return detailsFromShop(lookUpShop, req, res);
};

const getShopPicture = (req, res) => {
    const shop = req.params.shop;
    const picturePath = path.resolve('Database/resources');
    return res.sendFile(shop.toLowerCase() + '.jpg', { root: picturePath });
};

const getCoffee = (req, res) => {
    return detailsFromShop(lookUpCoffee, req, res);
};

const lookUpShop = requestedShop => {
    /*
      Return all available information about requested shop
    */
    const lookup = shop => shop.name === requestedShop;
    const foundShop = shops.find(lookup);
    return foundShop ? foundShop : false;
};

const lookUpCoffee = requestedShop => {
    /*
      Return all coffee products from requested shop
    */
    const lookup = location => location.name === requestedShop;
    const foundShop = shops.find(lookup);
    return foundShop ? foundShop.drinkList : false;
};

const detailsFromShop = (lookUp, req, res) => {
    /*
      Wrapper function to deal with return of status code. Details of
      what data to return is decided by param lookUp.
    */

    // Try to parse shop name from request
    const shop = req.params.shop;
    if (shop === undefined) res.status(400).end();

    const details = lookUp(shop);

    // Shop was found, return OK
    if (details) return res.status(200).send(details);

    // Shop was not found, return error
    return res.status(400).end();
};

module.exports = {
    api: {
        getAllShops: getAllShops,
        getShop: getShop,
        getShopPicture: getShopPicture,
        getCoffee: getCoffee
    },
    testable: {
        lookUpShop: lookUpShop,
        lookUpCoffee: lookUpCoffee
    }
};
