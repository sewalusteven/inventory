const mongodb = require("mongodb");
const url = "mongodb+srv://sewalusteven:G8qyXiSIl2IkMwZL@equipmentcluster.vudu44s.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'equipment_db';

async function itemsCollection() {
    const client = await mongodb.MongoClient.connect(url, { useUnifiedTopology: true });

    return client.db(dbName).collection('items')
}

module.exports = { itemsCollection }