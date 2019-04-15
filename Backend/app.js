const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./API/api");

require("dotenv").config();
const port = process.env.APP_PORT || 8000;

const app = express();

// Enable parsing of JSON requests
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

app.get("/", (req, res) => res.send("Hej Världen!"));

// Define API endpoints below
app.get("/api/allShops", api.getAllShops);

app.listen(port, () => {
    console.log(`Listening on port ${port}..`);
});
