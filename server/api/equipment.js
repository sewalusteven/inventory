const express = require('express');
const router = express.Router();
const {itemsCollection} = require('../db/client')

const {Status} = require("../payloads/payloads");

router.get('/', async (req, res) => {
    const itemsRepository = await itemsCollection();
    res.send(await itemsRepository.find({}).toArray());
});

router.post('/', async (req, res) => {
    const itemsRepository = await itemsCollection();
    await itemsRepository.insertOne({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        deliveryCost: req.body.deliveryCost,
        customsCost: req.body.customsCost,
        status: Status.ToBuy,
    });

    res.status(201).send({ msg: "Speciality added successfully" });
})


//connection
module.exports = router;