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
    const decodedShop = decodeURIComponent(shop);
    const picturePath = path.resolve("Database/resources");
    return res.sendFile(decodedShop.toLowerCase() + ".jpg", {
        root: picturePath
    });
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

const scanReceipt = async (req, res) => {
    // scanReceipt 'simulates' scanning a receipt, e.g.
    // invalidating it and returning it.
    const { id } = req.params;

    try {
        const receipt = await getReceiptWith("id", id);
        // Ivalidate fetched receipt
        // Note: getReceiptWith returns an array !
        const receiptId = receipt[0].id;
        invalidateReceiptWithId(receiptId);

        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceipt = async (req, res) => {
    const { id } = req.params;

    try {
        const receipt = await getReceiptWith("id", id);

        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceiptUser = async (req, res) => {
    // User is a String (!)
    const { user } = req.params;

    try {
        const receipt = await getReceiptWith("user", user);
        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceiptWith = async (key, value) => {
    // Generic function for getting a set of receipts
    // key = the propertry of the receipt to compare value with
    try {
        const receipts = await getAllReceipts();
        return receipts.filter(item => item[key] == value);
    } catch (e) {
        return e;
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

const postOrder = async (req, res) => {
    // Function for adding an order to firebase
    const order = req.body;

    // Set order as active
    order.active = true;
    console.log("Post order", order);

    firebase("POST", order).then(response => {
        console.log("Firebase new receipt id: ", response);
        const receiptId = response.name;
        res.set("Content-Type", "application/json");
        res.end(
            JSON.stringify({
                id: receiptId
            })
        );
    });
};

const invalidateReceipt = async (req, res) => {
    const { id } = req.params;

    // Check if object is existing
    const existingReceipt = await getReceiptWith("id", id);
    if (existingReceipt.length == 0) {
        // Receipt do not already exists, do not update anything in firebase
        // return error
        return res.status(400).end();
    }

    const status = await invalidateReceiptWithId(id);
    return res.status(200).send(status);
};
const invalidateReceiptWithId = async id => {
    // This endpoint is used for invalidating an active receipt.
    // E.g. after a receipt has been scanned it should be marked
    // as no longer active

    // Firebase is expecting to receive an object with all the properties
    // That should be updated. To update a specific data object, the property
    // should contain the unique identifier followed by a slash and the property
    // that should be updated

    // E.g.
    /*
    {
        -LfKye-hFPSWEbTBchsr/active: false
    }
    */

    const active = id + "/active";

    const receiptUpdate = {
        [active]: false
    };

    return firebase("PATCH", receiptUpdate).then(res =>
        console.log("Firebase: updated object status: ", res)
    );
};

const firebase = async (action, data) => {
    // Action = GET, POST, PUT or DELETE
    // Data = JSON object to send as data to firebase
    return fetch(firebaseURL, {
        method: action,
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log("Firebase error: ", err));
};

module.exports = {
    api: {
        getAllShops: getAllShops,
        getShop: getShop,
        getShopPicture: getShopPicture,
        getCoffee: getCoffee,
        getReceipt: getReceipt,
        getReceiptUser: getReceiptUser,
        getShopById: getShopById,
        postOrder: postOrder,
        invalidateReceipt: invalidateReceipt,
        scanReceipt: scanReceipt
    },
    testable: {
        lookUpShop: lookUpShop,
        lookUpCoffee: lookUpCoffee
    }
};
