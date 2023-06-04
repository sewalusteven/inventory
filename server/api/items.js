const express = require('express');
const router = express.Router();
const {addItem, fetchAll, findById} = require("../handlers/itemHandler");
const { paginator } = require("../commons/helpers")

router.get('/', async (req, res) => {
    const data = await fetchAll()
    res.send(paginator(data));
});
router.get('/:id', async (req, res) => {
    const data = await findById(req.params.id)
    res.send(data);
});

router.post('/', async (req, res) => {
    addItem(req.body).then( itemData => {
        res.send(itemData);
    })

})


//connection
module.exports = router;