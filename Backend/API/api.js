/* Function definitions for handling API requests */

const { shops } = require("../Database/newData");
const path = require("path");

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
    const decodedShop = decodeURIComponent(shop);
    const picturePath = path.resolve('Database/resources');
    return res.sendFile(decodedShop.toLowerCase() + '.jpg', { root: picturePath });
};

const getShopById = (req, res) => {
    /*
      Return all available information about requested shop
    */
    // Try to parse shop name from request
    const shopId = req.params.shopId;
    if (shopId === undefined) res.status(400).end();

    let lookup = shop => shop.id == shopId;
    const foundShop = shops.find(lookup);

    // Shop was found, return OK
    if (foundShop) return res.status(200).send(foundShop);

    // Shop was not found, return error
    return res.status(400).end();
};

const getCoffee = (req, res) => {
    return detailsFromShop(lookUpCoffee, req, res);
};

const lookUpShop = requestedShop => {
    /*
      Return all available information about requested shop
    */
    let lookup = shop =>
        shop.name.toLowerCase() === requestedShop.toLowerCase();

    const foundShop = shops.find(lookup);
    return foundShop ? foundShop : false;
};

const lookUpCoffee = requestedShop => {
    /*
      Return all coffee products from requested shop
    */

    const lookup = location =>
        location.name.toLowerCase() === requestedShop.toLowerCase();
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

    const decodedShop = decodeURIComponent(shop);
    if (decodedShop === undefined) res.status(400).end();

    const details = lookUp(decodedShop.toLowerCase());

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
        getCoffee: getCoffee,
        getShopById: getShopById
    },
    testable: {
        lookUpShop: lookUpShop,
        lookUpCoffee: lookUpCoffee
    }
};
