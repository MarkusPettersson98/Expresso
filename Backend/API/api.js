/* Function definitions for handling API requests */

const { shops, coffee } = require("../Database/data.js");

const getAllShops = (req, res) => {
    /*
      Return status code 200 (request was OK) and
      write all shops to response header
    */
    return res.status(200).send(shops);
};

const getShop = (req, res) => {
    /*
      Try to parse shop name from request. If successful,
      return all available information about that shop
    */
    const requestedShop = req.params.shop;
    if (requestedShop === undefined) return res.status(400).end();

    const lookup = shop => shop.name === requestedShop;
    const foundShop = shops.find(lookup);

    // Shop was found, return OK
    if (foundShop) return res.status(200).send(foundShop);

    // Shop was not found, return error
    return res.status(400).end();
};

const getCoffee = (req, res) => {
    /*
      Try to parse shop name from request. If successful,
      return all coffee products from that shop
    */
    const requestedShop = req.params.shop;
    if (requestedShop === undefined) res.status(400).end();
    const lookup = location => location.shop === requestedShop;
    const foundShop = coffee.find(lookup);

    // Shop was found, return OK
    if (foundShop) return res.status(200).send(foundShop.coffees);

    // Shop was not found, return error
    return res.status(400).end();
};

module.exports = {
    getAllShops: getAllShops,
    getShop: getShop,
    getCoffee: getCoffee
};
