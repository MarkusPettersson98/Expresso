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

// Get all coffee products from one shop
app.get("/api/getCoffee/:shop", api.getCoffee);

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
