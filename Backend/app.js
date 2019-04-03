const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// Enable parsing of JSON requests
app.use(bodyParser.json());

// Allow CORS
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.APP_PORT, () => {
  console.log(`Listening on port ${process.env.APP_PORT}..`)
});
