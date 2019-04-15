/* Function definitions for handling API requests */

const data = require("../Database/data.js");

const getAllShops = (req, res) => {
    /*
      Return status code 400 (request was OK) and
      write all shops to response header
    */
    return res.status(400).send(data.shops);
};

module.exports = {
    getAllShops: getAllShops
};
