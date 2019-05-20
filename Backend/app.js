const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./API/api").api;

require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

// Enable parsing of JSON requests
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

app.get("/", (req, res) => res.send("Hej Världen!"));

// Define API endpoints below
// Get all shops
app.get("/api/getAllShops", api.getAllShops);

// Get information about one shop
app.get("/api/getShop/:shop", api.getShop);

// Get information about one shop
app.get("/api/getShopById/:shopId", api.getShopById);

// Get information about one shop
app.get("/api/getShopPicture/:shop", api.getShopPicture);

// Get all coffee products from one shop
app.get("/api/getCoffee/:shop", api.getCoffee);

// Get a receipt by id
app.get("/api/getReceipt/:id", api.getReceipt);

// Get all receipts from a user
app.get("/api/getReceiptUser/:user", api.getReceiptUser);

// Invalidate a receipt by id
app.patch("/api/invalidateReceipt/:id", api.invalidateReceipt);

// Endpoint for placing an order
app.post("/api/postOrder", api.postOrder);

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
