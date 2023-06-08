const express = require('express');
const router = express.Router();
const {addItem, fetchAll, findById, update, deleteItem} = require("../handlers/itemHandler");
const { paginator } = require("../commons/helpers")

router.get('/', async (req, res) => {
    const data = await fetchAll();

    try {
        res.send(paginator(data));
    } catch (e) {
        res.status(500).send(e.message)
    }

});
router.get('/:id', async (req, res) => {
    const data = await findById(req.params.id)
    try {
        res.send(data);
    } catch (e) {
        res.status(500).send(e.message)
    }
});

router.post('/', async (req, res) => {
    try {
        const itemSaved = await addItem(req.body)
        res.send(itemSaved);
    } catch (e){
        res.status(500).send(e.message)
    }

})

router.patch('/:id', async (req, res) => {
    try {
       await update(req.params.id, req.body);
       const item =  await findById(req.params.id);
       res.send(item);
    } catch (e){
        res.status(500).send(e.message)
    }

})

router.delete('/:id', async (req, res) => {
    try {
       const itemDeleted = await deleteItem(req.params.id);
       if(!itemDeleted) res.status(404).send("Item not found");
       res.status(200).send(itemDeleted);
    } catch (e){
        res.status(500).send(e.message)
    }

})


//connection
module.exports = router;