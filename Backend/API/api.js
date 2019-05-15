/* Function definitions for handling API requests */

const { shops } = require("../Database/newData");
const firebaseURL =
    "https://share-places-1555452472826.firebaseio.com/kvitton.json";
const path = require("path");

const fetch = require("node-fetch");

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
    const picturePath = path.resolve("Database/resources");
    return res.sendFile(shop.toLowerCase() + ".jpg", { root: picturePath });
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
    if (shop === undefined) res.status(400).end();

    const details = lookUp(shop.toLowerCase());

    // Shop was found, return OK
    if (details) return res.status(200).send(details);

    // Shop was not found, return error
    return res.status(400).end();
};

const getReceipt = async (req, res) => {
    const { id } = req.params;

    try {
        const receipts = await getAllReceipts();

        // const receipt = receipts.filter(item => item); // TODO: filter on something

        return res.status(200).send(receipts);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceiptUser = async (req, res) => {
    // User is a String (!)
    const { user } = req.params;

    try {
        const receipts = await getAllReceipts();
        const receipt = receipts.filter(item => item.user == user);

        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getAllReceipts = async () => {
    const receipts = await fetch(firebaseURL)
        .then(res => res.json())
        .then(res => {
            const keys = Object.keys(res);
            const receipts = keys.map(key => {
                const values = res[key];
                return {
                    ...values,
                    id: key
                };
            });
            return receipts;
        })
        .catch(err => console.log("Error!", err));

    return receipts;
};

module.exports = {
    api: {
        getAllShops: getAllShops,
        getShop: getShop,
        getShopPicture: getShopPicture,
        getCoffee: getCoffee,
        getReceipt: getReceipt,
        getReceiptUser: getReceiptUser
    },
    testable: {
        lookUpShop: lookUpShop,
        lookUpCoffee: lookUpCoffee
    }
};
