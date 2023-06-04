const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

global.__dirname = __dirname;
const mongoose = require("mongoose").default;

mongoose.connect("mongodb+srv://sewalusteven:G8qyXiSIl2IkMwZL@equipmentcluster.vudu44s.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB Connected"));

const app = express();
app.use(bodyParser.json());
app.use(cors());

const items = require('./api/items');

app.use('/api/v1/items', items);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));