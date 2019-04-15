/* Function definitions for handling API requests */

const { shops, coffee } = require("../Database/data.js");

const getAllShops = (req, res) => {
    /*
      Return status code 200 (request was OK) and
      write all shops to response header
    */
    return res.status(200).send(shops);
};

const getCoffee = (req, res) => {
    /*
      Try to parse shop name from request. If successful,
      return all coffee products from that shop
    */
    const requestedShop = req.params.shop;
    if (requestedShop === undefined) {
        res.status(400).send("Bad request!");
    }

    foundShop = coffee.find(location => {
        return location.shop === requestedShop;
    });

    console.log("Found this", foundShop.coffees);
    res.status(400).send(foundShop.coffees);
};

module.exports = {
    getAllShops: getAllShops,
    getCoffee: getCoffee
};
