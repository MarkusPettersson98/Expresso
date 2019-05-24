/* Function definitions for handling API requests */

const { shops } = require("../Database/newData");
const redundantFirebaseURL =
    "https://share-places-1555452472826.firebaseio.com/kvitton.json";

const userFirebaseURL = "https://togepi-c62a3.firebaseio.com/users.json";

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

    // Get firebase id of receipt
    const receiptList = await getReceiptById(id);
    const receipt = receiptList[0];

    try {
        // const receipt = await getReceiptById(id);
        // Check if scanned receipt is valid!
        if (receipt.active) {
            console.log("Scanned receipt is valid!");
        } else {
            console.log("Error! Scanned receipt has already been used");
        }
        // Ivalidate fetched receipt
        // Note: getReceiptWith returns an array !
        invalidateReceiptWithId(receipt);

        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceipt = async (req, res) => {
    const { id } = req.params;

    try {
        console.log("Trying to fetch single receipt by id! ", id);
        const receipt = await getReceiptById(id);
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
        const receipt = await getReceiptByUser(user);
        return res.status(200).send(receipt);
    } catch (e) {
        console.log(e);
        return res.status(400).send(":(");
    }
};

const getReceiptById = async id => {
    try {
        console.log("Trying to fetch single receipt by id! ", id);
        const receipt = await fetch(
            redundantFirebaseURL + `?orderBy=%22id%22&equalTo=%22${id}%22`
        )
            .then(res => res.json())
            .then(res => firebaseObjectToArray(res))
            .catch(err =>
                console.log("Firebase error: could not fetch id ", err)
            );
        return receipt;
    } catch (e) {
        console.log(e);
        return e;
    }
};

const getReceiptByUser = async user => {
    try {
        console.log("Trying to fetch user receipts! ", user);
        const receipt = await fetch(
            redundantFirebaseURL + `?orderBy=%22user%22&equalTo=%22${user}%22`
        )
            .then(res => res.json())
            .then(res => firebaseObjectToArray(res))
            .catch(err =>
                console.log("Firebase error: could not fetch user ", err)
            );
        return receipt;
    } catch (e) {
        console.log(e);
        return e;
    }
};

const firebaseObjectToArray = firebaseObject => {
    // Firebase database returns multiple differents records as a single object, where every property is a new object
    // Turn this data form into a list of objects instead
    const keys = Object.keys(firebaseObject);
    return keys.map(key => {
        const receipt = firebaseObject[key];
        return {
            ...receipt,
            firebaseId: key
        };
    });
};

const mirrorOrder = order => {
    const { user } = order;
    console.log("!Mirroring! Firebase new receipt id: ");

    const active = user + "/active";

    const receiptUpdate = {
        [active]: order
    };

    console.log("Receipt udapte!", receiptUpdate);

    fetch(userFirebaseURL, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(receiptUpdate)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log("Firebase error: ", err));
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

    const status = await invalidateReceiptWithId(existingReceipt);

    return res.status(200).send(status);
};

const invalidateMirrorReceipt = async id => {
    const receiptList = await getReceiptById(id);
    const receipt = receiptList[0];
    // overwrite current active receipt of user with empty object
    const { user } = receipt;
    const active = user + "/active";

    const receiptUpdate = {
        [active]: {}
    };

    return fetch(userFirebaseURL, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(receiptUpdate)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log("Firebase error: ", err));
};

const invalidateReceiptWithId = async receipt => {
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
        XsdAO80VPGRZNYyCebNhSpNZKAY21558635930592/active: false
    }
    */

    const { id, firebaseId } = receipt;

    // Also, invalidate mirror receipt
    invalidateMirrorReceipt(id);

    const active = firebaseId + "/active";

    const receiptUpdate = {
        [active]: false
    };

    return firebase("PATCH", receiptUpdate).then(res =>
        console.log("Firebase: updated object status: ", res)
    );
};

const postOrder = async (req, res) => {
    // Function for adding an order to firebase
    const order = req.body;

    // Set order as active
    order.active = true;
    console.log("Post order", order);

    // Create a unique id / hash for the new order
    const uniqueId = order.user + order.date;
    order.id = uniqueId;

    firebase("POST", order).then(response => {
        console.log("Firebase new receipt id: ", response);
        res.set("Content-Type", "application/json");
        res.end(
            JSON.stringify({
                id: uniqueId
            })
        );
    });

    // Mirror new receipts to user database (Update user with new receipt)
    mirrorOrder(order);
};

const firebase = async (action, data) => {
    // Action = GET, POST, PUT or DELETE
    // Data = JSON object to send as data to firebase
    return fetch(redundantFirebaseURL, {
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
