const Item = require("../schemas/Item")

async function addItem(item) {
    const savedItem = new Item(item);
    await savedItem.save()

    return savedItem;
}

async function fetchAll() {
    return Item.find({});
 }
async function findById(id) {
    return Item.findById(id);
 }

module.exports = { addItem ,fetchAll, findById}