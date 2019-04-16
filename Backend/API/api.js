/* Function definitions for handling API requests */

const { shops, assortment } = require("../Database/data.js");

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

const getCoffee = (req, res) => {
    return detailsFromShop(lookUpCoffee, req, res);
};

const lookUpShop = (requestedShop) => {
    /*
      Return all available information about requested shop
    */
    const lookup = shop => shop.name === requestedShop;
    return shops.find(lookup);
};

const lookUpCoffee = (requestedShop) => {
    /*
      Return all coffee products from requested shop
    */
    const lookup = location => location.shop === requestedShop;
    const foundShop = assortment.find(lookup);
    return foundShop ? foundShop.coffees : false;
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
        getCoffee: getCoffee,
    },
    testable: {
        lookUpShop: lookUpShop,
        lookUpCoffee: lookUpCoffee,
    },
};
