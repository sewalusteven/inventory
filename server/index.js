const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const mongoose = require("mongoose").default;

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB Connected"));

const app = express();
app.use(bodyParser.json());
app.use(cors());

const keyCheck = (req, res, next) => {
    const serviceKey = req.header('service-key');
    if(!serviceKey){
        res.status(500).send("invalid service key");
    }
    //TODO: validate service key
    next();
}

app.use(keyCheck)

const items = require('./api/items');

app.use('/api/v1/items', items);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));