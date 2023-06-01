const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

global.__dirname = __dirname;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const equipment = require('./api/equipment');

app.use('/api/v1/equipment', equipment);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));